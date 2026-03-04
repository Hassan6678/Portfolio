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

      <div className="relative max-w-7xl mx-auto w-full px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left */}
          <div>
            <p className={`${show} font-mono text-xs mb-4`} style={{ ...d(0), color: 'var(--accent)' }}>
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
              className={`${show} font-inter text-base leading-relaxed max-w-md mb-8`}
              style={{ ...d(300), color: 'var(--dimmed)' }}
            >
              Building intelligent systems for global enterprises. From territory optimization
              and satellite-powered market insights to NLP chatbots and deep learning pipelines.
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

            {/* Social links */}
            <div className={`${show} flex items-center gap-6`} style={d(500)}>
              {socialLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs transition-colors duration-200 hover:text-accent flex items-center gap-1"
                  style={{ color: 'var(--dimmed)' }}
                >
                  {l.label} <span>&#8599;</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — photo + terminal window */}
          <div className={`${show} relative flex justify-center`} style={d(200)}>
            <div className="relative">
              {/* Photo — contained size like purple version */}
              <div
                className="relative w-[300px] h-[370px] sm:w-[340px] sm:h-[420px] rounded-2xl overflow-hidden"
                style={{ border: '1px solid var(--border)' }}
              >
                <Image
                  src="/images/hassan-photo.png"
                  alt="Hassan Raza"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--bg) 0%, transparent 40%)' }} />
              </div>

              {/* Terminal window — overlapping bottom */}
              <div
                className="absolute -bottom-6 -left-6 right-6 rounded-lg overflow-hidden shadow-2xl"
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
