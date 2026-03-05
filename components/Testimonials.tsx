'use client'

import { useInView } from '@/hooks/useInView'

const testimonials = [
  {
    quote: "Hassan is AMAZING. He works hard, fast and is such an expert in what he does. I have hired him 3 times and will not stop. If you want EXCELLENCE \u2014 hire Hassan Raza.",
    client: 'Repeat Client',
    stars: 5,
    project: 'AI-Based Lottery Number Generator',
  },
  {
    quote: "I have to say Hassan is so smart and very meticulous in everything he does. I hired him multiple times and he is worth every penny. If you want something done right \u2014 hire Hassan.",
    client: 'Repeat Client',
    stars: 5,
    project: 'Data Preprocessing & ML Pipeline',
  },
  {
    quote: "He quickly identified and fixed issues in our model while ensuring accuracy and performance were maintained. Communication was clear and they delivered on time. Highly recommended.",
    client: 'Verified Client',
    stars: 5,
    project: 'AI Model Bug Fix & Optimization',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: 'var(--accent)' }}>{'\u2605'}</span>
      ))}
    </span>
  )
}

function TestimonialCard({ item, index }: { item: typeof testimonials[number]; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`fade-up ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className="relative p-8 h-full transition-colors duration-200"
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 4,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(232,255,71,0.3)' }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)' }}
      >
        {/* Large quote mark */}
        <span
          className="absolute top-6 left-6 font-syne leading-none select-none pointer-events-none"
          style={{ fontSize: 80, color: 'var(--accent)', opacity: 0.3 }}
        >
          {'\u201C'}
        </span>

        <div className="relative z-10 pt-10">
          <p
            className="font-inter text-[15px] italic leading-relaxed mb-6"
            style={{ color: 'var(--dimmed)' }}
          >
            {item.quote}
          </p>

          <div className="flex items-center justify-between">
            <div>
              <div className="font-syne font-bold text-sm mb-1" style={{ color: 'var(--text)' }}>
                {item.client}
              </div>
              <div className="font-mono text-[10px]" style={{ color: 'var(--muted)' }}>
                {item.project}
              </div>
            </div>
            <StarRating count={item.stars} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { ref: headRef, inView: headIn } = useInView<HTMLDivElement>()

  return (
    <section id="testimonials" className="py-24 px-6" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headRef} className={`fade-up ${headIn ? 'visible' : ''} text-center mb-16`}>
          <p className="section-label mb-3">// Client Reviews</p>
          <h2 className="section-title font-syne">
            What clients <span>say</span>
          </h2>
          <p className="font-inter text-sm mt-4 max-w-lg mx-auto" style={{ color: 'var(--muted)' }}>
            100% Job Success Score &middot; Top Rated on Upwork &middot; 14 completed contracts
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.project} item={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
