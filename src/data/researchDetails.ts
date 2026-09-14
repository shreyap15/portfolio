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
        connections: [
          'Hourly rainfall is separated into individual storm events before comparing their durations and intensities.',
          'Storm intensities across 1–24 hour durations form the local intensity-duration-frequency curves.',
          'NOAA Atlas 14 provides a regional reference for checking how campus estimates differ.',
          'Local design intensities supply rainfall scenarios for the campus sewer digital twin.',
        ],
        result:
          '25.4 years of hourly rainfall yielded 1,646 storms and localized 1–24 hour IDF curves for digital-twin calibration.',
      },
      {
        id: 'infrastructure',
        title: 'Infrastructure inputs',
        nodes: ['BIM', 'GIS', 'INFRASTRUCTURE', 'DIGITAL TWIN'],
        connections: [
          'BIM and GIS connect built-system information with its spatial setting.',
          'These inputs place the rainfall analysis in the context of campus infrastructure.',
          'Combining infrastructure and rainfall inputs makes sewer stress-testing possible.',
        ],
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
        nodes: [
          '1.73M DISSERTATIONS',
          'MPNet',
          '768-D EMBEDDINGS',
          'CENTROIDS',
          'COSINE SIMILARITY',
          'SEMANTIC CHANGE',
        ],
        connections: [
          'Multilingual MPNet translates dissertation text into a representation that can be compared across records.',
          'Each embedding represents semantic information in 768 dimensions.',
          'Centroids summarize groups of embeddings so topic patterns can be compared over time.',
          'Cosine similarity compares the direction of centroids, rather than their magnitude.',
          'Changes in similarity trace shifts in research alignment over time.',
        ],
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
