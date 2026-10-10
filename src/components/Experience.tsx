import { experience } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container"><SectionHeading eyebrow="Journey" title="Experience & Leadership" />
        <div className="timeline">{experience.map((item, index) => <Reveal className="timeline-item" key={`${item.role}-${item.organization}`} delay={index * .05}><div className="timeline-year">{item.year}</div><div className="timeline-dot"/><div><h3>{item.role}</h3><span>{item.organization}</span><p>{item.description}</p></div></Reveal>)}</div>
      </div>
    </section>
  )
}
