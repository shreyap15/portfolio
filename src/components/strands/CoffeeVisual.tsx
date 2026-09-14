import { useState } from 'react'
import { coffeePeriods, coffeeModelSteps, coffeeFindings } from '../../data/coffee'
export default function CoffeeVisual() {
  const [view, setView] = useState<'econometrics' | 'ml'>('econometrics')
  return (
    <div className="coffee-visual">
      <div className="coffee-switch" aria-label="Coffee research visual">
        <button aria-pressed={view === 'econometrics'} onClick={() => setView('econometrics')}>
          ECONOMETRICS
        </button>
        <button aria-pressed={view === 'ml'} onClick={() => setView('ml')}>
          MACHINE LEARNING
        </button>
      </div>
      <div className="coffee-visual-body" aria-live="polite">
        {view === 'econometrics' ? (
          <>
            <p className="country-key">
              <span>
                El Salvador <strong>Treatment</strong>
              </span>
              <span>
                Costa Rica <strong>Control</strong>
              </span>
            </p>
            <ol className="coffee-timeline">
              {coffeePeriods.map((period) => (
                <li key={period.years}>
                  <strong>{period.years}</strong>
                  <span>{period.label}</span>
                </li>
              ))}
            </ol>
          </>
        ) : (
          <>
            <ol className="coffee-model-flow">
              {coffeeModelSteps.map((step) => (
                <li key={step.heading}>
                  <strong>{step.heading}</strong>
                  <span>{step.detail}</span>
                </li>
              ))}
            </ol>
            <details className="coffee-findings">
              <summary>Modeled regional patterns</summary>
              {coffeeFindings.map((item) => (
                <p key={item.country}>
                  <strong>{item.country}</strong> {item.finding}
                </p>
              ))}
              <p>Model projections describe associations, not established causal effects.</p>
            </details>
          </>
        )}
      </div>
    </div>
  )
}
