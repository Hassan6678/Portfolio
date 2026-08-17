import Reveal from '@/components/ui/Reveal'
import { aboutContent } from '@/data/site'

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-page">
        <div className="about-layout">
          <Reveal className="about-intro">
            <p className="section-label">{aboutContent.label} / operating context</p>
            <h2>
              {aboutContent.headline.lead}
              <br />
              <em>{aboutContent.headline.emphasis}</em>
            </h2>
          </Reveal>

          <Reveal delayMs={100} className="about-body">
            {aboutContent.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}

            <aside className="about-scope">
              <span>{aboutContent.scopeLabel}</span>
              <h3>{aboutContent.scope}</h3>
              <p>{aboutContent.basis}</p>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
