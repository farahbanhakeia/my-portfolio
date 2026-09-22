import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import ProjectModal from '../components/ProjectModal'
import { mainProjects, secondaryProjects } from '../data/projects'
import type { Project } from '../data/projects'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section
      id="projects"
      className="py-20 md:py-28 px-4 sm:px-6 md:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            label="PROJECTS"
            title="Selected Work"
            description="End-to-end systems built from problem definition to deployment, covering AI engineering, data science, computer vision, and optimization."
          />
        </motion.div>

        <div className="space-y-6">
          {mainProjects.map((project, pi) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: pi * 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="group glass rounded-xl p-6 md:p-8 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 gradient-border"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1 min-w-0">
                  <span className="inline-block font-mono text-[11px] text-accent tracking-wider mb-3">
                    {project.badge}
                  </span>

                  <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-3 group-hover:text-accent-dim transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <p className="font-mono text-[10px] text-text-muted tracking-wider mb-2">
                      APPROACH
                    </p>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {project.sections.architecture}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.08, y: -1 }}
                        className="px-2.5 py-1 font-mono text-[11px] text-text-muted bg-white/50 border border-border rounded-md hover:border-accent hover:text-accent transition-all duration-200 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-dim to-accent text-text-primary text-xs font-medium rounded-lg hover:shadow-md hover:shadow-accent/20 transition-all animate-gradient"
                    >
                      Case Study
                      <ArrowRight size={14} />
                    </motion.button>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-4 py-2 glass text-text-muted text-xs font-medium rounded-lg hover:text-accent transition-colors"
                    >
                      GitHub
                      <ExternalLink size={14} />
                    </motion.a>
                  </div>
                </div>

                <div className="hidden lg:block lg:w-48 flex-shrink-0">
                  <p className="font-mono text-[10px] text-text-muted tracking-wider mb-3">
                    KEY METRICS
                  </p>
                  <div className="space-y-2">
                    {project.concepts.slice(0, 4).map((concept, ci) => (
                      <motion.div
                        key={concept}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + ci * 0.06 }}
                        className="px-3 py-2 bg-white/40 rounded-md font-mono text-[11px] text-text-secondary border border-border hover:bg-accent/10 hover:border-accent/30 transition-all"
                      >
                        {concept}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-mono text-xs text-text-muted tracking-wider mb-6"
          >
            ADDITIONAL PROJECTS
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {secondaryProjects.map((project, si) => (
              <motion.a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: si * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group p-5 glass rounded-xl hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="font-mono text-[10px] text-accent tracking-wider">
                      {project.category}
                    </span>
                    <h4 className="text-sm font-medium text-text-primary mt-1 group-hover:text-accent-dim transition-colors">
                      {project.title}
                    </h4>
                  </div>
                  <ExternalLink
                    size={14}
                    className="text-text-muted/30 group-hover:text-accent transition-colors flex-shrink-0 mt-1"
                  />
                </div>
                <p className="text-text-muted text-xs leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
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
        </div>

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  )
}
