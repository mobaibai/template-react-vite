import CustomLoading from '@/components/CustomLoading'
import { usePerformanceMonitor } from '@/hooks/usePerformanceMonitor'
import { useRoutePreloader } from '@/hooks/useRoutePreloader'
import {
  TRANSITION_PRESETS,
  createRouteTransitionRules,
  useViewTransitions,
} from '@/hooks/useViewTransitions'
import React, { Suspense, useCallback, useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { RouteItems, type RouteType } from './config'

const RouterViews = (routerItems: RouteType[]) => {
  if (routerItems && routerItems.length) {
    return routerItems.map(
      ({ name = '', path, Skeleton, Element, children, redirect }) => {
        return children && children.length ? (
          <Route
            path={path}
            key={path}
            element={
              <Suspense fallback={!Skeleton ? <CustomLoading /> : <Skeleton />}>
                <Element title={name} />
              </Suspense>
            }
          >
            {RouterViews(children)}
            {/* 只在明确指定了 redirect 的情况下才添加 Navigate */}
            {redirect && (
              <Route index element={<Navigate to={redirect} replace />} />
            )}
          </Route>
        ) : (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={!Skeleton ? <CustomLoading /> : <Skeleton />}>
                <Element title={name} />
              </Suspense>
            }
          />
        )
      }
    )
  }
}

const RouterContainer = () => {
  const location = useLocation()

  // 启用路由预加载
  useRoutePreloader({
    delay: 800,
    enableHoverPreload: true,
    enableVisibilityPreload: true,
    priority: 'low',
  })

  // 启用性能监控
  usePerformanceMonitor({
    enabled: true,
    logToConsole: __isDev__,
    onMetrics: metrics => {
      if (
        !__isDev__ &&
        metrics.routeChangeTime &&
        metrics.routeChangeTime > 1000
      ) {
        console.warn(
          'Slow route change detected:',
          metrics.routeChangeTime + 'ms'
        )
      }
    },
  })

  // 定义路由过渡规则
  const transitionRules = createRouteTransitionRules()

  // 启用高级页面切换动画
  const {
    isSupported,
    isEnabled,
    isTransitioning,
    containerClassName,
    startCustomTransition,
    presets,
    currentConfig,
  } = useViewTransitions({
    enabled: true,
    defaultConfig: TRANSITION_PRESETS.slideUp,
    routeRules: transitionRules,
    enablePresets: true,
    debug: __isDev__,
    namePrefix: 'app-route',
    // 可以禁用特定路径的动画
    disabledPatterns: [
      // 例如：'/admin/*' // 管理后台页面禁用动画
    ],
    onTransitionStart: (from, to, config) => {
      if (__isDev__) {
        console.log(`🎬 Transition started: ${from} → ${to}`, config)
      }
    },
    onTransitionEnd: (from, to) => {
      if (__isDev__) {
        console.log(`✅ Transition completed: ${from} → ${to}`)
      }
    },
  })

  // 在开发环境下提供更详细的信息
  useEffect(() => {
    if (__isDev__) {
      console.group('🎭 View Transitions Info')
      console.log('Supported:', isSupported)
      console.log('Enabled:', isEnabled)
      console.log('Current path:', location.pathname)
      console.log('Current config:', currentConfig)
      console.log('Available presets:', Object.keys(presets))
      console.groupEnd()
    }
  }, [isSupported, isEnabled, location.pathname, currentConfig, presets])

  // 手动触发特殊过渡的示例方法
  const triggerCustomTransition = useCallback(
    (callback: () => void, preset: keyof typeof presets = 'fade') => {
      startCustomTransition(callback, presets[preset])
    },
    [startCustomTransition, presets]
  )

  // 为调试提供全局方法（仅开发环境）
  useEffect(() => {
    if (__isDev__ && typeof window !== 'undefined') {
      // @ts-ignore
      window.__routerDebug = {
        triggerCustomTransition,
        presets,
        currentConfig,
        isTransitioning,
        location: location.pathname,
      }
    }

    return () => {
      if (__isDev__ && typeof window !== 'undefined') {
        // @ts-ignore
        delete window.__routerDebug
      }
    }
  }, [
    triggerCustomTransition,
    presets,
    currentConfig,
    isTransitioning,
    location.pathname,
  ])

  return (
    <>
      {/* 过渡状态指示器（仅开发环境） */}
      {__isDev__ && isTransitioning && (
        <div
          style={{
            position: 'fixed',
            top: 10,
            right: 10,
            background: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            zIndex: 9999,
            fontFamily: 'monospace',
          }}
        >
          🎬 Transitioning...
        </div>
      )}

      {/* 主要路由容器 */}
      <div className={`min-h-screen relative isolate ${containerClassName}`}>
        <Routes>{RouterViews(RouteItems)}</Routes>
      </div>
    </>
  )
}

export default React.memo(RouterContainer)
