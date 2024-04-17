import type { FC } from 'react'
import { Add } from 'iconsax-react'
import { Link } from 'react-router-dom'

import { Button, Input } from '@/modules/@common/components'

export const Header: FC = () => {
  return (
    <header className='fixed top-0 left-0 w-full h-16 flex justify-between items-center border-b-[0.5px] border-b-gray-600'>
      <Link to='/'>
        Dot Share
      </Link>
      <Input placeholder='Busca en Dot Share' className='min-w-64' />

      <div className='flex items-center justify-center gap-4'>
        <Button>
          <Add />
          Crear
        </Button>

        <button className='w-8 h-8 bg-yellow-600 rounded-full flex justify-center items-center text-sm font-bold transition-[outline] hover:outline hover:outline-slate-600'>
          YV
        </button>
      </div>
    </header>
  )
}
