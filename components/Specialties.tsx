'use client'

import { useInView } from '@/hooks/useInView'

const specialties = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7c5cfc" strokeWidth="1.5">
        <path d="M12 2a4 4 0 014 4v1a4 4 0 01-8 0V6a4 4 0 014-4z" />
        <path d="M6 10h12l-1 8H7l-1-8z" />
        <path d="M9 22h6" /><path d="M12 18v4" />
      </svg>
    ),
    title: 'Machine Learning',
    desc: 'End-to-end ML pipelines from data collection to production models. Predictive modelling, classification, and regression.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7c5cfc" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: 'Computer Vision',
    desc: 'Image classification, object detection, OCR, and satellite imagery analysis for market intelligence.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7c5cfc" strokeWidth="1.5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        <path d="M8 9h8" /><path d="M8 13h4" />
      </svg>
    ),
    title: 'NLP & LLM Chatbots',
    desc: 'Natural language processing, LLM-powered chatbots, text generation, and business insight extraction.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7c5cfc" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" /><path d="M12 2a15 15 0 014 10 15 15 0 01-4 10 15 15 0 01-4-10A15 15 0 0112 2z" />
      </svg>
    ),
    title: 'Geospatial AI',
    desc: 'Territory clustering, route optimization, population density estimation, and location intelligence.',
  },
]

export default function Specialties() {
  const { ref: headRef, inView: headIn } = useInView<HTMLDivElement>()

  return (
    <section className="py-24 px-6" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headRef} className={`fade-up ${headIn ? 'visible' : ''} text-center mb-16`}>
          <p className="section-label mb-3">Speciality</p>
          <h2 className="section-title font-syne">
            My <span>specialities</span>
          </h2>
          <p className="font-inter text-sm mt-4 max-w-md mx-auto" style={{ color: 'var(--muted)' }}>
            Four years of hands-on engineering across the full ML lifecycle.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((s, i) => (
            <SpecialtyCard key={s.title} item={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SpecialtyCard({ item, index }: { item: typeof specialties[number]; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`fade-up ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className="card-hover p-8 rounded-xl text-center h-full"
        style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-5" style={{ background: 'var(--accent-dim)' }}>
          {item.icon}
        </div>
        <h3 className="font-syne font-bold text-base mb-3" style={{ color: 'var(--text)' }}>
          {item.title}
        </h3>
        <p className="font-inter text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          {item.desc}
        </p>
      </div>
    </div>
  )
}
