import type { FC } from 'react'

interface Props {
  orientation?: 'vertical' | 'horizontal'
  color?: string
  width?: string | number
  height?: string | number
}

export const Separator: FC<Props> = ({
  orientation,
  color = 'bg-gray-200',
  height,
  width
}) => {
  const customWidth = orientation === 'vertical' ? width ?? 'w-[0.5px]' : height ?? 'h-[0.5px]'

  return (
    <hr
      className={`
        border-none p-0 my-4
        ${orientation === 'vertical' ? 'h-full' : 'w-full'}
        ${color}
        ${customWidth}
      `}
    />
  )
}
