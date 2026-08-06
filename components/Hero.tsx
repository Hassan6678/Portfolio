import CodeSession from '@/components/ui/CodeSession'
import Reveal from '@/components/ui/Reveal'
import { getSession } from '@/data/sessions'
import { hero, profile, socialLinks } from '@/data/site'

export default function Hero() {
  const session = getSession('territory-plan')!

  return (
    <section className="hero-field relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-36">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container-page">
        <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
          <Reveal>
            <div className="mb-7 flex flex-wrap items-center gap-x-5 gap-y-2">
              <p className="section-label">{hero.eyebrow}</p>
              <p className="status-line">
                <span aria-hidden="true" />
                {profile.availability}
              </p>
            </div>
            <h1 className="max-w-[760px] font-display text-[clamp(3.35rem,8.4vw,7rem)] font-extrabold leading-[0.86] tracking-[-0.068em] text-ink">
              ML systems
              <span className="block text-outline">built to move</span>
              <span className="block">operations.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg font-medium leading-relaxed tracking-[-0.015em] text-ink/80 sm:text-xl">
              Senior machine learning engineer building geospatial, forecasting, and language systems for enterprise teams.
            </p>
            <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-muted">
              {hero.support}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={hero.primaryCta.href} className="btn-primary">
                Start a conversation <span aria-hidden="true">↗</span>
              </a>
              <a
                href={hero.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                {hero.secondaryCta.label}
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[var(--line)] pt-5">
              {hero.badges.map((b) => <span key={b} className="proof-label">✓ {b}</span>)}
              {socialLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proof-link"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delayMs={120} className="console-scene">
            <div className="scene-orbit" aria-hidden="true" />
            <div className="scene-index" aria-hidden="true">01 / FIELD INTELLIGENCE</div>
            <div className="metric-float metric-float--top">
              <span>Route feasibility</span><strong>98.4%</strong>
              <i><b /></i>
            </div>
            <CodeSession session={session} className="scene-code" />
            <div className="metric-float metric-float--bottom">
              <span>Territory engine</span>
              <strong>131 <small>zones</small></strong>
              <div className="sparkline" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
            </div>
            <div className="scene-caption">
              <span>Live artifact</span>
              Territory planning system · operational constraints included
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
