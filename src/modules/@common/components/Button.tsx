import type { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Button: FC<Props> = ({ children }) => {
  return (
    <button type='button' className='flex items-center justify-center gap-2 px-4 py-2 rounded-2xl hover:bg-slate-600'>
      {children}
    </button>
  )
}
