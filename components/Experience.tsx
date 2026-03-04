'use client'

import { useInView } from '@/hooks/useInView'
import { experiences } from '@/data/experience'

function TimelineItem({ exp, index, isLast }: { exp: (typeof experiences)[number]; index: number; isLast: boolean }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <div ref={ref} className={`fade-up ${inView ? 'visible' : ''} relative pl-10`} style={{ transitionDelay: `${index * 100}ms` }}>
      {/* Dot */}
      <div className="absolute left-0 top-2 w-4 h-4 rounded-full" style={{ background: 'var(--accent)', boxShadow: '0 0 0 4px var(--accent-dim)' }} />
      {/* Line */}
      {!isLast && <div className="absolute left-[7px] top-6 bottom-0 w-[2px]" style={{ background: 'var(--border)' }} />}

      <div className="pb-12">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="font-syne font-bold text-lg" style={{ color: 'var(--text)' }}>{exp.role}</h3>
            <span className="font-mono text-xs" style={{ color: 'var(--accent)' }}>{exp.company}</span>
          </div>
          <span className="font-mono text-xs px-3 py-1 rounded-full" style={{ background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--muted)' }}>
            {exp.period}
          </span>
        </div>

        <ul className="space-y-2 mb-4">
          {exp.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 font-inter text-sm leading-relaxed" style={{ color: 'var(--dimmed)' }}>
              <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
              {b}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.stack.map((t) => (
            <span key={t} className="font-mono text-[10px] px-2.5 py-1 rounded-full" style={{ color: 'var(--accent)', background: 'var(--accent-dim)', border: '1px solid rgba(124,92,252,0.25)' }}>
              {t}
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
    <section id="experience" className="py-24 px-6" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className={`fade-up ${headIn ? 'visible' : ''} text-center mb-16`}>
          <p className="section-label mb-3">Career</p>
          <h2 className="section-title font-syne">My <span>experience</span></h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.company} exp={exp} index={i} isLast={i === experiences.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
