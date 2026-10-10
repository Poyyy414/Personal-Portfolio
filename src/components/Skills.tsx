import { skills } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <SectionHeading eyebrow="Toolkit" title="My Skills" description="Technologies I use to turn ideas into working systems—grouped by practice, not arbitrary percentages." />
        <div className="skills-grid">{Object.entries(skills).map(([category, items], index) => <Reveal className="skill-group" key={category} delay={(index % 3) * .07}><div className="skill-head"><span>0{index + 1}</span><h3>{category}</h3></div><div className="skill-chips">{items.map(item => <span key={item}>{item}</span>)}</div></Reveal>)}</div>
      </div>
    </section>
  )
}
