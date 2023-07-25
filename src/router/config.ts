import { Suspense, lazy } from "react"

export interface RouteType {
  key?: string
  to?: string
  path: string
  redirect?: string
  roles?: string[]
  name?: string
  Component: any
  children?: RouteType[]
}

export const RouteItems: RouteType[] = [
  {
    path: "/home",
    redirect: "/home",
    roles: ["USER_ROLES.ADMIN, USER_ROLES.TEST"],
    Component: lazy(() => import("@/pages/home")),
  },
  {
    path: "/video",
    redirect: "/video",
    roles: ["USER_ROLES.ADMIN"],
    Component: lazy(() => import("@/pages/video")),
    children: [
      {
        path: "play1",
        roles: ["USER_ROLES.ADMIN"],
        Component: lazy(() => import("@/pages/video/play1")),
      },
      {
        path: "play2",
        roles: ["USER_ROLES.ADMIN"],
        Component: lazy(() => import("@/pages/video/play2")),
      },
    ],
  },
  {
    path: "*",
    Component: lazy(() => import("@/pages/404")),
  },
]
