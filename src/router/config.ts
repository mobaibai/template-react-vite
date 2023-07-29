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
    path: "/",
    Element: LayoutPage,
    children: [
      {
        name: "首页",
        path: "home",
        redirect: "home",
        roles: ["USER_ROLES.ADMIN, USER_ROLES.TEST"],
        Element: Home,
        Skeleton: HomeSkeleton,
      },
      {
        name: "视频",
        path: "video",
        redirect: "video",
        roles: ["USER_ROLES.ADMIN"],
        Element: lazy(() => import("@/pages/video")),
        Skeleton: lazy(() => import("@/pages/video/skeleton")),
        children: [
          {
            name: "播放1",
            path: "play1",
            roles: ["USER_ROLES.ADMIN"],
            Element: lazy(() => import("@/pages/video/play1")),
            Skeleton: lazy(() => import("@/pages/video/play1/skeleton")),
          },
          {
            name: "播放2",
            path: "play2",
            roles: ["USER_ROLES.ADMIN"],
            Element: lazy(() => import("@/pages/video/play2")),
            Skeleton: lazy(() => import("@/pages/video/play2/skeleton")),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    Element: lazy(() => import("@/pages/404")),
  },
]
