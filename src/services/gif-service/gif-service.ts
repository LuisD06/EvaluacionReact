import axios from 'axios'

const AUTOR_ID = 1012
const BASE_URL = 'https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws'
export const getGifAsync = async() => {
  const response = await axios.get(`${BASE_URL}/?author_id=${AUTOR_ID}`);
  return response.data;
}