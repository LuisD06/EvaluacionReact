import { useState } from 'react'
import { addGifAsync } from '../../../../services/gif-service/gif-service';
import { Gif } from '../../../../utils/interfaces/gif'

export const useFormHandler = () => {
  const [form, setForm] = useState<Gif>();
  const handleChangeValue = (value: string) => {
    setForm({
      url: value
    })
  }
  
  return {
    form,
    handleChangeValue,
  }
}