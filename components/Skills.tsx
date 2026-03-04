'use client'

import { useInView } from '@/hooks/useInView'
import { skillGroups } from '@/data/skills'

function SkillGroup({
  group,
  index,
}: {
  group: (typeof skillGroups)[number]
  index: number
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`fade-up ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3
        className="font-mono text-sm mb-4 tracking-wide"
        style={{ color: 'var(--accent)' }}
      >
        {group.comment}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="font-mono text-xs px-3 py-1.5 rounded border transition-all duration-200 cursor-default"
            style={{
              color: 'var(--muted)',
              border: '1px solid var(--border)',
              background: 'var(--surface)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.color = 'var(--accent)'
              el.style.borderColor = 'rgba(232,255,71,0.4)'
              el.style.background = 'rgba(232,255,71,0.06)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.color = 'var(--muted)'
              el.style.borderColor = 'var(--border)'
              el.style.background = 'var(--surface)'
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref: headRef, inView: headIn } = useInView<HTMLDivElement>()

  return (
    <section
      id="skills"
      className="py-24 px-6"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div ref={headRef} className={`fade-up ${headIn ? 'visible' : ''} mb-16`}>
          <div className="flex items-center gap-4 mb-3">
            <span
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: 'var(--accent)' }}
            >
              // capabilities
            </span>
            <span className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          </div>
          <h2
            className="font-syne font-extrabold text-4xl sm:text-5xl"
            style={{ color: 'var(--text)' }}
          >
            Skills
          </h2>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {skillGroups.map((group, i) => (
            <SkillGroup key={group.label} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
