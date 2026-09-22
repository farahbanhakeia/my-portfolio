import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Profile from './sections/Profile'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Expertise from './sections/Expertise'
import Research from './sections/Research'
import Education from './sections/Education'
import Github from './sections/Github'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <Hero />
      <Profile />
      <Projects />
      <Experience />
      <Expertise />
      <Research />
      <Education />
      <Github />
      <Contact />
      <Footer />
    </div>
  )
}
