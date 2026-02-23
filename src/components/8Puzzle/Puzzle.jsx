import { useState } from "react"

import Board from "./Board"
import Controls from "./Controls"
import StatsPanel from "./StatsPanel"
import Title from "./Title"

import {
  GOAL,
  shuffle,
  isSolved,
  canMove,
  manhattan
} from "./puzzleUtils"

import "../../css/8Puzzle/Puzzle.css"

function Puzzle() {
  const [tiles, setTiles] = useState(shuffle(GOAL))
  const [stats, setStats] = useState([])
  const [showStats, setShowStats] = useState(false)

  function handleClick(i) {
    const empty = tiles.indexOf(null)
    if (!canMove(i, empty)) return

    const newTiles = tiles.slice()
    ;[newTiles[i], newTiles[empty]] = [newTiles[empty], newTiles[i]]

    setTiles(newTiles)
    setStats(prev => [...prev, manhattan(newTiles)].slice(-5))

    if (isSolved(newTiles)) {
      setTimeout(() => alert("Solved! 🎉"), 100)
    }
  }

  function reset() {
    const newPuzzle = shuffle(GOAL)
    setTiles(newPuzzle)
    setStats([manhattan(newPuzzle)])
    setShowStats(false)
  }

  return (
    <div className="puzzle-container">

      <h1>8 Puzzle</h1>

      <div className="board-area">

        <Board
          tiles={tiles}
          onTileClick={handleClick}
        />

        {showStats && <StatsPanel stats={stats} />}

      </div>

      <Controls
        onReset={reset}
        onToggleStats={() => setShowStats(s => !s)}
      />

    </div>
  )
}

export default Puzzle