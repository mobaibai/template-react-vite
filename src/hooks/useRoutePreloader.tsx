import { RouteItems, type RouteType } from '@/router/config'
import { useEffect } from 'react'

interface PreloadConfig {
  // 预加载延迟时间（毫秒）
  delay?: number
  // 是否启用鼠标悬停预加载
  enableHoverPreload?: boolean
  // 是否启用可见性预加载
  enableVisibilityPreload?: boolean
  // 预加载优先级
  priority?: 'high' | 'low'
}

interface RoutePreloadMap {
  [path: string]: () => Promise<any>
}

/**
 * 从懒加载组件中提取导入路径
 * @param lazyComponent 懒加载组件
 * @returns 导入路径字符串或null
 */
const extractImportPath = (lazyComponent: any): string | null => {
  try {
    // 尝试从懒加载组件的字符串表示中提取导入路径
    const componentStr = lazyComponent.toString()
    const importMatch = componentStr.match(/import\(['"]([^'"]+)['"]/)

    if (importMatch && importMatch[1]) {
      return importMatch[1]
    }

    // 如果无法从字符串中提取，尝试其他方法
    if ('_payload' in lazyComponent && lazyComponent._payload) {
      // React 18+ 的懒加载组件结构
      const payload = lazyComponent._payload
      if (payload._result && payload._result.default) {
        // 已经加载的组件，无法获取原始导入路径
        return null
      }
    }
  } catch (error) {
    console.warn('Failed to extract import path:', error)
  }

  return null
}

/**
 * 根据路径生成导入函数
 * @param importPath 导入路径
 * @returns 导入函数
 */
const createImportFunction = (importPath: string): (() => Promise<any>) => {
  return () => import(/* @vite-ignore */ importPath)
}

/**
 * 从路由配置中提取路由导入函数
 * @param route 路由配置项
 * @returns 路由导入函数或null
 */
const extractRouteImport = (route: RouteType): (() => Promise<any>) | null => {
  // 跳过布局组件和重定向路由
  if (route.redirect || !route.Element || typeof route.Element !== 'function') {
    return null
  }

  // 检查是否是懒加载组件
  if (
    '_payload' in route.Element ||
    route.Element.toString().includes('lazy')
  ) {
    // 尝试从懒加载组件中提取导入路径
    const importPath = extractImportPath(route.Element)

    if (importPath) {
      return createImportFunction(importPath)
    }

    // 如果无法提取导入路径，直接返回原始的懒加载函数
    return route.Element as () => Promise<any>
  }

  return null
}

/**
 * 规范化路径，避免双斜杠问题
 * @param parentPath 父级路径
 * @param childPath 子路径
 * @returns 规范化后的路径
 */
const normalizePath = (parentPath: string, childPath: string): string => {
  // 处理根路径情况
  if (!parentPath || parentPath === '/') {
    return childPath.startsWith('/') ? childPath : `/${childPath}`
  }

  // 确保父路径不以斜杠结尾
  const cleanParentPath = parentPath.endsWith('/')
    ? parentPath.slice(0, -1)
    : parentPath
  // 确保子路径不以斜杠开头
  const cleanChildPath = childPath.startsWith('/')
    ? childPath.slice(1)
    : childPath

  return `${cleanParentPath}/${cleanChildPath}`
}

/**
 * 递归遍历路由配置，生成路由预加载映射
 * @param routes 路由配置数组
 * @param parentPath 父级路径
 * @returns 路由预加载映射
 */
const traverseRoutes = (
  routes: RouteType[],
  parentPath: string = ''
): RoutePreloadMap => {
  const routeMap: RoutePreloadMap = {}

  routes.forEach(route => {
    const normalizedPath = normalizePath(parentPath, route.path)

    // 提取当前路由的导入函数
    const importFn = extractRouteImport(route)
    if (importFn) {
      routeMap[normalizedPath] = importFn
    }

    // 递归处理子路由
    if (route.children && route.children.length > 0) {
      const childRoutes = traverseRoutes(route.children, normalizedPath)
      Object.assign(routeMap, childRoutes)
    }
  })

  return routeMap
}

/**
 * 动态生成路由预加载映射
 * 基于路由配置自动生成，避免手动维护
 */
const generateRoutePreloadMap = (): RoutePreloadMap => {
  return traverseRoutes(RouteItems)
}

/**
 * 从路由配置中提取骨架屏导入函数
 * @param route 路由配置项
 * @returns 骨架屏导入函数或null
 */
const extractSkeletonImport = (
  route: RouteType
): (() => Promise<any>) | null => {
  if (!route.Skeleton) {
    return null
  }

  // 尝试从骨架屏组件中提取导入路径
  const importPath = extractImportPath(route.Skeleton)

  if (importPath) {
    return createImportFunction(importPath)
  }

  // 如果无法提取导入路径，直接返回原始的懒加载函数
  return route.Skeleton as () => Promise<any>
}

/**
 * 递归遍历路由配置，生成骨架屏预加载映射
 * @param routes 路由配置数组
 * @param parentPath 父级路径
 * @returns 骨架屏预加载映射
 */
const traverseSkeletonRoutes = (
  routes: RouteType[],
  parentPath: string = ''
): RoutePreloadMap => {
  const skeletonMap: RoutePreloadMap = {}

  routes.forEach(route => {
    const normalizedPath = normalizePath(parentPath, route.path)

    // 提取当前路由的骨架屏导入函数
    const skeletonImportFn = extractSkeletonImport(route)
    if (skeletonImportFn) {
      // 使用 try-catch 处理可能不存在的骨架屏组件
      skeletonMap[normalizedPath] = async () => {
        try {
          return await skeletonImportFn()
        } catch (error) {
          console.warn(
            `Skeleton component not found for ${normalizedPath}:`,
            error
          )
          return null
        }
      }
    }

    // 递归处理子路由
    if (route.children && route.children.length > 0) {
      const childSkeletons = traverseSkeletonRoutes(
        route.children,
        normalizedPath
      )
      Object.assign(skeletonMap, childSkeletons)
    }
  })

  return skeletonMap
}

/**
 * 动态生成骨架屏预加载映射
 * 基于路由配置自动生成，避免手动维护
 */
const generateSkeletonPreloadMap = (): RoutePreloadMap => {
  return traverseSkeletonRoutes(RouteItems)
}

// 动态生成的路由预加载映射
const routePreloadMap: RoutePreloadMap = generateRoutePreloadMap()

// 动态生成的骨架屏预加载映射
const skeletonPreloadMap: RoutePreloadMap = generateSkeletonPreloadMap()

// 开发环境下输出调试信息
if (import.meta.env.DEV) {
  // console.log('🚀 路由预加载映射已生成:', {
  //   routes: Object.keys(routePreloadMap),
  //   skeletons: Object.keys(skeletonPreloadMap),
  // })
}

// 已预加载的路由缓存
const preloadedRoutes = new Set<string>()
const preloadingRoutes = new Set<string>()

/**
 * 预加载指定路由
 * @param path 路由路径
 * @param priority 优先级
 */
const preloadRoute = async (path: string, priority: 'high' | 'low' = 'low') => {
  if (preloadedRoutes.has(path) || preloadingRoutes.has(path)) {
    return
  }

  preloadingRoutes.add(path)

  try {
    // 根据优先级决定预加载策略
    if (priority === 'high') {
      // 高优先级：立即预加载
      await Promise.all([
        routePreloadMap[path]?.(),
        skeletonPreloadMap[path]?.(),
      ])
    } else {
      // 低优先级：使用 requestIdleCallback 在空闲时预加载
      if ('requestIdleCallback' in window) {
        requestIdleCallback(async () => {
          await Promise.all([
            routePreloadMap[path]?.(),
            skeletonPreloadMap[path]?.(),
          ])
        })
      } else {
        // 降级方案：使用 setTimeout
        setTimeout(async () => {
          await Promise.all([
            routePreloadMap[path]?.(),
            skeletonPreloadMap[path]?.(),
          ])
        }, 100)
      }
    }

    preloadedRoutes.add(path)
  } catch (error) {
    console.warn(`Failed to preload route ${path}:`, error)
  } finally {
    preloadingRoutes.delete(path)
  }
}

/**
 * 路由预加载 Hook
 * @param config 预加载配置
 */
export const useRoutePreloader = (config: PreloadConfig = {}) => {
  const { enableHoverPreload = true, enableVisibilityPreload = true } = config

  // 立即预加载指定路由
  const preloadRouteImmediately = (path: string) => {
    preloadRoute(path)
  }

  // 设置链接悬停预加载
  const setupHoverPreload = () => {
    if (!enableHoverPreload) return

    const handleLinkHover = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const link = target.closest('a[href]') as HTMLAnchorElement

      if (link && link.href) {
        const url = new URL(link.href)
        const path = url.pathname + url.hash.replace('#', '')

        if (routePreloadMap[path]) {
          preloadRoute(path, 'high')
        }
      }
    }

    document.addEventListener('mouseover', handleLinkHover)
    return () => document.removeEventListener('mouseover', handleLinkHover)
  }

  // 设置可见性预加载
  const setupVisibilityPreload = () => {
    if (!enableVisibilityPreload) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const link = entry.target as HTMLAnchorElement
            if (link.href) {
              const url = new URL(link.href)
              const path = url.pathname + url.hash.replace('#', '')

              if (routePreloadMap[path]) {
                preloadRoute(path, 'low')
              }
            }
          }
        })
      },
      { rootMargin: '50px' }
    )

    // 观察所有链接
    const links = document.querySelectorAll('a[href]')
    links.forEach(link => observer.observe(link))

    return () => observer.disconnect()
  }

  useEffect(() => {
    // 设置悬停和可见性预加载
    const cleanupHover = setupHoverPreload()
    const cleanupVisibility = setupVisibilityPreload()

    return () => {
      cleanupHover?.()
      cleanupVisibility?.()
    }
  }, [enableHoverPreload, enableVisibilityPreload])

  return {
    preloadRoute: preloadRouteImmediately,
    preloadedRoutes: Array.from(preloadedRoutes),
    isPreloading: (path: string) => preloadingRoutes.has(path),
  }
}

export { preloadedRoutes, preloadRoute }
