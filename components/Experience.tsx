import Reveal from '@/components/ui/Reveal'
import { experiences } from '@/data/experience'

export default function Experience() {
  return (
    <section id="experience" className="experience-section py-24 sm:py-32">
      <div className="container-page">
        <div className="experience-layout">
          <Reveal className="experience-intro">
            <p className="section-label">Experience / trajectory</p>
            <h2>Building at the edge of<br /><em>models and operations.</em></h2>
            <p>Production ML, geospatial systems, and platform engineering across commercial teams.</p>
          </Reveal>
        <ol className="experience-list">
          {experiences.map((exp, i) => {
            const isLast = i === experiences.length - 1
            return (
              <Reveal key={exp.company} delayMs={i * 80} as="li">
                <div className={isLast ? '' : 'pb-10'}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="font-display text-xl font-bold tracking-tight text-ink">
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
      </div>
    </section>
  )
}
