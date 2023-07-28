import React, { Suspense } from 'react'
import { Navigate, Route, Routes, useRoutes } from 'react-router-dom'
import type { RouteType } from './config'
import { RouteItems } from './config'
import { Loading } from '@/components/Loading'

const RouterViews = (routerItems: RouteType[]) => {
  if (routerItems && routerItems.length) {
    return routerItems.map(({ path, Skeleton, Element, children, redirect }) => {
      return children && children.length
        ?
        (
          <Route path={path} key={path} element={
            <Suspense fallback={!Skeleton ? <Loading /> : <Skeleton />}>
              <Element />
            </Suspense>}>
            {RouterViews(children)}
            <Route path={path} element={
              <Navigate to={!redirect ? children[0].path : redirect} />
            } />
          </Route>
        )
        :
        (
          <Route key={path} path={path} element={
            <Suspense fallback={!Skeleton ? <Loading /> : <Skeleton />}>
              <Element />
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
