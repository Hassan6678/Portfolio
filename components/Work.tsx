import ProjectMedia from '@/components/ui/ProjectMedia'
import Reveal from '@/components/ui/Reveal'
import { projects } from '@/data/projects'

export default function Work() {
  const stories = projects.slice(0, 3)
  const archive = projects.slice(3)

  return (
    <section id="work" className="work-section py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <div className="editorial-heading">
            <p className="section-label">Selected systems / 2021—now</p>
            <h2>From messy signals<br />to <em>operational leverage.</em></h2>
            <p>Three production stories across market intelligence, field planning, and retail decision systems.</p>
          </div>
        </Reveal>

        <div className="case-stack">
          {stories.map((project, i) => (
            <Reveal key={project.id} delayMs={i * 60}>
              <article className={`case-study ${i % 2 ? 'case-study--reverse' : ''}`}>
                <div className="case-media">
                  <ProjectMedia project={project} priority={i === 0} />
                  <span className="case-number">0{i + 1}</span>
                </div>
                <div className="case-copy">
                  <p className="case-company">{project.company} · {project.kind}</p>
                  <h3>{project.title}</h3>
                  <div className="case-flow">
                    <div><span>Problem</span><p>{project.description.split('.')[0]}.</p></div>
                    <div><span>System</span><p>{project.tags.slice(0, 4).join(' · ')}</p></div>
                  </div>
                  {project.metrics ? (
                    <dl className="case-metrics">
                      {project.metrics.slice(0, 3).map((metric) => (
                        <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>
                      ))}
                    </dl>
                  ) : (
                    <p className="case-outcome">Built for territory-level commercial decision making.</p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="archive">
            <div className="archive-heading">
              <p className="section-label">Project archive</p>
              <p>Additional commercial and research engagements.</p>
            </div>
            <ol>
              {archive.map((project, i) => (
                <li key={project.id}>
                  <span>{String(i + 4).padStart(2, '0')}</span>
                  <strong>{project.title}</strong>
                  <small>{project.company}</small>
                  <em>{project.tags.slice(0, 2).join(' / ')}</em>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
