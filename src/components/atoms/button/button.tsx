import React, { FC } from 'react'
import './button.scss'
interface ButtonProps {
  type?: 'solid' | 'void'
  children: React.ReactNode
  onClick: () => void
}
export const Button:FC<ButtonProps> = ({type = 'solid', children, onClick}) => {
  return <button className={`button button--${type}`} onClick={onClick}>
    { children }
  </button>
}