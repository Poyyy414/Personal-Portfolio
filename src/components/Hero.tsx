import { track } from '@vercel/analytics/react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { personal, socialLinks } from '../data/portfolio'

export function Hero() {
  const reduced = useReducedMotion()

  return (
    <section id="home" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb" aria-hidden="true" />
      <div className="hero-vector" aria-hidden="true"><span /><span /><span /></div>
      <div className="container hero-inner">
        <div className="hero-copy">
          <motion.p className="hero-kicker" initial={reduced ? false : { opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
            <span>Hi, I&apos;m John Paul Cambiado</span>
            <span className="hero-kicker-location"><i /> Naga City, Philippines</span>
          </motion.p>
          <motion.h1 initial={reduced ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1, duration: .8 }}>
            Software<br /><span>Developer.</span>
          </motion.h1>
          <div className="hero-bottom">
            <p>{personal.intro}</p>
            <div className="hero-role"><span>Specialization</span><b>Solution Architecture · Full Stack</b></div>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects" onClick={() => track('Hero CTA', { action: 'View projects' })}>View my projects <ArrowUpRight size={18} /></a>
            <a className="button button-ghost" href={socialLinks.cv} download onClick={() => track('CV Download', { location: 'Hero' })}>Download CV</a>
          </div>
        </div>
        <motion.aside className="hero-card" initial={reduced ? false : { opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .3, duration: .8 }} aria-label="Developer profile summary">
          <div className="hero-card-signal" aria-hidden="true"><span /><span /><span /></div>
          <div className="hud-corners" aria-hidden="true"><i /><i /><i /><i /></div>
          <div className="profile-mark">
            <img src={`${import.meta.env.BASE_URL}profile-john-paul.webp`} alt="John Paul Cambiado" width="1000" height="1000" decoding="async" fetchPriority="high" />
            <span className="profile-scan" aria-hidden="true" />
          </div>
          <div className="status"><span /> Available for opportunities</div>
          <dl>
            <div><dt>Focus</dt><dd>Solution architecture + full stack</dd></div>
            <div><dt>Building</dt><dd>Useful connected systems</dd></div>
            <div><dt>Location</dt><dd>Naga City, PH</dd></div>
          </dl>
          <div className="social-row">
            <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub" onClick={() => track('Social Link', { network: 'GitHub', location: 'Hero' })}><Github /></a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" onClick={() => track('Social Link', { network: 'LinkedIn', location: 'Hero' })}><Linkedin /></a>
            <a href={socialLinks.email} aria-label="Email" onClick={() => track('Contact Intent', { method: 'Email', location: 'Hero' })}><Mail /></a>
          </div>
        </motion.aside>
      </div>
      <a className="scroll-indicator" href="#about"><span>Scroll to explore</span><ArrowDown size={16} /></a>
    </section>
  )
}
