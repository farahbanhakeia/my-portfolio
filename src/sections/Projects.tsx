import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import PipelineFlow from '../components/PipelineFlow'
import ProjectModal from '../components/ProjectModal'
import { mainProjects, secondaryProjects } from '../data/projects'
import type { Project } from '../data/projects'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto"
    >
      <SectionHeader number="02" title="SELECTED SYSTEMS" />

      <div className="space-y-16">
        {mainProjects.map((project, pi) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: pi * 0.1 }}
            whileHover={{ y: -2 }}
            className="group border border-accent/10 rounded-2xl bg-white shadow-sm hover:shadow-lg hover:shadow-accent/8 hover:border-accent/20 transition-all duration-400 overflow-hidden"
          >
            <div className="p-6 md:p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-accent/60">
                      PROJECT {project.number}
                    </span>
                    <span className="px-2 py-0.5 font-mono text-[10px] text-accent border border-accent/20 rounded-full tracking-wider">
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-text-primary mb-2">
                    {project.title}
                  </h3>

                  <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 font-mono text-[11px] text-text-muted border border-accent/8 rounded-lg hover:border-accent/20 hover:text-accent transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.concepts.map((concept) => (
                      <span
                        key={concept}
                        className="font-mono text-[10px] text-text-muted/60 tracking-wider"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent to-accent-warm text-white font-mono text-xs tracking-wider rounded-xl hover:shadow-md hover:shadow-accent/20 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      CASE STUDY
                      <ArrowRight size={14} />
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-accent/15 text-text-muted font-mono text-xs tracking-wider rounded-xl hover:border-accent/30 hover:text-accent transition-all duration-300"
                    >
                      GITHUB
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center lg:min-w-[240px]">
                  <PipelineFlow
                    nodes={project.pipeline.nodes}
                    edges={project.pipeline.edges}
                    layout="tree"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-24">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-xs text-accent/40 tracking-wider">
            05
          </span>
          <div className="h-px flex-1 bg-accent/10" />
          <span className="font-mono text-xs text-text-muted tracking-[0.2em]">
            ADDITIONAL WORK
          </span>
          <div className="h-px flex-1 bg-accent/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {secondaryProjects.map((project, si) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: si * 0.08 }}
              whileHover={{ y: -3, boxShadow: '0 8px 30px rgba(147, 51, 234, 0.08)' }}
              className="group p-5 border border-accent/8 rounded-xl bg-white shadow-sm hover:border-accent/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </h4>
                <ExternalLink
                  size={14}
                  className="text-text-muted/30 group-hover:text-accent/60 transition-colors flex-shrink-0 mt-0.5"
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
    </section>
  )
}
