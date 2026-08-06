import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { aboutContent } from '@/data/site'

export default function About() {
  return (
    <section id="about" className="border-t border-[var(--line)] py-20 sm:py-24">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <Reveal>
            <SectionHeader
              label={aboutContent.label}
              title={
                <>
                  {aboutContent.titleBefore}
                  <em>{aboutContent.titleEmphasis}</em>
                  {aboutContent.titleAfter}
                </>
              }
            />
            <div className="mt-8 space-y-5">
              {aboutContent.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="text-[0.95rem] leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <aside className="panel p-7 sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-dimmed">
                {aboutContent.scopeLabel}
              </p>
              <p className="mt-4 font-display text-xl font-semibold leading-snug tracking-tight text-ink">
                {aboutContent.scope}
              </p>
              <div className="mt-8 border-t border-[var(--line)] pt-6">
                <p className="text-sm leading-relaxed text-muted">
                  Based in Pakistan. Collaborating with international clients across retail, FMCG,
                  research contracts, and analytics products.
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
