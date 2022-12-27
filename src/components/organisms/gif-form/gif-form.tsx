import { FC } from 'react'
import { Gif } from '../../../utils/interfaces/gif'
import { Button } from '../../atoms/button/button'
import { Input } from '../../atoms/input/input'
import './gif-form.scss'
import { useFormHandler } from './use-form-handler/use-form-handler'
interface GifFormProps {
  onSubmit : (gif: Gif) => void
}
export const GifForm:FC<GifFormProps> = ({ onSubmit }) => {
  const { form, handleChangeValue} = useFormHandler();
  return (
    <div className='gif-form'>
      <Input 
        variant='left-rounded' 
        placeholder='Gif URL' 
        onValueChange={(value) => handleChangeValue(value)} />
      <Button type='void' variant='right-rounded' onClick={() => onSubmit(form!)}>
        Agregar
      </Button>
    </div>
  )
}