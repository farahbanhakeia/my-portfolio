import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import WhatIBuild from './sections/WhatIBuild'
import Projects from './sections/Projects'
import DataPipeline from './sections/DataPipeline'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import HowIWork from './sections/HowIWork'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <Hero />
      <About />
      <WhatIBuild />
      <Projects />
      <DataPipeline />
      <Skills />
      <Experience />
      <HowIWork />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}
