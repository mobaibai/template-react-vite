import Page404Svg from '@/assets/bgs/page404.svg'
import React, { useEffect } from 'react'

interface ResourcePreloaderProps {
  // 要预加载的资源列表
  resources?: {
    fonts?: string[]
    images?: string[]
    scripts?: string[]
    styles?: string[]
  }
  // 是否启用预加载
  enabled?: boolean
}

/**
 * 资源预加载组件
 * 用于预加载关键资源，提升页面性能
 */
const ResourcePreloader: React.FC<ResourcePreloaderProps> = ({
  resources = {},
  enabled = true,
}) => {
  const { fonts = [], images = [], scripts = [], styles = [] } = resources

  // 预加载字体
  const preloadFonts = () => {
    fonts.forEach(fontUrl => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'font'
      link.type = 'font/woff2'
      link.crossOrigin = 'anonymous'
      link.href = fontUrl
      document.head.appendChild(link)
    })
  }

  // 预加载图片
  const preloadImages = () => {
    images.forEach(imageUrl => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = imageUrl
      document.head.appendChild(link)
    })
  }

  // 预加载脚本
  const preloadScripts = () => {
    scripts.forEach(scriptUrl => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'script'
      link.href = scriptUrl
      document.head.appendChild(link)
    })
  }

  // 预加载样式
  const preloadStyles = () => {
    styles.forEach(styleUrl => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'style'
      link.href = styleUrl
      document.head.appendChild(link)
    })
  }

  // 预加载关键路由的 JavaScript 模块
  const preloadCriticalModules = () => {
    // 预加载首页和常用页面
    const criticalRoutes = [
      () => import('@/pages/home'),
      () => import('@/pages/components'),
    ]

    // 使用 requestIdleCallback 在空闲时预加载
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        criticalRoutes.forEach(importFn => {
          importFn().catch(error => {
            console.warn('Failed to preload critical module:', error)
          })
        })
      })
    } else {
      // 降级方案
      setTimeout(() => {
        criticalRoutes.forEach(importFn => {
          importFn().catch(error => {
            console.warn('Failed to preload critical module:', error)
          })
        })
      }, 1000)
    }
  }

  // 预加载 DNS
  const preloadDNS = () => {
    const domains: string[] = [
      // 可以添加外部域名进行 DNS 预解析
      // 'https://fonts.googleapis.com',
      // 'https://cdn.jsdelivr.net'
    ]

    domains.forEach(domain => {
      const link = document.createElement('link')
      link.rel = 'dns-prefetch'
      link.href = domain
      document.head.appendChild(link)
    })
  }

  useEffect(() => {
    if (!enabled) return

    // 延迟执行预加载，避免阻塞首屏渲染
    const timer = setTimeout(() => {
      preloadFonts()
      preloadImages()
      preloadScripts()
      preloadStyles()
      preloadCriticalModules()
      preloadDNS()
    }, 100)

    return () => clearTimeout(timer)
  }, [enabled, fonts, images, scripts, styles])

  return null // 这是一个无渲染组件
}

export default ResourcePreloader

// 默认资源配置
export const defaultResources = {
  fonts: [
    // 可以添加自定义字体文件
  ],
  images: [
    // 预加载后面会用到的图片
    Page404Svg,
  ],
  scripts: [
    // 预加载关键脚本
  ],
  styles: [
    // 预加载关键样式
  ],
}
