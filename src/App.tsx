import { useState } from 'react'
import './App.css'
import StarsCanvas from './components/Core/Stars/CoreStars.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-full'>
      <StarsCanvas />
    </div>
  )
}

export default App
