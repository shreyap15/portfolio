export const connectionGroups = [
  {
    id: 'discovery',
    title: 'Loom: discovery & recognition',
    terms: ['CLIP tags', 'Personalized feeds', 'Hacking4Humanity', 'Top finisher'],
    related: ['loom'],
    color: 'yellow',
  },
  {
    id: 'physical',
    title: 'WheelWay & Lunar Llamas: hardware',
    terms: ['Route grades', 'Ultrasonic sensing', 'UV-C sanitation', 'Cleaning cycles'],
    related: ['wheelway', 'lunar-llamas'],
    color: 'green',
  },
  {
    id: 'modeling',
    title: 'March Madness: prediction models',
    terms: ['Elo ratings', 'Logistic regression', 'Calibration', 'Log loss'],
    related: ['march-madness'],
    color: 'blue',
  },
  {
    id: 'recognition',
    title: 'GrantScope: funding & recognition',
    terms: ['Similarity maps', 'Funding opportunities', 'IronViz', '2nd place'],
    related: ['grant-planner'],
    color: 'purple',
  },
]
export const initialTiles = [0, 5, 10, 15, 8, 1, 14, 7, 12, 9, 2, 4, 6, 13, 3, 11].map((index) => {
  const group = connectionGroups[Math.floor(index / 4)]
  return { id: `${group.id}-${index % 4}`, label: group.terms[index % 4], groupId: group.id }
})
