import { useCallback, useEffect, useMemo, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

interface TransitionConfig {
  /** 动画持续时间 */
  duration?: number
  /** 缓动函数 */
  easing?: string
  /** 进入动画名称 */
  enterAnimation?: string
  /** 退出动画名称 */
  exitAnimation?: string
  /** 动画延迟 */
  delay?: number
}

interface RouteTransitionRule {
  /** 路由路径模式（支持通配符 * 和参数 :id） */
  pattern: string
  /** 过渡配置 */
  config: TransitionConfig
  /** 优先级（数字越大优先级越高） */
  priority?: number
  /** 仅在特定导航类型下生效 */
  navigationType?: ('PUSH' | 'POP' | 'REPLACE')[]
}

interface UseViewTransitionsConfig {
  /** 是否启用 */
  enabled?: boolean
  /** 默认过渡配置 */
  defaultConfig?: TransitionConfig
  /** 路由级别的过渡规则 */
  routeRules?: RouteTransitionRule[]
  /** 是否启用预定义的过渡效果 */
  enablePresets?: boolean
  /** 调试模式 */
  debug?: boolean
  /** 自定义前缀 */
  namePrefix?: string
  /** 禁用过渡的路径模式 */
  disabledPatterns?: string[]
  /** 过渡完成回调 */
  onTransitionStart?: (
    from: string,
    to: string,
    config: TransitionConfig
  ) => void
  onTransitionEnd?: (from: string, to: string) => void
}

// 预定义的过渡效果
export const TRANSITION_PRESETS = {
  slideUp: {
    enterAnimation: 'slide-in-up',
    exitAnimation: 'slide-out-down',
    duration: 300,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    delay: 0,
  },
  slideDown: {
    enterAnimation: 'slide-in-down',
    exitAnimation: 'slide-out-up',
    duration: 300,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    delay: 0,
  },
  slideLeft: {
    enterAnimation: 'slide-in-left',
    exitAnimation: 'slide-out-right',
    duration: 350,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    delay: 0,
  },
  slideRight: {
    enterAnimation: 'slide-in-right',
    exitAnimation: 'slide-out-left',
    duration: 350,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    delay: 0,
  },
  fade: {
    enterAnimation: 'fade-in',
    exitAnimation: 'fade-out',
    duration: 250,
    easing: 'ease-in-out',
    delay: 0,
  },
  scale: {
    enterAnimation: 'scale-in',
    exitAnimation: 'scale-out',
    duration: 400,
    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    delay: 0,
  },
  // 新增更多预设
  flipX: {
    enterAnimation: 'flip-in-x',
    exitAnimation: 'flip-out-x',
    duration: 600,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    delay: 0,
  },
  flipY: {
    enterAnimation: 'flip-in-y',
    exitAnimation: 'flip-out-y',
    duration: 600,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    delay: 0,
  },
} as const

type TransitionPreset = keyof typeof TRANSITION_PRESETS

export const useViewTransitions = (config: UseViewTransitionsConfig = {}) => {
  const {
    enabled = true,
    defaultConfig = TRANSITION_PRESETS.slideUp,
    routeRules = [],
    enablePresets = true,
    debug = false,
    namePrefix = 'route',
    disabledPatterns = [],
    onTransitionStart,
    onTransitionEnd,
  } = config

  const location = useLocation()
  const navigationType = useNavigationType()
  const previousLocationRef = useRef<string>('')
  const currentTransitionRef = useRef<TransitionConfig | null>(null)
  const isTransitioningRef = useRef<boolean>(false)

  const isSupported = useMemo(
    () => typeof document !== 'undefined' && 'startViewTransition' in document,
    []
  )

  // 路径匹配函数 - 优化正则表达式缓存
  const pathMatchers = useMemo(() => {
    const createMatcher = (pattern: string) => {
      const regexPattern = pattern
        .replace(/\*/g, '.*')
        .replace(/:[\w]+/g, '[^/]+')
      return new RegExp(`^${regexPattern}$`)
    }

    return {
      rules: routeRules.map(rule => ({
        ...rule,
        matcher: createMatcher(rule.pattern),
      })),
      disabled: disabledPatterns.map(pattern => createMatcher(pattern)),
    }
  }, [routeRules, disabledPatterns])

  const matchRoute = useCallback((pattern: RegExp, path: string): boolean => {
    return pattern.test(path)
  }, [])

  // 检查路径是否被禁用
  const isPathDisabled = useCallback(
    (path: string): boolean => {
      return pathMatchers.disabled.some(matcher => matchRoute(matcher, path))
    },
    [pathMatchers.disabled, matchRoute]
  )

  // 获取路由的过渡配置 - 优化匹配逻辑
  const getTransitionConfig = useCallback(
    (_fromPath: string, toPath: string, navType: string): TransitionConfig => {
      // 检查是否禁用
      if (isPathDisabled(toPath)) {
        return { duration: 0 } // 禁用动画
      }

      // 找到匹配的规则
      const matchingRules = pathMatchers.rules
        .filter(rule => {
          const pathMatches = matchRoute(rule.matcher, toPath)
          const typeMatches =
            !rule.navigationType || rule.navigationType.includes(navType as any)
          return pathMatches && typeMatches
        })
        .sort((a, b) => (b.priority || 0) - (a.priority || 0))

      if (matchingRules.length > 0) {
        return { ...defaultConfig, ...matchingRules[0].config }
      }

      return defaultConfig
    },
    [pathMatchers.rules, defaultConfig, matchRoute, isPathDisabled]
  )

  // 生成CSS样式 - 优化样式生成
  const generateStyles = useCallback(
    (config: TransitionConfig) => {
      const {
        duration = 300,
        easing = 'ease-out',
        enterAnimation = 'slide-in-up',
        exitAnimation = 'slide-out-down',
        delay = 0,
      } = config

      // 如果 duration 为 0，跳过动画
      if (duration === 0) return ''

      const delayStr = delay > 0 ? ` ${delay}ms` : ''

      return `
      /* 当前过渡的样式 */
      ::view-transition-new(${namePrefix}-main) {
        animation: ${namePrefix}-${enterAnimation} ${duration}ms ${easing}${delayStr};
      }

      ::view-transition-old(${namePrefix}-main) {
        animation: ${namePrefix}-${exitAnimation} ${duration}ms ${easing}${delayStr};
      }

      ${
        enablePresets
          ? `
        /* 预设动画关键帧 */
        @keyframes ${namePrefix}-slide-in-up {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes ${namePrefix}-slide-out-down {
          0% { opacity: 0; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }

        @keyframes ${namePrefix}-slide-in-down {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes ${namePrefix}-slide-out-up {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(10px); }
        }

        @keyframes ${namePrefix}-slide-in-left {
          0% { opacity: 0; transform: translateX(-100%); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes ${namePrefix}-slide-out-right {
          0% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(100%); }
        }

        @keyframes ${namePrefix}-slide-in-right {
          0% { opacity: 0; transform: translateX(100%); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes ${namePrefix}-slide-out-left {
          0% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(-100%); }
        }

        @keyframes ${namePrefix}-fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes ${namePrefix}-fade-out {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }

        @keyframes ${namePrefix}-scale-in {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes ${namePrefix}-scale-out {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.05); }
        }

        @keyframes ${namePrefix}-flip-in-x {
          0% { opacity: 0; transform: rotateX(-90deg); }
          50% { opacity: 0.5; }
          100% { opacity: 1; transform: rotateX(0deg); }
        }

        @keyframes ${namePrefix}-flip-out-x {
          0% { opacity: 1; transform: rotateX(0deg); }
          50% { opacity: 0.5; }
          100% { opacity: 0; transform: rotateX(90deg); }
        }

        @keyframes ${namePrefix}-flip-in-y {
          0% { opacity: 0; transform: rotateY(-90deg); }
          50% { opacity: 0.5; }
          100% { opacity: 1; transform: rotateY(0deg); }
        }

        @keyframes ${namePrefix}-flip-out-y {
          0% { opacity: 1; transform: rotateY(0deg); }
          50% { opacity: 0.5; }
          100% { opacity: 0; transform: rotateY(90deg); }
        }
      `
          : ''
      }
    `
    },
    [namePrefix, enablePresets]
  )

  // 注入和更新样式 - 优化样式管理
  useEffect(() => {
    if (!enabled || !isSupported) return

    const styleId = `${namePrefix}-view-transitions`
    let style = document.getElementById(styleId) as HTMLStyleElement

    if (!style) {
      style = document.createElement('style')
      style.id = styleId
      document.head.appendChild(style)
    }

    // 基础样式
    const baseStyles = `
      .${namePrefix}-container {
        view-transition-name: ${namePrefix}-main;
      }

      .${namePrefix}-no-transition {
        view-transition-name: none !important;
      }

      .${namePrefix}-no-transition * {
        view-transition-name: none !important;
      }
    `

    const transitionStyles = currentTransitionRef.current
      ? generateStyles(currentTransitionRef.current)
      : generateStyles(defaultConfig)

    style.textContent = baseStyles + transitionStyles

    return () => {
      const existingStyle = document.getElementById(styleId)
      if (existingStyle && !document.querySelector('.route-container')) {
        existingStyle.remove()
      }
    }
  }, [enabled, isSupported, namePrefix, generateStyles, defaultConfig])

  // 处理路由变化 - 优化重复执行检查
  useEffect(() => {
    if (!enabled || !isSupported) return

    const currentPath = location.pathname
    const previousPath = previousLocationRef.current

    if (
      !previousPath ||
      currentPath === previousPath ||
      isTransitioningRef.current
    ) {
      if (!previousPath) previousLocationRef.current = currentPath
      return
    }

    // 获取当前路由的过渡配置
    const transitionConfig = getTransitionConfig(
      previousPath,
      currentPath,
      navigationType
    )
    currentTransitionRef.current = transitionConfig

    // 如果配置为禁用动画，直接返回
    if (transitionConfig.duration === 0) {
      previousLocationRef.current = currentPath
      return
    }

    // 更新样式
    const styleElement = document.getElementById(
      `${namePrefix}-view-transitions`
    ) as HTMLStyleElement
    if (styleElement) {
      const baseStyles = `
        .${namePrefix}-container {
          view-transition-name: ${namePrefix}-main;
        }
        .${namePrefix}-no-transition {
          view-transition-name: none !important;
        }
        .${namePrefix}-no-transition * {
          view-transition-name: none !important;
        }
      `
      styleElement.textContent = baseStyles + generateStyles(transitionConfig)
    }

    if (debug) {
      console.log('🎬 Route transition:', {
        from: previousPath,
        to: currentPath,
        config: transitionConfig,
        navigationType,
      })
    }

    // 触发回调
    onTransitionStart?.(previousPath, currentPath, transitionConfig)

    // 开始过渡
    if (document.startViewTransition) {
      isTransitioningRef.current = true

      const transition = document.startViewTransition(() => {
        // React Router 已经处理了路由变化
      })

      transition.finished
        .then(() => {
          onTransitionEnd?.(previousPath, currentPath)
        })
        .finally(() => {
          isTransitioningRef.current = false
          previousLocationRef.current = currentPath
        })
    } else {
      previousLocationRef.current = currentPath
    }
  }, [
    location.pathname,
    enabled,
    isSupported,
    getTransitionConfig,
    generateStyles,
    debug,
    namePrefix,
    navigationType,
    onTransitionStart,
    onTransitionEnd,
  ])

  // 手动触发过渡 - 优化错误处理
  const startCustomTransition = useCallback(
    async (
      callback: () => void,
      customConfig?: TransitionConfig
    ): Promise<void> => {
      if (!enabled || !isSupported || isTransitioningRef.current) {
        callback()
        return
      }

      if (customConfig) {
        currentTransitionRef.current = customConfig
        const styleElement = document.getElementById(
          `${namePrefix}-view-transitions`
        ) as HTMLStyleElement
        if (styleElement) {
          const baseStyles = `
          .${namePrefix}-container {
            view-transition-name: ${namePrefix}-main;
          }
        `
          styleElement.textContent = baseStyles + generateStyles(customConfig)
        }
      }

      try {
        isTransitioningRef.current = true
        await document.startViewTransition?.(callback)?.finished
      } catch (error) {
        if (debug) {
          console.error('View transition error:', error)
        }
      } finally {
        isTransitioningRef.current = false
      }
    },
    [enabled, isSupported, generateStyles, namePrefix, debug]
  )

  return {
    isSupported,
    isEnabled: enabled && isSupported,
    isTransitioning: isTransitioningRef.current,
    containerClassName: `${namePrefix}-container`,
    noTransitionClassName: `${namePrefix}-no-transition`,
    startCustomTransition,
    presets: TRANSITION_PRESETS,
    currentConfig: currentTransitionRef.current,
    // 便捷方法
    disableTransition: (element: HTMLElement) => {
      element.classList.add(`${namePrefix}-no-transition`)
    },
    enableTransition: (element: HTMLElement) => {
      element.classList.remove(`${namePrefix}-no-transition`)
    },
  }
}

// 便捷的路由规则创建函数 - 增强类型安全
export const createRouteRule = (
  pattern: string,
  preset: TransitionPreset | TransitionConfig,
  options: {
    priority?: number
    navigationType?: RouteTransitionRule['navigationType']
  } = {}
): RouteTransitionRule => {
  const config =
    typeof preset === 'string' ? TRANSITION_PRESETS[preset] : preset

  return {
    pattern,
    config,
    priority: options.priority || 0,
    navigationType: options.navigationType,
  }
}

// 使用示例：
export const createRouteTransitionRules = (): RouteTransitionRule[] => [
  // 首页使用淡入淡出
  createRouteRule('/home', 'fade', { priority: 10 }),

  // 组件页面使用向左滑动
  createRouteRule('/components/*', 'slideLeft', { priority: 5 }),

  // 动画页面使用缩放效果
  createRouteRule('/animations', 'scale', { priority: 5 }),

  // 返回导航使用不同效果
  createRouteRule('/components/*', 'slideRight', {
    priority: 6,
    navigationType: ['POP'],
  }),

  // 404页面使用向上滑动
  createRouteRule('*', 'slideUp', { priority: 1 }),
]
