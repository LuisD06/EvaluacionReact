import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { GifForm } from './components/organisms/gif-form/gif-form'
import { GifDeck } from './templates/gif-deck/gif-deck'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <GifDeck/>
    </div>
  )
}

export default App
