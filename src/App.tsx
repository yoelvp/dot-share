import type { FC } from 'react'
import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'

const App: FC = () => {
  return (
    <Suspense fallback={<p>Cargando</p>}>
      <RouterProvider
        router={router}
      />
    </Suspense>
  )
}

export default App
