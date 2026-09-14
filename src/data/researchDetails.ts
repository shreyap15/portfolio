import { coffeeStrands } from './coffee'
import type { Work } from '../types/content'
export const researchDetails: Record<
  string,
  Pick<Work, 'strands' | 'attribution' | 'machineLearning'>
> = {
  tang: {
    strands: [
      {
        id: 'rainfall',
        title: 'Rainfall analysis',
        nodes: ['RAINFALL', 'STORM EVENTS', 'IDF CURVES', 'NOAA', 'DIGITAL TWIN'],
        result:
          '25.4 years of hourly rainfall yielded 1,646 storms and localized 1–24 hour IDF curves for digital-twin calibration.',
      },
      {
        id: 'infrastructure',
        title: 'Infrastructure inputs',
        nodes: ['BIM', 'GIS', 'INFRASTRUCTURE', 'DIGITAL TWIN'],
        result:
          'Integrated BIM and GIS inputs with rainfall analysis to stress-test campus sewer infrastructure.',
      },
    ],
  },
  collis: {
    strands: [
      {
        id: 'semantics',
        title: 'Semantic analysis',
        nodes: ['DISSERTATIONS', 'EMBEDDINGS', 'CENTROIDS', 'COSINE SIMILARITY', 'SEMANTIC CHANGE'],
        result:
          'Multilingual MPNet embeddings and 768-dimensional centroid cosine similarity tracked longitudinal shifts in dissertation topics.',
      },
    ],
  },
  arabica: {
    attribution: ['Research with Seyed Ghafouri', 'London Business School'],
    strands: coffeeStrands,
    machineLearning: {
      status: 'verified',
      methods: ['Random Forest', 'Gradient Boosting', 'Feature Importance', 'Cross-validation'],
      source: 'docs/ASSET_CONTENT_REVISION_SPEC.md',
    },
  },
}
