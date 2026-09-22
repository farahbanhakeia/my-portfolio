import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { num: '01', label: 'ABOUT', href: '#about' },
  { num: '02', label: 'PROJECTS', href: '#projects' },
  { num: '03', label: 'EXPERIENCE', href: '#experience' },
  { num: '04', label: 'EXPERTISE', href: '#expertise' },
  { num: '05', label: 'RESEARCH', href: '#research' },
  { num: '06', label: 'CONTACT', href: '#contact' },
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
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-accent/10 shadow-sm shadow-accent/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-sm font-semibold tracking-wider text-text-primary hover:text-accent transition-colors"
        >
          FARAH BANHAKEIA
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors"
            >
              <span className="font-mono text-[10px] text-accent/50 group-hover:text-accent transition-colors">
                {item.num}
              </span>
              <span className="font-mono text-xs tracking-wider">
                {item.label}
              </span>
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://github.com/farahbanhakeia"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-text-muted hover:text-accent transition-colors tracking-wider"
          >
            GITHUB
          </a>
          <span className="text-accent/20">|</span>
          <a
            href="https://www.linkedin.com/in/farah-banhakeia-09591a41a/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-text-muted hover:text-accent transition-colors tracking-wider"
          >
            LINKEDIN
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-text-muted hover:text-text-primary transition-colors"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white/95 backdrop-blur-xl z-30">
          <div className="flex flex-col items-center justify-center h-full gap-8 -mt-16">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors"
              >
                <span className="font-mono text-xs text-accent">
                  {item.num}
                </span>
                <span className="font-mono text-sm tracking-[0.2em]">
                  {item.label}
                </span>
              </a>
            ))}
            <div className="h-px w-16 bg-accent/10 mt-4" />
            <div className="flex gap-6">
              <a
                href="https://github.com/farahbanhakeia"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-text-muted hover:text-accent transition-colors tracking-wider"
              >
                GITHUB
              </a>
              <a
                href="https://www.linkedin.com/in/farah-banhakeia-09591a41a/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-text-muted hover:text-accent transition-colors tracking-wider"
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
