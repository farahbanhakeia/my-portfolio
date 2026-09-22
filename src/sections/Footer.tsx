import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const SOCIAL = [
  { label: 'GitHub', href: 'https://github.com/farahbanhakeia' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/farah-banhakeia-09591a41a/' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="glass-strong py-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-dim to-accent flex items-center justify-center text-[11px] font-bold text-text-primary font-mono">
                  FB
                </span>
                <span className="font-mono text-[12px] font-medium tracking-wider text-text-primary">
                  FARAH BANHAKEIA
                </span>
              </div>
              <p className="text-text-muted text-xs leading-relaxed max-w-xs mb-4">
                Data & AI Engineer specializing in end-to-end intelligent systems
                — from data pipelines to model deployment.
              </p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-[10px] text-text-muted tracking-wider">
                  OPEN TO OPPORTUNITIES
                </span>
              </div>
            </div>

            <div>
              <p className="font-mono text-[10px] text-text-muted tracking-[0.2em] mb-4">
                NAVIGATION
              </p>
              <div className="grid grid-cols-2 gap-y-2.5 gap-x-6">
                {LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="font-mono text-xs text-text-secondary hover:text-accent-dim transition-colors tracking-wider"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-[10px] text-text-muted tracking-[0.2em] mb-4">
                CONNECT
              </p>
              <div className="space-y-2.5">
                {SOCIAL.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 3 }}
                    className="flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-accent-dim transition-colors tracking-wider group"
                  >
                    {s.label}
                    <ArrowUpRight size={11} className="text-text-muted/40 group-hover:text-accent transition-colors" />
                  </motion.a>
                ))}
                <a
                  href="mailto:farahbanhakeia01@gmail.com"
                  className="block font-mono text-xs text-text-secondary hover:text-accent-dim transition-colors"
                >
                  farahbanhakeia01@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="h-px bg-border mb-6" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-mono text-[10px] text-text-muted/60 tracking-wider">
              &copy; 2026 FARAH BANHAKEIA
            </p>
            <p className="font-mono text-[10px] text-text-muted/40 tracking-[0.3em]">
              DATA & AI ENGINEERING
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
