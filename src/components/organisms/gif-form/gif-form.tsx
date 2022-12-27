import { Button } from '../../atoms/button/button'
import { Input } from '../../atoms/input/input'
import './gif-form.scss'
export const GifForm = () => {
  return (
    <div className='gif-form'>
      <Input placeholder='' onValueChange={() => console.log('data')}/>
      <Button onClick={() => console.log('Agregar Gif')}>
        Agregar
      </Button>
    </div>
  )
}