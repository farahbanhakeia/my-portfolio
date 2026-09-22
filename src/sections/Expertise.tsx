import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { skills } from '../data/skills'

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto"
    >
      <SectionHeader number="04" title="TECHNICAL EXPERTISE" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="border border-accent/10 rounded-2xl overflow-hidden bg-white shadow-sm"
      >
        <div className="hidden md:grid grid-cols-[200px_1fr_1fr] border-b border-accent/8 bg-bg-secondary">
          <div className="px-6 py-3 font-mono text-[10px] text-text-muted tracking-[0.2em]">
            DOMAIN
          </div>
          <div className="px-6 py-3 font-mono text-[10px] text-text-muted tracking-[0.2em] border-l border-accent/8">
            CORE
          </div>
          <div className="px-6 py-3 font-mono text-[10px] text-text-muted tracking-[0.2em] border-l border-accent/8">
            TOOLS
          </div>
        </div>

        {skills.map((category, ci) => (
          <motion.div
            key={category.domain}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: ci * 0.06 }}
            className={`grid grid-cols-1 md:grid-cols-[200px_1fr_1fr] ${
              ci < skills.length - 1 ? 'border-b border-accent/8' : ''
            } hover:bg-accent/3 transition-colors`}
          >
            <div className="px-6 py-4 flex items-start">
              <span className="font-mono text-xs text-accent tracking-wider">
                {category.domain}
              </span>
            </div>

            <div className="px-6 py-4 md:border-l border-accent/8">
              <div className="space-y-1.5">
                {category.areas.map((area) => (
                  <p
                    key={area.name}
                    className="text-text-secondary text-sm"
                  >
                    {area.name}
                  </p>
                ))}
              </div>
            </div>

            <div className="px-6 py-4 md:border-l border-accent/8">
              <div className="flex flex-wrap gap-2">
                {category.areas.flatMap((area) =>
                  area.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 font-mono text-[11px] text-text-muted border border-accent/8 rounded-lg hover:border-accent/25 hover:text-accent transition-colors"
                    >
                      {tool}
                    </span>
                  )),
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
