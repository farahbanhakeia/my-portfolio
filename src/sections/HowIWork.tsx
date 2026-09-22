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
    <section className="py-20 md:py-28 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-60" />
      <div className="max-w-6xl mx-auto relative z-10">
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
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -6, scale: 1.05, transition: { duration: 0.2 } }}
              className="text-center p-5 glass rounded-xl transition-all duration-300 cursor-default group"
            >
              <motion.p
                className="font-mono text-3xl font-light text-accent/30 mb-2 group-hover:text-accent transition-colors duration-300"
                whileInView={{ opacity: [0, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {step.num}
              </motion.p>
              <p className="text-sm font-medium text-text-primary mb-1 group-hover:text-accent-dim transition-colors duration-300">
                {step.title}
              </p>
              <p className="text-xs text-text-muted leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
