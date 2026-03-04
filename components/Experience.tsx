'use client'

import { useInView } from '@/hooks/useInView'
import { experiences } from '@/data/experience'

function ExperienceItem({
  exp,
  index,
  isLast,
}: {
  exp: (typeof experiences)[number]
  index: number
  isLast: boolean
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`fade-up ${inView ? 'visible' : ''} relative pl-8`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full border-2"
        style={{ background: 'var(--bg)', borderColor: 'var(--accent)', boxShadow: '0 0 0 3px rgba(232,255,71,0.12)' }}
      />
      {/* Timeline line */}
      {!isLast && (
        <div
          className="absolute left-[4.5px] top-4 bottom-0 w-px"
          style={{ background: 'var(--border)' }}
        />
      )}

      <div className="pb-12">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <span
              className="font-mono text-xs tracking-wide"
              style={{ color: 'var(--accent)' }}
            >
              {exp.company}
            </span>
            <h3
              className="font-syne font-bold text-xl mt-0.5"
              style={{ color: 'var(--text)' }}
            >
              {exp.role}
            </h3>
          </div>
          <span
            className="font-mono text-xs px-3 py-1 rounded-full whitespace-nowrap"
            style={{
              background: 'var(--surface2)',
              border: '1px solid var(--border)',
              color: 'var(--muted)',
            }}
          >
            {exp.period}
          </span>
        </div>

        {/* Bullets */}
        <ul className="space-y-2 mb-4">
          {exp.bullets.map((b, i) => (
            <li
              key={i}
              className="flex gap-3 font-inter text-sm leading-relaxed italic"
              style={{ color: 'var(--muted)' }}
            >
              <span
                className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                style={{ background: 'var(--border)' }}
              />
              {b}
            </li>
          ))}
        </ul>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-1.5">
          {exp.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] px-2 py-0.5 rounded"
              style={{
                color: 'var(--blue)',
                background: 'rgba(88,166,255,0.08)',
                border: '1px solid rgba(88,166,255,0.2)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const { ref: headRef, inView: headIn } = useInView<HTMLDivElement>()

  return (
    <section
      id="experience"
      className="py-24 px-6"
      style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)' }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div ref={headRef} className={`fade-up ${headIn ? 'visible' : ''} mb-16`}>
          <div className="flex items-center gap-4 mb-3">
            <span
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: 'var(--accent)' }}
            >
              // career
            </span>
            <span className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          </div>
          <h2
            className="font-syne font-extrabold text-4xl sm:text-5xl"
            style={{ color: 'var(--text)' }}
          >
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl">
          {experiences.map((exp, i) => (
            <ExperienceItem
              key={exp.company}
              exp={exp}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
