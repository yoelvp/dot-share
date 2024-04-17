import type { Option } from '@/modules/@common/types'
import { Arrow, Home } from 'iconsax-react'

export const OPTIONS: Option[] = [
  {
    label: 'Inicio',
    icon: Home,
    path: '/'
  },
  {
    label: 'Popular',
    icon: Arrow,
    path: '/pupular'
  },
  {
    label: 'Comunidades',
    isSection: true,
    subOptions: [
      {
        label: 'Test',
        icon: Home,
        path: '/test'
      },
      {
        label: 'Test 02',
        icon: Arrow,
        path: '/test-02'
      }
    ]
  },
  {
    label: 'Categorias',
    isSection: true,
    subOptions: [
      {
        label: 'Neovim',
        icon: Home,
        path: '/neovim'
      },
      {
        label: 'Linux',
        icon: Arrow,
        path: '/linux'
      },
      {
        label: 'VS Code',
        icon: Home,
        path: '/vscode'
      }
    ]
  }
]
