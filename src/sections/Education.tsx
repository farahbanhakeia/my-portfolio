import { motion } from 'framer-motion'
import { certifications, languages } from '../data/experience'

const EDUCATION = [
  { period: '2024 — 2026', title: 'Master — Data Science & Intelligent Systems', school: 'Faculte Pluridisciplinaire de Nador' },
  { period: '2020 — 2024', title: 'Bachelor — Mathematics & Computer Science', school: 'Faculte Pluridisciplinaire de Nador' },
  { period: '2019 — 2020', title: 'Baccalaureat — Sciences Mathematiques B', school: 'Lycee Abdelkrim El Khattabi, Nador' },
]

export default function Education() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-px flex-1 bg-accent/10" />
        <span className="font-mono text-xs text-text-muted tracking-[0.2em]">
          EDUCATION
        </span>
        <div className="h-px flex-1 bg-accent/10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-16">
        {EDUCATION.map((edu, i) => (
          <motion.div
            key={edu.period}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(147, 51, 234, 0.1)' }}
            className="p-6 border border-accent/10 rounded-xl bg-white shadow-sm hover:border-accent/20 transition-all duration-300"
          >
            <span className="font-mono text-xs text-accent tracking-wider">
              {edu.period}
            </span>
            <h3 className="text-base font-serif font-medium text-text-primary mt-2 mb-1">
              {edu.title}
            </h3>
            <p className="text-text-muted text-xs">
              {edu.school}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-accent/10" />
            <span className="font-mono text-[10px] text-text-muted tracking-[0.2em]">
              CERTIFICATIONS
            </span>
            <div className="h-px flex-1 bg-accent/10" />
          </div>
          <div className="space-y-3">
            {certifications.map((cert, ci) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: ci * 0.08 }}
                className="flex items-center justify-between p-3.5 border border-accent/8 rounded-xl bg-white shadow-sm hover:border-accent/18 transition-colors"
              >
                <div>
                  <p className="text-text-primary text-sm">{cert.title}</p>
                  <p className="text-text-muted text-xs">{cert.provider}</p>
                </div>
                <span
                  className={`font-mono text-[10px] tracking-wider px-2.5 py-1 rounded-full ${
                    cert.status === 'completed'
                      ? 'text-accent bg-accent/8 border border-accent/15'
                      : 'text-accent-warm bg-accent-warm/8 border border-accent-warm/15'
                  }`}
                >
                  {cert.status === 'completed' ? 'COMPLETED' : 'IN PROGRESS'}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-accent/10" />
            <span className="font-mono text-[10px] text-text-muted tracking-[0.2em]">
              LANGUAGES
            </span>
            <div className="h-px flex-1 bg-accent/10" />
          </div>
          <div className="space-y-3">
            {languages.map((lang, li) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: li * 0.08 }}
                className="flex items-center justify-between p-3.5 border border-accent/8 rounded-xl bg-white shadow-sm hover:border-accent/18 transition-colors"
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
    </section>
  )
}
