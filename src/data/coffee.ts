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
    id: 'conflict-econometrics',
    title: 'Conflict & Econometrics',
    nodes: [
      'EL SALVADOR → TREATMENT',
      'COSTA RICA → COMPARISON',
      'PARALLEL TRENDS',
      'DIFFERENCE-IN-DIFFERENCES',
      'FIXED EFFECTS',
      'QUALITY / PRODUCTION / EXPORTS / PRICE',
    ],
    result:
      'El Salvador is the treatment country and Costa Rica the comparison. Pre-treatment parallel-trends analysis supports Difference-in-Differences with fixed effects across quality, production, exports, and price.',
    connections: [
      'Costa Rica supplies the comparison for changes observed in El Salvador, the treatment country.',
      'Pre-treatment trends check whether the two countries were moving similarly before the conflict window.',
      'Difference-in-Differences compares changes across the two countries and periods, rather than just their levels.',
      'Fixed effects account for underlying country-level differences in the comparison.',
      'The same design examines distinct outcomes: quality, production, exports, and price.',
    ],
  },
  {
    id: 'drought-ml',
    title: 'Drought & ML Forecasting',
    nodes: [
      '2009–2022 HISTORICAL DATA',
      '19 ECONOMETRIC FACTORS',
      'NDVI',
      'PRECIPITATION',
      'RANDOM FOREST',
      'GRADIENT BOOSTING',
      'FEATURE IMPORTANCE',
      'CROSS-VALIDATION',
      '2035 PROJECTIONS',
    ],
    result:
      'Random Forest and Gradient Boosting combine 19 econometric factors with NDVI and precipitation from 2009–2022. Feature importance interprets the models, cross-validation evaluates robustness, and forecasts extend through 2035.',
    connections: [
      'The 2009–2022 observations provide the historical values for 19 econometric factors.',
      'NDVI adds a vegetation signal alongside the market and production variables.',
      'Precipitation adds a separate climate signal; it is not interchangeable with vegetation conditions.',
      'Random Forest models nonlinear relationships between climatic and economic variables.',
      'Gradient Boosting provides a second model for the forecasting analysis.',
      'Feature importance identifies influential inputs; it does not establish a causal effect.',
      'Cross-validation evaluates robustness, while feature importance helps interpret the fitted models.',
      'Projections extend beyond the historical training period through 2035; they remain modeled outcomes.',
    ],
  },
]
