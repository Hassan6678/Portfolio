'use client'

import { useInView } from '@/hooks/useInView'

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '12+', label: 'Enterprise Clients' },
  { value: '33', label: 'GitHub Repos' },
  { value: '3', label: 'Domains' },
]

const clients = ['BAT', 'Nielsen', 'EBM', 'P&G', 'Unilever', 'Red Bull', 'Jazz', 'PMI']

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
                I&apos;m a Machine Learning Engineer and Data Scientist based in Lahore,
                Pakistan with 4+ years of experience delivering intelligent solutions for
                global clients including BAT, Nielsen, EBM, P&amp;G, Unilever, and Red Bull.
              </p>
              <p className="font-inter text-base leading-relaxed mb-8" style={{ color: 'var(--dimmed)' }}>
                I specialize in geospatial optimization, NLP, computer vision, and scalable
                data pipelines &mdash; building systems that turn complex raw data into measurable
                business impact.
              </p>

              {/* Client marquee strip */}
              <div className="pt-6" style={{ borderTop: '1px solid var(--border)' }}>
                <p className="font-mono text-[11px] text-center uppercase tracking-widest mb-4" style={{ color: 'var(--muted)' }}>
                  Trusted by global enterprises
                </p>
                <div className="marquee-wrapper overflow-hidden">
                  <div className="marquee-track">
                    {[...clients, ...clients].map((c, i) => (
                      <span key={i} className="flex items-center gap-4 shrink-0">
                        <span className="font-mono text-xs font-medium whitespace-nowrap" style={{ color: 'var(--muted)' }}>{c}</span>
                        <span className="text-[8px]" style={{ color: 'var(--accent)' }}>&#9670;</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
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
          </div>
        </div>
      </div>
    </section>
  )
}
