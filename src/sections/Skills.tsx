import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { skills } from '../data/skills'
import type { SkillCategory } from '../data/skills'

function ToolTag({ tool, delay }: { tool: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.1, y: -2 }}
      className="px-2.5 py-1 font-mono text-[11px] text-text-secondary bg-white/50 rounded-md border border-border hover:bg-accent/20 hover:text-text-primary hover:border-accent/40 transition-all duration-200 cursor-default"
    >
      {tool}
    </motion.span>
  )
}

function StandardCard({ category, index }: { category: SkillCategory; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className="p-6 glass rounded-xl hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 h-full"
    >
      <div className="flex items-center gap-3 mb-1">
        <p className="font-mono text-xs text-accent tracking-wider">
          {category.domain}
        </p>
      </div>
      <p className="text-text-muted text-xs mb-5 leading-relaxed">
        {category.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {category.tools?.map((tool, ti) => (
          <ToolTag key={tool} tool={tool} delay={index * 0.1 + ti * 0.02} />
        ))}
      </div>
    </motion.div>
  )
}

function FeaturedCard({ category }: { category: SkillCategory }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="p-6 md:p-8 glass-strong rounded-xl gradient-border relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-60 h-60 bg-accent/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-1">
          <p className="font-mono text-xs text-accent tracking-wider">
            {category.domain}
          </p>
          <span className="px-2 py-0.5 font-mono text-[9px] text-accent bg-accent/10 rounded-full border border-accent/20 tracking-widest">
            CORE FOCUS
          </span>
        </div>
        <p className="text-text-muted text-xs mb-6 leading-relaxed max-w-2xl">
          {category.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.subgroups?.map((subgroup, si) => (
            <motion.div
              key={subgroup.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + si * 0.06 }}
              className="p-4 bg-white/30 rounded-lg border border-border/50 hover:border-accent/30 hover:bg-white/40 transition-all duration-300"
            >
              <p className="font-mono text-[10px] text-accent-dim tracking-wider mb-3">
                {subgroup.label.toUpperCase()}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {subgroup.tools.map((tool, ti) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 0.3 + si * 0.06 + ti * 0.02 }}
                    whileHover={{ scale: 1.08, y: -1 }}
                    className="px-2 py-0.5 font-mono text-[10px] text-text-secondary bg-white/60 rounded border border-border/60 hover:bg-accent/15 hover:text-text-primary hover:border-accent/30 transition-all duration-200 cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const SOFT_SKILLS = [
  'Problem Solving',
  'Analytical Thinking',
  'Critical Thinking',
  'Communication',
  'Teamwork & Collaboration',
  'Adaptability',
  'Time Management',
  'Attention to Detail',
  'Continuous Learning',
  'Project Management',
]

export default function Skills() {
  const featured = skills.find((s) => s.featured)
  const standard = skills.filter((s) => !s.featured)

  return (
    <section
      id="skills"
      className="py-20 md:py-28 px-4 sm:px-6 md:px-8 section-gradient-alt relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader label="EXPERTISE" title="Technical Stack" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {standard.map((category, ci) => (
            <StandardCard key={category.domain} category={category} index={ci} />
          ))}
        </div>

        {featured && <FeaturedCard category={featured} />}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-5 p-6 glass rounded-xl"
        >
          <p className="font-mono text-xs text-accent tracking-wider mb-1">
            SOFT SKILLS
          </p>
          <p className="text-text-muted text-xs mb-5 leading-relaxed">
            Professional competencies and interpersonal strengths
          </p>
          <div className="flex flex-wrap gap-2">
            {SOFT_SKILLS.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.03 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-3 py-1.5 text-xs text-text-secondary glass rounded-full border border-accent/15 hover:border-accent/40 hover:bg-accent/10 hover:text-text-primary transition-all duration-200 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
