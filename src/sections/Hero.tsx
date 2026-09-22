import { motion } from 'framer-motion'
import FloatingParticles from '../components/FloatingParticles'

const DOMAINS = [
  'Data Analytics',
  'Data Engineering',
  'Machine Learning',
  'AI Engineering',
  'Computer Vision',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <FloatingParticles />
      <div className="absolute inset-0 dot-bg opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 w-full">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-mono text-xs text-accent tracking-[0.25em] mb-8"
        >
          DATA & AI ENGINEERING
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5] }}
            className="inline-block w-[2px] h-3 bg-accent ml-1 align-middle"
          />
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6"
        >
          Farah{' '}
          <motion.span
            className="text-accent inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Banhakeia
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl mb-4"
        >
          Building intelligent systems from data to deployment.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-text-muted text-sm md:text-base leading-relaxed max-w-xl mb-8"
        >
          Data & AI Engineer with a strong foundation in Mathematics and Computer
          Science. I design end-to-end pipelines — from raw data exploration to
          model deployment — balancing analytical rigor with engineering pragmatism.
        </motion.p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-10">
          {DOMAINS.map((domain, i) => (
            <motion.span
              key={domain}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
              className="flex items-center gap-4"
            >
              {i > 0 && (
                <motion.span
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                  className="w-1 h-1 rounded-full bg-accent"
                />
              )}
              <span className="font-mono text-[11px] text-text-muted tracking-wider hover:text-accent transition-colors">
                {domain}
              </span>
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap gap-3"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 bg-accent text-text-primary text-sm font-medium rounded-lg hover:bg-accent-dim transition-colors shadow-md shadow-accent/20"
          >
            Explore Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 border border-border text-text-secondary text-sm font-medium rounded-lg hover:border-accent hover:text-accent transition-colors"
          >
            Let's Connect
          </motion.a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-mono text-[9px] text-text-muted/40 tracking-widest">
              SCROLL
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-accent/40 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
