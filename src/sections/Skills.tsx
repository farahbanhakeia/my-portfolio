import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto"
    >
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
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: ci * 0.06 }}
            className="p-6 border border-border rounded-xl"
          >
            <p className="font-mono text-xs text-accent tracking-wider mb-1">
              {category.domain}
            </p>
            <p className="text-text-muted text-xs mb-4">
              {category.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {category.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 font-mono text-[11px] text-text-secondary bg-bg-secondary rounded-md"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
