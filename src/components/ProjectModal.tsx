import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'
import type { Project } from '../data/projects'
import PipelineFlow from './PipelineFlow'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

const sectionLabels = [
  { key: 'problem', num: '01', label: 'PROBLEM' },
  { key: 'objective', num: '02', label: 'OBJECTIVE' },
  { key: 'architecture', num: '03', label: 'ARCHITECTURE' },
  { key: 'methodology', num: '04', label: 'METHODOLOGY' },
  { key: 'implementation', num: '05', label: 'IMPLEMENTATION' },
  { key: 'experiments', num: '06', label: 'EXPERIMENTS' },
  { key: 'results', num: '07', label: 'RESULTS' },
  { key: 'limitations', num: '08', label: 'LIMITATIONS' },
  { key: 'futureWork', num: '09', label: 'FUTURE WORK' },
] as const

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/20 backdrop-blur-sm p-4 md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.35, type: 'spring', stiffness: 300, damping: 30 }}
            className="w-full max-w-4xl bg-white border border-accent/10 rounded-2xl my-8 shadow-xl shadow-accent/5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-accent/8">
              <div>
                <span className="font-mono text-xs text-accent tracking-wider">
                  {project.badge}
                </span>
                <h2 className="text-xl md:text-2xl font-semibold text-text-primary mt-1">
                  {project.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-text-muted hover:text-accent hover:bg-accent/5 rounded-lg transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 md:p-8 space-y-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <p className="text-text-secondary leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 font-mono text-xs text-text-muted border border-accent/10 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center">
                  <PipelineFlow
                    nodes={project.pipeline.nodes}
                    edges={project.pipeline.edges}
                    layout="tree"
                  />
                </div>
              </div>

              <div className="h-px bg-accent/8" />

              {sectionLabels.map(({ key, num, label }) => (
                <div key={key}>
                  <h3 className="font-mono text-xs text-accent tracking-wider mb-3">
                    {num} / {label}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {project.sections[key]}
                  </p>
                </div>
              ))}

              <div className="h-px bg-accent/8" />

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent to-accent-warm text-white font-mono text-xs tracking-wider rounded-xl hover:shadow-md hover:shadow-accent/20 transition-all"
                >
                  SOURCE CODE
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
