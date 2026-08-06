import Reveal from '@/components/ui/Reveal'
import { contactContent, socialLinks } from '@/data/site'

export default function Contact() {
  return (
    <section id="contact" className="border-t border-[var(--line)] py-20 sm:py-24">
      <div className="container-page">
        <Reveal>
          <div className="ambient-cta relative overflow-hidden rounded-[1.25rem] px-6 py-12 text-[var(--panel)] sm:px-10 sm:py-16">
            <p className="section-label !text-white/55 before:!text-[var(--accent)] before:!opacity-90">
              {contactContent.label}
            </p>
            <h2 className="section-title mt-3 max-w-2xl !text-[var(--panel)]">
              {contactContent.titleBefore}
              <em className="!text-[var(--accent)]">{contactContent.titleEmphasis}</em>
              {contactContent.titleAfter}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/65 sm:text-[0.95rem]">
              {contactContent.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={contactContent.primaryCta.href} className="btn-accent">
                {contactContent.primaryCta.label}
              </a>
              {socialLinks.slice(0, 2).map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-white/20 px-4 py-2.5 text-sm font-medium text-white/85 transition-colors hover:border-white/40 hover:text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>

            <ul className="mt-10 grid grid-cols-1 gap-3 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
              {contactContent.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/45">
                      {link.label}
                    </span>
                    <span className="mt-1 block truncate text-sm text-white/85 transition-colors group-hover:text-[var(--accent)]">
                      {link.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
