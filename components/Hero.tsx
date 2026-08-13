import Image from 'next/image'
import CodeSession from '@/components/ui/CodeSession'
import Reveal from '@/components/ui/Reveal'
import { getSession } from '@/data/sessions'
import { hero, profile, socialLinks } from '@/data/site'

export default function Hero() {
  const session = getSession('territory-plan')

  return (
    <section className="hero-field relative overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-32">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2">
              <p className="section-label">{hero.eyebrow}</p>
              <p className="status-line">
                <span aria-hidden="true" />
                {profile.availability}
              </p>
            </div>
            <h1 className="max-w-[720px] font-display text-[clamp(2.75rem,7vw,5.6rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-ink">
              {hero.headline.lead}
              <br />
              <span className="text-outline">{hero.headline.outlined}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg font-medium leading-snug tracking-[-0.01em] text-ink/80 sm:text-[1.1875rem]">
              {hero.lead}
            </p>
            <p className="mt-3.5 max-w-lg text-[0.9375rem] leading-relaxed text-muted">
              {hero.support}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={hero.primaryCta.href} className="btn-primary">
                {hero.primaryCta.label} <span aria-hidden="true">↗</span>
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

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[var(--line)] pt-5">
              {hero.badges.map((b) => (
                <span key={b} className="proof-label">
                  ✓ {b}
                </span>
              ))}
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
            <div className="hero-artifact">
              <figure>
                <Image
                  src={hero.artifact.photo}
                  alt={hero.artifact.photoAlt}
                  fill
                  sizes="104px"
                  priority
                />
              </figure>
              <div>
                <span>{hero.artifact.kicker}</span>
                <p>{hero.artifact.caption}</p>
              </div>
            </div>

            {session ? <CodeSession session={session} className="scene-code" /> : null}

            <div className="metric-float metric-float--bottom">
              <span>{hero.artifact.metricLabel}</span>
              <strong>{hero.artifact.metricValue}</strong>
              <i>
                <b style={{ width: hero.artifact.metricValue }} />
              </i>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
