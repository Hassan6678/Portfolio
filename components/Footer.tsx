import { footerContent, navLinks, profile, socialLinks } from '@/data/site'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--panel-strong)]">
      <div className="container-page py-12 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.9fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold"
                style={{ background: 'var(--accent)', color: 'var(--accent-ink)' }}
              >
                {profile.mark}
              </span>
              <span className="font-display text-sm font-bold tracking-tight text-ink">
                {profile.name}
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              {footerContent.blurb}
            </p>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold text-ink">Navigate</h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-muted transition-colors hover:text-ink">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold text-ink">Connect</h2>
            <ul className="mt-4 space-y-2.5">
              {socialLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-5 space-y-2 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="transition-colors hover:text-ink"
                >
                  {profile.email}
                </a>
              </li>
              <li>{profile.location}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--line)]">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-4 sm:flex-row sm:items-center">
          <p className="text-xs text-dimmed">{footerContent.copyright}</p>
          <p className="text-xs text-dimmed">{profile.role}</p>
        </div>
      </div>
    </footer>
  )
}
