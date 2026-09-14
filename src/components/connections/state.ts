import { connectionGroups, initialTiles } from '../../data/connections'
export interface BoardState {
  selected: string[]
  solved: string[]
  message: string
}
export const initialState: BoardState = {
  selected: [],
  solved: [],
  message: 'Select four related tiles, then submit a group.',
}
export type BoardAction =
  | { type: 'toggle'; id: string }
  | { type: 'submit' }
  | { type: 'clear' }
  | { type: 'reveal' }
  | { type: 'reset' }
export function boardReducer(state: BoardState, action: BoardAction): BoardState {
  switch (action.type) {
    case 'toggle': {
      const tile = initialTiles.find((tile) => tile.id === action.id)
      if (!tile || state.solved.includes(tile.groupId)) return state
      if (state.selected.includes(action.id))
        return { ...state, selected: state.selected.filter((id) => id !== action.id) }
      if (state.selected.length === 4)
        return { ...state, message: 'Four tiles selected. Submit the group or deselect a tile.' }
      return { ...state, selected: [...state.selected, action.id] }
    }
    case 'submit': {
      if (state.selected.length !== 4) return { ...state, message: 'Select exactly four tiles.' }
      const group = connectionGroups.find(
        (group) =>
          !state.solved.includes(group.id) &&
          state.selected.every(
            (id) => initialTiles.find((tile) => tile.id === id)?.groupId === group.id,
          ),
      )
      if (!group)
        return {
          ...state,
          message:
            'These tiles span more than one group. Deselect a tile to try another combination.',
        }
      return {
        selected: [],
        solved: [...state.solved, group.id],
        message:
          state.solved.length === 3 ? 'All four groups found.' : `Group found: ${group.title}.`,
      }
    }
    case 'clear':
      return { ...state, selected: [], message: 'Selection cleared.' }
    case 'reveal':
      return {
        selected: [],
        solved: connectionGroups.map((group) => group.id),
        message: 'All groups revealed.',
      }
    case 'reset':
      return initialState
  }
}
