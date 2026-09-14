import { coffeeTracks } from './coffee'
import { researchDetails } from './researchDetails'
import type { Work } from '../types/content'
export const research: Work[] = [
  {
    id: 'tang',
    ...researchDetails['tang'],
    name: 'Sewer System Digital Twin',
    subtitle: 'Human-Machine Harmony Lab · Tang Lab',
    kind: 'research',
    domains: ['research', 'data', 'systems'],
    skills: ['Python', 'pandas', 'BIM / GIS', 'Hydrology', 'Time Series'],
    github: 'https://github.com/shreyap15/storm-analysis',
    bullets: [
      'Built a Python pipeline integrating 25.4 years of hourly precipitation data with BIM and GIS inputs, separating 1,646 storm events and deriving localized 1–24 hour intensity-duration-frequency curves for use in a campus sewer-system digital twin.',
      'Benchmarked the resulting design intensities against NOAA Atlas 14 and found that short-duration campus rainfall estimates were 51–77% below the regional values, while 24-hour totals converged to within −7.4% at the 25-year return period.',
    ],
    nodes: ['25.4 years', '1,646 storms', 'IDF', 'NOAA Atlas 14', 'BIM / GIS', 'Digital twin'],
  },
  {
    id: 'collis',
    ...researchDetails['collis'],
    name: 'Semantic Trajectories of Doctoral Dissertations',
    subtitle: 'Heinz College · Collis Research',
    kind: 'research',
    domains: ['research', 'data'],
    skills: ['MPNet', '768-D Embeddings', 'Cosine Similarity', 'LaTeX Automation'],
    bullets: [
      'Processed 1.73 million German doctoral-dissertation records using multilingual MPNet embeddings and 768-dimensional centroid cosine similarity to measure how research topics shifted longitudinally.',
      'Used the resulting semantic trajectories to study patterns in East/West and demographic research alignment around German reunification, with supporting data-processing and LaTeX automation pipelines for large-scale analysis.',
    ],
    nodes: [
      '1.73M records',
      'MPNet',
      '768D',
      'Cosine similarity',
      'Reunification',
      'Semantic change',
    ],
  },
  {
    id: 'arabica',
    ...researchDetails['arabica'],
    name: 'Coffee Econometrics & Machine Learning',
    subtitle: 'El Salvador & Costa Rica / climate forecasting',
    kind: 'research',
    domains: ['research', 'data', 'econometrics', 'ai'],
    skills: [],
    bullets: [],
    tracks: coffeeTracks,
  },
]
