'use client'

import { useEffect, useState } from 'react'
import TypeWriter from '@/components/ui/TypeWriter'
import CodeBg from '@/components/ui/CodeBg'

const ROLES = [
  'Machine Learning Engineer',
  'Data Scientist',
  'Geospatial Analytics Engineer',
  'NLP & LLM Engineer',
  'Time Series & Forecasting Specialist',
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Hassan6678' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/hassan-raza-cs' },
  { label: 'Upwork', href: 'https://upwork.com/freelancers/~012bd9ba4b97d2b072' },
]

const badges = [
  { icon: '\u2605', text: '100% Job Success' },
  { icon: '', text: 'Upwork Top Rated' },
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const timer = window.setTimeout(() => setMounted(true), 60)
    return () => window.clearTimeout(timer)
  }, [])

  const show = mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
  const d = (ms: number): React.CSSProperties => ({
    transitionDelay: `${ms}ms`,
    transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)',
  })

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Scrolling code background */}
      <CodeBg />

      {/* === Decorative floating elements === */}
      {/* A — Sparkle star top-right */}
      <svg
        className="sparkle-pulse absolute pointer-events-none z-10"
        style={{ top: '12%', right: '8%' }}
        width="22" height="22" viewBox="0 0 24 24" fill="none"
      >
        <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" fill="var(--accent)" opacity="0.9" />
      </svg>

      {/* C — Small sparkle near photo area */}
      <svg
        className="sparkle-pulse absolute pointer-events-none z-10"
        style={{ top: '8%', right: '36%', animationDelay: '1.5s' }}
        width="14" height="14" viewBox="0 0 24 24" fill="none"
      >
        <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" fill="var(--accent-bright)" opacity="0.7" />
      </svg>

      <div className="relative max-w-7xl mx-auto w-full px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left */}
          <div>
            {/* Eyebrow with pulse dot */}
            <p className={`${show} font-mono text-xs mb-4 flex items-center gap-2`} style={{ ...d(0), color: 'var(--accent)' }}>
              <span className="pulse-dot" />
              // available for projects
            </p>

            <h1
              className={`${show} font-syne font-extrabold leading-[1.05] mb-2`}
              style={{ ...d(100), fontSize: 'clamp(40px, 7vw, 72px)', color: 'var(--text)' }}
            >
              Hassan Raza
            </h1>

            {/* Typewriter */}
            <div className={`${show} mb-6 min-h-[2rem] font-mono text-lg`} style={{ ...d(200), color: 'var(--accent)' }}>
              <TypeWriter strings={ROLES} />
            </div>

            <p
              className={`${show} font-inter text-base leading-relaxed max-w-lg mb-6`}
              style={{ ...d(300), color: 'var(--dimmed)' }}
            >
              I build machine learning and data products that help businesses understand
              markets, forecast demand, and make better operational decisions. My work
              spans retail intelligence, geospatial analytics, forecasting, NLP, and
              scalable data systems for global clients.
            </p>

            <p
              className={`${show} font-inter text-sm leading-relaxed max-w-lg mb-7`}
              style={{ ...d(325), color: 'var(--muted)' }}
            >
              Specializing in machine learning systems, geospatial analytics,
              time series modeling, and AI-driven products.
            </p>

            {/* Social proof badges */}
            <div className={`${show} flex flex-wrap gap-2 mb-8`} style={d(350)}>
              {badges.map((b) => (
                <span
                  key={b.text}
                  className="font-mono text-[11px] inline-flex items-center gap-1.5"
                  style={{
                    color: 'var(--accent)',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    padding: '4px 12px',
                    borderRadius: 4,
                  }}
                >
                  {b.icon && <span>{b.icon}</span>}
                  {b.text}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className={`${show} flex flex-wrap gap-4 mb-10`} style={d(400)}>
              <a href="#contact" className="btn-primary">
                Let&apos;s Work Together
              </a>
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Download CV <span className="text-lg">&darr;</span>
              </a>
            </div>

            {/* Social links with dot separators */}
            <div className={`${show} flex items-center gap-0`} style={d(500)}>
              {socialLinks.map((l, i) => (
                <span key={l.label} className="flex items-center">
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs transition-colors duration-200 flex items-center gap-1"
                    style={{ color: 'var(--accent)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--accent)' }}
                  >
                    {l.label} &#8599;
                  </a>
                  {i < socialLinks.length - 1 && (
                    <span className="mx-3 text-xs" style={{ color: 'var(--accent)', opacity: 0.5 }}>&middot;</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Right — portrait card + badge */}
          <div className={`${show} relative flex justify-center lg:justify-end`} style={d(200)}>
            <div className="hero-portrait-stage">
              <div className="hero-portrait-offset" />

              <div className="hero-portrait-panel">
                <div className="hero-portrait-grid" />
                <div className="hero-portrait-halo" />

                <div className="hero-portrait-frame">
                  <div className="hero-portrait-image-wrap">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/hassan-photo.png"
                      alt="Hassan Raza"
                      className="hero-portrait-image"
                    />
                  </div>
                </div>
              </div>

              <div className="hero-accent-orb" aria-hidden="true" />

              <div className="hero-ring-badge" aria-hidden="true">
                <svg viewBox="0 0 100 100" width="100" height="100" className="spin-badge">
                  <defs>
                    <path id="circle-path" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                  </defs>
                  <text fontSize="9" fill="var(--accent)" letterSpacing="3" fontFamily="monospace">
                    <textPath href="#circle-path">
                      100% JOB SUCCESS &bull; TOP RATED &bull; UPWORK &bull;
                    </textPath>
                  </text>
                </svg>
                <div className="hero-ring-badge__center">{'\u2726'}</div>
                <div className="hero-ring-badge__inner" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
