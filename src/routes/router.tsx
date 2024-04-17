import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

const Home = lazy(() => import('@/modules/home/pages/Home'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])
