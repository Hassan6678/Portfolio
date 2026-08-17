import Image from 'next/image'
import BrandIcon, { isBrand } from '@/components/ui/BrandIcon'
import Reveal from '@/components/ui/Reveal'
import { hero, impactMetrics, profile, socialLinks } from '@/data/site'

export default function Hero() {
  return (
    <section className="hero-field hero-stage pb-14 pt-28 sm:pt-32">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container-page">
        <div className="hero-layout">
          <Reveal className="hero-copy">
            <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2">
              <p className="section-label">{hero.eyebrow}</p>
              <p className="status-line">
                <span aria-hidden="true" />
                {profile.availability}
              </p>
            </div>

            <h1>
              {hero.headline.lead}
              <br />
              <span className="text-outline">{hero.headline.outlined}</span>
            </h1>

            <p className="hero-lead">{hero.lead}</p>
            <p className="hero-support">{hero.support}</p>

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
                  {isBrand(l.label) ? <BrandIcon name={l.label} /> : null}
                  {l.label}
                </a>
              ))}
            </div>

          </Reveal>

          <Reveal delayMs={120} className="hero-figure">
            <figure className="hero-portrait">
              {/* `sizes` carries the real rendered widths, not viewport fractions:
                  the CSS caps the portrait well below 70vw, so that hint had
                  phones fetching the 640w file for a 230px box. */}
              <Image
                src={hero.portrait.src}
                alt={hero.portrait.alt}
                fill
                sizes="(max-width: 767px) 230px, (max-width: 1023px) 340px, 341px"
                priority
              />
            </figure>
          </Reveal>
        </div>

        <Reveal delayMs={200}>
          <dl className="hero-stats">
            {impactMetrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.value}</dt>
                <dd>{metric.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
