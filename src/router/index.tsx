import { Routes, Route, Navigate } from "react-router-dom";
import { RouterConfig } from "@/config/router"
import Home from "@/pages/home"
import Video from "@/pages/video"

const RouterContainer = () => (
  <>
    <Routes>
      <Route path={RouterConfig.Home.path} element={<Home title={RouterConfig.Home.name} />} />
      <Route path={RouterConfig.Video.path} element={<Video title={RouterConfig.Video.name} />} />
      <Route path='*' element={<Navigate to={RouterConfig.Home.path} />} />
    </Routes>
  </>
)

export default RouterContainer