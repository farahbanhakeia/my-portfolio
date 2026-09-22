import { motion } from 'framer-motion'

const STEPS = [
  { label: 'Data Source', description: 'Collection' },
  { label: 'Ingestion', description: 'APIs & loading' },
  { label: 'ETL / ELT', description: 'Transform' },
  { label: 'Storage', description: 'Databases' },
  { label: 'Analytics', description: 'Exploration & BI' },
  { label: 'ML / AI', description: 'Modeling' },
  { label: 'Decision', description: 'Insights' },
]

export default function DataPipeline() {
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
            DATA ENGINEERING
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
            From Raw Data to Decisions
          </h2>
          <p className="text-text-secondary text-sm max-w-xl mx-auto">
            I work across the full data lifecycle, building systems that
            transform raw information into intelligent, actionable outcomes.
          </p>
        </motion.div>

        <div className="hidden md:flex items-stretch justify-between gap-1">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="flex items-center flex-1 min-w-0"
            >
              <div className="flex-1 text-center px-3 py-4 bg-white border border-border rounded-lg">
                <p className="font-mono text-[11px] font-medium text-text-primary tracking-wider mb-0.5 truncate">
                  {step.label}
                </p>
                <p className="text-[10px] text-text-muted truncate">
                  {step.description}
                </p>
              </div>
              {i < STEPS.length - 1 && (
                <svg
                  width="16"
                  height="10"
                  viewBox="0 0 16 10"
                  fill="none"
                  className="flex-shrink-0 mx-1 text-border-hover"
                >
                  <path
                    d="M0 5H14M14 5L10 1M14 5L10 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              )}
            </motion.div>
          ))}
        </div>

        <div className="md:hidden space-y-2">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="flex items-center gap-3"
            >
              <span className="font-mono text-[10px] text-accent w-5 flex-shrink-0 text-right">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex-1 flex items-center justify-between p-3 bg-white border border-border rounded-lg">
                <p className="font-mono text-[11px] font-medium text-text-primary tracking-wider">
                  {step.label}
                </p>
                <p className="text-[10px] text-text-muted">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {[
              'Python',
              'SQL',
              'PostgreSQL',
              'MongoDB',
              'REST APIs',
              'Power BI',
              'ETL',
            ].map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] text-text-muted tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
