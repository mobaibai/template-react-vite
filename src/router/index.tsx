import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import type { RouteType } from '@/config/router'
import { RouterConfig } from '@/config/router'

export const RouterArr: RouteType[] = Object.values(RouterConfig)

const RouterContainer = () => {
  return <>
    <Routes>
      {
        RouterArr.map((route: RouteType) => {
          return (
            route.element && (
              <Route key={route.key} path={route.path} element={<route.element title={route.name} />} />
            )
          )
        })
      }
      <Route path='*' element={<Navigate to="/home" replace />} />
    </Routes>
  </>
}

export default React.memo(RouterContainer)
