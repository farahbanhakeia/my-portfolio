import { motion } from 'framer-motion'
import { BarChart3, Database, Brain, Cpu, Eye } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const DOMAINS = [
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description:
      'Transform raw data into actionable insights through exploration, visualization, and statistical analysis.',
    tools: 'Python · SQL · Power BI · Pandas',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description:
      'Build reliable data pipelines, ETL workflows, and API-driven data infrastructure.',
    tools: 'SQL · PostgreSQL · MongoDB · REST APIs',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description:
      'Develop predictive models, engineer features, and evaluate model performance rigorously.',
    tools: 'Scikit-learn · PyTorch · Feature Engineering',
  },
  {
    icon: Cpu,
    title: 'AI Engineering',
    description:
      'Build intelligent applications using multi-agent systems, optimization, and modern AI frameworks.',
    tools: 'Python · OR-Tools · Multi-Agent Systems',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description:
      'Develop and benchmark object detection, recognition, and image processing systems.',
    tools: 'OpenCV · YOLO · Ultralytics · PyTorch',
  },
]

export default function WhatIBuild() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader label="EXPERTISE" title="What I Build" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {DOMAINS.map((domain, i) => (
          <motion.div
            key={domain.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="group p-6 border border-border rounded-xl hover:border-accent/30 transition-colors"
          >
            <domain.icon
              size={20}
              className="text-accent mb-4"
              strokeWidth={1.5}
            />
            <h3 className="text-base font-semibold text-text-primary mb-2">
              {domain.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              {domain.description}
            </p>
            <p className="font-mono text-[11px] text-text-muted tracking-wider">
              {domain.tools}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
