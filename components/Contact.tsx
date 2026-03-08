'use client'

import { useInView } from '@/hooks/useInView'

const contactLinks = [
  { label: 'Email', value: 'hassanrazacs@hotmail.com', href: 'mailto:hassanrazacs@hotmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/hassan-raza-cs', href: 'https://linkedin.com/in/hassan-raza-cs' },
  { label: 'GitHub', value: 'github.com/Hassan6678', href: 'https://github.com/Hassan6678' },
  { label: 'Upwork', value: 'upwork.com/freelancers/~012bd9ba4b97d2b072', href: 'https://upwork.com/freelancers/~012bd9ba4b97d2b072' },
]

export default function Contact() {
  const { ref: headRef, inView: headIn } = useInView<HTMLDivElement>()
  const { ref: bodyRef, inView: bodyIn } = useInView<HTMLDivElement>()

  return (
    <section id="contact" className="py-24 px-6" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto">

        {/* CTA banner */}
        <div
          ref={headRef}
          className={`fade-up ${headIn ? 'visible' : ''} contact-cta rounded-2xl p-10 sm:p-14 mb-16 text-center relative overflow-hidden`}
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        >
          <div className="contact-cta__glow" aria-hidden="true" />
          <svg className="absolute top-6 left-8 w-8 h-8 opacity-30" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z" fill="var(--accent)" /></svg>

          <h2 className="section-title font-syne mb-4">
            Let&apos;s build something <span>useful with data</span>
          </h2>
          <p className="font-inter text-sm sm:text-[15px] leading-relaxed max-w-2xl mx-auto mb-8" style={{ color: 'var(--muted)' }}>
            If you&apos;re working on machine learning, analytics, forecasting, geospatial intelligence,
            or AI-driven business tools, I&apos;d be glad to connect. I&apos;m open to freelance projects,
            collaborations, and full-time opportunities.
          </p>
          <a href="mailto:hassanrazacs@hotmail.com" className="btn-primary">
            Start a Conversation
          </a>
        </div>

        {/* Contact details + form */}
        <div ref={bodyRef} className={`fade-up ${bodyIn ? 'visible' : ''}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left: links */}
            <div>
              <h3 className="font-syne font-bold text-xl mb-6" style={{ color: 'var(--text)' }}>Get In Touch</h3>
              <p className="font-inter text-sm leading-relaxed mb-8 max-w-md" style={{ color: 'var(--muted)' }}>
                For project discussions, consulting work, or full-time roles, you can reach me directly through any of the channels below.
              </p>
              <ul className="space-y-3">
                {contactLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-xl group transition-all duration-200"
                      style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(232,255,71,0.4)' }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)' }}
                    >
                      <div>
                        <div className="text-[10px] uppercase tracking-widest mb-1 font-medium" style={{ color: 'var(--muted)' }}>{l.label}</div>
                        <div className="font-mono text-xs group-hover:text-accent transition-colors break-all" style={{ color: 'var(--dimmed)' }}>{l.value}</div>
                      </div>
                      <span className="text-lg group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" style={{ color: 'var(--muted)' }}>&nearr;</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: form */}
            <div>
              <h3 className="font-syne font-bold text-xl mb-6" style={{ color: 'var(--text)' }}>Send a Message</h3>
              <form action="mailto:hassanrazacs@hotmail.com" method="get" encType="text/plain" className="space-y-4 contact-form-card rounded-2xl p-5 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    name="name" type="text" required placeholder="Your name"
                    className="w-full font-inter text-sm rounded-xl px-4 py-3 outline-none transition-colors"
                    style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                  />
                  <input
                    name="email" type="email" required placeholder="your@email.com"
                    className="w-full font-inter text-sm rounded-xl px-4 py-3 outline-none transition-colors"
                    style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                  />
                </div>
                <input
                  name="subject" type="text" placeholder="Subject"
                  className="w-full font-inter text-sm rounded-xl px-4 py-3 outline-none transition-colors"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                />
                <textarea
                  name="body" required rows={5} placeholder="Tell me about your project..."
                  className="w-full font-inter text-sm rounded-xl px-4 py-3 outline-none resize-none transition-colors"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                />
                <button type="submit" className="btn-primary w-full justify-center">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
