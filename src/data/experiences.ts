import { experienceDetails } from './experienceDetails'
import type { Work } from '../types/content'
export const experiences: Work[] = [
  {
    id: 'tata',
    ...experienceDetails['tata'],
    name: 'Tata Electronics',
    subtitle: 'Software Engineering Intern · Industrial AI',
    kind: 'experience',
    location: 'Santa Clara, CA',
    dates: 'May 2026 – Aug. 2026',
    domains: ['systems', 'software', 'ai', 'data'],
    skills: ['Python', 'DSPy', 'LangChain', 'AST Validation', 'AI Agents'],
    bullets: [
      'Built and evaluated an AI analysis agent that made calculations reproducible across heterogeneous manufacturing datasets. Designed a six-layer defense-in-depth architecture that blocked 100% of 500+ adversarial test executions.',
      'Improved DSPy query-routing accuracy from 58% to 87% on a 65-question benchmark. The tabular-reasoning evaluation reached 92% BERTScore across 7k+ records.',
    ],
  },
  {
    id: 'cwl',
    ...experienceDetails['cwl'],
    name: 'Coffee & Water Lab',
    subtitle: 'Data Analysis & Marketing Intern',
    kind: 'experience',
    location: 'San Jose, CA',
    dates: 'Jun. 2023 – Jun. 2025',
    domains: ['data', 'ai', 'product', 'business'],
    skills: ['Recommendation Systems', 'Customer Analytics', 'NLP', 'Python', 'Product Analytics'],
    bullets: [
      'Built an auto-updating Neural Collaborative Filtering recommendation system using 2,500 customer survey responses and available order histories across inconsistent ordering channels, with cold-start handling for customers without usable purchase histories.',
      'Applied NLP and customer-feedback analysis to inform digital strategy, contributing to a 15% increase in Yelp visibility and Instagram Reels averaging approximately 500% more views.',
    ],
  },
  {
    id: 'amd',
    ...experienceDetails['amd'],
    name: 'AMD',
    subtitle: 'Data & Operations Research Intern',
    kind: 'experience',
    dates: 'Sept. 2024 – Dec. 2024',
    domains: ['data', 'research', 'business'],
    skills: ['Competitive Analysis', 'Operations Research', 'CPU / GPU', 'Hardware Benchmarking'],
    bullets: [
      'Compared revenue per employee across semiconductor companies before and after COVID, identifying changes in labor efficiency at a major competitor’s U.S. operations that could inform resource-allocation decisions.',
      'Consolidated CPU/GPU specifications, architecture benchmarks, and supercomputer deployment data to compare competitive positioning and understand how different hardware architectures were being adopted across high-performance computing systems.',
    ],
  },
]
