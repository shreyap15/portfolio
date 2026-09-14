import { useState } from 'react'
import type { ResearchStrand } from '../../types/content'
const positions = [
  [70, 32],
  [230, 32],
  [230, 110],
  [70, 110],
  [70, 188],
]
export default function Strand({ strands, workId }: { strands: ResearchStrand[]; workId: string }) {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number[]>([])
  const [message, setMessage] = useState('Select the concepts in order to connect the method.')
  const strand = strands[current]
  const complete = selected.length === strand.nodes.length
  function choose(index: number) {
    if (complete) return
    if (index === selected[selected.length - 1]) {
      setSelected(selected.slice(0, -1))
      setMessage('Last connection removed.')
      return
    }
    if (index !== selected.length) {
      setMessage(`Next, select ${strand.nodes[selected.length].toLowerCase()}.`)
      return
    }
    setSelected([...selected, index])
    setMessage(
      index === strand.nodes.length - 1
        ? strand.result
        : `Connected ${strand.nodes[index].toLowerCase()}.`,
    )
  }
  function reset() {
    setSelected([])
    setMessage('Select the concepts in order to connect the method.')
  }
  return (
    <div className="strand-widget" aria-label={`${workId} research connections`}>
      {strands.length > 1 && (
        <div className="strand-tabs">
          {strands.map((item, i) => (
            <button
              key={item.id}
              aria-pressed={i === current}
              onClick={() => {
                setCurrent(i)
                reset()
              }}
            >
              {item.title}
            </button>
          ))}
        </div>
      )}
      <div className={`strand-board ${complete ? 'complete' : ''}`}>
        <svg viewBox="0 0 300 220" preserveAspectRatio="none" aria-hidden="true">
          <polyline points={selected.map((index) => positions[index].join(',')).join(' ')} />
        </svg>
        {strand.nodes.map((node, index) => (
          <button
            key={`${strand.id}-${node}`}
            className={`strand-node ${selected.includes(index) ? 'connected' : ''}`}
            aria-pressed={selected.includes(index)}
            onClick={() => choose(index)}
            style={{ left: `${positions[index][0] / 3}%`, top: `${positions[index][1] / 2.2}%` }}
          >
            <small>{selected.includes(index) ? '✓' : index + 1}</small>
            {node}
          </button>
        ))}
      </div>
      <div className="strand-actions">
        <button
          className="button"
          onClick={() => {
            setSelected(strand.nodes.map((_, i) => i))
            setMessage(strand.result)
          }}
        >
          Show connections
        </button>
        <button className="strand-reset" onClick={reset}>
          Reset
        </button>
        <span>
          {selected.length}/{strand.nodes.length}
        </span>
      </div>
      <p className={`strand-result ${complete ? 'complete' : ''}`} role="status">
        {message}
      </p>
    </div>
  )
}
