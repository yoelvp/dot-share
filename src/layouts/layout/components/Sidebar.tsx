import type { FC } from 'react'
import { OPTIONS } from '../constants/options'
import { Link } from 'react-router-dom'
import { Add } from 'iconsax-react'

import { Separator } from '@/modules/@common/components'

export const Sidebar: FC = () => {
  return (
    <aside className='h-full w-64 py-2 pr-4 border-r-[0.5px] border-r-gray-600'>
      <nav>
        <ul>
          {OPTIONS.map((option, index) => (
            <li key={index}>
              {!option.isSection && (
                <Link to={option.path ?? ''} className='w-full inline-block rounded-2xl px-4 py-2 transition-colors hover:bg-slate-800'>
                  {option.label}
                </Link>
              )}

              {option.isSection && <Separator color='bg-slate-600' />}
              {option.isSection && (
                <button type='button' className='mb-1 px-2 text-sm uppercase text-slate-600'>
                  {option.label}
                </button>
              )}
              {(option.subOptions?.length ?? 0) > 0 && option.subOptions?.map((subOption, subIndex) => (
                <ul key={`sub-${subIndex}`}>
                  <li>
                    <Link to={subOption.path ?? '/'} className='w-full inline-block rounded-2xl px-4 py-2 transition-colors hover:bg-slate-800'>
                      {subOption.label}
                    </Link>
                  </li>
                </ul>
              ))}
              {option.isSection && (option.subOptions?.length ?? 0) < 1 && (
                <button type='button' className='w-full px-2 py-2 flex justify-start items-center gap-2 rounded-2xl hover:bg-slate-800'>
                  <Add />
                  Crear una comunidad
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
