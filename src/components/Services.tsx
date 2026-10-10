import { BadgeCheck, Code2, Search, Workflow } from 'lucide-react'
import { services } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const icons = { BadgeCheck, Code2, Search, Workflow }

export function Services() {
  return (
    <section className="section services">
      <div className="container">
        <SectionHeading eyebrow="Process" title="How I Build" description="My work starts with the system—not the screen. I map the problem, model the architecture, implement the product, and validate the complete workflow." />
        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = icons[service.icon as keyof typeof icons]
            return <Reveal key={service.title} delay={index * .08} className="service-card"><span className="service-number">0{index + 1}</span><Icon /><h3>{service.title}</h3><p>{service.description}</p></Reveal>
          })}
        </div>
      </div>
    </section>
  )
}
