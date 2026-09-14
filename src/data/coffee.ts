import type { ResearchTrack, ResearchStrand } from '../types/content'
export const coffeeTracks: ResearchTrack[] = [
  {
    id: 'econometrics',
    title: 'Conflict / econometric analysis',
    bullets: [
      'Analyzed how conflict affected El Salvador’s coffee industry from 2009–2022 using Costa Rica as a comparison country, measuring changes in coffee quality, Arabica production, exports, and prices across pre-conflict, conflict, and post-conflict periods.',
      'Used Difference-in-Differences with fixed effects and pre-treatment parallel-trends testing to distinguish treatment effects from underlying country-level differences.',
    ],
    skills: [
      'Difference-in-Differences',
      'Fixed Effects',
      'Parallel Trends',
      'Coffee Quality',
      'Arabica Production',
      'Exports',
      'Price',
    ],
  },
  {
    id: 'machine-learning',
    title: 'Drought / machine-learning forecasting',
    bullets: [
      'Built Random Forest and Gradient Boosting models using 19 econometric variables, NDVI, and precipitation data to study how climatic conditions affect coffee production, quality, and market behavior.',
      'Trained models on historical data from 2009–2022 and generated forward-looking predictions through 2035, using feature-importance analysis to identify which climatic variables were most strongly associated with coffee yield, quality, and market trends.',
      'Used cross-validation to evaluate model robustness and compared regional effects across major coffee-producing countries.',
    ],
    skills: [
      'Random Forest',
      'Gradient Boosting',
      '19 Econometric Factors',
      'NDVI',
      'Precipitation',
      'Feature Importance',
      'Cross-validation',
    ],
  },
]
export const coffeePeriods = [
  { years: '2009–2012', label: 'Pre-period' },
  { years: '2012–2015', label: 'Conflict / treatment' },
  { years: '2015–2018', label: 'Short post-period' },
  { years: '2018–2022', label: 'Long post-period' },
]
export const coffeeModelSteps = [
  { heading: '2009–2022', detail: 'Historical training data' },
  {
    heading: '19 factors + climate',
    detail: 'Price, quality, production, other economic indicators · NDVI · precipitation',
  },
  {
    heading: 'Random Forest / Gradient Boosting',
    detail: 'Cross-validation · feature importance · nonlinear relationships',
  },
  { heading: '2023–2035', detail: 'Forward-looking projections' },
]
export const coffeeFindings = [
  { country: 'Brazil', finding: 'Declines across most major econometric indicators except price.' },
  {
    country: 'Guatemala',
    finding: 'Quality declined while production showed growth in the modeled data.',
  },
  { country: 'Uganda', finding: 'Continued production declines associated with climate stress.' },
]
export const coffeeStrands: ResearchStrand[] = [
  {
    id: 'treatment',
    title: 'Treatment',
    nodes: ['EL SALVADOR', 'TREATMENT', 'DIFFERENCE-IN-DIFFERENCES', 'FIXED EFFECTS'],
    result:
      'El Salvador is the treatment country in the conflict analysis; Difference-in-Differences with fixed effects separates treatment effects from underlying country-level differences.',
  },
  {
    id: 'control',
    title: 'Comparison',
    nodes: ['COSTA RICA', 'CONTROL', 'PARALLEL TRENDS'],
    result:
      'Costa Rica supplies the comparison, with pre-treatment parallel-trends testing before the 2012–2015 conflict window.',
  },
  {
    id: 'climate',
    title: 'Climate',
    nodes: ['NDVI', 'PRECIPITATION', 'CLIMATE'],
    result:
      'NDVI and precipitation capture climate conditions for the separate drought and machine-learning analysis.',
  },
  {
    id: 'models',
    title: 'Models',
    nodes: ['19 FACTORS', 'RANDOM FOREST', 'GRADIENT BOOSTING', 'FORECASTING'],
    result:
      'Random Forest and Gradient Boosting use 19 econometric factors plus climate variables to model nonlinear relationships and generate forecasts.',
  },
  {
    id: 'projections',
    title: 'Projections',
    nodes: ['2009–2022', 'TRAINING DATA', '2035', 'PROJECTIONS'],
    result:
      'Historical data from 2009–2022 supports projections through 2035; cross-validation evaluates model robustness.',
  },
]
