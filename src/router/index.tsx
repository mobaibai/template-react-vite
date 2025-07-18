import CustomLoading from '@/components/CustomLoading'
import { usePerformanceMonitor } from '@/hooks/usePerformanceMonitor'
import { useRoutePreloader } from '@/hooks/useRoutePreloader'
import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
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
  // 启用路由预加载
  useRoutePreloader({
    delay: 800, // 页面加载后800ms开始预加载
    enableHoverPreload: true, // 启用悬停预加载
    enableVisibilityPreload: true, // 启用可见性预加载
    priority: 'low', // 默认低优先级预加载
  })

  // 启用性能监控
  usePerformanceMonitor({
    enabled: true,
    logToConsole: __isDev__, // 开发环境下输出到控制台
    onMetrics: metrics => {
      // 在生产环境中可以将性能数据发送到监控服务
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

  return <Routes>{RouterViews(RouteItems)}</Routes>
}

export default React.memo(RouterContainer)
