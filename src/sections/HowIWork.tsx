import { motion } from 'framer-motion'

const STEPS = [
  { num: '01', title: 'Understand', description: 'Define the problem and success criteria' },
  { num: '02', title: 'Collect', description: 'Gather and validate relevant data' },
  { num: '03', title: 'Explore', description: 'Analyze patterns and distributions' },
  { num: '04', title: 'Engineer', description: 'Build features and data pipelines' },
  { num: '05', title: 'Build', description: 'Develop the model or system' },
  { num: '06', title: 'Evaluate', description: 'Test and measure performance' },
  { num: '07', title: 'Deploy', description: 'Ship to production' },
  { num: '08', title: 'Iterate', description: 'Monitor and improve continuously' },
]

export default function HowIWork() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p className="font-mono text-xs text-accent tracking-[0.2em] mb-3">
          PROCESS
        </p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          How I Work
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="text-center p-4"
          >
            <p className="font-mono text-2xl font-light text-accent/25 mb-2">
              {step.num}
            </p>
            <p className="text-sm font-medium text-text-primary mb-1">
              {step.title}
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
