import { GifForm } from '../../components/organisms/gif-form/gif-form'
import { GifList } from '../../components/organisms/gif-list/gif-list'

export const GifDeck = () => {
  return (
    <div className='gif-deck'>
      <h2>Gif Gallery</h2>
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