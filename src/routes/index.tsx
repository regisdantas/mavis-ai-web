import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { DashboardContextProvider } from '../pages/Dashboard/context/DashboardContext'

const Login = React.lazy(
  () => import(/* webpackPrefetch: true */ /* webpackChunkName: "login" */ '../pages/Login')
)

const Dashboard = React.lazy(
  () =>
    import(
      /* webpackPrefetch: true */ /* webpackChunkName: "dashboard" */ '../pages/Dashboard/Dashboard'
    )
)

interface IProtectedRouteProps {
  children: JSX.Element
}

export const ProtectedRoute = ({ children }: IProtectedRouteProps) => {
  const { user } = UserAuth()
  return user !== null && user.displayName !== undefined ? children : <Navigate to="/login" />
}

export const Router: React.FC = () => {
  return (
    <React.Suspense fallback={''}>
      <Routes>
        <Route
          element={
            <ProtectedRoute>
              <DashboardContextProvider>
                <Dashboard />
              </DashboardContextProvider>
            </ProtectedRoute>
          }
          path="/"
        />
        <Route
          element={
            <ProtectedRoute>
              <DashboardContextProvider>
                <Dashboard />
              </DashboardContextProvider>
            </ProtectedRoute>
          }
          path="/dashboard"
        />
        <Route element={<Login />} path="/login" />
      </Routes>
    </React.Suspense>
  )
}
