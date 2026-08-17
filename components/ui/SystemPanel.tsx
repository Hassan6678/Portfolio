import type { SystemPanelData } from '@/data/systems'

interface SystemPanelProps {
  panel: SystemPanelData
  className?: string
}

/**
 * The hero's live artifact. Deliberately not an editor window — it reads as the
 * running system's own readout, which is closer to what the work actually is
 * than a screenshot of source code.
 */
export default function SystemPanel({ panel, className = '' }: SystemPanelProps) {
  const { band, axisMax } = panel.series
  const pct = (value: number) => `${(value / axisMax) * 100}%`

  return (
    <section className={`sys-panel ${className}`} aria-label={panel.title}>
      <header className="sys-panel__head">
        <span className="sys-panel__pulse" aria-hidden="true" />
        <span className="sys-panel__name">{panel.system}</span>
        <span className="sys-panel__context">{panel.context}</span>
      </header>

      <div className="sys-panel__body">
        <div className="sys-panel__main">
          <ol className="sys-panel__flow">
            {panel.stages.map((stage) => (
              <li key={stage.label} className={stage.active ? 'is-active' : undefined}>
                {stage.label}
                {stage.active ? <span className="sr-only"> (running)</span> : null}
              </li>
            ))}
          </ol>

          <dl className="sys-panel__stats">
            {panel.stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="sys-panel__series">
          <figcaption>
            <span>{panel.series.label}</span>
            <em>{panel.series.readout}</em>
          </figcaption>
          {/* Decorative: the readout beside the caption already carries the number,
              and the band is spelled out in the line underneath. */}
          <div className="sys-panel__plot" aria-hidden="true">
            <div className="sys-panel__bars">
              {panel.series.values.map((value, i) => (
                <i key={i} style={{ height: pct(value) }} />
              ))}
            </div>
            {/* Drawn over the bars, so "every week landed inside the window" is the
                thing you read rather than twelve unrelated columns. */}
            <span
              className="sys-panel__band"
              style={{ bottom: pct(band.min), height: pct(band.max - band.min) }}
            />
          </div>
          <p>{panel.series.unit}</p>
        </figure>
      </div>
    </section>
  )
}
