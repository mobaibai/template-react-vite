import { LayoutPage } from '@/layout'
import { Home, HomeSkeleton } from '@/pages/home'
import React, { lazy } from 'react'

export interface RouteType {
  key?: string
  to?: string
  path: string
  redirect?: string
  roles?: string[]
  name?: string
  Element: React.LazyExoticComponent<React.FC<any>> | React.FC<any>
  Skeleton?: React.FC<any>
  children?: RouteType[]
}

export const RouteItems: RouteType[] = [
  {
    path: '/',
    redirect: 'home',
    Element: LayoutPage,
    children: [
      {
        name: '首页',
        path: 'home',
        roles: ['USER_ROLES.ADMIN, USER_ROLES.TEST'],
        Element: Home,
        Skeleton: HomeSkeleton,
      },
      {
        name: '功能组件',
        path: 'components',
        roles: ['USER_ROLES.ADMIN'],
        Element: lazy(() => import('@/pages/components')),
        Skeleton: lazy(() => import('@/pages/components/skeleton')),
        children: [
          {
            name: '跟随导航',
            path: 'nav',
            roles: ['USER_ROLES.ADMIN'],
            Element: lazy(() => import('@/pages/components/nav')),
            Skeleton: lazy(() => import('@/pages/components/nav/skeleton')),
          },
          {
            name: '全局弹窗',
            path: 'modal',
            roles: ['USER_ROLES.ADMIN'],
            Element: lazy(() => import('@/pages/components/modal')),
            Skeleton: lazy(() => import('@/pages/components/modal/skeleton')),
          },
          {
            name: '图标展示',
            path: 'icons',
            roles: ['USER_ROLES.ADMIN'],
            Element: lazy(() => import('@/pages/components/icons')),
            Skeleton: lazy(() => import('@/pages/components/icons/skeleton')),
          },
        ],
      },
      {
        name: '动画展示',
        path: 'animations',
        roles: ['USER_ROLES.ADMIN'],
        Element: lazy(() => import('@/pages/animations')),
        Skeleton: lazy(() => import('@/pages/animations/skeleton')),
      },
    ],
  },
  {
    path: '*',
    Element: lazy(() => import('@/pages/404')),
  },
]
