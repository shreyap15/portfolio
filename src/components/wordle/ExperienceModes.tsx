import { useState } from 'react'
import type { Work } from '../../types/content'
export default function ExperienceModes({ work }: { work: Work }) {
  const [selected, setSelected] = useState(0)
  const [visited, setVisited] = useState<number[]>([0])
  if (!work.modes) return null
  const mode = work.modes[selected]
  return (
    <div className="experience-modes letter-modes">
      <div className="mode-buttons" aria-label={`${work.name} supporting details`}>
        {work.modes.map((item, index) => (
          <button
            key={item.label}
            className={visited.includes(index) ? 'visited' : ''}
            aria-pressed={index === selected}
            aria-controls={`${work.id}-detail`}
            onClick={() => {
              setSelected(index)
              setVisited((previous) => (previous.includes(index) ? previous : [...previous, index]))
            }}
          >
            <span className="sr-only">{item.label}</span>
            <span className="letter-row" aria-hidden="true">
              {[...item.label].map((letter, i) => (
                <span key={i} style={{ animationDelay: `${i * 45}ms` }}>
                  {letter}
                </span>
              ))}
            </span>
          </button>
        ))}
      </div>
      <div id={`${work.id}-detail`} className="mode-reveal" aria-live="polite" aria-atomic="true">
        <span className="reveal-marker" aria-hidden="true">
          ✓
        </span>
        <div>
          <p className="mode-detail">{mode.detail}</p>
          <ul className="detail-facts">
            {mode.facts?.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
