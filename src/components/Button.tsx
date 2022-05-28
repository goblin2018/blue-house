import React, { ReactElement } from 'react'

interface Props {
  children: any
  className?: string
  size?: ButtonSize
  color?: string
}

type ButtonSize = 'large' | 'medium' | 'small'
type ButtonColor = ''

const getSizeClass = (size: ButtonSize = 'medium'): string => {
  switch (size) {
    case 'large':
      return 'h-10'
    case 'small':
      return 'h-6'
    default:
      return 'h-8'
  }
}

const Button: React.FC<Props> = ({ children, className, size, color }) => {
  return (
    <button
      className={`bg-lime-500 px-3 rounded caret-transparent hover:bg-lime-400 ${className} ${getSizeClass(size)}`}
    >
      {children}
    </button>
  )
}

export default Button
