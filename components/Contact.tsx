'use client'

import { useInView } from '@/hooks/useInView'

const contactLinks = [
  {
    label: 'Email',
    display: 'hassanrazacs@hotmail.com',
    href: 'mailto:hassanrazacs@hotmail.com',
    color: '#ffa657',
  },
  {
    label: 'LinkedIn',
    display: 'linkedin.com/in/hassan-raza-cs',
    href: 'https://linkedin.com/in/hassan-raza-cs',
    color: '#58a6ff',
  },
  {
    label: 'GitHub',
    display: 'github.com/Hassan6678',
    href: 'https://github.com/Hassan6678',
    color: '#e6edf3',
  },
  {
    label: 'Upwork',
    display: 'upwork.com/freelancers/~012bd9ba4b97d2b072',
    href: 'https://upwork.com/freelancers/~012bd9ba4b97d2b072',
    color: '#3fb950',
  },
]

const inputClass =
  'w-full font-inter text-sm rounded-md px-4 py-3 outline-none transition-all duration-200'
const inputStyle = {
  background: 'var(--surface2)',
  border: '1px solid var(--border)',
  color: 'var(--text)',
}

export default function Contact() {
  const { ref: headRef, inView: headIn } = useInView<HTMLDivElement>()
  const { ref: leftRef, inView: leftIn } = useInView<HTMLDivElement>()
  const { ref: rightRef, inView: rightIn } = useInView<HTMLDivElement>()

  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)' }}
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div ref={headRef} className={`fade-up ${headIn ? 'visible' : ''} mb-16`}>
          <div className="flex items-center gap-4 mb-3">
            <span
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: 'var(--accent)' }}
            >
              // get in touch
            </span>
            <span className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          </div>
          <h2
            className="font-syne font-extrabold text-4xl sm:text-5xl"
            style={{ color: 'var(--text)' }}
          >
            Let&apos;s Build Something
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — links */}
          <div ref={leftRef} className={`fade-up ${leftIn ? 'visible' : ''}`}>
            <p
              className="font-inter text-base leading-relaxed mb-8"
              style={{ color: 'var(--dimmed)' }}
            >
              Open to freelance projects, consulting, and full-time opportunities.
              Whether you&apos;re building intelligent systems or need geospatial ML
              expertise — let&apos;s talk.
            </p>

            <ul className="space-y-3">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-lg group transition-all duration-200"
                    style={{
                      background: 'var(--surface2)',
                      border: '1px solid var(--border)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${link.color}40`
                      e.currentTarget.style.background = `${link.color}0a`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.background = 'var(--surface2)'
                    }}
                  >
                    <div>
                      <div
                        className="font-mono text-[10px] tracking-widest uppercase mb-1"
                        style={{ color: 'var(--muted)' }}
                      >
                        {link.label}
                      </div>
                      <div
                        className="font-mono text-xs break-all transition-colors duration-200"
                        style={{ color: link.color }}
                      >
                        {link.display}
                      </div>
                    </div>
                    <span
                      className="flex-shrink-0 ml-4 text-lg transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      style={{ color: link.color }}
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form */}
          <div ref={rightRef} className={`fade-up delay-200 ${rightIn ? 'visible' : ''}`}>
            <form
              action="mailto:hassanrazacs@hotmail.com"
              method="get"
              encType="text/plain"
              className="space-y-4"
            >
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-mono text-[10px] tracking-widest uppercase mb-2"
                    style={{ color: 'var(--muted)' }}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className={inputClass}
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(232,255,71,0.5)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono text-[10px] tracking-widest uppercase mb-2"
                    style={{ color: 'var(--muted)' }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className={inputClass}
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(232,255,71,0.5)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block font-mono text-[10px] tracking-widest uppercase mb-2"
                  style={{ color: 'var(--muted)' }}
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project inquiry, collaboration, ..."
                  className={inputClass}
                  style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(232,255,71,0.5)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                />
              </div>

              <div>
                <label
                  htmlFor="body"
                  className="block font-mono text-[10px] tracking-widest uppercase mb-2"
                  style={{ color: 'var(--muted)' }}
                >
                  Message
                </label>
                <textarea
                  id="body"
                  name="body"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className={`${inputClass} resize-none`}
                  style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(232,255,71,0.5)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 font-syne font-bold text-sm rounded-md transition-opacity duration-200 hover:opacity-90 active:scale-[0.98]"
                style={{ background: 'var(--accent)', color: '#080a0c' }}
              >
                Send Message
              </button>

              <p
                className="font-mono text-[10px] text-center"
                style={{ color: 'var(--muted)' }}
              >
                // opens your email client &middot; or reach out directly above
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
