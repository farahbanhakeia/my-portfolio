import { motion } from 'framer-motion'
import { certifications, languages } from '../data/experience'

const EDUCATION = [
  { period: '2024 — 2026', title: 'Master — Data Science & Intelligent Systems', school: 'Faculte Pluridisciplinaire de Nador' },
  { period: '2020 — 2024', title: 'Bachelor — Mathematics & Computer Science', school: 'Faculte Pluridisciplinaire de Nador' },
  { period: '2019 — 2020', title: 'Baccalaureat — Sciences Mathematiques B', school: 'Lycee Abdelkrim El Khattabi, Nador' },
]

export default function Education() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 md:px-8 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-xs text-accent tracking-[0.2em] mb-3">
            EDUCATION
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Academic Background
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-16">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.period}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-6 border border-border rounded-xl bg-white"
            >
              <span className="font-mono text-xs text-accent tracking-wider">
                {edu.period}
              </span>
              <h3 className="text-sm font-medium text-text-primary mt-2 mb-1">
                {edu.title}
              </h3>
              <p className="text-text-muted text-xs">{edu.school}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <p className="font-mono text-[10px] text-text-muted tracking-[0.2em] mb-4">
              CERTIFICATIONS
            </p>
            <div className="space-y-3">
              {certifications.map((cert, ci) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: ci * 0.06 }}
                  className="flex items-center justify-between p-3.5 border border-border rounded-lg bg-white"
                >
                  <div>
                    <p className="text-text-primary text-sm">{cert.title}</p>
                    <p className="text-text-muted text-xs">{cert.provider}</p>
                  </div>
                  <span
                    className={`font-mono text-[10px] tracking-wider px-2.5 py-1 rounded-full ${
                      cert.status === 'completed'
                        ? 'text-accent bg-accent/10 border border-accent/20'
                        : 'text-amber-600 bg-amber-50 border border-amber-200'
                    }`}
                  >
                    {cert.status === 'completed' ? 'COMPLETED' : 'IN PROGRESS'}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] text-text-muted tracking-[0.2em] mb-4">
              LANGUAGES
            </p>
            <div className="space-y-3">
              {languages.map((lang, li) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: li * 0.06 }}
                  className="flex items-center justify-between p-3.5 border border-border rounded-lg bg-white"
                >
                  <p className="text-text-primary text-sm">{lang.name}</p>
                  <span className="font-mono text-[10px] text-text-muted tracking-wider">
                    {lang.level.toUpperCase()}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
