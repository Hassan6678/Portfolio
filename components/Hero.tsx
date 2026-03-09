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
  {
    label: 'GitHub',
    href: 'https://github.com/Hassan6678',
    color: '#8b949e',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/hassan-raza-cs',
    color: '#0A66C2',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Upwork',
    href: 'https://upwork.com/freelancers/hassanraza535',
    color: '#14A800',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703 0 1.491-1.211 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
      </svg>
    ),
  },
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

            {/* Social links with brand colors + icons */}
            <div className={`${show} flex items-center gap-4`} style={d(500)}>
              {socialLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs transition-opacity duration-200 flex items-center gap-1.5 opacity-85 hover:opacity-100"
                  style={{ color: l.color }}
                >
                  {l.icon}
                  {l.label}
                </a>
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
                <svg viewBox="0 0 112 112" className="spin-badge" style={{ width: '100%', height: '100%' }}>
                  {/* Outer circle border */}
                  <circle cx="56" cy="56" r="52" fill="none" stroke="rgba(232,255,71,0.25)" strokeWidth="1" />
                  <defs>
                    <path id="circle-path" d="M 56,56 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
                  </defs>
                  <text fontSize="8.5" fill="var(--accent)" letterSpacing="3" fontFamily="monospace">
                    <textPath href="#circle-path">
                      100% JOB SUCCESS &bull; TOP RATED &bull; UPWORK &bull;
                    </textPath>
                  </text>
                </svg>
                <div className="hero-ring-badge__center">{'\u2726'}</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
