import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'glass-strong border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-[13px] font-medium tracking-wider text-text-primary hover:text-accent transition-colors"
        >
          FARAH BANHAKEIA
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] text-text-muted tracking-wider hover:text-text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/farahbanhakeia"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] text-text-muted hover:text-accent transition-colors"
          >
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/farah-banhakeia-09591a41a/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] text-text-muted hover:text-accent transition-colors"
          >
            LINKEDIN
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

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 glass-strong z-30">
          <div className="flex flex-col items-center justify-center h-full gap-8 -mt-16">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-sm text-text-secondary hover:text-text-primary transition-colors tracking-wider"
              >
                {item.label}
              </a>
            ))}
            <div className="h-px w-12 bg-border mt-4" />
            <div className="flex gap-6">
              <a
                href="https://github.com/farahbanhakeia"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-text-muted hover:text-accent transition-colors"
              >
                GITHUB
              </a>
              <a
                href="https://www.linkedin.com/in/farah-banhakeia-09591a41a/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-text-muted hover:text-accent transition-colors"
              >
                LINKEDIN
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
