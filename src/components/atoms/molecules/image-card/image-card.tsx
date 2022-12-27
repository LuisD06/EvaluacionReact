import { FC } from 'react'
import { Gif } from '../../../../utils/interfaces/gif'
import { Button } from '../../button/button'
import { Image } from '../../image/image'
import './image-card.scss'
interface ImageCardProps {
  onClick: () => void
  gif: Gif
}
export const ImageCard:FC<ImageCardProps> = ({ gif, onClick }) => {
  return (
    <div className='image-card'>
      <Image src={gif.url}/>
      <Button type='solid' onClick={onClick}>
        Eliminar
      </Button>
    </div>
  )
}