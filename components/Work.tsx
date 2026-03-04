'use client'

import { useState } from 'react'
import { useInView } from '@/hooks/useInView'
import { projects, type ProjectCategory } from '@/data/projects'

type FilterTab = 'all' | ProjectCategory

const FILTER_TABS: { label: string; value: FilterTab }[] = [
  { label: 'All',             value: 'all' },
  { label: 'Enterprise',      value: 'enterprise' },
  { label: 'Computer Vision', value: 'computer-vision' },
  { label: 'NLP',             value: 'nlp' },
  { label: 'Open Source',     value: 'open-source' },
]

// ── Project image placeholder ──────────────────────────────────────────────────
// Shows a gradient with project title when the real screenshot is not yet added.
// To replace: add the image file to public/images/projects/ and
// the Next.js <Image> will load automatically via the `image` field in projects.ts
function ProjectImagePlaceholder({
  gradient,
  title,
  company,
  companyColor,
}: {
  gradient: string
  title: string
  company: string
  companyColor: string
}) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-end justify-end p-4"
      style={{ background: gradient }}
    >
      {/* Faint title watermark */}
      <div
        className="font-syne font-extrabold text-right leading-tight opacity-10 select-none"
        style={{ fontSize: 'clamp(14px, 3vw, 20px)', color: companyColor, maxWidth: '80%' }}
      >
        {title}
      </div>
    </div>
  )
}

// ── Individual card ────────────────────────────────────────────────────────────
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.08 })

  return (
    <div
      ref={ref}
      className={`fade-up ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${(index % 2) * 120}ms` }}
    >
      <article
        className="project-card rounded-lg overflow-hidden flex flex-col h-full group"
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
        }}
      >
        {/* Image / placeholder — 16:9 */}
        <div className="relative w-full aspect-video overflow-hidden">
          {/*
           * Image placeholder — replace with screenshot when ready.
           * To use real image: place the file at the path in project.image
           * and the placeholder will be pushed below automatically via onError.
           */}
          <ProjectImagePlaceholder
            gradient={project.placeholderGradient}
            title={project.title}
            company={project.company}
            companyColor={project.companyColor}
          />

          {/* "View Project" hover overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'rgba(8,10,12,0.7)' }}
          >
            <span
              className="font-syne font-bold text-sm"
              style={{ color: 'var(--accent)' }}
            >
              View Project →
            </span>
          </div>

          {/* Bottom gradient fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
            style={{ background: 'linear-gradient(to top, var(--surface), transparent)' }}
          />
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-5">
          {/* Company badge + GitHub */}
          <div className="flex items-center justify-between mb-3">
            <span
              className="font-mono text-[10px] font-medium px-2 py-0.5 rounded-full border"
              style={{
                color: project.companyColor,
                borderColor: `${project.companyColor}40`,
                background: `${project.companyColor}12`,
              }}
            >
              {project.company}
            </span>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs transition-colors duration-200 hover:text-accent"
                style={{ color: 'var(--muted)' }}
                aria-label={`GitHub: ${project.title}`}
              >
                ↗ GitHub
              </a>
            )}
          </div>

          {/* Title */}
          <h3
            className="font-syne font-bold text-base mb-2 group-hover:text-accent transition-colors duration-300"
            style={{ color: 'var(--text)' }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            className="font-inter text-sm leading-relaxed flex-1 mb-4"
            style={{ color: 'var(--muted)' }}
          >
            {project.description}
          </p>

          {/* Tag chips */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] px-2 py-0.5 rounded border"
                style={{
                  color: 'var(--muted)',
                  border: '1px solid var(--border)',
                  background: 'var(--surface2)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}

// ── Section ────────────────────────────────────────────────────────────────────
export default function Work() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>('all')
  const { ref: headRef, inView: headIn } = useInView<HTMLDivElement>()

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="work" className="py-24 px-6" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div ref={headRef} className={`fade-up ${headIn ? 'visible' : ''} mb-10`}>
          <div className="flex items-center gap-4 mb-3">
            <span
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: 'var(--accent)' }}
            >
              // selected work
            </span>
            <span className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          </div>
          <h2
            className="font-syne font-extrabold text-4xl sm:text-5xl"
            style={{ color: 'var(--text)' }}
          >
            Projects
          </h2>
        </div>

        {/* Filter tabs */}
        <div className={`fade-up ${headIn ? 'visible' : ''} delay-100 flex flex-wrap gap-2 mb-10`}>
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`font-mono text-xs px-4 py-1.5 rounded-full border transition-all duration-200 ${
                activeFilter === tab.value ? 'filter-tab-active' : ''
              }`}
              style={
                activeFilter !== tab.value
                  ? { border: '1px solid var(--border)', color: 'var(--muted)' }
                  : {}
              }
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="font-mono text-sm py-12 text-center" style={{ color: 'var(--muted)' }}>
            // no projects in this category yet
          </p>
        )}
      </div>
    </section>
  )
}
