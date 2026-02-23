function StatsPanel({ stats }) {
  return (
    <div className="stats-box">
      <h3>Last 6 Moves</h3>
      <ul>
        {stats.map((s, i) => (
          <li key={i}>h = {s}</li>
        ))}
      </ul>
    </div>
  )
}

export default StatsPanel   