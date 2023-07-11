import Home from "@/pages/home"
import Video from "@/pages/video"

export interface RouterConfigItemType {
  key: string
  to: string
  path: string
  name: string
  element: React.ComponentType<any>
}
export interface RouterConfigType {
  Home: RouterConfigItemType
  Video: RouterConfigItemType
}
export const RouterConfig: RouterConfigType = {
  Home: {
    key: "/home",
    to: "/home",
    path: "/home",
    name: "首页",
    element: Home,
  },
  Video: {
    key: "/video",
    to: "/video",
    path: "/video",
    name: "视频",
    element: Video,
  },
}

export interface RouteItemType {
  path: string
  name: string
  element: React.ComponentType<any>
}
export const RouterArr: RouteItemType[] = [
  { path: RouterConfig.Home.path, name: RouterConfig.Home.name, element: RouterConfig.Home.element },
  { path: RouterConfig.Video.path, name: RouterConfig.Video.name, element: RouterConfig.Video.element },
]
