'use client'

import { useInView } from '@/hooks/useInView'
import { projects } from '@/data/projects'

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.08 })

  return (
    <div
      ref={ref}
      className={`fade-up ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <article className="project-card group" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
        {/* Image / Placeholder */}
        <div className="relative w-full aspect-[16/10] overflow-hidden">
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: project.placeholderGradient }}
          >
            {/* Decorative project icon placeholder */}
            <div className="text-center px-6">
              <div className="font-syne font-bold text-lg opacity-30" style={{ color: project.companyColor }}>{project.title}</div>
            </div>
          </div>
          {/* Hover overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'rgba(7,11,24,0.75)' }}
          >
            <span className="font-syne font-bold text-sm" style={{ color: 'var(--accent)' }}>View Project &rarr;</span>
          </div>
        </div>

        {/* Body */}
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <span
              className="text-[10px] font-medium font-mono px-2.5 py-1 rounded-full"
              style={{ color: project.companyColor, background: `${project.companyColor}15`, border: `1px solid ${project.companyColor}30` }}
            >
              {project.company}
            </span>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs font-mono hover:text-accent transition-colors" style={{ color: 'var(--muted)' }}>GitHub &nearr;</a>
            )}
          </div>
          <h3 className="font-syne font-bold text-[15px] mb-2 group-hover:text-accent transition-colors" style={{ color: 'var(--text)' }}>
            {project.title}
          </h3>
          <p className="font-inter text-xs leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="font-mono text-[10px] px-2 py-0.5 rounded" style={{ color: 'var(--dimmed)', background: 'var(--surface2)', border: '1px solid var(--border)' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}

export default function Work() {
  const { ref: headRef, inView: headIn } = useInView<HTMLDivElement>()

  return (
    <section id="work" className="py-24 px-6" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className={`fade-up ${headIn ? 'visible' : ''} text-center mb-16`}>
          <p className="section-label mb-3">Portfolio</p>
          <h2 className="section-title font-syne">My <span>projects</span></h2>
          <p className="font-inter text-sm mt-4 max-w-lg mx-auto" style={{ color: 'var(--muted)' }}>
            Enterprise ML solutions and freelance projects delivering measurable impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
