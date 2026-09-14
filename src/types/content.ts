export type DomainId =
  | 'systems'
  | 'software'
  | 'research'
  | 'product'
  | 'data'
  | 'business'
  | 'ai'
  | 'manufacturing'
  | 'finance'
  | 'econometrics'
export interface ResearchStrand {
  id: string
  title: string
  nodes: string[]
  result: string
  connections?: string[]
}
export interface Visual {
  kind: 'image' | 'diagram'
  src?: string
  alt: string
  caption: string
  diagram?: string
  source?: string
  images?: { src: string; alt: string; label: string; width: number; height: number }[]
  compact?: boolean
}
export interface Work {
  id: string
  name: string
  subtitle: string
  kind: 'experience' | 'research' | 'project'
  domains: DomainId[]
  skills: string[]
  bullets: string[]
  dates?: string
  location?: string
  github?: string
  liveDemo?: string
  recognition?: string[]
  note?: string
  attribution?: string[]
  logo?: { src: string; alt: string }
  visual?: Visual
  strands?: ResearchStrand[]
  machineLearning?: {
    status: 'needs-source' | 'verified'
    methods: string[]
    source?: string
    internalNote?: string
  }
  tracks?: ResearchTrack[]
  nodes?: string[]
  modes?: { label: string; detail: string; facts?: string[] }[]
}
export interface ResearchTrack {
  id: string
  title: string
  bullets: string[]
  skills: string[]
}
export interface Recognition {
  highlight?: string
  supporting?: string
  id: string
  mark: string
  title: string
  context: string
  related: string[]
  detail?: string
}
