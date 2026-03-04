'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import TypeWriter from '@/components/ui/TypeWriter'
import CodeBg from '@/components/ui/CodeBg'

const ROLES = [
  'Machine Learning Engineer',
  'Data Scientist',
  'Geospatial AI Specialist',
  'NLP Engineer',
]

// Real K-Means territory clustering snippet from BAT UK project
const TERMINAL_CODE = [
  '# territory_cluster.py',
  'from sklearn.cluster import KMeans',
  'import numpy as np',
  '',
  'def cluster_territories(outlets, k=167):',
  "    coords = outlets[['lat','lng']].values",
  "    weights = outlets['visit_freq'].values",
  '',
  '    km = KMeans(',
  '        n_clusters=k,',
  "        init='k-means++',",
  '        max_iter=500,',
  '        random_state=42',
  '    )',
  '    km.fit(coords, sample_weight=weights)',
  "    outlets['territory'] = km.labels_",
  '    # 8-14 calls/day, 4-week cycle',
  '    schedule_routes(outlets, cycle_weeks=4)',
  '    return outlets',
].join('\n')

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60)
    return () => clearTimeout(t)
  }, [])

  const cls = mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
  const sty = (delay: number): React.CSSProperties => ({
    transitionDelay: `${delay}ms`,
    transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)',
  })

  return (
    <section className="relative min-h-screen flex items-center pt-[64px] pb-24 overflow-hidden">
      {/* Scrolling code background */}
      <CodeBg />

      {/* Radial gradient vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, #080a0c 100%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl w-full px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-center">

          {/* ── Left column ─────────────────────────────────────────────── */}
          <div>
            {/* Eyebrow */}
            <div className={`${cls} mb-6`} style={sty(0)}>
              <span
                className="font-mono text-xs tracking-widest uppercase"
                style={{ color: 'var(--accent)' }}
              >
                // available for projects
              </span>
            </div>

            {/* H1 */}
            <h1
              className={`${cls} font-syne font-extrabold leading-[0.9] mb-5`}
              style={{ ...sty(100), fontSize: 'clamp(52px, 8vw, 92px)' }}
            >
              <span style={{ color: 'var(--text)' }}>Hassan</span>
              <br />
              <span style={{ color: 'var(--text)' }}>Raza</span>
            </h1>

            {/* Typewriter roles */}
            <div
              className={`${cls} font-mono text-lg sm:text-xl mb-6 min-h-[2rem]`}
              style={{ ...sty(200), color: 'var(--accent)' }}
            >
              <TypeWriter strings={ROLES} />
            </div>

            {/* Bio */}
            <p
              className={`${cls} font-inter text-base leading-relaxed max-w-lg mb-8`}
              style={{ ...sty(300), color: 'var(--dimmed)' }}
            >
              Building intelligent systems for global enterprises. Specializing in
              geospatial optimization, NLP, and satellite-powered market intelligence.
            </p>

            {/* CTAs */}
            <div className={`${cls} flex flex-wrap gap-4 mb-8`} style={sty(400)}>
              <a
                href="#work"
                className="px-6 py-3 font-syne font-bold text-sm rounded-md hover:opacity-90 transition-opacity duration-200"
                style={{ background: 'var(--accent)', color: '#080a0c' }}
              >
                View My Work
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 font-syne font-bold text-sm rounded-md border transition-all duration-200 hover:border-accent hover:text-accent"
                style={{ border: '1px solid var(--border)', color: 'var(--dimmed)' }}
              >
                Download CV
              </a>
            </div>

            {/* Social links */}
            <div className={`${cls} flex items-center gap-6`} style={sty(500)}>
              {[
                { label: 'GitHub',   href: 'https://github.com/Hassan6678' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/hassan-raza-cs' },
                { label: 'Upwork',   href: 'https://upwork.com/freelancers/~012bd9ba4b97d2b072' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs transition-colors duration-200 hover:text-accent"
                  style={{ color: 'var(--muted)' }}
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>

          {/* ── Right column ─────────────────────────────────────────────── */}
          <div className={`${cls} relative pb-16`} style={sty(200)}>

            {/* Photo container */}
            <div
              className="relative w-full aspect-[3/4] max-w-xs mx-auto rounded-lg overflow-hidden"
              style={{ border: '2px solid var(--border)' }}
            >
              <Image
                src="/images/hassan-photo.png"
                alt="Hassan Raza"
                fill
                className="object-cover"
                style={{ filter: 'grayscale(20%)' }}
                priority
              />

              {/* Accent duotone overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(232,255,71,0.07), transparent 55%)',
                }}
              />
            </div>

            {/* Floating terminal window — VS Code dark theme */}
            <div
              className="absolute -bottom-4 -left-4 lg:-left-12 w-[270px] sm:w-[305px] rounded-lg overflow-hidden z-10"
              style={{
                background: '#0d1117',
                border: '1px solid var(--border)',
                boxShadow: '0 24px 64px rgba(0,0,0,0.7)',
              }}
            >
              {/* Title bar */}
              <div
                className="flex items-center gap-[6px] px-3 py-2.5"
                style={{
                  background: '#161b22',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <span className="w-3 h-3 rounded-full dot-red" />
                <span className="w-3 h-3 rounded-full dot-yellow" />
                <span className="w-3 h-3 rounded-full dot-green" />
                <span
                  className="font-mono text-xs ml-2"
                  style={{ color: 'var(--muted)' }}
                >
                  territory_cluster.py
                </span>
              </div>

              {/* Code */}
              <pre
                className="font-mono text-[10px] leading-[1.75] p-4 overflow-x-auto"
                style={{ color: '#8b949e' }}
              >
                <code>
                  {TERMINAL_CODE.split('\n').map((line, i) => {
                    if (line.startsWith('#')) {
                      return <span key={i} style={{ color: '#6e7681' }}>{line}{'\n'}</span>
                    }
                    if (/^(from|import|def|return)\b/.test(line)) {
                      const kw = line.match(/^(\s*)(from|import|def|return)/)
                      if (kw) {
                        return (
                          <span key={i}>
                            {line.slice(0, kw.index! + kw[1].length)}
                            <span style={{ color: '#ff7b72' }}>{kw[2]}</span>
                            {line.slice(kw.index! + kw[0].length)}
                            {'\n'}
                          </span>
                        )
                      }
                    }
                    return <span key={i}>{line}{'\n'}</span>
                  })}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade-out */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #080a0c, transparent)' }}
      />
    </section>
  )
}
