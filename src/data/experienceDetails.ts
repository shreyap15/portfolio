import type { Work } from '../types/content'
export const experienceDetails: Record<string, Pick<Work, 'logo' | 'modes'>> = {
  tata: {
    logo: { src: '/assets/tata-logo.svg', alt: 'Tata Electronics logo' },
    modes: [
      {
        label: 'AGENT',
        detail:
          'The analysis agent connected Python calculations with heterogeneous operational inputs, making reproducibility across inconsistent datasets the central requirement.',
        facts: ['AI analysis agent', 'Python', 'Operational data'],
      },
      {
        label: 'GUARD',
        detail:
          'Six-layer defense-in-depth blocked 100% of 500+ adversarial test executions, including dataframe mutation, reflection, aliasing, magic-method, and dynamic-execution attacks.',
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
        detail:
          'DSPy routing determines which query path to use; the same 65-question benchmark measured the change from 58% to 87% accuracy.',
        facts: ['DSPy', '58% → 87%', '65 questions'],
      },
      {
        label: 'EVAL',
        detail:
          'Pytest and DeepEval supported evaluation workflows; BERTScore and ROUGE-L measured outputs against FETA-QA across 7k+ records, reaching 92% BERTScore.',
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
          'Familiar orders provided a starting point for translating existing preferences to unfamiliar drinks, helping customers discover menu options beyond what descriptions alone could explain.',
        facts: ['Neural Collaborative Filtering', 'Preference-based recommendations', 'Menu discovery'],
      },
      {
        label: 'COLD START',
        detail:
          'Without a customer login linking individuals to purchases, order histories were sparse. Survey preferences supplied customer-level signals for cold-start recommendations.',
        facts: ['No linked customer login', 'Sparse purchase histories', 'Survey preferences'],
      },
      {
        label: 'SIGNALS',
        detail:
          'The 2,500 survey responses, personally profiled menu characteristics, digital trends, and owner knowledge about seasonal demand supplied alternative signals when transaction data was initially unavailable.',
        facts: ['Survey preferences', 'Seasonality', 'Menu characteristics', 'Digital trends', 'Domain knowledge'],
      },
      {
        label: 'NLP',
        detail:
          'NLP made unstructured customer feedback usable for identifying response patterns and informing customer discovery and digital strategy.',
        facts: ['Unstructured feedback', 'Response patterns', 'Customer analytics'],
      },
      {
        label: 'GROWTH',
        detail:
          'Customer-feedback patterns and demographic engagement analysis informed digital strategy on Yelp and Instagram, supporting search visibility and Reels-view growth.',
        facts: ['Yelp visibility +15%', 'Reels average views ~+500%', 'Demographic engagement'],
      },
    ],
  },
  amd: {
    logo: { src: '/assets/amd-logo.svg', alt: 'AMD logo' },
    modes: [
      {
        label: 'OPERATIONS',
        detail:
          'Revenue per employee compares output relative to staffing; the pre/post-COVID comparison focused on changes in labor efficiency at a competitor’s U.S. operations.',
        facts: ['Operations', 'Labor efficiency', 'Pre/post COVID'],
      },
      {
        label: 'CPU',
        detail:
          'CPU specifications describe the hardware; architecture benchmarks provide performance context for comparing supercomputer deployments.',
        facts: ['CPU specifications', 'Architecture'],
      },
      {
        label: 'GPU',
        detail:
          'GPU specifications were paired with adoption data to distinguish hardware characteristics from how those systems were actually being deployed.',
        facts: ['GPU specifications', 'Hardware adoption'],
      },
      {
        label: 'HPC',
        detail:
          'Supercomputer deployment data connected the CPU/GPU specification comparison to hardware adoption in high-performance computing.',
        facts: ['Supercomputers', 'Deployment data'],
      },
      {
        label: 'BENCHMARK',
        detail:
          'The benchmark combined two perspectives: revenue per employee for operational efficiency, and CPU/GPU deployment data for hardware positioning.',
        facts: ['Competitor benchmarking', 'Resource allocation'],
      },
    ],
  },
}
