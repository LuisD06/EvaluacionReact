import { useEffect, useState } from 'react'
import { addGifAsync, deleteGifsAsync, getGifAsync } from '../../../../services/gif-service/gif-service';
import { Gif } from '../../../../utils/interfaces/gif'

export const useHandleGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const handleGetGifs = () => {
    getGifAsync().then((response) => {
      setGifs(response);
    }).catch((error) => {
      alert(error);
    })
  }
  const handleSubmit = (gif: Gif) => {
    addGifAsync(gif!).then((response) => {
      console.log(response);
      handleGetGifs();
    })
  }
  const handleDeleteGif = (gif: Gif) => {
    deleteGifsAsync(gif).then((response) => {
      console.log(response);
      handleGetGifs();
    })
  }
  useEffect(
    () => {
      handleGetGifs();
    },
    []
  )
  return {
    gifs,
    handleSubmit
  }
}