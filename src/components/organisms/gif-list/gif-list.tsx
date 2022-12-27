import { FC } from 'react'
import { Gif } from '../../../utils/interfaces/gif'
import { Image } from '../../atoms/image/image'
import { ImageCard } from '../../atoms/molecules/image-card/image-card'
import './gif-list.scss'
interface GifListProps {
  gifs: Gif[]
}
export const GifList:FC<GifListProps> = ({ gifs }) => {
  return (
    <div className='gif-list'>
      {
        gifs.length > 0 ?
        gifs.map((gif) => {
          return <ImageCard gif={gif} onClick={() => console.log('Eliminar')}/>
        })
        :
        <span className='gif-list__empty-message'>No posee gifs</span>
      }
    </div>
  )
}