import { connectionGroups, initialTiles } from '../../data/connections'
export interface BoardState {
  selected: string[]
  solved: string[]
  message: string
  hintIndex: number
  hinted: string[]
}
export const initialState: BoardState = {
  selected: [],
  solved: [],
  message: 'Select four related tiles, then submit a group.',
  hintIndex: 0,
  hinted: [],
}
export type BoardAction =
  | { type: 'toggle'; id: string }
  | { type: 'submit' }
  | { type: 'clear' }
  | { type: 'reveal' }
  | { type: 'reset' }
  | { type: 'hint' }
  | { type: 'guide' }
export function boardReducer(state: BoardState, action: BoardAction): BoardState {
  switch (action.type) {
    case 'hint':
    case 'guide': {
      const unsolved = connectionGroups.filter((group) => !state.solved.includes(group.id))
      if (!unsolved.length) return state
      const group = unsolved[Math.floor(state.hintIndex / 3) % unsolved.length]
      const level = state.hintIndex % 3
      const tiles = initialTiles.filter((tile) => tile.groupId === group.id)
      return {
        ...state,
        hintIndex: state.hintIndex + 1,
        hinted: action.type === 'guide' || level === 0 ? [] : tiles.slice(0, level === 1 ? 2 : 1).map(tile => tile.id),
        selected:
          action.type === 'guide'
            ? initialTiles.filter((tile) => tile.groupId === group.id).map((tile) => tile.id)
            : state.selected,
        message:
          action.type === 'guide'
            ? `Try this group: ${group.title}. Submit when you're ready.`
            : level === 0 ? `Hint: ${group.clue}`
              : level === 1 ? `Hint: ${tiles[0].label} and ${tiles[1].label} belong together.`
                : `Hint: ${tiles[0].label} belongs to ${group.title}.`,
      }
    }
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
      if (!group) {
        const oneAway = connectionGroups.some(
          (candidate) =>
            state.selected.filter(
              (id) => initialTiles.find((tile) => tile.id === id)?.groupId === candidate.id,
            ).length === 3,
        )
        return {
          ...state,
          message: oneAway
            ? 'One away! Three tiles belong together. Try swapping one.'
            : 'These tiles span more than one group. Deselect a tile to try another combination.',
        }
      }
      return {
        ...state,
        selected: [],
        hintIndex: 0,
        hinted: [],
        solved: [...state.solved, group.id],
        message:
          state.solved.length === 3 ? 'All four groups found.' : `Group found: ${group.title}.`,
      }
    }
    case 'clear':
      return { ...state, selected: [], message: 'Selection cleared.' }
    case 'reveal':
      return {
        ...state,
        selected: [],
        hinted: [],
        solved: connectionGroups.map((group) => group.id),
        message: 'All groups revealed.',
      }
    case 'reset':
      return initialState
  }
}
