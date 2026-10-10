import { useCallback, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { ProjectDetail } from './components/ProjectDetail'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Achievements } from './components/Achievements'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import type { Project } from './data/portfolio'

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const closeProject = useCallback(() => setSelectedProject(null), [])
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <About />
        <Projects onSelect={setSelectedProject} />
        <Skills />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <ProjectDetail project={selectedProject} onClose={closeProject} />
    </>
  )
}

export default App
