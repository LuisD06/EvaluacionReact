import { FC } from 'react'
import './input.scss'
interface InputProps {
  placeholder: string
  type?: string
  variant?: 'default' | 'left-rounded'
  onValueChange: (value: string) => void
} 
export const Input:FC<InputProps> = ({placeholder, type = 'text', variant = 'default', onValueChange}) => {
  return <input 
    className={`input input--${variant}`} 
    type={type} 
    placeholder={placeholder} 
    onChange={(evt) => onValueChange(evt.target.value)}

  />
}