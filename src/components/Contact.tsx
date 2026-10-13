import { useState, type FormEvent } from 'react'
import { track } from '@vercel/analytics/react'
import { AlertCircle, CheckCircle2, Github, Linkedin, LoaderCircle, Mail, MapPin, Send, Users } from 'lucide-react'
import { personal, socialLinks } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    if (formData.get('_honey')) return

    setFormStatus('sending')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personal.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
          _subject: 'New message from John Paul Cambiado Portfolio',
          _template: 'table',
          _honey: '',
          _url: window.location.href,
        }),
      })
      const result = await response.json() as { success?: boolean | string }

      if (!response.ok || result.success === false || result.success === 'false') {
        throw new Error('Unable to send message')
      }

      form.reset()
      setFormStatus('success')
      track('Contact Form', { result: 'Success' })
    } catch {
      setFormStatus('error')
      track('Contact Form', { result: 'Error' })
    }
  }

  return (
    <>
      <section className="cta-section">
        <div className="container cta-inner">
          <span>Open to junior opportunities</span>
          <h2>Let&apos;s build something <em>useful.</em></h2>
          <p>I&apos;m open to junior software engineering, full-stack development, and collaborative technology opportunities.</p>
          <div className="button-row">
            <a className="button button-dark" href="#contact-form" onClick={() => track('Contact Intent', { method: 'Form', location: 'CTA' })}>Send a message <Send size={17} /></a>
            <a className="button button-light-outline" href={socialLinks.github} target="_blank" rel="noreferrer" onClick={() => track('Social Link', { network: 'GitHub', location: 'CTA' })}>View GitHub</a>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container">
          <SectionHeading eyebrow="Contact" title="Get In Touch" description="For opportunities, collaborations, or questions about my projects, email is the fastest way to reach me." />
          <div className="contact-layout contact-layout-direct">
            <Reveal className="contact-info">
              <h3>Start a conversation.</h3>
              <p>I&apos;m most interested in engineering work involving system design, full-stack implementation, and technology with a clear operational purpose.</p>
              <div className="contact-links">
                <a href="#contact-form" onClick={() => track('Contact Intent', { method: 'Form', location: 'Contact links' })}><Mail /><span><small>Email</small>{personal.email}</span></a>
                <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" onClick={() => track('Social Link', { network: 'LinkedIn', location: 'Contact' })}><Linkedin /><span><small>LinkedIn</small>Connect professionally</span></a>
                <a href={socialLinks.github} target="_blank" rel="noreferrer" onClick={() => track('Social Link', { network: 'GitHub', location: 'Contact' })}><Github /><span><small>GitHub</small>@Poyyy414</span></a>
                <a href={socialLinks.facebook} target="_blank" rel="noreferrer" onClick={() => track('Social Link', { network: 'Facebook', location: 'Contact' })}><Users /><span><small>Facebook</small>John Paul Cambiado</span></a>
                <div><MapPin /><span><small>Location</small>{personal.location}</span></div>
              </div>
            </Reveal>

            <Reveal className="contact-form-card" delay={.1}>
              <div className="contact-form-heading">
                <span>Send a message</span>
                <h3>Have a role or project in mind?</h3>
                <p>Your message will be delivered directly to my email.</p>
              </div>
              <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>
                    <span>Name</span>
                    <input type="text" name="name" autoComplete="name" placeholder="Your name" required />
                  </label>
                  <label>
                    <span>Email</span>
                    <input type="email" name="email" autoComplete="email" placeholder="you@example.com" required />
                  </label>
                </div>
                <label>
                  <span>Message</span>
                  <textarea name="message" rows={6} placeholder="Tell me about the role, project, or opportunity." required />
                </label>
                <label className="form-honeypot" aria-hidden="true">
                  <span>Leave this field empty</span>
                  <input type="text" name="_honey" tabIndex={-1} autoComplete="off" />
                </label>
                <button className="button button-primary form-submit" type="submit" disabled={formStatus === 'sending'}>
                  {formStatus === 'sending' ? <><LoaderCircle className="form-spinner" size={17} /> Sending...</> : <>Send message <Send size={17} /></>}
                </button>
                <div className="form-feedback" aria-live="polite">
                  {formStatus === 'success' && <p className="form-success"><CheckCircle2 size={17} /> Message sent successfully. I&apos;ll reply through email.</p>}
                  {formStatus === 'error' && <p className="form-error"><AlertCircle size={17} /> The message could not be sent. Please try again.</p>}
                </div>
                <small>Messages are delivered through FormSubmit. No account is required.</small>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
