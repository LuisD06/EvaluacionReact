import { FC } from 'react'
import { Gif } from '../../../utils/interfaces/gif'
import { Image } from '../../atoms/image/image'

interface GifListProps {
  gifs: Gif[]
}
export const GifList:FC<GifListProps> = ({ gifs }) => {
  return (
    <div>
      {
        gifs.map((gif) => {
          return <Image src={gif.url}/>
        })
      }
    </div>
  )
}