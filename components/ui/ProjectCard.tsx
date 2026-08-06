import type { Project } from '@/data/projects'
import { getSession } from '@/data/sessions'
import CodeSession from '@/components/ui/CodeSession'
import ProjectMedia from '@/components/ui/ProjectMedia'
import Reveal from '@/components/ui/Reveal'

interface ProjectCardProps {
  project: Project
  index?: number
  featured?: boolean
}

export default function ProjectCard({ project, index = 0, featured = false }: ProjectCardProps) {
  const isResearch = project.kind === 'research'
  const categoryLabel = project.category.replace(/-/g, ' ')
  const session = project.sessionId ? getSession(project.sessionId) : undefined

  if (featured) {
    return (
      <Reveal delayMs={index * 60} className="col-span-full">
        <article className="panel overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col">
              <ProjectMedia project={project} priority />
              {session ? (
                <div className="border-t border-[var(--line)] bg-[var(--bg)] p-3 sm:p-4">
                  <CodeSession session={session} showCaret={false} />
                </div>
              ) : null}
            </div>
            <div className="flex flex-col justify-center gap-4 border-t border-[var(--line)] p-6 sm:p-8 lg:border-l lg:border-t-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="pill" style={{ color: project.companyColor }}>
                  {project.company}
                </span>
                <span className="pill capitalize">{categoryLabel}</span>
                {project.featured ? <span className="pill bg-[var(--accent-soft)] text-ink">Featured</span> : null}
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-[1.65rem]">
                  {project.title}
                </h3>
                {project.subtitle ? (
                  <p className="mt-1 font-mono text-xs text-muted">{project.subtitle}</p>
                ) : null}
              </div>
              <p className="text-sm leading-relaxed text-muted">{project.description}</p>
              {project.metrics && project.metrics.length > 0 ? (
                <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="border-t border-[var(--line)] pt-2">
                      <dt className="font-mono text-[10px] uppercase tracking-wider text-dimmed">
                        {m.label}
                      </dt>
                      <dd className="font-display text-lg font-bold text-ink">{m.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 8).map((tag) => (
                  <span key={tag} className="pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </Reveal>
    )
  }

  return (
    <Reveal delayMs={index * 50} className="h-full">
      <article className="panel group flex h-full flex-col overflow-hidden transition-shadow duration-200 hover:shadow-[var(--shadow-soft)]">
        <ProjectMedia project={project} />
        <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="pill" style={{ color: project.companyColor }}>
              {project.company}
            </span>
            <span className="pill capitalize">{isResearch ? 'Research' : categoryLabel}</span>
            {isResearch && project.upworkRating ? (
              <span className="pill">Upwork · {project.upworkRating}</span>
            ) : null}
          </div>
          <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-ink">
            {project.title}
          </h3>
          {project.subtitle ? (
            <p className="font-mono text-[11px] text-muted">{project.subtitle}</p>
          ) : null}
          <p className="text-sm leading-relaxed text-muted">{project.description}</p>
          {project.metrics && project.metrics.length > 0 ? (
            <p className="mt-auto font-mono text-[11px] text-dimmed">
              {project.metrics.map((m, i) => (
                <span key={m.label}>
                  {i > 0 ? <span className="mx-1.5 text-[var(--line-strong)]">·</span> : null}
                  <span className="font-semibold text-ink">{m.value}</span> {m.label}
                </span>
              ))}
            </p>
          ) : (
            <div className="mt-auto" />
          )}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.slice(0, 5).map((tag) => (
              <span key={tag} className="pill">
                {tag}
              </span>
            ))}
            {project.tags.length > 5 ? (
              <span className="pill">+{project.tags.length - 5}</span>
            ) : null}
          </div>
          {(project.github || project.live) && (
            <div className="flex gap-3 pt-1 text-xs font-medium">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline-offset-2 hover:underline"
                >
                  GitHub
                </a>
              ) : null}
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline-offset-2 hover:underline"
                >
                  Live
                </a>
              ) : null}
            </div>
          )}
        </div>
      </article>
    </Reveal>
  )
}
