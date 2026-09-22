import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'

const STEPS = [
  {
    num: '01',
    title: 'FORMULATE',
    description:
      'Transform a real-world problem into a formal computational problem.',
  },
  {
    num: '02',
    title: 'MODEL',
    description: 'Design an ML / DL / optimization model.',
  },
  {
    num: '03',
    title: 'EXPERIMENT',
    description: 'Benchmark, measure and compare.',
  },
  {
    num: '04',
    title: 'OPTIMIZE',
    description: 'Improve efficiency, accuracy or resource utilization.',
  },
  {
    num: '05',
    title: 'DEPLOY',
    description:
      'Transform the model into an operational intelligent system.',
  },
]

export default function Research() {
  return (
    <section
      id="research"
      className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto"
    >
      <SectionHeader number="05" title="RESEARCH MINDSET" />

      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <div className="absolute left-[19px] top-6 bottom-6 w-px bg-gradient-to-b from-accent/30 via-accent-warm/20 to-accent-dim/30" />

          <div className="space-y-0">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-6 group"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 + 0.15, type: 'spring', stiffness: 200 }}
                    className="w-10 h-10 rounded-full border border-accent/20 bg-white flex items-center justify-center group-hover:border-accent group-hover:shadow-md group-hover:shadow-accent/10 transition-all duration-300 z-10"
                  >
                    <span className="font-mono text-xs text-accent">
                      {step.num}
                    </span>
                  </motion.div>
                  {i < STEPS.length - 1 && (
                    <div className="w-px flex-1 min-h-[24px]" />
                  )}
                </div>

                <div className="pb-10 pt-1.5">
                  <h3 className="font-mono text-sm tracking-[0.15em] text-text-primary mb-2 group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
