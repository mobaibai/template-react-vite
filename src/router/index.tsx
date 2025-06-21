import { Loading } from '@/components/Loading'
import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { type RouteType, RouteItems } from './config'
import RouteTransition from '@/components/RouteTransition'

const RouterViews = (routerItems: RouteType[]) => {
  if (routerItems && routerItems.length) {
    return routerItems.map(
      ({ name = '', path, Skeleton, Element, children, redirect }) => {
        return children && children.length ? (
          <Route
            path={path}
            key={path}
            element={
              <RouteTransition>
                <Suspense fallback={!Skeleton ? <Loading /> : <Skeleton />}>
                  <Element title={name} />
                </Suspense>
              </RouteTransition>
            }
          >
            {RouterViews(children)}
            {/* 只在明确指定了 redirect 的情况下才添加 Navigate */}
            {redirect && (
              <Route index element={<Navigate to={redirect} replace />} />
            )}
          </Route>
        ) : (
          <Route
            key={path}
            path={path}
            element={
              <RouteTransition>
                <Suspense fallback={!Skeleton ? <Loading /> : <Skeleton />}>
                  <Element title={name} />
                </Suspense>
              </RouteTransition>
            }
          />
        )
      }
    )
  }
}

const RouterContainer = () => {
  return <Routes>{RouterViews(RouteItems)}</Routes>
}

export default React.memo(RouterContainer)
