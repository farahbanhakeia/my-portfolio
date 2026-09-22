import { motion } from 'framer-motion'
import ParticleField from '../components/ParticleField'
import NodeGraph from '../components/NodeGraph'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg-secondary">
      <ParticleField />

      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Decorative floating blobs */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-accent/10 via-accent-warm/8 to-transparent rounded-full blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-gradient-to-tr from-accent-dim/8 via-accent/5 to-transparent rounded-full blur-3xl animate-float-slow pointer-events-none" style={{ animationDelay: '-4s' }} />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-accent-warm/6 animate-blob pointer-events-none blur-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full py-24 md:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-mono text-xs text-accent/70 tracking-[0.3em] mb-4">
                PORTFOLIO
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold italic leading-[1.05] mb-6"
            >
              <span className="gradient-text">Farah</span>
              <br />
              <span className="gradient-text">Banhakeia</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-2 mb-6"
            >
              <p className="font-mono text-sm md:text-base text-text-secondary tracking-[0.15em]">
                DATA SCIENTIST
              </p>
              <p className="font-mono text-sm md:text-base text-text-secondary tracking-[0.15em]">
                AI & MACHINE LEARNING ENGINEER
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex items-center gap-3 justify-center lg:justify-start mb-8"
            >
              <span className="font-mono text-xs text-accent tracking-wider">
                DATA
              </span>
              <span className="w-6 h-px bg-gradient-to-r from-accent to-accent-warm" />
              <span className="font-mono text-xs text-accent-warm tracking-wider">
                INTELLIGENCE
              </span>
              <span className="w-6 h-px bg-gradient-to-r from-accent-warm to-accent-dim" />
              <span className="font-mono text-xs text-accent-dim tracking-wider">
                OPTIMIZATION
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-text-secondary text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Designing intelligent systems from data, machine learning and
              mathematical optimization.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-text-muted text-xs md:text-sm leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
            >
              Data Scientist and AI Engineer with a strong foundation in
              Mathematics and Computer Science, focused on Machine Learning,
              Deep Learning, Computer Vision, Data Analysis and Constraint-based
              Optimization.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-accent to-accent-warm text-white font-mono text-xs tracking-wider rounded-xl hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                VIEW SYSTEMS
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-accent/25 text-accent font-mono text-xs tracking-wider rounded-xl hover:bg-accent/5 hover:border-accent/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                CONTACT
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, type: 'spring', stiffness: 80 }}
            className="hidden lg:block flex-shrink-0"
          >
            <NodeGraph />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-accent/50 to-transparent"
        />
      </div>
    </section>
  )
}
