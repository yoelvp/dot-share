import type { FC } from 'react'

interface Props {
  placeholder?: string
  className?: string
}

export const Input: FC<Props> = ({
  placeholder,
  className = ''
}) => {
  return (
    <input
      type='text'
      placeholder={placeholder}
      className={`h-10 bg-slate-600 rounded-2xl px-6 ${className}`}
    />
  )
}
