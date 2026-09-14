import type { Work } from '../types/content'
export const experienceDetails: Record<string, Pick<Work, 'logo' | 'modes'>> = {
  tata: {
    logo: { src: '/assets/tata-logo.svg', alt: 'Tata Electronics logo' },
    modes: [
      {
        label: 'AGENT',
        detail:
          'Made exact calculations and analysis reproducible across inconsistent manufacturing datasets.',
        facts: ['AI analysis agent', 'Python', 'Operational data'],
      },
      {
        label: 'GUARD',
        detail: 'Six-layer defense-in-depth blocked 100% of 500+ adversarial test executions.',
        facts: [
          'Intent classification',
          'Prompt constraints',
          'AST validation',
          'Runtime isolation',
          'Post-execution verification',
          'Recovery',
        ],
      },
      {
        label: 'ROUTE',
        detail: 'Improved DSPy query-routing accuracy from 58% to 87% on a 65-question benchmark.',
        facts: ['DSPy', '58% → 87%', '65 questions'],
      },
      {
        label: 'EVAL',
        detail: 'Reached 92% BERTScore on tabular reasoning across 7k+ FETA-QA evaluation records.',
        facts: ['Pytest', 'DeepEval', 'BERTScore', 'ROUGE-L', 'FETA-QA'],
      },
      {
        label: 'DATA',
        detail:
          'Worked with heterogeneous inspection records, sensor logs, and operational exports.',
        facts: ['Inspection files', 'Sensor logs', 'Excel', 'CSV', 'Parquet'],
      },
    ],
  },
  cwl: {
    logo: { src: '/assets/cwl-logo.png', alt: 'Coffee & Water Lab logo' },
    modes: [
      {
        label: 'RECOMMEND',
        detail:
          'Built an auto-updating Neural Collaborative Filtering system for personalized recommendations.',
        facts: ['Order history', 'Seasonality', 'Digital signals'],
      },
      {
        label: 'COLD START',
        detail: 'Addressed customer cold-start when little purchase history was available.',
        facts: ['Cold-start', 'Personalization'],
      },
      {
        label: 'SURVEY',
        detail: 'Combined 2,500 survey responses with transaction and engagement data.',
        facts: ['2,500 responses', 'Customer preferences'],
      },
      {
        label: 'NLP',
        detail:
          'Analyzed unstructured customer feedback to support product decisions and customer discovery.',
        facts: ['Unstructured feedback', 'Customer analytics'],
      },
      {
        label: 'GROWTH',
        detail:
          'Analytics contributed to a 15% increase in Yelp visibility and a 500% increase in average Reels views.',
        facts: ['Yelp search', 'Instagram Reels', 'Engagement analysis'],
      },
    ],
  },
  amd: {
    logo: { src: '/assets/amd-logo.svg', alt: 'AMD logo' },
    modes: [
      {
        label: 'OPERATIONS',
        detail:
          'Compared revenue per employee before and after COVID to inform resource allocation.',
        facts: ['Operations', 'Labor efficiency', 'Pre/post COVID'],
      },
      {
        label: 'CPU',
        detail:
          'Consolidated CPU specifications and architecture benchmarks from supercomputer deployments.',
        facts: ['CPU specifications', 'Architecture'],
      },
      {
        label: 'GPU',
        detail:
          'Compared GPU specifications and hardware adoption across high-performance computing systems.',
        facts: ['GPU specifications', 'Hardware adoption'],
      },
      {
        label: 'HPC',
        detail: 'Used supercomputer deployment data to compare competing hardware architectures.',
        facts: ['Supercomputers', 'Deployment data'],
      },
      {
        label: 'BENCHMARK',
        detail:
          'Benchmarked semiconductor competitors across operational performance and hardware positioning.',
        facts: ['Competitor benchmarking', 'Resource allocation'],
      },
    ],
  },
}
