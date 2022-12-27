import { Button } from '../../atoms/button/button'
import { Input } from '../../atoms/input/input'
import './gif-form.scss'
export const GifForm = () => {
  return (
    <div className='gif-form'>
      <Input variant='left-rounded' placeholder='Gif URL' onValueChange={() => console.log('data')} />
      <Button type='void' variant='right-rounded' onClick={() => console.log('Agregar Gif')}>
        Agregar
      </Button>
    </div>
  )
}