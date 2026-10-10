import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { personal, socialLinks } from '../data/portfolio'

const links = ['Home', 'About', 'Projects', 'Skills', 'Experience', 'Achievements', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav-wrap ${scrolled ? 'nav-scrolled' : ''}`}>
      <nav className="nav container" aria-label="Main navigation">
        <a href="#home" className="brand" onClick={() => setOpen(false)} aria-label="John Paul Cambiado, home">
          <span>{personal.shortName}</span><b>John Paul Cambiado</b>
        </a>
        <div className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Portfolio sections">
          {links.map(link => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}
          <a className="button button-small button-outline" href={socialLinks.cv} download><Download size={15} /> Download CV</a>
        </div>
        <button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
    </header>
  )
}
