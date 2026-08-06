'use client'

import { useMemo, useState } from 'react'
import ProjectCard from '@/components/ui/ProjectCard'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { projects } from '@/data/projects'
import { projectCategories, workIntro } from '@/data/site'

type FilterId = (typeof projectCategories)[number]['id']

export default function Work() {
  const [filter, setFilter] = useState<FilterId>('all')

  const featured = projects.find((p) => p.featured) ?? projects[0]
  const rest = useMemo(() => {
    const withoutFeatured = projects.filter((p) => p.id !== featured.id)
    if (filter === 'all') return withoutFeatured
    return withoutFeatured.filter((p) => p.kind === filter)
  }, [featured.id, filter])

  const showFeatured = filter === 'all' || featured.kind === filter

  return (
    <section id="work" className="border-t border-[var(--line)] py-20 sm:py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            label={workIntro.label}
            title={
              <>
                {workIntro.titleBefore}
                <em>{workIntro.titleEmphasis}</em>
                {workIntro.titleAfter}
              </>
            }
            description={workIntro.description}
          />
        </Reveal>

        <Reveal delayMs={80} className="mt-8">
          <div
            className="inline-flex flex-wrap gap-1 rounded-full border border-[var(--line)] bg-[var(--panel)] p-1"
            role="tablist"
            aria-label="Filter projects"
          >
            {projectCategories.map((cat) => {
              const active = filter === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                    active
                      ? 'bg-ink text-[var(--panel)]'
                      : 'text-muted hover:text-ink'
                  }`}
                  onClick={() => setFilter(cat.id)}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {showFeatured ? <ProjectCard project={featured} featured index={0} /> : null}
          {rest.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
