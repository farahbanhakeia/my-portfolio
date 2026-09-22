import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { experiences } from '../data/experience'

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader label="EXPERIENCE" title="Professional Experience" />
      </motion.div>

      <div className="space-y-6">
        {experiences.map((exp, ei) => (
          <motion.div
            key={exp.period}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: ei * 0.1 }}
            className="border border-border rounded-xl p-6 md:p-8"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-xs text-accent tracking-wider">
                {exp.period}
              </span>
              {exp.current && (
                <span className="px-2.5 py-0.5 font-mono text-[10px] text-text-primary bg-accent rounded-full tracking-wider">
                  CURRENT
                </span>
              )}
            </div>

            <h3 className="text-lg font-semibold text-text-primary mb-1">
              {exp.title}
            </h3>
            <p className="text-sm text-text-muted mb-4">
              {exp.company} — {exp.location}
            </p>

            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              {exp.description}
            </p>

            <ul className="space-y-2 mb-6">
              {exp.bullets.map((bullet, bi) => (
                <li
                  key={bi}
                  className="flex gap-3 text-text-secondary text-sm leading-relaxed"
                >
                  <span className="text-accent mt-[7px] flex-shrink-0">
                    <svg
                      width="5"
                      height="5"
                      viewBox="0 0 5 5"
                      fill="currentColor"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" />
                    </svg>
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 font-mono text-[11px] text-text-muted border border-border rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
