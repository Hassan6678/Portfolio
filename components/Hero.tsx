import CodeSession from '@/components/ui/CodeSession'
import Reveal from '@/components/ui/Reveal'
import { getSession } from '@/data/sessions'
import { hero, profile, socialLinks } from '@/data/site'

export default function Hero() {
  const session = getSession('territory-plan')!

  return (
    <section className="ambient-hero relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <Reveal>
            <p className="section-label mb-5">{hero.eyebrow}</p>
            <p className="mb-3 font-display text-sm font-semibold tracking-wide text-muted">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)] align-middle" />
              {profile.availability}
            </p>
            <h1 className="font-display text-[clamp(2.75rem,8vw,4.75rem)] font-extrabold leading-[0.95] tracking-[-0.045em] text-ink">
              {profile.name}
            </h1>
            <p className="mt-5 max-w-lg text-xl font-medium leading-snug tracking-tight text-ink sm:text-2xl">
              {hero.headline.before}
              <em className="font-serif italic font-normal">{hero.headline.emphasis}</em>
              {hero.headline.after}
            </p>
            <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-muted">
              {hero.support}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {hero.badges.map((b) => (
                <span key={b} className="pill">
                  {b}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={hero.primaryCta.href} className="btn-primary">
                {hero.primaryCta.label}
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

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {socialLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-muted transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delayMs={120} className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[24px] bg-[radial-gradient(ellipse_at_center,var(--wash-blue),transparent_65%)]" />
            <CodeSession session={session} />
            <p className="mt-3 font-mono text-[11px] text-dimmed">
              Proof of work · territory planning session
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
