import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import ProjectModal from '../components/ProjectModal'
import AnimatedSchema from '../components/AnimatedSchema'
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
            description="End-to-end systems designed, built, and validated — from problem definition to working prototype."
          />
        </motion.div>

        <div className="space-y-8">
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
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block font-mono text-[10px] text-text-primary bg-accent/15 px-2.5 py-1 rounded-full tracking-wider border border-accent/20">
                      {project.badge}
                    </span>
                    <span className="font-mono text-[10px] text-text-muted tracking-wider">
                      {project.number}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-3 group-hover:text-accent-dim transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-text-secondary text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
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
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent-dim to-accent text-text-primary text-xs font-medium rounded-lg hover:shadow-md hover:shadow-accent/20 transition-all animate-gradient"
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
                      className="inline-flex items-center gap-2 px-4 py-2.5 glass text-text-muted text-xs font-medium rounded-lg hover:text-accent transition-colors"
                    >
                      GitHub
                      <ExternalLink size={14} />
                    </motion.a>
                  </div>
                </div>

                <div className="lg:w-[280px] flex-shrink-0">
                  <p className="font-mono text-[10px] text-text-muted tracking-[0.15em] mb-3">
                    ARCHITECTURE
                  </p>
                  <div className="p-4 glass rounded-lg">
                    <AnimatedSchema projectId={project.id} compact />
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
