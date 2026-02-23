function Tile({ value, onClick }) {
  return (
    <button
      className={`puzzle-tile ${value === null ? "empty" : ""}`}
      onClick={onClick}
    >
      {value}
    </button>
  )
}

export default Tile