import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { impactMetrics } from '@/data/site'

export default function Impact() {
  return (
    <section id="impact" className="border-t border-[var(--line)] bg-[var(--panel)]/50 py-20 sm:py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            label="Impact"
            title={
              <>
                Numbers that don&apos;t need a <em>footnote</em>
              </>
            }
            description="Outcomes from production ML systems — markets covered, territories planned, outlets scored, and delivery reliability."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impactMetrics.map((metric, i) => (
            <Reveal key={metric.label} delayMs={i * 70}>
              <div className="panel h-full p-6">
                <p className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-[2.75rem]">
                  {metric.value}
                </p>
                <p className="mt-2 font-display text-sm font-semibold text-ink">{metric.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{metric.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
