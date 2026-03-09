'use client'

import { useInView } from '@/hooks/useInView'

const contactLinks = [
  {
    label: 'Email', value: 'hassanrazacs@hotmail.com',
    href: 'mailto:hassanrazacs@hotmail.com', color: '#d8ea35',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
  },
  {
    label: 'LinkedIn', value: 'linkedin.com/in/hassan-raza-cs',
    href: 'https://linkedin.com/in/hassan-raza-cs', color: '#0A66C2',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    label: 'GitHub', value: 'github.com/Hassan6678',
    href: 'https://github.com/Hassan6678', color: '#8b949e',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>,
  },
  {
    label: 'Upwork', value: 'upwork.com/freelancers/hassanraza535',
    href: 'https://upwork.com/freelancers/hassanraza535', color: '#14A800',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703 0 1.491-1.211 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/></svg>,
  },
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
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${l.color}55` }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)' }}
                    >
                      <div className="flex items-center gap-3">
                        <span style={{ color: l.color }}>{l.icon}</span>
                        <div>
                          <div className="text-[10px] uppercase tracking-widest font-medium mb-1" style={{ color: l.color }}>{l.label}</div>
                          <div className="font-mono text-xs transition-opacity break-all opacity-90 group-hover:opacity-100" style={{ color: l.color }}>{l.value}</div>
                        </div>
                      </div>
                      <span className="text-lg group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" style={{ color: l.color }}>{'\u2197'}</span>
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
