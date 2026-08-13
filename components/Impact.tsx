import Reveal from '@/components/ui/Reveal'
import { impactMetrics } from '@/data/site'

/** Rule fill per metric — hand-tuned so the band reads as a rising sequence. */
const metricWidths = ['48%', '61%', '74%', '100%']

export default function Impact() {
  return (
    <section id="impact" className="impact-section">
      <div className="container-page">
        <Reveal className="card-rise">
          <div className="impact-band">
            <div className="impact-top">
              <div>
                <p className="section-label section-label--dark">System output / verified scope</p>
                <h2>Evidence over<br /><em>adjectives.</em></h2>
              </div>
              <div className="impact-signal" aria-label="Operational signal active">
                <span>Operational signal</span><strong>ACTIVE</strong><i />
              </div>
            </div>

            <div className="impact-grid">
              {impactMetrics.map((metric, i) => (
                <Reveal key={metric.label} delayMs={120 + i * 90}>
                  <div className="impact-metric">
                    <span>0{i + 1}</span>
                    <strong>{metric.value}</strong>
                    <h3>{metric.label}</h3>
                    <p>{metric.detail}</p>
                    <div className="metric-rule">
                      <i style={{ width: metricWidths[i] ?? '100%' }} />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
