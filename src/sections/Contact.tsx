import { motion } from 'framer-motion'
import { Mail, ExternalLink } from 'lucide-react'

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold tracking-tight mb-4"
        >
          <span className="gradient-text">LET'S BUILD INTELLIGENT SYSTEMS.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-text-secondary text-sm max-w-md mx-auto mb-10"
        >
          Open to collaborations in Data Science, Machine Learning, AI
          Engineering and Optimization.
        </motion.p>

        <motion.a
          href="mailto:farahbanhakeia01@gmail.com"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -2, boxShadow: '0 8px 30px rgba(147, 51, 234, 0.18)' }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent to-accent-warm text-white font-mono text-sm tracking-wider rounded-xl transition-all duration-300 mb-12"
        >
          <Mail size={16} />
          farahbanhakeia01@gmail.com
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-8"
        >
          <a
            href="https://github.com/farahbanhakeia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs text-text-muted hover:text-accent transition-colors tracking-wider"
          >
            GITHUB
            <ExternalLink size={12} />
          </a>
          <span className="text-accent/20">|</span>
          <a
            href="https://www.linkedin.com/in/farah-banhakeia-09591a41a/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs text-text-muted hover:text-accent transition-colors tracking-wider"
          >
            LINKEDIN
            <ExternalLink size={12} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
