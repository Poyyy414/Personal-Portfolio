import type { Project } from '../data/portfolio'

export function ProjectVisual({ project, detailed = false }: { project: Project; detailed?: boolean }) {
  const steps = project.architecture
    .split('→')
    .map(step => step.trim().replace(/\.$/, ''))

  return (
    <div
      className={`project-visual visual-${project.number} ${detailed ? 'visual-detailed' : ''}`}
      style={{ '--project-accent': project.color } as React.CSSProperties}
      role="img"
      aria-label={`${project.name} architecture overview: ${steps.join(' to ')}`}
    >
      <div className="architecture-top">
        <div>
          <span>System architecture</span>
          <strong>{project.name}</strong>
        </div>
        <b>{project.number}</b>
      </div>

      <div className="architecture-flow">
        {steps.map((step, index) => (
          <div className="architecture-step" key={step}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{step}</strong>
            {index < steps.length - 1 && <i aria-hidden="true">→</i>}
          </div>
        ))}
      </div>

      <div className="architecture-bottom">
        <span>{project.category}</span>
        <span>{project.context}</span>
      </div>
    </div>
  )
}
