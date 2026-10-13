const signals = [
  ['07', 'Project systems'],
  ['04', 'Web · Mobile · AI · IoT'],
  ['01', 'Architecture-first process'],
  ['LIVE', 'Open to opportunities'],
]

export function TechRail() {
  return (
    <aside className="tech-rail" aria-label="Portfolio summary">
      <div className="container tech-rail-inner">
        {signals.map(([value, label], index) => (
          <div className="tech-rail-item" key={label}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{value}</strong>
            <small>{label}</small>
          </div>
        ))}
      </div>
    </aside>
  )
}
