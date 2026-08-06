import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { experiences } from '@/data/experience'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-[var(--line)] bg-[var(--panel)]/40 py-20 sm:py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            label="Experience"
            title={
              <>
                Roles where the work <em>shipped</em>
              </>
            }
            description="A compact timeline of production ML, geospatial systems, and platform engineering."
          />
        </Reveal>

        <ol className="mt-12 max-w-3xl space-y-0">
          {experiences.map((exp, i) => {
            const isLast = i === experiences.length - 1
            return (
              <Reveal key={exp.company} delayMs={i * 80} as="li" className="relative pl-8">
                <span
                  className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-ink bg-[var(--accent)]"
                  aria-hidden="true"
                />
                {!isLast ? (
                  <span
                    className="absolute bottom-0 left-[4px] top-4 w-px bg-[var(--line-strong)]"
                    aria-hidden="true"
                  />
                ) : null}

                <div className={`pb-10 ${isLast ? 'pb-0' : ''}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="font-display text-lg font-bold tracking-tight text-ink">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-muted">{exp.company}</p>
                    </div>
                    <p className="font-mono text-[11px] text-dimmed">{exp.period}</p>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet} className="text-sm leading-relaxed text-muted">
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {exp.stack.map((t) => (
                      <li key={t}>
                        <span className="pill">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
