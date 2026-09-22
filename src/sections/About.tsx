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
      <p className="text-2xl font-bold bg-gradient-to-r from-text-primary to-accent-dim bg-clip-text text-transparent">
        {display || count}{suffix}
      </p>
    </div>
  )
}

const TRAITS = ['Analytical', 'Problem-solver', 'Detail-oriented', 'Results-driven', 'Curious']

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs text-accent-dim tracking-[0.2em] mb-10 relative z-10"
      >
        ABOUT
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ scale: 1.03 }}
            className="relative w-44 h-44 md:w-52 md:h-52 rounded-2xl overflow-hidden mb-8 glow-md gradient-border"
          >
            <img
              src={profileImg}
              alt="Farah Banhakeia"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </motion.div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-5 w-full max-w-[260px]">
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="text-center lg:text-left glass rounded-lg p-3"
              >
                <AnimatedCounter value={h.value} suffix={h.suffix} display={h.display} />
                <p className="text-xs text-text-muted mt-0.5">{h.label}</p>
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
            Data & AI Engineer with a dual foundation in Mathematics and
            Computer Science, specializing in Data Science and Intelligent Systems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-secondary leading-relaxed mb-4"
          >
            I transform complex business problems into measurable, optimizable
            systems. From raw data ingestion to model deployment, I design
            end-to-end pipelines that deliver actionable intelligence while
            maintaining production-grade reliability.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-text-secondary leading-relaxed mb-6"
          >
            During my internships, I built Power BI dashboards for operational
            analysis at Marsa Maroc and designed a constraint-based scheduling
            engine at CMC. My project portfolio spans computer vision benchmarking,
            multi-agent AI systems, biometric security, and combinatorial
            optimization.
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
                className="px-3 py-1.5 text-xs text-text-muted glass rounded-full hover:border-accent-dim hover:text-accent-dim transition-all cursor-default"
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
