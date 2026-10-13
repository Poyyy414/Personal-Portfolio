import { ArrowUpRight, Download } from 'lucide-react'
import { track } from '@vercel/analytics/react'
import { personal, socialLinks } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionHeading eyebrow="Profile" title="About Me" />
        <div className="about-layout">
          <Reveal className="about-statement"><p>I Design the System<br /><span>before I build the screen.</span></p></Reveal>
          <Reveal className="about-content" delay={.1}>
            {personal.about.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            <dl className="info-grid">
              <div><dt>Name</dt><dd>{personal.name}</dd></div>
              <div><dt>Degree</dt><dd>{personal.degree}</dd></div>
              <div><dt>Focus</dt><dd>{personal.focus}</dd></div>
              <div><dt>Location</dt><dd>{personal.location}</dd></div>
              <div className="wide"><dt>Availability</dt><dd>{personal.availability}</dd></div>
            </dl>
            <div className="button-row"><a className="button button-primary" href="#contact" onClick={() => track('Contact Intent', { method: 'Contact section', location: 'About' })}>Contact me <ArrowUpRight size={18} /></a><a className="button button-outline" href={socialLinks.cv} download onClick={() => track('CV Download', { location: 'About' })}><Download size={17} /> Download CV</a></div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
