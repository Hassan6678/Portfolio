import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'
import { projects } from '@/data/projects'

export default function Research() {
  const studies = projects.filter((p) => p.kind === 'research')
  if (studies.length === 0) return null

  return (
    <section id="research" className="py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="editorial-heading">
            <div>
              <p className="section-label">Research / contract engagements</p>
              <h2>Papers turned into<br /><em>working pipelines.</em></h2>
            </div>
            <p>Method-heavy work delivered for research clients — time series classification, speech evaluation, and generative music.</p>
          </div>
        </Reveal>

        <div className="research-grid">
          {studies.map((project, i) => (
            <Reveal key={project.id} delayMs={i * 80}>
              <article className="research-card">
                <figure className="research-plate">
                  <Image
                    src={project.image}
                    alt={`${project.title} method diagram`}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-contain"
                  />
                  <figcaption>Fig. 0{i + 1}</figcaption>
                </figure>

                <p className="research-kicker">
                  <span>{project.company}</span>
                  {project.upworkRating ? <em>{project.upworkRating}</em> : null}
                </p>
                <h3>{project.title}</h3>
                <p className="research-body">{project.description}</p>

                <ul className="research-tags">
                  {project.tags.slice(0, 4).map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
