import { GifForm } from '../../organisms/gif-form/gif-form'
import { GifList } from '../../organisms/gif-list/gif-list'
import './gif-deck.scss'
import { useGetGifs } from './use-get-gifs/use-get-gifs'

export const GifDeck = () => {
  const { gifs } = useGetGifs();
  return (
    <div className='gif-deck'>
      <h2 className='gif-deck__title'>Gif Gallery</h2>
      <GifForm/>
      <GifList 
        gifs={gifs}
      />
    </div>
  )
}