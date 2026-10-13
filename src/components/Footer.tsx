import { track } from '@vercel/analytics/react'
import { Activity, Github, Linkedin } from 'lucide-react'
import { socialLinks } from '../data/portfolio'

export function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <a href="#home" className="footer-brand">JPC<span>.</span></a>
        <div className="footer-meta">
          <p>© 2026 John Paul Cambiado.</p>
          <span><Activity size={12} /> Privacy-first analytics active</span>
        </div>
        <div className="footer-socials">
          <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub" onClick={() => track('Social Link', { network: 'GitHub', location: 'Footer' })}><Github /></a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" onClick={() => track('Social Link', { network: 'LinkedIn', location: 'Footer' })}><Linkedin /></a>
          <a href={socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="footer-social-letter" onClick={() => track('Social Link', { network: 'Facebook', location: 'Footer' })}>f</a>
        </div>
      </div>
    </footer>
  )
}
