const highlights = [
  ['7', 'Completed projects'],
  ['System design', 'Primary focus'],
  ['Full stack', 'Development'],
  ['Available', 'Junior opportunities'],
]

export function TechRail() {
  return (
    <aside className="tech-rail" aria-label="Portfolio highlights">
      <div className="container tech-rail-inner">
        {highlights.map(([value, label]) => (
          <div className="tech-rail-item" key={label}>
            <strong>{value}</strong>
            <small>{label}</small>
          </div>
        ))}
      </div>
    </aside>
  )
}
