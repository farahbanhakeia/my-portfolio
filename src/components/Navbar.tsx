import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_ITEMS.map(item => document.getElementById(item.id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'glass-strong border-b border-border shadow-sm py-0'
          : 'bg-transparent py-1'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
        <motion.a
          href="#"
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-2.5 group"
        >
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-dim to-accent flex items-center justify-center text-[11px] font-bold text-text-primary font-mono">
            FB
          </span>
          <span className="font-mono text-[12px] font-medium tracking-wider text-text-primary group-hover:text-accent-dim transition-colors hidden sm:inline">
            FARAH BANHAKEIA
          </span>
        </motion.a>

        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-3 py-2 font-mono text-[11px] tracking-wider transition-colors"
            >
              <span className={active === item.id ? 'text-text-primary' : 'text-text-muted hover:text-text-primary'}>
                {item.label}
              </span>
              {active === item.id && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-accent-dim to-accent rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-1">
          <a
            href="https://github.com/farahbanhakeia"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 font-mono text-[10px] text-text-muted hover:text-accent transition-colors tracking-wider"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/farah-banhakeia-09591a41a/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 font-mono text-[10px] text-text-muted hover:text-accent transition-colors tracking-wider"
          >
            LinkedIn
          </a>
          <a
            href="mailto:farahbanhakeia01@gmail.com"
            className="ml-2 px-4 py-1.5 font-mono text-[10px] text-text-primary bg-gradient-to-r from-accent-dim to-accent rounded-full tracking-wider hover:shadow-md hover:shadow-accent/20 transition-all"
          >
            Contact
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-text-muted hover:text-text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-16 glass-strong z-30"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 -mt-16">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className={`font-mono text-sm tracking-wider transition-colors ${
                    active === item.id ? 'text-accent-dim' : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="h-px w-12 bg-accent/30 mt-2" />
              <div className="flex gap-6">
                <a
                  href="https://github.com/farahbanhakeia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-text-muted hover:text-accent transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/farah-banhakeia-09591a41a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-text-muted hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
