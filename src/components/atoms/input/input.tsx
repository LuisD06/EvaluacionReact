import { FC } from 'react'
import './input.scss'
interface InputProps {
  placeholder: string
  type?: string
  onValueChange: () => void
} 
export const Input:FC<InputProps> = ({placeholder, type = 'text', onValueChange}) => {
  return <input className='input' type={type} placeholder={placeholder} onChange={onValueChange}/>
}