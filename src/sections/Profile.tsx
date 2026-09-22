import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import profileImg from '../assets/images/profile-1.jpg'

const DISCIPLINES = [
  'MATHEMATICS',
  'COMPUTER SCIENCE',
  'DATA SCIENCE',
  'ARTIFICIAL INTELLIGENCE',
  'OPTIMIZATION',
]

const EXPERTISE_CARDS = [
  { label: 'Machine Learning', detail: 'Classification, Regression, Clustering' },
  { label: 'Deep Learning', detail: 'CNN, Neural Networks' },
  { label: 'Computer Vision', detail: 'Detection, Recognition' },
  { label: 'NLP', detail: 'LLMs, Text Processing' },
  { label: 'Optimization', detail: 'CSP, Metaheuristics' },
  { label: 'Data Engineering', detail: 'ETL, Spark, Databases' },
]

export default function Profile() {
  return (
    <section id="about" className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <SectionHeader number="01" title="PROFILE" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-4 flex flex-col items-center lg:items-start"
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56 mb-8 rounded-2xl overflow-hidden border border-accent/15 shadow-lg shadow-accent/5 group">
            <img
              src={profileImg}
              alt="Farah Banhakeia"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
          </div>

          <div className="space-y-3">
            {DISCIPLINES.map((d, i) => (
              <motion.div
                key={d}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-3"
              >
                {i > 0 && (
                  <span className="font-mono text-xs text-accent/40">+</span>
                )}
                <span className="font-mono text-xs tracking-[0.15em] text-text-secondary">
                  {d}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="lg:col-span-8 space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-text-primary text-lg md:text-xl leading-relaxed font-serif"
          >
            I combine a foundation in Mathematics and Computer Science with a
            specialization in Data Science and Intelligent Systems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-text-secondary leading-relaxed"
          >
            My approach consists of transforming complex problems into
            measurable, optimizable and actionable systems. From raw data
            exploration to model deployment, I design end-to-end pipelines
            that balance analytical rigor with engineering pragmatism.
          </motion.p>

          <div className="pt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
            {EXPERTISE_CARDS.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(147, 51, 234, 0.1)' }}
                className="p-4 border border-accent/10 rounded-xl bg-white shadow-sm hover:border-accent/25 transition-colors duration-300"
              >
                <p className="font-mono text-xs text-accent tracking-wider mb-1">
                  {item.label}
                </p>
                <p className="text-text-muted text-xs">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
