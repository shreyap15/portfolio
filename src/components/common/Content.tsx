import type { Work } from '../../types/content'
export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags" aria-label="Methods and technologies">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
export function Bullets({ work }: { work: Work }) {
  return (
    <ul className="work-bullets">
      {work.bullets.map((bullet) => (
        <li key={bullet}>{bullet}</li>
      ))}
    </ul>
  )
}
export function SectionTitle({
  number,
  title,
  aside,
}: {
  number: string
  title: string
  aside?: string
}) {
  return (
    <div className="section-heading">
      <h2>
        <span className="section-number">{number}</span>
        {title}
      </h2>
      {aside && <span className="section-aside">{aside}</span>}
    </div>
  )
}
export function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className="text-link" href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span aria-hidden="true"> ↗</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}
