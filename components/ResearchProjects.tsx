'use client'

import { useInView } from '@/hooks/useInView'

const researchProjects = [
  {
    company: 'Research Project',
    companyColor: '#58a6ff',
    category: 'advanced ai',
    title: 'Large-Scale Time Series Classification (Hydra + MultiRocket)',
    description:
      'Implemented and optimized state-of-the-art time series classification pipelines using the ROCKET family, including Hydra and MultiRocket, for large benchmark datasets such as UCR109. The work focused on improving classification accuracy while maintaining computational efficiency through feature transformations, kernel-level optimizations, and hybrid modeling strategies.',
    points: [
      'Implemented Hydra and MultiRocket pipelines',
      'Evaluated models on UCR benchmark datasets',
      'Explored wavelet transforms and kernel optimization',
      'Improved runtime efficiency and model accuracy',
    ],
    tags: ['Python', 'Hydra', 'MultiRocket', 'Time Series Classification', 'NumPy', 'Scikit-learn'],
    placeholderGradient: 'linear-gradient(135deg, #102133 0%, #0a121b 100%)',
  },
  {
    company: 'Advanced AI Project',
    companyColor: '#14a800',
    category: 'research',
    title: 'AI-Assisted Music Composition Engine',
    description:
      'Developing a machine-learning powered system for automated music arrangement and voice reduction in musical scores. The project processes MusicXML data and generates simplified, playable arrangements through rule-based transformation and AI-assisted composition workflows.',
    points: [
      'Voice reduction from complex compositions',
      'MusicXML parsing and transformation',
      'Harmony analysis and arrangement rules',
      'ML-assisted music generation system',
    ],
    tags: ['Python', 'MusicXML', 'AI Music Generation', 'Algorithmic Composition'],
    placeholderGradient: 'linear-gradient(135deg, #152010 0%, #0a120d 100%)',
  },
]

function ResearchCard({
  project,
  index,
}: {
  project: (typeof researchProjects)[number]
  index: number
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.08 })

  return (
    <div
      ref={ref}
      className={`fade-up ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <article className="project-card group h-full" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
        <div className="relative w-full aspect-[16/10] overflow-hidden">
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: project.placeholderGradient }}
          >
            <div className="text-center px-6">
              <div className="font-syne font-bold text-lg opacity-30" style={{ color: project.companyColor }}>
                {project.title}
              </div>
            </div>
          </div>
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(8,10,12,0.02) 0%, rgba(8,10,12,0.32) 100%)',
            }}
          />
        </div>

        <div className="p-5 sm:p-6 flex flex-col h-full">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="text-[10px] font-medium font-mono px-2.5 py-1 rounded-full uppercase tracking-wider"
                style={{ color: project.companyColor, background: `${project.companyColor}15`, border: `1px solid ${project.companyColor}30` }}
              >
                {project.company}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
                {project.category}
              </span>
            </div>
          </div>

          <h3 className="font-syne font-bold text-[18px] leading-snug mb-3 group-hover:text-accent transition-colors" style={{ color: 'var(--text)' }}>
            {project.title}
          </h3>

          <p className="font-inter text-sm leading-7 mb-5" style={{ color: 'var(--muted)' }}>
            {project.description}
          </p>

          <ul className="space-y-2 mb-5">
            {project.points.map((point) => (
              <li key={point} className="flex gap-3 font-inter text-sm leading-relaxed" style={{ color: 'var(--dimmed)' }}>
                <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: project.companyColor }} />
                {point}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag) => (
              <span key={tag} className="font-mono text-[10px] px-2.5 py-1 rounded-md" style={{ color: 'var(--dimmed)', background: 'var(--surface2)', border: '1px solid var(--border)' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}

export default function ResearchProjects() {
  const { ref: headRef, inView: headIn } = useInView<HTMLDivElement>()

  return (
    <section id="research-projects" className="py-24 px-6" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className={`fade-up ${headIn ? 'visible' : ''} text-center mb-16`}>
          <p className="section-label mb-3">Research</p>
          <h2 className="section-title font-syne">Research &amp; <span>Advanced AI Projects</span></h2>
          <p className="font-inter text-sm mt-4 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--muted)' }}>
            Experimental and research-oriented work spanning advanced time series modeling,
            algorithmic optimization, and AI-assisted creative systems.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-7 items-stretch">
          {researchProjects.map((project, index) => (
            <ResearchCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}