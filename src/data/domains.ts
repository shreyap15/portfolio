import type { DomainId } from '../types/content'
export const domains: {
  id: DomainId
  label: string
  row: number
  col: number
  direction: 'across' | 'down'
  number: number
  related: string[]
}[] = [
  {
    id: 'product',
    label: 'PRODUCT',
    row: 0,
    col: 1,
    direction: 'down',
    number: 1,
    related: ['cwl', 'loom', 'wheelway', 'scottylabs'],
  },
  {
    id: 'systems',
    label: 'SYSTEMS',
    row: 0,
    col: 5,
    direction: 'across',
    number: 2,
    related: ['tata', 'tang', 'loom', 'wheelway', 'lunar-llamas'],
  },
  {
    id: 'econometrics',
    label: 'ECONOMETRICS',
    row: 0,
    col: 9,
    direction: 'down',
    number: 3,
    related: ['arabica'],
  },
  {
    id: 'software',
    label: 'SOFTWARE',
    row: 2,
    col: 0,
    direction: 'across',
    number: 4,
    related: ['tata', 'loom', 'wheelway', 'grant-planner', 'march-madness'],
  },
  {
    id: 'research',
    label: 'RESEARCH',
    row: 2,
    col: 6,
    direction: 'down',
    number: 5,
    related: ['tang', 'collis', 'arabica'],
  },
  {
    id: 'finance',
    label: 'FINANCE',
    row: 6,
    col: 3,
    direction: 'across',
    number: 6,
    related: ['sws', 'jfc', 'grant-planner', 'fbla'],
  },
  {
    id: 'manufacturing',
    label: 'MANUFACTURING',
    row: 8,
    col: 0,
    direction: 'across',
    number: 7,
    related: ['tata', 'amd'],
  },
  {
    id: 'ai',
    label: 'AI',
    row: 8,
    col: 1,
    direction: 'down',
    number: 8,
    related: ['tata', 'cwl', 'loom', 'march-madness'],
  },
]
