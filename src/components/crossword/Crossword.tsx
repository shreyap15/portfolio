import { domains } from '../../data/domains'
import type { DomainId } from '../../types/content'
interface Props {
  active: DomainId | null
  selected: DomainId | null
  onSelect: (id: DomainId | null) => void
  onHover: (id: DomainId | null) => void
  work: { id: string; name: string }[]
}
export default function Crossword({ active, selected, onSelect, onHover, work }: Props) {
  const cells = new Map<
    string,
    { letter: string; row: number; col: number; ids: DomainId[]; number?: number }
  >()
  for (const word of domains)
    [...word.label].forEach((letter, index) => {
      const row = word.row + (word.direction === 'down' ? index : 0)
      const col = word.col + (word.direction === 'across' ? index : 0)
      const key = `${row}-${col}`
      const old = cells.get(key)
      cells.set(key, {
        letter,
        row,
        col,
        ids: [...(old?.ids ?? []), word.id],
        number: index === 0 ? word.number : old?.number,
      })
    })
  const related = domains.find((word) => word.id === active)?.related ?? []
  return (
    <div className="crossword-wrap">
      <div className="crossword" onMouseLeave={() => onHover(null)}>
        {[...cells.entries()].map(([key, cell]) => (
          <span
            aria-hidden="true"
            key={key}
            className={`crossword-cell ${active && cell.ids.includes(active) ? 'active' : ''}`}
            style={{ gridRow: cell.row + 1, gridColumn: cell.col + 1 }}
          >
            {cell.number && <small>{cell.number}</small>}
            {cell.letter}
          </span>
        ))}
        {domains.map((word) => (
          <button
            key={word.id}
            className={`crossword-word ${word.direction}`}
            aria-label={`Highlight ${word.label.toLowerCase()} work`}
            aria-pressed={selected === word.id}
            style={{
              gridRow: `${word.row + 1} / span ${word.direction === 'down' ? word.label.length : 1}`,
              gridColumn: `${word.col + 1} / span ${word.direction === 'across' ? word.label.length : 1}`,
            }}
            onMouseEnter={() => onHover(word.id)}
            onFocus={() => onHover(word.id)}
            onBlur={() => onHover(null)}
            onClick={() => onSelect(selected === word.id ? null : word.id)}
          />
        ))}
      </div>
      <div className="crossword-caption">
        <span className="tiny-label">Areas represented in my work</span>
        <div className="word-controls" aria-label="Highlight related work">
          {domains.map((word) => (
            <button
              key={word.id}
              aria-pressed={selected === word.id}
              onClick={() => onSelect(selected === word.id ? null : word.id)}
              onMouseEnter={() => onHover(word.id)}
              onMouseLeave={() => onHover(null)}
            >
              {word.id === 'ai' ? 'AI' : word.label.toLowerCase()}
            </button>
          ))}
        </div>
      </div>
      <div className="crossword-related" aria-live="polite">
        {active ? (
          <>
            <span>Related work: </span>
            {related.map((id) => (
              <a key={id} href={`#${id}`}>
                {work.find((item) => item.id === id)?.name} ↗
              </a>
            ))}
          </>
        ) : (
          <span>Hover or select a word to highlight related work.</span>
        )}
      </div>
    </div>
  )
}
