'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import TypeWriter from '@/components/ui/TypeWriter'

const ROLES = [
  'Machine Learning Engineer',
  'Data Scientist',
  'Geospatial AI Specialist',
  'NLP Engineer',
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
    <section className="relative min-h-[90vh] flex items-center py-20 overflow-hidden">
      {/* Decorative stars */}
      <svg className="absolute top-20 right-[15%] w-6 h-6 opacity-40" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z" fill="#7c5cfc" /></svg>
      <svg className="absolute bottom-32 left-[8%] w-10 h-10 opacity-20" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z" fill="#38bdf8" /></svg>
      <svg className="absolute top-40 left-[20%] w-4 h-4 opacity-30" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z" fill="#7c5cfc" /></svg>

      <div className="relative max-w-7xl mx-auto w-full px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left */}
          <div>
            <p className={`${show} font-inter text-sm mb-4`} style={{ ...d(0), color: 'var(--dimmed)' }}>
              This is your
            </p>
            <p className={`${show} font-inter text-sm mb-2`} style={{ ...d(50), color: 'var(--dimmed)' }}>
              ML Engineer &amp; Data Scientist
            </p>

            <h1
              className={`${show} font-syne font-extrabold leading-[1.05] mb-2`}
              style={{ ...d(100), fontSize: 'clamp(40px, 7vw, 72px)', color: 'var(--text)' }}
            >
              Hassan Raza
            </h1>

            {/* Typewriter */}
            <div className={`${show} mb-6 min-h-[2rem]`} style={{ ...d(200), color: 'var(--accent)' }}>
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
            <div className={`${show} flex flex-wrap gap-4`} style={d(400)}>
              <a href="#contact" className="btn-primary">
                Discuss for Projects
              </a>
              <a href="#work" className="btn-ghost">
                View Portfolios <span className="text-lg">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right — photo + badge */}
          <div className={`${show} relative flex justify-center`} style={d(200)}>
            <div className="relative">
              {/* Photo */}
              <div
                className="relative w-[300px] h-[370px] sm:w-[340px] sm:h-[420px] rounded-2xl overflow-hidden"
                style={{ border: '2px solid var(--border)' }}
              >
                <Image
                  src="/images/hassan-photo.png"
                  alt="Hassan Raza"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Bottom gradient */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,11,24,0.7) 0%, transparent 40%)' }} />
              </div>

              {/* Rotating badge */}
              <div className="absolute -right-6 top-1/3 w-24 h-24 sm:w-28 sm:h-28">
                <div className="relative w-full h-full">
                  {/* Rotating text ring */}
                  <svg className="spin-slow w-full h-full" viewBox="0 0 120 120">
                    <defs>
                      <path id="circlePath" d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" />
                    </defs>
                    <text fill="#7c5cfc" fontSize="10" fontWeight="600" letterSpacing="3">
                      <textPath href="#circlePath">
                        SKILLED IN ML &bull; DATA SCIENCE &bull;
                      </textPath>
                    </text>
                  </svg>
                  {/* Center star */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z" fill="#7c5cfc" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Decorative star bottom-left */}
              <svg className="absolute -bottom-4 -left-6 w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z" fill="#38bdf8" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
