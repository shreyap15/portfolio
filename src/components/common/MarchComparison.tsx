import { useState } from 'react'
import { marchMetrics } from '../../data/marchMetrics'
export default function MarchComparison() {
  const [pipeline, setPipeline] = useState<'women' | 'men'>('women')
  const data = marchMetrics[pipeline]
  const best = Math.min(...data.rows.map((row) => row.value))
  return (
    <figure className="march-comparison">
      <div className="comparison-heading">
        <div>
          <strong>Held-out log loss</strong>
          <span>Lower is better</span>
        </div>
        <div className="comparison-controls" aria-label="Tournament pipeline">
          {(['women', 'men'] as const).map((key) => (
            <button key={key} aria-pressed={pipeline === key} onClick={() => setPipeline(key)}>
              {marchMetrics[key].label}
            </button>
          ))}
        </div>
      </div>
      <div className="model-bars" aria-live="polite">
        {data.rows.map((row) => (
          <div className={`model-bar ${row.value === best ? 'best' : ''}`} key={row.model}>
            <span>
              {row.model}
              {row.value === best && <small> · lowest</small>}
            </span>
            <div className="bar-track" aria-hidden="true">
              <div style={{ width: `${(row.value / 0.85) * 100}%` }} />
            </div>
            <strong>{row.value.toFixed(4)}</strong>
          </div>
        ))}
      </div>
      <div className="chart-axis" aria-hidden="true">
        <span>0</span>
        <span>0.85</span>
      </div>
      <figcaption>
        {data.label} · saved holdout results for the three core models. Each pipeline is a separate
        evaluation run.{' '}
        <a href={data.source} target="_blank" rel="noopener noreferrer">
          Source CSV ↗
        </a>
      </figcaption>
    </figure>
  )
}
