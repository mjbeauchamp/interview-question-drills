import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataManipulation from './components/DataManipulation'
import RecursivePathRecord from './components/RecursivePathRecord'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <DataManipulation /> */}
      <RecursivePathRecord />
    </>
  )
}

export default App
