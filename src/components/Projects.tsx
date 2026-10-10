import { useRef, useState, type CSSProperties } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { additionalProjects, projects, type Project } from '../data/portfolio'
import { ProjectVisual } from './ProjectVisual'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Projects({ onSelect }: { onSelect: (project: Project) => void }) {
  const [activeProject, setActiveProject] = useState(0)
  const touchStart = useRef<number | null>(null)
  const project = projects[activeProject]

  const showProject = (index: number) => {
    setActiveProject((index + projects.length) % projects.length)
  }

  const handleTouchEnd = (endX: number) => {
    if (touchStart.current === null) return
    const distance = touchStart.current - endX
    touchStart.current = null

    if (Math.abs(distance) < 50) return
    showProject(activeProject + (distance > 0 ? 1 : -1))
  }

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeading eyebrow="Project portfolio" title="Systems I helped build." description="Browse four featured case studies in one focused view, followed by a compact archive of additional product work." />
        <div
          className="project-carousel"
          style={{ '--project-accent': project.color } as CSSProperties}
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured project case studies"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft') showProject(activeProject - 1)
            if (event.key === 'ArrowRight') showProject(activeProject + 1)
          }}
          onTouchStart={(event) => { touchStart.current = event.changedTouches[0].clientX }}
          onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0].clientX)}
        >
          <div className="project-carousel-head">
            <div className="project-carousel-status" aria-live="polite" aria-atomic="true">
              <span>Featured case study</span>
              <strong>{String(activeProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</strong>
            </div>
            <div className="project-carousel-controls">
              <button type="button" onClick={() => showProject(activeProject - 1)} aria-label="Show previous project"><ArrowLeft size={19} /></button>
              <button type="button" onClick={() => showProject(activeProject + 1)} aria-label="Show next project"><ArrowRight size={19} /></button>
            </div>
          </div>

          <div className="project-carousel-slide" key={project.name} aria-label={`${project.name}, slide ${activeProject + 1} of ${projects.length}`}>
            <div className="project-row">
              <button className="visual-button" onClick={() => onSelect(project)} aria-label={`View ${project.name} case study`}><ProjectVisual project={project} /></button>
              <div className="project-copy">
                <div className="project-meta"><span>{project.number}</span><span>{project.category}</span></div>
                <h3>{project.name}</h3><h4>{project.tagline}</h4><p>{project.description}</p>
                <p className="project-context">{project.context}</p>
                <div className="tech-list">{project.technologies.slice(0, 6).map(tech => <span key={tech}>{tech}</span>)}</div>
                <p className="project-role"><b>My role</b>{project.role}</p>
                <ul className="project-contributions">{project.contributions.map(item => <li key={item}>{item}</li>)}</ul>
                <button className="text-link" onClick={() => onSelect(project)}>Explore case study <ArrowUpRight size={18} /></button>
              </div>
            </div>
          </div>

          <div className="project-carousel-nav" role="tablist" aria-label="Choose a featured project">
            {projects.map((item, index) => (
              <button
                type="button"
                role="tab"
                aria-selected={index === activeProject}
                className={index === activeProject ? 'is-active' : ''}
                onClick={() => showProject(index)}
                key={item.name}
              >
                <span>{item.number}</span>
                <strong>{item.name}</strong>
              </button>
            ))}
          </div>
        </div>
        <div className="project-archive" aria-labelledby="project-archive-title">
          <div className="project-archive-heading">
            <div>
              <p className="eyebrow"><span />More projects</p>
              <h3 id="project-archive-title">Additional product work</h3>
            </div>
            <p>Projects from my CV that demonstrate experience across learning platforms, gamification, AI-assisted tools, backend development, and systems analysis.</p>
          </div>
          <div className="project-archive-grid">
            {additionalProjects.map((project, index) => (
              <Reveal className="archive-card" key={project.name} delay={index * .06}>
                <div className="archive-card-top"><span>{project.number}</span><span>{project.category}</span></div>
                <div>
                  <h4>{project.name}</h4>
                  <h5>{project.tagline}</h5>
                  <p>{project.description}</p>
                </div>
                <p className="archive-role"><b>My role</b>{project.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
