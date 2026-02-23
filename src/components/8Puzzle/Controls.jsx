function Controls({ onReset, onToggleStats }) {
  return (
    <div className="buttons">
      <button className="reset-btn" onClick={onReset}>
        Shuffle
      </button>

      <button className="stats-btn" onClick={onToggleStats}>
        Show Stats
      </button>
    </div>
  )
}

export default Controls