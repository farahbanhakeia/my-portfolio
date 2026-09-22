import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'
import type { Project } from '../data/projects'
import AnimatedSchema from './AnimatedSchema'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

const sectionLabels = [
  { key: 'problem', num: '01', label: 'PROBLEM', icon: '?' },
  { key: 'objective', num: '02', label: 'OBJECTIVE', icon: '>' },
  { key: 'architecture', num: '03', label: 'ARCHITECTURE', icon: '#' },
  { key: 'methodology', num: '04', label: 'METHODOLOGY', icon: '~' },
  { key: 'implementation', num: '05', label: 'IMPLEMENTATION', icon: '{' },
  { key: 'experiments', num: '06', label: 'EXPERIMENTS', icon: '%' },
  { key: 'results', num: '07', label: 'RESULTS', icon: '*' },
  { key: 'limitations', num: '08', label: 'LIMITATIONS', icon: '!' },
  { key: 'futureWork', num: '09', label: 'FUTURE WORK', icon: '+' },
] as const

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/30 backdrop-blur-md p-4 md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full max-w-4xl glass-strong rounded-2xl my-8 shadow-2xl gradient-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-border">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-[10px] text-text-primary bg-accent/15 px-2.5 py-1 rounded-full tracking-wider border border-accent/20">
                    {project.badge}
                  </span>
                  <span className="font-mono text-[10px] text-text-muted">
                    PROJECT {project.number}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-text-primary">
                  {project.title}
                </h2>
              </div>
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="p-2.5 text-text-muted hover:text-accent glass rounded-xl transition-colors"
              >
                <X size={18} />
              </motion.button>
            </div>

            <div className="p-6 md:p-8 space-y-8">
              <div>
                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 font-mono text-[11px] text-text-muted glass rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 glass rounded-xl"
              >
                <p className="font-mono text-[10px] text-text-muted tracking-[0.2em] mb-4">
                  SYSTEM ARCHITECTURE
                </p>
                <div className="flex justify-center">
                  <AnimatedSchema projectId={project.id} />
                </div>
              </motion.div>

              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

              {sectionLabels.map(({ key, num, label }, si) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + si * 0.04 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-[10px] text-accent/50">{num}</span>
                    <h3 className="font-mono text-xs text-accent-dim tracking-wider">
                      {label}
                    </h3>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed pl-8">
                    {project.sections[key]}
                  </p>
                </motion.div>
              ))}

              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

              <div className="flex gap-4 pt-2">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-dim to-accent text-text-primary font-mono text-xs tracking-wider rounded-xl hover:shadow-md hover:shadow-accent/20 transition-all animate-gradient"
                >
                  VIEW SOURCE CODE
                  <ExternalLink size={14} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
