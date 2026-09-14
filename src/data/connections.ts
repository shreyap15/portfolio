export const connectionGroups = [
  {
    id: 'discovery',
    title: 'Loom: art discovery & protection',
    terms: ['CLIP tags', 'Personalized feeds', 'Bot detection', 'Anti-scraping'],
    related: ['loom'],
    color: 'yellow',
    clue: 'An artist platform combines discovery with protection from automated scraping.',
    explanation: 'CLIP supports discovery; bot detection and anti-scraping protect the platform that serves those recommendations.',
  },
  {
    id: 'physical',
    title: 'WheelWay & Lunar Llamas: physical environments',
    terms: ['Walking routes', 'Obstacle sensing', 'UV-C sanitation', 'Cleaning cycles'],
    related: ['wheelway', 'lunar-llamas'],
    color: 'green',
    clue: 'Two prototypes help people navigate or maintain physical spaces.',
    explanation: 'WheelWay connects routing with obstacle sensing; Lunar Llamas connects sanitation with automated cleaning.',
  },
  {
    id: 'modeling',
    title: 'March Madness: tournament predictions',
    terms: ['Men’s NCAA', 'Women’s NCAA', 'Elo ratings', 'Log loss'],
    related: ['march-madness'],
    color: 'blue',
    clue: 'Two tournament pipelines use historical ratings and evaluate prediction quality.',
    explanation: 'Elo is a predictive input; log loss evaluates the probabilities produced by the men’s and women’s pipelines.',
  },
  {
    id: 'recognition',
    title: 'GrantScope: research funding opportunities',
    terms: ['AAU funding', 'CMU participation', 'Opportunity rankings', 'Funding projections'],
    related: ['grant-planner'],
    color: 'purple',
    clue: 'Compare the funding landscape with a university’s participation to find opportunities.',
    explanation: 'Funding and participation reveal gaps; rankings and projections help prioritize where to investigate next.',
  },
]
export const initialTiles = [0, 5, 10, 15, 8, 1, 14, 7, 12, 9, 2, 4, 6, 13, 3, 11].map((index) => {
  const group = connectionGroups[Math.floor(index / 4)]
  return { id: `${group.id}-${index % 4}`, label: group.terms[index % 4], groupId: group.id }
})
