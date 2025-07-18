import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

interface PerformanceMetrics {
  // 页面加载时间
  pageLoadTime: number
  // 首次内容绘制时间
  firstContentfulPaint: number
  // 最大内容绘制时间
  largestContentfulPaint: number
  // 首次输入延迟
  firstInputDelay: number
  // 累积布局偏移
  cumulativeLayoutShift: number
  // 路由切换时间
  routeChangeTime: number
}

interface PerformanceConfig {
  // 是否启用性能监控
  enabled?: boolean
  // 是否在控制台输出性能数据
  logToConsole?: boolean
  // 性能数据回调函数
  onMetrics?: (metrics: Partial<PerformanceMetrics>) => void
}

/**
 * 性能监控 Hook
 * @param config 监控配置
 */
export const usePerformanceMonitor = (config: PerformanceConfig = {}) => {
  const { enabled = true, logToConsole = __isDev__, onMetrics } = config

  const location = useLocation()
  const routeChangeStartRef = useRef<number | undefined>(null)
  const metricsRef = useRef<Partial<PerformanceMetrics>>({})

  // 获取性能指标
  const getPerformanceMetrics = (): Partial<PerformanceMetrics> => {
    const metrics: Partial<PerformanceMetrics> = {}

    try {
      // 页面加载时间
      const navigation = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming
      if (navigation) {
        metrics.pageLoadTime =
          navigation.loadEventEnd - navigation.loadEventStart
      }

      // Web Vitals 指标
      if ('PerformanceObserver' in window) {
        // 首次内容绘制 (FCP)
        const paintEntries = performance.getEntriesByType('paint')
        const fcpEntry = paintEntries.find(
          entry => entry.name === 'first-contentful-paint'
        )
        if (fcpEntry) {
          metrics.firstContentfulPaint = fcpEntry.startTime
        }

        // 最大内容绘制 (LCP) - 使用缓存的值而不是直接查询废弃的 API
        if (metricsRef.current.largestContentfulPaint) {
          metrics.largestContentfulPaint = metricsRef.current.largestContentfulPaint
        }
      }

      // 路由切换时间
      if (routeChangeStartRef.current) {
        metrics.routeChangeTime =
          performance.now() - routeChangeStartRef.current
      }
    } catch (error) {
      console.warn('Failed to collect performance metrics:', error)
    }

    return metrics
  }

  // 设置性能观察器
  const setupPerformanceObserver = () => {
    if (!('PerformanceObserver' in window)) {
      return
    }

    try {
      // 观察 LCP - 使用现代 API
      const lcpObserver = new PerformanceObserver(list => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1] as any
        if (lastEntry) {
          metricsRef.current.largestContentfulPaint = lastEntry.startTime
          if (logToConsole) {
            console.log('LCP:', lastEntry.startTime)
          }
        }
      })
      
      // 使用 try-catch 包装以避免废弃 API 警告
      try {
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })
      } catch (error) {
        // 降级到旧 API
        try {
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
        } catch (fallbackError) {
          console.warn('LCP observation not supported:', fallbackError)
        }
      }

      // 观察 FID
      const fidObserver = new PerformanceObserver(list => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          metricsRef.current.firstInputDelay =
            entry.processingStart - entry.startTime
          if (logToConsole) {
            console.log('FID:', entry.processingStart - entry.startTime)
          }
        })
      })
      fidObserver.observe({ entryTypes: ['first-input'] })

      // 观察 CLS
      const clsObserver = new PerformanceObserver(list => {
        let clsValue = 0
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        })
        metricsRef.current.cumulativeLayoutShift = clsValue
        if (logToConsole) {
          console.log('CLS:', clsValue)
        }
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })

      return () => {
        lcpObserver.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
      }
    } catch (error) {
      console.warn('Failed to setup performance observer:', error)
    }
  }

  // 记录路由切换开始时间
  const recordRouteChangeStart = () => {
    routeChangeStartRef.current = performance.now()
  }

  // 记录路由切换结束时间并计算耗时
  const recordRouteChangeEnd = () => {
    if (routeChangeStartRef.current) {
      const routeChangeTime = performance.now() - routeChangeStartRef.current
      metricsRef.current.routeChangeTime = routeChangeTime

      if (logToConsole) {
        console.log(`Route change time: ${routeChangeTime.toFixed(2)}ms`)
      }

      // 触发回调
      if (onMetrics) {
        onMetrics({ routeChangeTime })
      }

      routeChangeStartRef.current = undefined
    }
  }

  // 获取性能报告
  const getPerformanceReport = () => {
    const currentMetrics = getPerformanceMetrics()
    const allMetrics = { ...metricsRef.current, ...currentMetrics }

    if (logToConsole) {
      console.group('Performance Report')
      console.table(allMetrics)
      console.groupEnd()
    }

    return allMetrics
  }

  // 检查性能是否良好
  const isPerformanceGood = () => {
    const metrics = metricsRef.current
    return {
      fcp: (metrics.firstContentfulPaint || 0) < 1800, // FCP < 1.8s
      lcp: (metrics.largestContentfulPaint || 0) < 2500, // LCP < 2.5s
      fid: (metrics.firstInputDelay || 0) < 100, // FID < 100ms
      cls: (metrics.cumulativeLayoutShift || 0) < 0.1, // CLS < 0.1
      routeChange: (metrics.routeChangeTime || 0) < 500, // 路由切换 < 500ms
    }
  }

  useEffect(() => {
    if (!enabled) return

    // 记录路由切换开始
    recordRouteChangeStart()

    // 设置性能观察器
    const cleanup = setupPerformanceObserver()

    // 页面加载完成后记录指标
    if ('requestIdleCallback' in window) {
      const idleCallback = window.requestIdleCallback(() => {
        recordRouteChangeEnd()
        const metrics = getPerformanceMetrics()
        metricsRef.current = { ...metricsRef.current, ...metrics }

        if (onMetrics) {
          onMetrics(metrics)
        }
      })

      return () => {
        cleanup?.()
        if ('cancelIdleCallback' in window) {
          window.cancelIdleCallback(idleCallback)
        }
      }
    } else {
      const timer = setTimeout(() => {
        recordRouteChangeEnd()
        const metrics = getPerformanceMetrics()
        metricsRef.current = { ...metricsRef.current, ...metrics }

        if (onMetrics) {
          onMetrics(metrics)
        }
      }, 100)

      return () => {
        clearTimeout(timer)
        cleanup?.()
      }
    }
  }, [location.pathname, enabled])

  // 页面卸载时生成性能报告
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (enabled && logToConsole) {
        getPerformanceReport()
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [enabled, logToConsole])

  return {
    metrics: metricsRef.current,
    getPerformanceReport,
    isPerformanceGood,
    recordRouteChangeStart,
    recordRouteChangeEnd,
  }
}
