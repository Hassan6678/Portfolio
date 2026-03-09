'use client'

import { useState } from 'react'
import { useInView } from '@/hooks/useInView'
import { projects } from '@/data/projects'

function ProjectMedia({ project }: { project: (typeof projects)[number] }) {
  const [hasImageError, setHasImageError] = useState(false)

  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden">
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ background: project.placeholderGradient }}
      >
        <div className="text-center px-6">
          <div className="font-syne font-bold text-lg opacity-30" style={{ color: project.companyColor }}>{project.title}</div>
        </div>
      </div>
      {!hasImageError && (
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          onError={() => setHasImageError(true)}
        />
      )}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(8,10,12,0.06) 0%, rgba(8,10,12,0.38) 100%)' }}
      />
      <div
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'rgba(7,11,24,0.75)' }}
      >
        <span className="font-syne font-bold text-sm" style={{ color: 'var(--accent)' }}>View Project &rarr;</span>
      </div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.08 })
  const categoryLabel = project.category.replace(/-/g, ' ')

  return (
    <div
      ref={ref}
      className={`fade-up ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <article className="project-card group h-full" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
        <ProjectMedia project={project} />

        {/* Body */}
        <div className="p-5 sm:p-6 flex flex-col h-full">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="text-[10px] font-medium font-mono px-2.5 py-1 rounded-full uppercase tracking-wider"
                style={{ color: project.companyColor, background: `${project.companyColor}15`, border: `1px solid ${project.companyColor}30` }}
              >
                {project.company}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
                {categoryLabel}
              </span>
            </div>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs font-mono hover:text-accent transition-colors shrink-0" style={{ color: 'var(--muted)' }}>GitHub &nearr;</a>
            )}
          </div>
          <h3 className="font-syne font-bold text-[17px] leading-snug mb-3 group-hover:text-accent transition-colors" style={{ color: 'var(--text)' }}>
            {project.title}
          </h3>
          <p className="font-inter text-sm leading-7 mb-5" style={{ color: 'var(--muted)' }}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag) => (
              <span key={tag} className="font-mono text-[10px] px-2.5 py-1 rounded-md" style={{ color: 'var(--dimmed)', background: 'var(--surface2)', border: '1px solid var(--border)' }}>
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
          <p className="font-inter text-sm mt-4 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--muted)' }}>
            Selected work across retail intelligence, forecasting, geospatial analytics, ETL systems,
            and LLM-enabled business tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
