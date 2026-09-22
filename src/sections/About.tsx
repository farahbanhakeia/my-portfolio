import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import profileImg from '../assets/images/profile-1.jpg'

const HIGHLIGHTS = [
  { value: 8, suffix: '+', label: 'Technical Projects' },
  { value: 2, suffix: '', label: 'Industry Internships' },
  { value: 0, suffix: '', label: 'Data Science', display: 'MSc' },
  { value: 20, suffix: '+', label: 'Technologies' },
]

function AnimatedCounter({ value, suffix, display }: { value: number; suffix: string; display?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView || display) return
    let start = 0
    const duration = 1200
    const step = duration / value
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= value) clearInterval(timer)
    }, step)
    return () => clearInterval(timer)
  }, [isInView, value, display])

  return (
    <div ref={ref}>
      <p className="text-2xl font-bold text-text-primary">
        {display || count}{suffix}
      </p>
    </div>
  )
}

const TRAITS = ['Analytical', 'Problem-solver', 'Detail-oriented', 'Results-driven', 'Curious']

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs text-accent tracking-[0.2em] mb-10"
      >
        ABOUT
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ scale: 1.03 }}
            className="w-44 h-44 md:w-52 md:h-52 rounded-2xl overflow-hidden border border-border mb-8 shadow-lg shadow-accent/10"
          >
            <img
              src={profileImg}
              alt="Farah Banhakeia"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </motion.div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-4 w-full max-w-[240px]">
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="text-center lg:text-left"
              >
                <AnimatedCounter value={h.value} suffix={h.suffix} display={h.display} />
                <p className="text-xs text-text-muted">{h.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-primary text-lg md:text-xl leading-relaxed mb-4"
          >
            I combine a foundation in Mathematics and Computer Science with a
            specialization in Data Science and Intelligent Systems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-secondary leading-relaxed mb-4"
          >
            My approach consists of transforming complex problems into
            measurable, optimizable and actionable systems. From raw data
            exploration to model deployment, I design end-to-end pipelines
            that balance analytical rigor with engineering pragmatism.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-text-secondary leading-relaxed mb-6"
          >
            During my internships, I built Power BI dashboards for maritime
            operations analysis at Marsa Maroc, and designed a constraint-based
            scheduling engine at CMC. My projects span computer vision
            benchmarking, multi-agent AI systems, biometric security, and
            data-driven optimization.
          </motion.p>

          <div className="flex flex-wrap gap-2">
            {TRAITS.map((trait, i) => (
              <motion.span
                key={trait}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.06 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-3 py-1.5 text-xs text-text-muted border border-border rounded-md hover:border-accent hover:text-accent transition-colors cursor-default"
              >
                {trait}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
