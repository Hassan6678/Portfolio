import Reveal from '@/components/ui/Reveal'
import { contactContent, socialLinks } from '@/data/site'

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container-page relative">
        <Reveal className="card-rise">
          <div className="contact-inner">
            <p className="section-label section-label--dark">
              {contactContent.label}
            </p>
            <h2>
              {contactContent.headline.lead}
              <em>{contactContent.headline.emphasis}</em>
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/60 sm:text-[0.95rem]">
              {contactContent.description}
            </p>

            <div className="contact-cta mt-10 flex flex-wrap gap-3">
              <a href={contactContent.primaryCta.href} className="btn-accent">
                {contactContent.primaryCta.label} <span aria-hidden="true">↗</span>
              </a>
              {socialLinks.slice(0, 2).map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-cta__ghost"
                >
                  {s.label}
                </a>
              ))}
            </div>

            <ul className="contact-links">
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
