import Reveal from '@/components/ui/Reveal'
import { skillGroups } from '@/data/skills'
import { expertise, expertiseIntro } from '@/data/site'

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 sm:py-32">
      <div className="container-page">
        <div className="capability-layout">
          <Reveal className="capability-intro">
            <p className="section-label">{expertiseIntro.label} / operating model</p>
            <h2>Depth across the<br /><em>whole system.</em></h2>
            <p>{expertiseIntro.description}</p>
            <div className="process-line" aria-label="Delivery process">
              <span>Frame</span><i /> <span>Model</span><i /> <span>Deploy</span><i /> <span>Measure</span>
            </div>
          </Reveal>
          <div className="capability-list">
            {expertise.map((item, i) => (
              <Reveal key={item.title} delayMs={i * 45}>
                <article>
                  <span>0{i + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="toolkit">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delayMs={i * 60}>
              <div>
                <h3>{group.label}</h3>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
