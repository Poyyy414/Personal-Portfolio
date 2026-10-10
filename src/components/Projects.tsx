import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Pause, Play } from 'lucide-react'
import { additionalProjects, projects, type Project } from '../data/portfolio'
import { ProjectVisual } from './ProjectVisual'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

function getCarouselPosition(index: number, activeIndex: number, total: number) {
  let offset = index - activeIndex
  if (offset > total / 2) offset -= total
  if (offset < -total / 2) offset += total

  if (offset === 0) return 'active'
  if (offset === -1) return 'previous'
  if (offset === 1) return 'next'
  return offset < 0 ? 'far-previous' : 'far-next'
}

export function Projects({ onSelect }: { onSelect: (project: Project) => void }) {
  const [activeProject, setActiveProject] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStart = useRef<number | null>(null)
  const reducedMotion = useReducedMotion()
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

  useEffect(() => {
    if (isPaused || reducedMotion) return

    const rotationTimer = window.setTimeout(() => {
      setActiveProject(current => (current - 1 + projects.length) % projects.length)
    }, 4500)

    return () => window.clearTimeout(rotationTimer)
  }, [activeProject, isPaused, reducedMotion])

  const rotationStopped = isPaused || Boolean(reducedMotion)

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeading eyebrow="Project portfolio" title="Systems I helped build." description="Browse four featured case studies in one focused view, followed by a compact archive of additional product work." />
        <div
          className={`project-carousel ${rotationStopped ? 'is-paused' : ''}`}
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
              <span>{rotationStopped ? 'Carousel paused' : 'Auto rotating'}</span>
              <strong>{String(activeProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</strong>
            </div>
            <div className="project-carousel-controls">
              <button type="button" onClick={() => setIsPaused(current => !current)} aria-label={isPaused ? 'Play automatic project rotation' : 'Pause automatic project rotation'}>
                {isPaused ? <Play size={16} /> : <Pause size={16} />}
                <span>{isPaused ? 'Play' : 'Pause'}</span>
              </button>
            </div>
          </div>

          <div className="project-coverflow" aria-label={`${project.name}, project ${activeProject + 1} of ${projects.length}`}>
            {projects.map((item, index) => {
              const position = getCarouselPosition(index, activeProject, projects.length)
              const isActive = index === activeProject

              return (
                <button
                  type="button"
                  className={`coverflow-card coverflow-${position}`}
                  aria-label={isActive ? `Open ${item.name} case study` : `Bring ${item.name} to the front`}
                  aria-current={isActive ? 'true' : undefined}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => isActive ? onSelect(item) : showProject(index)}
                  key={item.name}
                >
                  <ProjectVisual project={item} />
                </button>
              )
            })}
          </div>

          <div className="project-feature-details" key={project.name}>
            <div className="project-feature-intro">
              <div className="project-meta"><span>{project.number}</span><span>{project.category}</span></div>
              <h3>{project.name}</h3>
              <h4>{project.tagline}</h4>
              <p>{project.description}</p>
              <p className="project-context">{project.context}</p>
            </div>
            <div className="project-feature-specs">
              <div className="tech-list">{project.technologies.slice(0, 6).map(tech => <span key={tech}>{tech}</span>)}</div>
              <p className="project-role"><b>My role</b>{project.role}</p>
              <ul className="project-contributions">{project.contributions.map(item => <li key={item}>{item}</li>)}</ul>
              <button className="text-link" onClick={() => onSelect(project)}>Explore case study <ArrowUpRight size={18} /></button>
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
