'use client'

import { useEffect, useState } from 'react'
import TypeWriter from '@/components/ui/TypeWriter'
import CodeBg from '@/components/ui/CodeBg'

const ROLES = [
  'Machine Learning Engineer',
  'Data Scientist',
  'Geospatial AI Specialist',
  'NLP & LLM Engineer',
  'Time Series & Forecasting Expert',
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Hassan6678' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/hassan-raza-cs' },
  { label: 'Upwork', href: 'https://upwork.com/freelancers/~012bd9ba4b97d2b072' },
]

const badges = [
  { icon: '\u2605', text: '100% Job Success' },
  { icon: '', text: 'Top Rated on Upwork' },
  { icon: '', text: '$10K+ Earned' },
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setTimeout(() => setMounted(true), 60) }, [])

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
              5+ years engineering production ML systems for global enterprises.
              Territory optimization for BAT UK, satellite-powered market intelligence
              for FMCG giants, LLM analytics chatbots for Nielsen — and a 100% Job
              Success Score on Upwork with Top Rated status. I build things that work.
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
                Discuss for Projects
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
                    style={{ color: 'var(--muted)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted)' }}
                  >
                    {l.label} &#8599;
                  </a>
                  {i < socialLinks.length - 1 && (
                    <span className="mx-3 text-xs" style={{ color: 'var(--muted)' }}>&middot;</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Right — floating photo with CSS background + terminal window */}
          <div className={`${show} relative flex justify-center`} style={d(200)}>
            <div className="photo-outer">
              {/* Glow layer behind everything */}
              <div className="photo-glow" />

              {/* Photo as CSS background */}
              <div
                className="photo-bg"
                style={{ backgroundImage: "url('/images/hassan-photo.png')" }}
              >
                <div className="fade-top" />
                <div className="fade-bottom" />
                <div className="fade-left" />
                <div className="fade-right" />
              </div>

              {/* Terminal window — below photo, floating bottom-left */}
              <div
                className="absolute z-10 rounded-lg overflow-hidden shadow-2xl"
                style={{
                  bottom: -24,
                  left: -32,
                  maxWidth: 320,
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                }}
              >
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-2" style={{ borderBottom: '1px solid var(--border)' }}>
                  <span className="terminal-dot terminal-dot--red" />
                  <span className="terminal-dot terminal-dot--yellow" />
                  <span className="terminal-dot terminal-dot--green" />
                  <span className="font-mono text-[10px] ml-2" style={{ color: 'var(--muted)' }}>model.py</span>
                </div>
                {/* Code */}
                <pre className="p-3 font-mono text-[11px] leading-5 overflow-x-auto" style={{ color: 'var(--dimmed)' }}>
                  <code>{`class TerritoryOptimizer:
    def __init__(self, n_clusters=167):
        self.model = KMeans(n_clusters)
    def fit(self, coords, weights):
        return self.model.fit(coords)`}</code>
                </pre>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
