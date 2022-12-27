import axios from 'axios'
import { Gif } from '../../utils/interfaces/gif';

const AUTOR_ID = 1012
const BASE_URL = 'https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws'
export const getGifAsync = async() => {
  const response = await axios.get(`${BASE_URL}/?author_id=${AUTOR_ID}`);
  return response.data;
}

export const addGifAsync = async(gif: Gif) => {
  const newGif = {...gif, author_id: AUTOR_ID};
  const response = await axios.post(`${BASE_URL}`, newGif);
  return response.data;
}

export const deleteGifsAsync = async(gif: Gif) => {
  const response = await axios.delete(`${BASE_URL}`, gif);
  return response.data;
}