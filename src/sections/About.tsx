import { motion } from 'framer-motion'
import profileImg from '../assets/images/profile-1.jpg'

const HIGHLIGHTS = [
  { value: '8+', label: 'Technical Projects' },
  { value: '2', label: 'Industry Internships' },
  { value: 'MSc', label: 'Data Science' },
  { value: '20+', label: 'Technologies' },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-xs text-accent tracking-[0.2em] mb-10">
          ABOUT
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <div className="w-44 h-44 md:w-52 md:h-52 rounded-2xl overflow-hidden border border-border mb-8">
              <img
                src={profileImg}
                alt="Farah Banhakeia"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-4 w-full max-w-[240px]">
              {HIGHLIGHTS.map((h) => (
                <div key={h.label} className="text-center lg:text-left">
                  <p className="text-2xl font-bold text-text-primary">
                    {h.value}
                  </p>
                  <p className="text-xs text-text-muted">{h.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <p className="text-text-primary text-lg md:text-xl leading-relaxed mb-4">
              I combine a foundation in Mathematics and Computer Science with a
              specialization in Data Science and Intelligent Systems.
            </p>

            <p className="text-text-secondary leading-relaxed mb-4">
              My approach consists of transforming complex problems into
              measurable, optimizable and actionable systems. From raw data
              exploration to model deployment, I design end-to-end pipelines
              that balance analytical rigor with engineering pragmatism.
            </p>

            <p className="text-text-secondary leading-relaxed mb-6">
              During my internships, I built Power BI dashboards for maritime
              operations analysis at Marsa Maroc, and designed a constraint-based
              scheduling engine at CMC. My projects span computer vision
              benchmarking, multi-agent AI systems, biometric security, and
              data-driven optimization.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                'Analytical',
                'Problem-solver',
                'Detail-oriented',
                'Results-driven',
                'Curious',
              ].map((trait) => (
                <span
                  key={trait}
                  className="px-3 py-1.5 text-xs text-text-muted border border-border rounded-md"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
