import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { RouterArr } from '@/config/router'

const RouterContainer = () => {
  return <>
    <Routes>
      {
        RouterArr.map((route, index) => {
          return (
            route.element && (
              <Route key={index} path={route.path} element={<route.element title={route.name} />} />
            )
          )
        })
      }
      <Route path='*' element={<Navigate to="/home" replace />} />
    </Routes>
  </>
}

export default React.memo(RouterContainer)
