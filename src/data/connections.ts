export const connectionGroups = [
  {
    id: 'discovery',
    title: 'Finding what is relevant',
    terms: ['CLIP tags', 'Personalized feeds', 'Similarity maps', 'Funding opportunities'],
    related: ['loom', 'grant-planner'],
    color: 'yellow',
  },
  {
    id: 'physical',
    title: 'Working with physical systems',
    terms: ['Route grades', 'Ultrasonic sensing', 'UV-C sanitation', 'Cleaning cycles'],
    related: ['wheelway', 'lunar-llamas'],
    color: 'green',
  },
  {
    id: 'modeling',
    title: 'Comparing predictions',
    terms: ['Elo ratings', 'Logistic regression', 'Calibration', 'Log loss'],
    related: ['march-madness'],
    color: 'blue',
  },
  {
    id: 'recognition',
    title: 'Work recognized in competition',
    terms: ['IronViz', '2nd place', 'Hacking4Humanity', 'Top finisher'],
    related: ['grant-planner', 'loom'],
    color: 'purple',
  },
]
export const initialTiles = [0, 5, 10, 15, 8, 1, 14, 7, 12, 9, 2, 4, 6, 13, 3, 11].map((index) => {
  const group = connectionGroups[Math.floor(index / 4)]
  return { id: `${group.id}-${index % 4}`, label: group.terms[index % 4], groupId: group.id }
})
