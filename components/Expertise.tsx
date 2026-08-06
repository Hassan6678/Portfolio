import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { skillGroups } from '@/data/skills'
import { expertise, expertiseIntro } from '@/data/site'

export default function Expertise() {
  return (
    <section id="expertise" className="border-t border-[var(--line)] py-20 sm:py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            label={expertiseIntro.label}
            title={
              <>
                {expertiseIntro.titleBefore}
                <em>{expertiseIntro.titleEmphasis}</em>
                {expertiseIntro.titleAfter}
              </>
            }
            description={expertiseIntro.description}
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius)] border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 50} className="bg-[var(--panel)] p-6 sm:p-7">
              <h3 className="font-display text-base font-bold tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 space-y-8">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delayMs={i * 60}>
              <div className="border-t border-[var(--line)] pt-6">
                <h3 className="font-display text-sm font-semibold text-ink">{group.label}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <span className="pill">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
