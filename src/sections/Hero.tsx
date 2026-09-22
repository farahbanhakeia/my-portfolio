import { motion } from 'framer-motion'

const DOMAINS = [
  'Data Analytics',
  'Data Engineering',
  'Machine Learning',
  'AI Engineering',
  'Computer Vision',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 dot-bg opacity-40" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-mono text-xs text-accent tracking-[0.25em] mb-8"
        >
          DATA & AI ENGINEERING
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6"
        >
          Farah{' '}
          <span className="text-accent">Banhakeia</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.16 }}
          className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl mb-4"
        >
          Building intelligent systems from data to deployment.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.24 }}
          className="text-text-muted text-sm md:text-base leading-relaxed max-w-xl mb-8"
        >
          Data & AI Engineer with a strong foundation in Mathematics and Computer
          Science. I design end-to-end pipelines — from raw data exploration to
          model deployment — balancing analytical rigor with engineering pragmatism.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.32 }}
          className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-10"
        >
          {DOMAINS.map((domain, i) => (
            <span key={domain} className="flex items-center gap-4">
              {i > 0 && (
                <span className="w-1 h-1 rounded-full bg-border-hover" />
              )}
              <span className="font-mono text-[11px] text-text-muted tracking-wider">
                {domain}
              </span>
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-accent text-text-primary text-sm font-medium rounded-lg hover:bg-accent-dim transition-colors"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-border text-text-secondary text-sm font-medium rounded-lg hover:border-accent hover:text-accent transition-colors"
          >
            Let's Connect
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-text-muted/30 to-transparent"
        />
      </div>
    </section>
  )
}
