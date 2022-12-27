import { GifForm } from '../../organisms/gif-form/gif-form'
import { GifList } from '../../organisms/gif-list/gif-list'
import './gif-deck.scss'
import { useHandleGifs } from './use-handle-gifs/use-handle-gifs'

export const GifDeck = () => {
  const { gifs, handleSubmit, handleDeleteGif } = useHandleGifs();
  return (
    <div className='gif-deck'>
      <h2 className='gif-deck__title'>Gif Gallery</h2>
      <GifForm onSubmit={(gif) => handleSubmit(gif)}/>
      <GifList 
        onClick={(gif) => handleDeleteGif(gif)}
        gifs={gifs}
      />
    </div>
  )
}