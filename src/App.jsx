import { useState } from 'react'
import './App.css'
import Board from './components/TicTac/Board'
import "./css/TicTac/style.css"
import Puzzle from './components/8Puzzle/Puzzle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Puzzle></Puzzle>
    </>
  )
}

export default App
