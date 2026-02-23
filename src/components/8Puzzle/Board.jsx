import Tile from "./Title"

function Board({ tiles, onTileClick }) {
  return (
    <div className="puzzle-grid">
      {tiles.map((tile, i) => (
        <Tile
          key={i}
          value={tile}
          onClick={() => onTileClick(i)}
        />
      ))}
    </div>
  )
}

export default Board