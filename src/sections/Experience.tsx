import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { experiences } from '../data/experience'
import logoCmc from '../assets/images/logo-cmc.png'
import logoMarsa from '../assets/images/logo-marsa-maroc.jpg'

const logos: Record<string, string> = { cmc: logoCmc, marsa: logoMarsa }

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 px-4 sm:px-6 md:px-8 section-gradient relative overflow-hidden"
    >
      <div className="absolute inset-0 dot-bg opacity-10" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader label="EXPERIENCE" title="Professional Experience" />
        </motion.div>

        <div className="relative space-y-6">
          <div className="absolute left-[15px] md:left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent hidden md:block" />

          {experiences.map((exp, ei) => (
            <motion.div
              key={exp.period}
              initial={{ opacity: 0, x: -20, y: 16 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: ei * 0.15 }}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              className="relative md:pl-12 glass rounded-xl p-6 md:p-8 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
            >
              <motion.div
                className="absolute left-[11px] top-8 w-[9px] h-[9px] rounded-full border-2 border-accent bg-white hidden md:block"
                animate={exp.current ? { scale: [1, 1.4, 1], boxShadow: ['0 0 0 0 rgba(238,192,200,0)', '0 0 0 6px rgba(238,192,200,0.3)', '0 0 0 0 rgba(238,192,200,0)'] } : {}}
                transition={exp.current ? { duration: 2, repeat: Infinity } : {}}
              />

              <div className="flex items-start gap-6">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-accent tracking-wider">
                      {exp.period}
                    </span>
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
                      <motion.li
                        key={bi}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + bi * 0.08 }}
                        className="flex gap-3 text-text-secondary text-sm leading-relaxed"
                      >
                        <span className="text-accent mt-[7px] flex-shrink-0">
                          <svg width="5" height="5" viewBox="0 0 5 5" fill="currentColor">
                            <circle cx="2.5" cy="2.5" r="2.5" />
                          </svg>
                        </span>
                        <span>{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, ti) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: 0.4 + ti * 0.03 }}
                        whileHover={{ scale: 1.1, y: -1 }}
                        className="px-2.5 py-1 font-mono text-[11px] text-text-muted bg-white/50 border border-border rounded-md hover:border-accent hover:text-accent transition-all duration-200 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {exp.logo && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="hidden md:flex flex-shrink-0 w-24 h-24 lg:w-28 lg:h-28 rounded-xl overflow-hidden bg-white shadow-md border border-border/50 items-center justify-center p-2"
                  >
                    <img
                      src={logos[exp.logo]}
                      alt={exp.company}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
