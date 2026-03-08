'use client'

import { useInView } from '@/hooks/useInView'

const highlights = [
  {
    label: 'Retail Intelligence',
    title: 'Machine learning for market visibility',
    body: 'Built analytics systems that turn outlet-level and market data into practical signals for market share, route performance, sales opportunity, and coverage planning.',
  },
  {
    label: 'Geospatial + Forecasting',
    title: 'Operational planning backed by data',
    body: 'Delivered territory clustering, forecasting, and spatial modeling workflows that help teams align field operations with expected demand and real geographic constraints.',
  },
  {
    label: 'Freelance Delivery',
    title: 'Trusted execution for international clients',
    body: 'Maintained a 100% Job Success score on Upwork with repeat client work across forecasting, data pipelines, model refinement, and ML problem-solving engagements.',
  },
]

function MetricChip({ value, label }: { value: string; label: string }) {
  return (
    <span
      className="font-mono text-[10px] px-3 py-1 rounded-full"
      style={{ color: 'var(--accent)', background: 'var(--accent-dim)', border: '1px solid rgba(232,255,71,0.2)' }}
    >
      {value} {label}
    </span>
  )
}

function HighlightCard({ item, index }: { item: typeof highlights[number]; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`fade-up ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className="relative p-7 sm:p-8 h-full transition-colors duration-200"
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 16,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(232,255,71,0.3)' }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)' }}
      >
        <span
          className="inline-flex font-mono text-[10px] uppercase tracking-[0.24em] mb-5"
          style={{ color: 'var(--accent)' }}
        >
          {item.label}
        </span>

        <h3 className="font-syne font-bold text-xl mb-3 leading-snug" style={{ color: 'var(--text)' }}>
          {item.title}
        </h3>
        <p className="font-inter text-sm leading-7" style={{ color: 'var(--dimmed)' }}>
          {item.body}
        </p>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { ref: headRef, inView: headIn } = useInView<HTMLDivElement>()

  return (
    <section id="impact" className="py-24 px-6" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className={`fade-up ${headIn ? 'visible' : ''} text-center mb-16`}>
          <p className="section-label mb-3">Selected Impact</p>
          <h2 className="section-title font-syne">
            Where the work creates <span>value</span>
          </h2>
          <p className="font-inter text-sm mt-4 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--muted)' }}>
            A portfolio built around business-facing machine learning: better visibility, stronger planning,
            and reliable delivery across client and product environments.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <MetricChip value="100%" label="Job Success" />
            <MetricChip value="Top Rated" label="Upwork" />
            <MetricChip value="14 Jobs" label="653 Hours" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((t, i) => (
            <HighlightCard key={t.title} item={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
