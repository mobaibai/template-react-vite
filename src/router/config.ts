import { lazy } from "react"
import { LayoutPage } from "@/layout"
import { Home, HomeSkeleton } from "@/pages/home"

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
        Skeleton: HomeSkeleton
      },
      {
        name: '组件',
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
            Skeleton: lazy(() => import('@/pages/components/nav/skeleton'))
          },
          {
            name: '弹窗',
            path: 'modal',
            roles: ['USER_ROLES.ADMIN'],
            Element: lazy(() => import('@/pages/components/modal')),
            Skeleton: lazy(() => import('@/pages/components/modal/skeleton'))
          },
          {
            name: '图标',
            path: 'icons',
            roles: ['USER_ROLES.ADMIN'],
            Element: lazy(() => import('@/pages/components/icons')),
            Skeleton: lazy(() => import('@/pages/components/icons/skeleton'))
          }
        ]
      }
    ]
  },
  {
    path: '*',
    Element: lazy(() => import('@/pages/404'))
  }
]