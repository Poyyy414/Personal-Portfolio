import { Award, Trophy } from 'lucide-react'
import { achievements } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Achievements() {
  const academic = achievements.filter(item => item.category === 'Academic & Certification' && item.title !== 'Microsoft Word Certification')
  const competitions = achievements.filter(item => item.category === 'Startup & Hackathon')
  const featured = competitions.slice(0, 2)
  const additional = competitions.slice(2)

  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <SectionHeading eyebrow="Recognition" title="Selected achievements." description="Competition results and academic recognition that support the work shown in my projects." />

        <div className="achievement-featured-grid">
          {featured.map((item, index) => (
            <Reveal key={item.title} delay={index * .06} className="achievement-featured-card">
              <div className="achievement-icon"><Trophy size={22} /></div>
              <span>0{index + 1} · Competition highlight</span>
              <h3>{item.title}</h3>
              <p>{item.note}</p>
            </Reveal>
          ))}
        </div>

        <div className="achievement-lists">
          <div>
            <h3>Additional competitions</h3>
            <div className="achievement-list">
              {additional.map(item => (
                <Reveal key={item.title} className="achievement-list-item">
                  <Award size={18} />
                  <div><strong>{item.title}</strong><span>{item.note}</span></div>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <h3>Academic recognition</h3>
            <div className="achievement-list">
              {academic.map(item => (
                <Reveal key={item.title} className="achievement-list-item">
                  <Award size={18} />
                  <div><strong>{item.title}</strong><span>{item.note}</span></div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
