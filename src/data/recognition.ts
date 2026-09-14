import type { Recognition } from '../types/content'
export const recognition: Recognition[] = [
  {
    id: 'ironviz',
    mark: '2nd',
    title: '2nd Place',
    context: 'CMU IronViz Datathon',
    related: ['grant-planner'],
  },
  {
    id: 'march-competition',
    mark: '6th',
    title: '6th Place',
    context: 'CMU March Madness Machine Learning Competition',
    related: ['march-madness'],
  },
  {
    id: 'hacking4humanity',
    mark: 'Top',
    title: 'Top Finisher',
    context: 'Hacking4Humanity',
    related: ['loom'],
  },
  {
    id: 'aime',
    mark: '2×',
    title: '2× AIME Qualifier',
    context: 'One qualification with distinction',
    related: [],
  },
  { id: 'math-prize', mark: 'Q', title: 'Math Prize for Girls', context: 'Qualifier', related: [] },
  {
    id: 'fbla',
    mark: '1st',
    title: 'DECA + FBLA',
    context: 'National & state competition recognition',
    detail: '1st Place — FBLA Nationals · Intro to Marketing Concepts',
    related: [],
  },
]
