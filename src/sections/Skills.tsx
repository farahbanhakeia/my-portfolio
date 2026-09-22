import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 md:py-28 px-4 sm:px-6 md:px-8 section-gradient-alt relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader label="SKILLS" title="Technical Stack" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((category, ci) => (
            <motion.div
              key={category.domain}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="p-6 glass rounded-xl hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
            >
              <p className="font-mono text-xs text-accent tracking-wider mb-1">
                {category.domain}
              </p>
              <p className="text-text-muted text-xs mb-4">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool, ti) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: ci * 0.08 + ti * 0.03 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-2.5 py-1 font-mono text-[11px] text-text-secondary bg-white/50 rounded-md border border-border hover:bg-accent/20 hover:text-text-primary hover:border-accent/40 transition-all duration-200 cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
