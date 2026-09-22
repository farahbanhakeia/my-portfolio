import { motion } from 'framer-motion'
import { Mail, ExternalLink } from 'lucide-react'

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto relative"
    >
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-accent tracking-[0.2em] mb-4"
        >
          CONTACT
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-2xl md:text-3xl font-bold tracking-tight mb-4"
        >
          Let's build something with data.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
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
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 px-8 py-3.5 bg-accent text-text-primary font-mono text-sm tracking-wider rounded-lg hover:bg-accent-dim transition-colors mb-10 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30"
        >
          <Mail size={16} />
          farahbanhakeia01@gmail.com
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex items-center justify-center gap-8"
        >
          <motion.a
            href="https://github.com/farahbanhakeia"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="inline-flex items-center gap-2 font-mono text-xs text-text-muted hover:text-accent transition-colors tracking-wider"
          >
            GITHUB
            <ExternalLink size={12} />
          </motion.a>
          <span className="text-border">|</span>
          <motion.a
            href="https://www.linkedin.com/in/farah-banhakeia-09591a41a/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="inline-flex items-center gap-2 font-mono text-xs text-text-muted hover:text-accent transition-colors tracking-wider"
          >
            LINKEDIN
            <ExternalLink size={12} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
