import { useEffect, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Github, X } from 'lucide-react'
import type { Project } from '../data/portfolio'
import { ProjectVisual } from './ProjectVisual'

export function ProjectDetail({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const reduced = useReducedMotion()
  const dialogRef = useRef<HTMLElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const returnFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!project) return
    const original = document.body.style.overflow
    returnFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
    document.body.style.overflow = 'hidden'

    const pageRegions = [document.querySelector('header'), document.querySelector('main'), document.querySelector('footer')]
      .filter((region): region is HTMLElement => region instanceof HTMLElement)
    pageRegions.forEach(region => { region.inert = true })

    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 20)
    const key = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key !== 'Tab' || !dialogRef.current) return

      const focusable = [...dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')]
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', key)
    return () => {
      window.clearTimeout(focusTimer)
      document.body.style.overflow = original
      pageRegions.forEach(region => { region.inert = false })
      window.removeEventListener('keydown', key)
      returnFocusRef.current?.focus()
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && <motion.div className="modal-backdrop" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" onMouseDown={e => { if (e.target === e.currentTarget) onClose() }}>
        <motion.article ref={dialogRef} className="project-modal" initial={reduced ? false : { opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }} transition={{ duration: .35 }}>
          <button ref={closeRef} className="modal-close" onClick={onClose} aria-label="Close case study"><X /></button>
          <div className="modal-hero"><div><span>{project.number} / CASE STUDY</span><h2 id="project-dialog-title">{project.name}</h2><p>{project.tagline}</p></div><ProjectVisual project={project} detailed /></div>
          <div className="modal-content">
            <div className="modal-intro"><p>{project.overview}</p><div><span>Role</span><b>{project.role}</b><span className="modal-context-label">Context</span><b>{project.context}</b></div></div>
            <div className="case-grid">
              <section><span>01</span><h3>Problem</h3><p>{project.problem}</p></section>
              <section><span>02</span><h3>Solution</h3><p>{project.solution}</p></section>
              <section><span>03</span><h3>Architecture</h3><p>{project.architecture}</p></section>
              <section><span>04</span><h3>Challenges</h3><p>{project.challenges}</p></section>
              <section className="case-wide"><span>05</span><h3>Outcome</h3><p>{project.outcome}</p></section>
            </div>
            <div className="modal-features"><div><span>My contribution</span><ul>{project.contributions.map(item => <li key={item}>{item}</li>)}</ul><span className="feature-label-secondary">Major features</span><ul>{project.highlights.map(item => <li key={item}>{item}</li>)}</ul></div><div><span>Technology</span><div className="tech-list">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div></div></div>
            <div className="modal-actions">{project.links.github && <a className="button button-primary" href={project.links.github} target="_blank" rel="noreferrer"><Github size={18} /> View GitHub <ArrowUpRight size={17} /></a>}<button className="button button-outline" onClick={onClose}>Back to projects</button></div>
          </div>
        </motion.article>
      </motion.div>}
    </AnimatePresence>
  )
}
