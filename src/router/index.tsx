import React, { Suspense } from 'react'
import { Navigate, Route, Routes, useRoutes } from 'react-router-dom'
import type { RouteType } from './config'
import { RouteItems } from './config'

const Loading = () => (
  <>
    <div className='loadsvg'>
      <div>
        loading...
      </div>
    </div>
  </>
)

const RouterViews = (routerItems: RouteType[]) => {
  if (routerItems && routerItems.length) {
    return routerItems.map(({ path, Component, children, redirect }) => {
      return children && children.length
        ?
        (
          <Route path={path} key={path} element={
            <Suspense fallback={<Loading />}>
              <Component />
            </Suspense>}>
            {RouterViews(children)}
            {
              redirect
                ?
                (
                  <Route path={path} element={
                    <Navigate to={redirect} />
                  } />
                )
                :
                (
                  <Route path={path} element={
                    <Navigate to={children[0].path} />
                  } />
                )
            }
          </Route>
        )
        :
        (
          <Route key={path} path={path} element={
            <Suspense fallback={<Loading />}>
              <Component />
            </Suspense>
          }>
          </Route>
        )
    })
  }
}

const RouterContainer = () => {
  return <>
    <Routes>
      {RouterViews(RouteItems)}
    </Routes>
  </>
}

export default React.memo(RouterContainer)
