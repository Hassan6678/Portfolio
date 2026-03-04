'use client'

import { useInView } from '@/hooks/useInView'
import { skillGroups } from '@/data/skills'

function SkillGroup({ group, index }: { group: (typeof skillGroups)[number]; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <div ref={ref} className={`fade-up ${inView ? 'visible' : ''}`} style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="p-6 rounded-xl h-full" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
        <h3 className="font-syne font-bold text-base mb-4" style={{ color: 'var(--accent)' }}>
          {group.label}
        </h3>
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <span
              key={skill}
              className="font-inter text-xs px-3 py-1.5 rounded-full transition-all duration-200 cursor-default hover:scale-105"
              style={{ color: 'var(--dimmed)', background: 'var(--surface2)', border: '1px solid var(--border)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--dimmed)' }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref: headRef, inView: headIn } = useInView<HTMLDivElement>()

  return (
    <section id="skills" className="py-24 px-6" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className={`fade-up ${headIn ? 'visible' : ''} text-center mb-16`}>
          <p className="section-label mb-3">Capabilities</p>
          <h2 className="section-title font-syne">My <span>skills</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((g, i) => (
            <SkillGroup key={g.label} group={g} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
