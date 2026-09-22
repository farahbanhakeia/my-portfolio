import { motion } from 'framer-motion'
import FloatingParticles from '../components/FloatingParticles'
import heroImg from '../assets/images/profile-hero.jpg'

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
      <div className="absolute inset-0 mesh-gradient" />
      <FloatingParticles />
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="absolute top-20 right-[10%] w-72 h-72 bg-accent/10 rounded-full blur-[100px] animate-float-slow" />
      <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-accent/8 rounded-full blur-[120px] animate-float-medium" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="font-mono text-xs text-accent-dim tracking-[0.25em] mb-8"
            >
              DATA & AI ENGINEERING
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5] }}
                className="inline-block w-[2px] h-3 bg-accent-dim ml-1 align-middle"
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
                className="inline-block bg-gradient-to-r from-accent-dim to-accent bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
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
              Turning complex data into intelligent, production-ready systems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-text-muted text-sm md:text-base leading-relaxed max-w-xl mb-8"
            >
              MSc Data Science student with a foundation in Mathematics and Computer
              Science. I architect end-to-end pipelines — from raw data ingestion to
              model deployment — combining analytical rigor with engineering discipline.
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
                      animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                      className="w-1.5 h-1.5 rounded-full bg-accent"
                    />
                  )}
                  <span className="font-mono text-[11px] text-text-muted tracking-wider hover:text-accent-dim transition-colors">
                    {domain}
                  </span>
                </motion.span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3 bg-gradient-to-r from-accent-dim to-accent text-text-primary text-sm font-medium rounded-xl hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 animate-gradient"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3 glass rounded-xl text-text-secondary text-sm font-medium hover:border-accent transition-all duration-300"
              >
                Let's Connect
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[340px] lg:h-[340px]">
              <div className="absolute -inset-3 bg-gradient-to-br from-accent/30 via-accent-dim/20 to-transparent rounded-full blur-2xl animate-pulse-slow" />
              <div className="relative w-full h-full rounded-full overflow-hidden gradient-border shadow-2xl shadow-accent/10">
                <img
                  src={heroImg}
                  alt="Farah Banhakeia"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full border border-dashed border-accent/15 pointer-events-none"
              />
            </div>
          </motion.div>
        </div>
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
            <span className="font-mono text-[9px] text-text-muted/50 tracking-widest">
              SCROLL
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-accent to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
