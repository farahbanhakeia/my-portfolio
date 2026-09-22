import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const FEATURED_REPOS = [
  {
    name: 'yolo-benchmark',
    description: 'YOLO object detection benchmarking platform',
    tags: ['Computer Vision', 'PyTorch', 'YOLO'],
  },
  {
    name: 'AI-CRISIS-MANAGER',
    description: 'Multi-agent AI system for urban crisis management',
    tags: ['Multi-Agent', 'Optimization', 'Python'],
  },
  {
    name: 'cmc-planning-platform',
    description: 'Constraint-based academic scheduling platform',
    tags: ['CSP', 'React', 'Node.js'],
  },
  {
    name: 'secure-face-authentication',
    description: 'Biometric authentication with cryptographic security',
    tags: ['Computer Vision', 'ArcFace', 'Cryptography'],
  },
  {
    name: 'LLM-Document-Translator',
    description: 'LLM-powered document translation system',
    tags: ['NLP', 'LLM', 'Python'],
  },
  {
    name: 'TSP-UAV-Optimization-Algorithms-GWO-CS-TS-',
    description: 'Metaheuristic algorithms for UAV path optimization',
    tags: ['Optimization', 'Metaheuristics', 'Algorithms'],
  },
]

export default function Github() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <SectionHeader number="06" title="OPEN SOURCE & CODE" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {FEATURED_REPOS.map((repo, ri) => (
          <motion.a
            key={repo.name}
            href={`https://github.com/farahbanhakeia/${repo.name}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: ri * 0.07 }}
            whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(147, 51, 234, 0.1)' }}
            className="group p-5 border border-accent/8 rounded-xl bg-white shadow-sm hover:border-accent/20 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <h4 className="font-mono text-sm text-text-primary group-hover:text-accent transition-colors truncate pr-2">
                {repo.name}
              </h4>
              <ExternalLink
                size={14}
                className="text-text-muted/30 group-hover:text-accent/60 transition-colors flex-shrink-0 mt-0.5"
              />
            </div>
            <p className="text-text-muted text-xs leading-relaxed mb-4">
              {repo.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {repo.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] text-text-muted/60 tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 text-center"
      >
        <a
          href="https://github.com/farahbanhakeia"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-xs text-text-muted hover:text-accent transition-colors tracking-wider"
        >
          VIEW ALL REPOSITORIES
          <ExternalLink size={12} />
        </a>
      </motion.div>
    </section>
  )
}
