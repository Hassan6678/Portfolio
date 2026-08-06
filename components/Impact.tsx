import Reveal from '@/components/ui/Reveal'
import { impactMetrics } from '@/data/site'

/** Rule fill per metric — hand-tuned so the band reads as a rising sequence. */
const metricWidths = ['48%', '61%', '74%', '100%']

export default function Impact() {
  return (
    <section id="impact" className="impact-band">
      <div className="container-page">
        <div className="impact-top">
          <Reveal>
            <p className="section-label section-label--dark">System output / verified scope</p>
            <h2>Evidence over<br /><em>adjectives.</em></h2>
          </Reveal>
          <Reveal delayMs={80}>
            <div className="impact-signal" aria-label="Operational signal active">
              <span>Operational signal</span><strong>ACTIVE</strong><i />
            </div>
          </Reveal>
        </div>
        <div className="impact-grid">
          {impactMetrics.map((metric, i) => (
            <Reveal key={metric.label} delayMs={i * 70}>
              <div className="impact-metric">
                <span>0{i + 1}</span>
                <strong>{metric.value}</strong>
                <h3>{metric.label}</h3>
                <p>{metric.detail}</p>
                <div className="metric-rule"><i style={{ width: metricWidths[i] ?? '100%' }} /></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
