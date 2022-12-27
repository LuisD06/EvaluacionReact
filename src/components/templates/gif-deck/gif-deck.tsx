import { GifForm } from '../../organisms/gif-form/gif-form'
import { GifList } from '../../organisms/gif-list/gif-list'
import './gif-deck.scss'

export const GifDeck = () => {
  return (
    <div className='gif-deck'>
      <h2 className='gif-deck__title'>Gif Gallery</h2>
      <GifForm/>
      <GifList 
        gifs={[
          {url: 'https://media.tenor.com/ASs_x_mykqUAAAAM/avengers-marvel-cinematic-universe.gif'},
          {url: 'https://media.tenor.com/ASs_x_mykqUAAAAM/avengers-marvel-cinematic-universe.gif'},
          {url: 'https://media.tenor.com/ASs_x_mykqUAAAAM/avengers-marvel-cinematic-universe.gif'},
          {url: 'https://media.tenor.com/ASs_x_mykqUAAAAM/avengers-marvel-cinematic-universe.gif'}
        ]}
      />
    </div>
  )
}