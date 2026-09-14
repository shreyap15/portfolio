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
          'Neural Collaborative Filtering combined order history, seasonality, and digital signals; recommendations updated as the customer inputs changed.',
        facts: ['Order history', 'Seasonality', 'Digital signals'],
      },
      {
        label: 'COLD START',
        detail:
          'Cold-start meant purchase history alone was insufficient; survey preferences supplied another input for personalization.',
        facts: ['Cold-start', 'Personalization'],
      },
      {
        label: 'SURVEY',
        detail:
          'The 2,500 survey responses supplied stated preferences alongside observed transaction and engagement data.',
        facts: ['2,500 responses', 'Customer preferences'],
      },
      {
        label: 'NLP',
        detail:
          'NLP made unstructured customer feedback usable alongside engagement analysis, connecting what customers said with how they interacted.',
        facts: ['Unstructured feedback', 'Customer analytics'],
      },
      {
        label: 'GROWTH',
        detail:
          'The growth measures capture different stages of discovery: Yelp search visibility rose 15%, while average Instagram Reels views rose 500%.',
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
