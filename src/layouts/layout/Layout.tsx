import { useEffect, type FC, type ReactNode } from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

interface Props {
  children: ReactNode
  title?: string
}

export const Layout: FC<Props> = ({
  children,
  title
}) => {
  useEffect(() => {
    document.title = title ?? 'Dot Share - Share your universe'
  }, [])

  return (
    <div className='absolute h-screen w-screen px-4 duration-200'>
      <Header />
      <div className='h-full w-full flex items-start justify-start'>
        <Sidebar />
        <main className='w-full mt-16 overflow-auto' style={{ height: 'calc(100vh - 64px)' }}>
          {children}
        </main>
      </div>
    </div>
  )
}
