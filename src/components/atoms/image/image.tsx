import { FC } from 'react'
import './image.scss'
interface ImageProps {
  src?: string
  alt?: string
}

export const Image:FC<ImageProps> = ({ src, alt }) => {
  return <img className='image' src={src} alt={alt} />
}