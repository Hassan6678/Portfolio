'use client'

import { useInView } from '@/hooks/useInView'

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: 'Global', label: 'Client Work' },
  { value: 'Retail', label: '& FMCG Analytics' },
  { value: 'NLP', label: '+ Forecasting' },
  { value: '100%', label: 'Job Success' },
]

export default function About() {
  const { ref: headRef, inView: headIn } = useInView<HTMLDivElement>()
  const { ref: bodyRef, inView: bodyIn } = useInView<HTMLDivElement>()

  return (
    <section id="about" className="py-24 px-6" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headRef} className={`fade-up ${headIn ? 'visible' : ''} text-center mb-16`}>
          <p className="section-label mb-3">About Me</p>
          <h2 className="section-title font-syne">My <span>background</span></h2>
        </div>

        <div ref={bodyRef} className={`fade-up ${bodyIn ? 'visible' : ''}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Bio */}
            <div>
              <p className="font-inter text-base leading-relaxed mb-5" style={{ color: 'var(--dimmed)' }}>
                I&apos;m a Machine Learning Engineer and Data Scientist based in Pakistan,
                with experience building data-driven systems for international clients
                across retail, FMCG, and analytics-focused products.
              </p>
              <p className="font-inter text-base leading-relaxed mb-8" style={{ color: 'var(--dimmed)' }}>
                My work focuses on transforming complex datasets into practical business
                tools — from forecasting and geospatial modeling to NLP systems and
                production ETL pipelines. At AiSight.ai, I work on analytics platforms
                that help organizations understand market share, route performance,
                sales opportunities, and operational efficiency.
              </p>
              <p className="font-inter text-base leading-relaxed mb-8" style={{ color: 'var(--dimmed)' }}>
                I enjoy building systems that connect machine learning with business
                value: products that are not only technically strong, but also useful
                in real decision-making environments.
              </p>

              {/* Project scope strip */}
              <div className="pt-6" style={{ borderTop: '1px solid var(--border)' }}>
                <p className="font-mono text-[11px] text-center uppercase tracking-widest mb-4" style={{ color: 'var(--muted)' }}>
                  Worked across projects involving
                </p>
                <p className="font-inter text-sm text-center max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
                  retail intelligence, market analytics, territory planning, forecasting systems,
                  NLP tools, and production data pipelines.
                </p>
              </div>
            </div>

            {/* Stats — 5 items: 2+2+1 layout */}
            <div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {stats.slice(0, 4).map((s) => (
                  <div
                    key={s.label}
                    className="card-hover p-6 rounded-xl text-center"
                    style={{ background: 'var(--surface2)', border: '1px solid var(--border)' }}
                  >
                    <div className="font-syne font-extrabold text-4xl mb-1" style={{ color: 'var(--accent)' }}>
                      {s.value}
                    </div>
                    <div className="font-inter text-xs" style={{ color: 'var(--muted)' }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              {/* 5th stat — full width */}
              <div
                className="card-hover p-6 rounded-xl text-center"
                style={{ background: 'var(--surface2)', border: '1px solid var(--border)' }}
              >
                <div className="font-syne font-extrabold text-4xl mb-1" style={{ color: 'var(--accent)' }}>
                  {stats[4].value}
                </div>
                <div className="font-inter text-xs" style={{ color: 'var(--muted)' }}>
                  {stats[4].label}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
