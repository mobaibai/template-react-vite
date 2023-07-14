import Home from "@/pages/home"
import Video from "@/pages/video"

export interface RouteType {
  key: string
  to: string
  path: string
  name: string
  element: React.ComponentType<any>
}
export interface RouterConfigType {
  Home: RouteType
  Video: RouteType
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