import React, { FC } from 'react'
import './button.scss'
interface ButtonProps {
  type?: 'solid' | 'void'
  variant?: 'default' | 'right-rounded'
  children: React.ReactNode
  onClick: () => void
}
export const Button:FC<ButtonProps> = ({type = 'solid', variant = 'default', children, onClick}) => {
  return <button className={`button button--${type} button--${variant}`} onClick={onClick}>
    { children }
  </button>
}