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

function FlowingArrow({ delay }: { delay: number }) {
  return (
    <svg
      width="24"
      height="10"
      viewBox="0 0 24 10"
      fill="none"
      className="flex-shrink-0 mx-1"
    >
      <path d="M0 5H22M22 5L18 1M22 5L18 9" stroke="var(--color-border-hover)" strokeWidth="1.5" />
      <motion.circle
        cy="5"
        r="2"
        fill="var(--color-accent)"
        initial={{ cx: 0, opacity: 0 }}
        animate={{ cx: [0, 22], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay, ease: 'easeInOut' }}
      />
    </svg>
  )
}

export default function DataPipeline() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 md:px-8 section-gradient relative overflow-hidden">
      <div className="absolute inset-0 animate-shimmer" />
      <div className="absolute inset-0 dot-bg opacity-15" />

      <div className="max-w-6xl mx-auto relative z-10">
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

        <div className="hidden md:flex items-stretch justify-between gap-0">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center flex-1 min-w-0"
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="flex-1 text-center px-3 py-4 glass rounded-lg hover:shadow-md hover:shadow-accent/10 transition-all duration-300 cursor-default"
              >
                <p className="font-mono text-[11px] font-medium text-text-primary tracking-wider mb-0.5 truncate">
                  {step.label}
                </p>
                <p className="text-[10px] text-text-muted truncate">
                  {step.description}
                </p>
              </motion.div>
              {i < STEPS.length - 1 && <FlowingArrow delay={i * 0.3} />}
            </motion.div>
          ))}
        </div>

        <div className="md:hidden space-y-2">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-3"
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                className="font-mono text-[10px] text-accent w-5 flex-shrink-0 text-right"
              >
                {String(i + 1).padStart(2, '0')}
              </motion.span>
              <div className="flex-1 flex items-center justify-between p-3 glass rounded-lg">
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
              'Python', 'SQL', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Power BI', 'ETL',
            ].map((tech, i) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1, color: 'var(--color-accent)' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                className="font-mono text-[11px] text-text-muted tracking-wider cursor-default transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
