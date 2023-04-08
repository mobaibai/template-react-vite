import * as React from 'react'

export const RouterConfig = {
  Home: {
    key: '/home',
    to: '/home',
    path: '/home',
    name: '首页',
    description: '首页',
  },
  Video: {
    key: '/video',
    to: '/video',
    path: '/video',
    name: '视频',
    description: '视频',
  },
}

export const RouterArr = Object.values(RouterConfig)

export const lazyLoad = (path: string) => {
  return React.lazy(() => import(`@/pages${path}`))
}
