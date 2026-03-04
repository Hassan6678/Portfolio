'use client'

import { useInView } from '@/hooks/useInView'

const stats = [
  { value: '4+',  label: 'Years of Experience' },
  { value: '12+', label: 'Enterprise Clients' },
  { value: '33',  label: 'GitHub Repositories' },
  { value: '3',   label: 'Domains (ML · NLP · GeoSpatial)' },
]

const clients = ['BAT', 'Nielsen', 'EBM', 'P&G', 'Unilever', 'Red Bull', 'Jazz', 'PMI']

export default function About() {
  const { ref: headRef, inView: headIn } = useInView<HTMLDivElement>()
  const { ref: leftRef, inView: leftIn } = useInView<HTMLDivElement>()
  const { ref: rightRef, inView: rightIn } = useInView<HTMLDivElement>()
  const { ref: clientRef, inView: clientIn } = useInView<HTMLDivElement>()

  return (
    <section id="about" className="py-24 px-6" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="mx-auto max-w-7xl">

        {/* Section label */}
        <div
          ref={headRef}
          className={`fade-up ${headIn ? 'visible' : ''} mb-16`}
        >
          <div className="flex items-center gap-4 mb-3">
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
              // about
            </span>
            <span className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          </div>
          <h2 className="font-syne font-extrabold text-4xl sm:text-5xl" style={{ color: 'var(--text)' }}>
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — bio */}
          <div
            ref={leftRef}
            className={`fade-up ${leftIn ? 'visible' : ''}`}
          >
            <p
              className="font-inter text-lg leading-relaxed mb-6"
              style={{ color: 'var(--dimmed)' }}
            >
              I&apos;m a Machine Learning Engineer and Data Scientist based in Lahore,
              Pakistan with 4+ years of experience delivering intelligent solutions for
              global clients including BAT, Nielsen, EBM, P&amp;G, Unilever, and Red Bull.
            </p>
            <p
              className="font-inter text-lg leading-relaxed"
              style={{ color: 'var(--dimmed)' }}
            >
              I specialize in geospatial optimization, NLP, computer vision, and scalable
              data pipelines — building systems that turn complex raw data into measurable
              business impact.
            </p>

            {/* Status indicator */}
            <div
              className="flex items-center gap-3 mt-8 p-4 rounded-lg"
              style={{ background: 'var(--surface2)', border: '1px solid var(--border)' }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0 status-pulse"
                style={{ background: 'var(--green)' }}
              />
              <span className="font-mono text-xs" style={{ color: 'var(--dimmed)' }}>
                <span style={{ color: 'var(--muted)' }}>Currently · </span>
                <span style={{ color: 'var(--text)' }}>ML Scientist @ AiSight.ai</span>
                <span style={{ color: 'var(--muted)' }}> · </span>
                <span style={{ color: 'var(--green)' }}>Open to freelance</span>
              </span>
            </div>
          </div>

          {/* Right — stats */}
          <div
            ref={rightRef}
            className={`fade-up delay-200 ${rightIn ? 'visible' : ''}`}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="p-5 rounded-lg hover:border-accent/30 transition-colors duration-300"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <div
                    className="font-syne font-extrabold text-4xl mb-1"
                    style={{ color: 'var(--accent)' }}
                  >
                    {s.value}
                  </div>
                  <div className="font-mono text-xs leading-tight" style={{ color: 'var(--muted)' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client logo strip */}
        <div
          ref={clientRef}
          className={`fade-up delay-300 ${clientIn ? 'visible' : ''} mt-14 pt-10`}
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p className="font-mono text-xs tracking-widest uppercase mb-5" style={{ color: 'var(--muted)' }}>
            // clients &amp; collaborators
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {clients.map((c, i) => (
              <span
                key={c}
                className="font-syne font-bold text-sm"
                style={{ color: i % 2 === 0 ? 'var(--dimmed)' : 'var(--muted)' }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
