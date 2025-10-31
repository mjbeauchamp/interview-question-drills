import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataManipulation from './components/DataManipulation'
import RecursivePathRecord from './components/RecursivePathRecord'
import StoreItemGrid from './components/StoreItemGrid'
import RecursionDrills from './components/RecursionDrills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <DataManipulation /> */}
      {/* <RecursivePathRecord /> */}
      {/* <StoreItemGrid /> */}
      <RecursionDrills />
    </>
  )
}

export default App
