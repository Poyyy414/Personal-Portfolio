import { Github, Linkedin } from 'lucide-react'
import { socialLinks } from '../data/portfolio'

export function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <a href="#home" className="footer-brand">JPC<span>.</span></a>
        <p>© 2026 John Paul Cambiado.</p>
        <div>
          <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
          <a href={socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="footer-social-letter">f</a>
        </div>
      </div>
    </footer>
  )
}
