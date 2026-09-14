import type { Visual } from '../types/content'
import loom from '../images/loom_fyp.png'
import wheelMap from '../images/wheelway-map.jpeg'
import wheelHardware from '../images/wheelway-circuit.jpeg'
import funding from '../images/VisualizationPDF_TeamA_GrantScope.png'
import fundingRadar from '../images/VisualizationPDF_TeamA_GrantScope (1).png'
import idf from '../images/campus_idf_curves.png'
import storm from '../images/storm_of_record.png'
import semantics from '../images/semantic_similarity_mpnet_1949_2024.png'
import cwlHome from '../images/_BMOR_CA_Lai_Prashantha_WE.png'
import cwlDetail from '../images/_BMOR_CA_Lai_Prashantha_WE (1).png'
import cwlOrder from '../images/_BMOR_CA_Lai_Prashantha_WE (2).png'

export const visuals: Record<string, Visual> = {
  loom: {
    kind: 'image',
    alt: 'Loom discovery feed',
    caption: 'Loom · personalized art discovery',
    images: [
      {
        src: loom,
        label: 'Discovery feed',
        alt: 'Loom discovery interface showing artwork connected by medium, subject, style, and other relationships.',
        width: 1917,
        height: 870,
      },
    ],
  },
  wheelway: {
    kind: 'image',
    alt: 'WheelWay route and sensing hardware',
    caption: 'WheelWay · route interface and Raspberry Pi hardware',
    images: [
      {
        src: wheelMap,
        label: 'Route map',
        alt: 'WheelWay route from Hilgard Avenue to Carleton Street, with mobility settings and a route drawn over Berkeley.',
        width: 1280,
        height: 679,
      },
      {
        src: wheelHardware,
        label: 'Hardware',
        alt: 'WheelWay Raspberry Pi board connected to a camera module with a ribbon cable.',
        width: 1280,
        height: 960,
      },
    ],
  },
  'grant-planner': {
    kind: 'image',
    alt: 'GrantScope funding dashboards',
    caption: 'GrantScope · researcher decision support and competitiveness comparisons',
    images: [
      {
        src: fundingRadar,
        label: 'Funding comparisons',
        alt: 'GrantScope radar comparisons showing CMU versus AAU profiles and CMU strengths across research fields.',
        width: 1920,
        height: 843,
      },
      {
        src: funding,
        label: 'Researcher workspace',
        alt: 'GrantScope researcher decision assistant with a proposal form, funding likelihood matrix, and funding rationale.',
        width: 1872,
        height: 1000,
      },
    ],
  },
  tang: {
    kind: 'image',
    alt: 'Rainfall analysis charts',
    caption: 'Campus rainfall · analysis output',
    images: [
      {
        src: idf,
        label: 'IDF curves',
        alt: 'Observed campus IDF curves and NOAA reference values for 2-, 5-, 10-, and 25-year return periods.',
        width: 3000,
        height: 1800,
      },
      {
        src: storm,
        label: 'Storm event',
        alt: 'April 11, 2024 storm-of-record chart showing hourly rainfall bars and a temperature line.',
        width: 1200,
        height: 600,
      },
    ],
  },
  collis: {
    kind: 'image',
    alt: 'Dissertation semantic-similarity analysis',
    caption: 'MPNet semantic similarity · supplied analysis output',
    images: [
      {
        src: semantics,
        label: 'Semantic trajectories',
        alt: 'Annual cosine-similarity trajectories comparing East and West German dissertation titles and gender groups, with historical reference markers.',
        width: 3600,
        height: 1950,
      },
    ],
  },
  cwl: {
    kind: 'image',
    compact: true,
    alt: 'Coffee & Water Lab app previews',
    caption: 'Coffee & Water Lab · app screens',
    images: [
      {
        src: cwlHome,
        label: 'Home',
        alt: 'Coffee & Water Lab app welcome screen with a grid of drinks.',
        width: 136,
        height: 89,
      },
      {
        src: cwlDetail,
        label: 'Drink detail',
        alt: 'Pumpkin spice latte detail screen with milk, espresso, and sweetener options.',
        width: 136,
        height: 203,
      },
      {
        src: cwlOrder,
        label: 'Seasonal menu',
        alt: 'Seasonal order screen showing pumpkin spice latte and honey black sesame latte.',
        width: 136,
        height: 106,
      },
    ],
  },
}
