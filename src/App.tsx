import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { GifForm } from './components/organisms/gif-form/gif-form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Gif Gallery</h1>
      <GifForm/>
    </div>
  )
}

export default App
