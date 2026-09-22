import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { experiences } from '../data/experience'

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto"
    >
      <SectionHeader number="03" title="ENGINEERING EXPERIENCE" />

      <div className="relative">
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/20 via-accent-warm/15 to-accent/20" />

        <div className="space-y-12">
          {experiences.map((exp, ei) => (
            <motion.div
              key={exp.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: ei * 0.15 }}
              className="relative pl-12 md:pl-20"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: ei * 0.15 + 0.2, type: 'spring', stiffness: 200 }}
                className="absolute left-[11px] md:left-[27px] top-2 w-3.5 h-3.5 rounded-full border-2 border-accent bg-white shadow-sm shadow-accent/20"
              />

              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs text-accent tracking-wider">
                  {exp.period}
                </span>
                {exp.current && (
                  <span className="px-2.5 py-0.5 font-mono text-[10px] text-white bg-gradient-to-r from-accent to-accent-warm rounded-full tracking-wider">
                    CURRENT
                  </span>
                )}
              </div>

              <h3 className="text-lg md:text-xl font-serif font-semibold text-text-primary mb-1">
                {exp.title}
              </h3>
              <p className="font-mono text-sm text-text-muted mb-4">
                {exp.company} / {exp.location}
              </p>

              <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-2xl">
                {exp.description}
              </p>

              {'bullets' in exp && (exp as any).bullets && (
                <ul className="space-y-2 mb-4 max-w-2xl">
                  {((exp as any).bullets as string[]).map((bullet: string, bi: number) => (
                    <motion.li
                      key={bi}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: bi * 0.05 }}
                      className="flex gap-2 text-text-muted text-xs leading-relaxed"
                    >
                      <span className="text-accent/50 mt-0.5 flex-shrink-0">--</span>
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, ti) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: ti * 0.04 }}
                    className="px-3 py-1 font-mono text-[11px] text-text-muted border border-accent/10 rounded-lg hover:border-accent/25 hover:text-accent transition-colors"
                  >
                    {tech}
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
