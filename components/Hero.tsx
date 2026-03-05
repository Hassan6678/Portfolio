'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import TypeWriter from '@/components/ui/TypeWriter'
import CodeBg from '@/components/ui/CodeBg'

const ROLES = [
  'Machine Learning Engineer',
  'Data Scientist',
  'Geospatial AI Specialist',
  'NLP & Deep Learning Engineer',
  'Territory Optimization Expert',
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Hassan6678' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/hassan-raza-cs' },
  { label: 'Upwork', href: 'https://upwork.com/freelancers/~012bd9ba4b97d2b072' },
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

      {/* B — Dashed circle left-center */}
      <div
        className="spin-slow absolute pointer-events-none z-10"
        style={{ top: '45%', left: '3%', width: 64, height: 64, borderRadius: '50%', border: '2px dashed rgba(232,255,71,0.35)' }}
      />

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
              className={`${show} font-inter text-base leading-relaxed max-w-lg mb-8`}
              style={{ ...d(300), color: 'var(--dimmed)' }}
            >
              4+ years building production ML systems for global enterprises
              — from territory clustering for BAT UK&apos;s 167-warehouse field force,
              to satellite-powered market intelligence and LLM chatbots for Nielsen.
              I turn complex data into measurable business impact.
            </p>

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

          {/* Right — floating photo + terminal window */}
          <div className={`${show} relative flex justify-center`} style={d(200)}>
            <div className="relative">
              {/* Radial glow behind photo */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  background: 'radial-gradient(ellipse 60% 70% at 50% 40%, rgba(168,85,247,0.18) 0%, transparent 70%)',
                }}
              />

              {/* Photo — no box, no border, floating */}
              <div className="relative w-[340px] h-[440px] sm:w-[420px] sm:h-[530px] z-[1]">
                <Image
                  src="/images/hassan-photo.png"
                  alt="Hassan Raza"
                  fill
                  className="object-cover object-top"
                  style={{ mixBlendMode: 'lighten' }}
                  priority
                />
                {/* Bottom fade into page bg */}
                <div
                  className="absolute inset-x-0 bottom-0 h-36 z-[1]"
                  style={{ background: 'linear-gradient(to top, var(--bg) 0%, transparent 100%)' }}
                />
              </div>

              {/* Terminal window — overlapping bottom-left, z above photo */}
              <div
                className="absolute -bottom-4 -left-8 right-8 z-[2] rounded-lg overflow-hidden shadow-2xl"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
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
