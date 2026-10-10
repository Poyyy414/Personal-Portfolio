import { ArrowUpRight } from 'lucide-react'
import { additionalProjects, projects, type Project } from '../data/portfolio'
import { ProjectVisual } from './ProjectVisual'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Projects({ onSelect }: { onSelect: (project: Project) => void }) {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeading eyebrow="Project portfolio" title="Systems I helped build." description="Four featured case studies followed by additional software and product work." />
        <div className="project-list">
          {projects.map((project, index) => (
            <Reveal key={project.name} className={`project-row ${index % 2 ? 'project-reverse' : ''}`}>
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
            </Reveal>
          ))}
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
