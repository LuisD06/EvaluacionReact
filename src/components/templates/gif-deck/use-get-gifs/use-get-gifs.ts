import { useEffect, useState } from 'react'
import { getGifAsync } from '../../../../services/gif-service/gif-service';
import { Gif } from '../../../../utils/interfaces/gif'

export const useGetGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const handleGetGifs = () => {
    getGifAsync().then((response) => {
      setGifs(response);
    }).catch((error) => {
      alert(error);
    })
  }
  useEffect(
    () => {
      handleGetGifs();
    },
    []
  )
  return {
    gifs
  }
}