import { Routes, Route, Navigate } from "react-router-dom";
import { RouterConfig } from "./config"
import Home from "@/pages/home"
import Video from "@/pages/video"

const RouterContainer = () => (
  <>
    <Routes>
      <Route path={RouterConfig.Home.path} element={<Home />} />
      <Route path={RouterConfig.Video.path} element={<Video />} />
      <Route path='*' element={<Navigate to={RouterConfig.Home.path} />} />
    </Routes>
  </>
)

export default RouterContainer