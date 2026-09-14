import { useReducer, useRef } from 'react'
import { connectionGroups, initialTiles } from '../../data/connections'
import { projects } from '../../data/projects'
import { boardReducer, initialState } from './state'
export default function Connections({ onHighlight }: { onHighlight: (ids: string[]) => void }) {
  const [state, dispatch] = useReducer(boardReducer, initialState)
  const firstTile = useRef<HTMLButtonElement>(null)
  const complete = state.solved.length === 4
  return (
    <div className="connections-panel">
      <div className="board-heading">
        <h3>Connections</h3>
        <button
          className="text-button"
          onClick={() => {
            dispatch({ type: 'reset' })
            onHighlight([])
            firstTile.current?.focus()
          }}
        >
          {complete ? 'Try again' : 'Try the board'}
        </button>
      </div>
      <p className="board-instructions">
        Find four groups of four related items. Need help? Try a hint.
      </p>
      <div className="connections-board">
        {connectionGroups
          .filter((group) => state.solved.includes(group.id))
          .map((group) => (
            <div className={`solved-group ${group.color}`} key={group.id}>
              <strong>✓ {group.title}</strong>
              <span>{group.terms.join(' · ')}</span>
              <p className="group-explanation">{group.explanation}</p>
              <div>
                {group.related.map((id) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => onHighlight(group.related)}
                    onFocus={() => onHighlight(group.related)}
                  >
                    {projects.find((project) => project.id === id)?.name} →
                  </a>
                ))}
              </div>
            </div>
          ))}
        {initialTiles
          .filter((tile) => !state.solved.includes(tile.groupId))
          .map((tile, index) => (
            <button
              ref={index === 0 ? firstTile : undefined}
              className={`connection-tile ${state.selected.includes(tile.id) ? 'selected' : ''} ${state.hinted.includes(tile.id) ? 'hinted' : ''}`}
              key={tile.id}
              aria-label={tile.label}
              aria-pressed={state.selected.includes(tile.id)}
              onClick={() => dispatch({ type: 'toggle', id: tile.id })}
            >
              {state.selected.includes(tile.id) && <span aria-hidden="true">✓ </span>}
              {tile.label}
              {state.hinted.includes(tile.id) && <small className="tile-hint">Hint</small>}
            </button>
          ))}
      </div>
      <p className="board-message" role="status">
        {state.message}
      </p>
      <div className="board-actions">
        <button className="button" disabled={complete} onClick={() => dispatch({ type: 'hint' })}>
          Hint
        </button>
        <button className="button" disabled={complete} onClick={() => dispatch({ type: 'guide' })}>
          Try a group
        </button>
        <button
          className="button solid"
          disabled={state.selected.length !== 4}
          onClick={() => dispatch({ type: 'submit' })}
        >
          Submit group
        </button>
        <button
          className="button"
          disabled={!state.selected.length}
          onClick={() => dispatch({ type: 'clear' })}
        >
          Clear
        </button>
        <button
          className="button"
          disabled={complete}
          onClick={() => {
            dispatch({ type: 'reveal' })
            onHighlight([])
          }}
        >
          Reveal All
        </button>
        <span className="selection-count">{state.selected.length} / 4 selected</span>
      </div>
    </div>
  )
}
