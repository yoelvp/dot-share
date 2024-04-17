import { type Icon } from 'iconsax-react'

interface SubOption {
  label: string
  icon?: Icon
  isDisabled?: boolean
  isSection?: boolean
  path?: string
}

export interface Option extends SubOption {
  subOptions?: SubOption[]
}
