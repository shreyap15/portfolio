import { useState } from 'react'
import cmuLogo from './images/cmu_logo.png'
import { domains } from './data/domains'
import WorkVisual from './components/common/WorkVisual'
import MarchComparison from './components/common/MarchComparison'
import CoffeeVisual from './components/strands/CoffeeVisual'
import { profile } from './data/profile'
import { experiences } from './data/experiences'
import { research } from './data/research'
import { projects } from './data/projects'
import { metrics } from './data/metrics'
import { recognition } from './data/recognition'
import { education } from './data/education'
import { involvement } from './data/involvement'
import type { DomainId } from './types/content'
import { Tags, Bullets, SectionTitle, ExternalLink, AwardHex } from './components/common/Content'
import Crossword from './components/crossword/Crossword'
import ExperienceModes from './components/wordle/ExperienceModes'
import Strand from './components/strands/Strand'
import Connections from './components/connections/Connections'

const allWork = [...experiences, ...research, ...projects]
const navigation = ['Experience', 'Research', 'Projects', 'Recognition', 'Contact']
export default function App() {
  const [domain, setDomain] = useState<DomainId | null>(null)
  const [hoveredDomain, setHoveredDomain] = useState<DomainId | null>(null)
  const activeDomain = hoveredDomain ?? domain
  const [related, setRelated] = useState<string[]>([])
  const [pinned, setPinned] = useState<string[]>([])
  const links = profile.links
  const highlighted = (id: string) =>
    related.includes(id) ||
    pinned.includes(id) ||
    !!domains.find((item) => item.id === activeDomain)?.related.includes(id)
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <a className="monogram" href="#" aria-label="Shreya Prashantha, home">
          s<span>p</span>
          <span className="monogram-dot">.</span>
        </a>
        <nav aria-label="Main navigation">
          {navigation.map((label) => (
            <a key={label} href={`#${label.toLowerCase()}`}>
              {label}
            </a>
          ))}
        </nav>
        <a className="header-external" href={profile.links[0].href} aria-label="Shreya on GitHub">
          <span className="external-arrow" aria-hidden="true">
            →
          </span>
        </a>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">
              Shreya
              <br />
              Prashantha<span className="name-period">.</span>
            </h1>
            <div className="hero-academic">
              <p>{profile.discipline}</p>
              <p>{profile.school}</p>
            </div>
            <div className="social-links">
              {links.map((link) => (
                <ExternalLink href={link.href} key={link.label}>
                  {link.label}
                </ExternalLink>
              ))}
            </div>
            <a className="explore-link" href="#experience">
              Experience <span aria-hidden="true">↓</span>
            </a>
          </div>
          <Crossword
            active={activeDomain}
            selected={domain}
            onSelect={setDomain}
            onHover={setHoveredDomain}
            work={[
              ...allWork,
              ...involvement,
              ...recognition.map((item) => ({ id: item.id, name: item.title })),
            ]}
          />
        </section>
        <section id="experience" className="section">
          <SectionTitle number="01" title="Experience" />
          {experiences.map((work, i) => (
            <article
              id={work.id}
              key={work.id}
              className={`experience-row work-item ${highlighted(work.id) ? 'related' : ''}`}
            >
              <div className="work-meta">
                <div className="company-mark-row">
                  {work.logo && (
                    <div className={`company-logo logo-${work.id}`}>
                      <img
                        src={`${import.meta.env.BASE_URL}${work.logo.src.replace(/^\//, '')}`}
                        alt={work.logo.alt}
                      />
                    </div>
                  )}
                  <span className="item-index">0{i + 1} /</span>
                </div>
                <h3>{work.name}</h3>
                <p className="role">{work.subtitle}</p>
                <p className="date">
                  {work.dates}
                  {work.location && (
                    <>
                      <br />
                      {work.location}
                    </>
                  )}
                </p>
                {work.id === 'tata' && (
                  <div className="feature-stat">
                    <strong>{metrics[0].value}</strong>
                    <span>of {metrics[0].label}</span>
                  </div>
                )}
                {work.id === 'cwl' && <WorkVisual id="cwl" />}
              </div>
              <div>
                <Bullets work={work} />
                <Tags items={work.skills} />
                <ExperienceModes work={work} />
              </div>
            </article>
          ))}
        </section>
        <section id="research" className="section">
          <SectionTitle number="02" title="Research" />
          {research.map((work, i) => (
            <article
              id={work.id}
              key={work.id}
              className={`research-row work-item ${work.tracks ? 'coffee-research' : ''} ${highlighted(work.id) ? 'related' : ''}`}
            >
              <div>
                <p className="work-kicker">{work.subtitle}</p>
                <h3>{work.name}</h3>
                {work.attribution && (
                  <p className="research-attribution">
                    {work.attribution.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </p>
                )}
                {work.tracks ? (
                  work.tracks.map((track) => (
                    <section
                      className="research-track"
                      key={track.id}
                      aria-labelledby={`${work.id}-${track.id}`}
                    >
                      <h4 id={`${work.id}-${track.id}`}>{track.title}</h4>
                      <ul className="work-bullets">
                        {track.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                      <Tags items={track.skills} />
                    </section>
                  ))
                ) : (
                  <>
                    <Bullets work={work} />
                    <Tags items={work.skills} />
                  </>
                )}
                <WorkVisual id={work.id} />
              </div>
              <div className="research-visual">
                {work.tracks && <CoffeeVisual />}
                <span className="tiny-label">Strand 0{i + 1}</span>
                <Strand strands={work.strands!} workId={work.id} />
                {work.github && <ExternalLink href={work.github}>View research code</ExternalLink>}
              </div>
            </article>
          ))}
        </section>
        <section id="projects" className="section">
          <SectionTitle number="03" title="Projects" />
          <div className="project-grid">
            {projects.map((work, i) => (
              <article
                id={work.id}
                key={work.id}
                className={`project-card work-item ${highlighted(work.id) ? 'related' : ''}`}
              >
                <div className="project-card-top">
                  <span className="project-number">0{i + 1}</span>
                  <div className="project-links">
                    {work.liveDemo && <ExternalLink href={work.liveDemo}>Live Demo</ExternalLink>}
                    {work.github && <ExternalLink href={work.github}>GitHub</ExternalLink>}
                  </div>
                </div>
                <h3>{work.name}</h3>
                <p className="project-subtitle">{work.subtitle}</p>
                {work.id === 'march-madness' ? <MarchComparison /> : <WorkVisual id={work.id} />}
                <Bullets work={work} />
                <Tags items={work.skills} />
                {work.recognition?.map((id) => {
                  const award = recognition.find((item) => item.id === id)!
                  return (
                    <a
                      className="award-link"
                      key={id}
                      href={`#${id}`}
                      onMouseEnter={() => setRelated([work.id, id])}
                      onMouseLeave={() => setRelated([])}
                      onFocus={() => setRelated([work.id, id])}
                      onBlur={() => setRelated([])}
                      onClick={() => setPinned([work.id, id])}
                    >
                      <AwardHex />
                      <span>
                        {award.title} ·{' '}
                        {id === 'ironviz'
                          ? 'CMU IronViz'
                          : id === 'march-competition'
                            ? 'CMU March Madness ML'
                            : award.context}
                      </span>
                    </a>
                  )
                })}
                {work.note && (
                  <p className="project-note">
                    <span>{work.note}</span>
                  </p>
                )}
              </article>
            ))}
          </div>
          <Connections onHighlight={setRelated} />
        </section>
        <section id="education" className="section">
          <SectionTitle number="04" title="Education & Involvement" />
          <div className="education-grid">
            <div className="education-main">
              <span className="tiny-label">Education</span>
              <div className="education-school">
                <img src={cmuLogo} alt="Carnegie Mellon University seal" width="185" height="185" />
                <h3>{education.school}</h3>
              </div>
              <p>{education.degree}</p>
              <p className="education-minor">{education.minor}</p>
              <p className="education-standing">
                <strong>{education.standing}</strong>
              </p>
            </div>
            <section className="teaching" aria-labelledby="teaching-title">
              <span className="tiny-label">Teaching</span>
              <h3 id="teaching-title">{education.role}</h3>
              <p className="date">{education.dates}</p>
              <p className="teaching-course">
                <ExternalLink href="https://www.cs.cmu.edu/~15122/">
                  15-122: {education.course}
                </ExternalLink>
              </p>
              <ul className="work-bullets">
                {education.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <Tags items={education.skills} />
            </section>
            <section className="involvement-block" aria-labelledby="involvement-title">
              <h3 id="involvement-title">Involvement</h3>
              <ul className="involvement">
                {involvement.map((item) => (
                  <li id={item.id} key={item.id} className={highlighted(item.id) ? 'related' : ''}>
                    <strong>{item.name}</strong>
                    <span>{item.detail}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>
        <section id="recognition" className="section recognition-section">
          <SectionTitle number="05" title="Recognition" />
          <div className="awards-grid">
            {recognition.map((award) => (
              <article
                id={award.id}
                key={award.id}
                className={`award-item ${award.related.length ? 'project-award' : 'supporting-award'} ${highlighted(award.id) ? 'related' : ''}`}
              >
                <AwardHex>{award.mark}</AwardHex>
                <div>
                  <h3>{award.title}</h3>
                  <p>{award.context}</p>
                  {award.highlight && (
                    <p className="award-highlight">
                      <strong>{award.highlight}</strong>
                    </p>
                  )}
                  {award.detail && <p className="award-detail">{award.detail}</p>}
                  {award.supporting && <p>{award.supporting}</p>}
                  {award.related.map((id) => (
                    <a
                      className="text-link"
                      href={`#${id}`}
                      key={id}
                      onMouseEnter={() => setRelated([id, award.id])}
                      onMouseLeave={() => setRelated([])}
                      onFocus={() => setRelated([id, award.id])}
                      onBlur={() => setRelated([])}
                      onClick={() => setPinned([id, award.id])}
                    >
                      {projects.find((item) => item.id === id)?.name} →
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="contact" className="contact">
          <div>
            <span className="tiny-label">06</span>
            <h2>Contact</h2>
          </div>
          <div className="social-links">
            {links.map((link) => (
              <ExternalLink key={link.label} href={link.href}>
                {link.label}
              </ExternalLink>
            ))}
            <div className="email-links">
              {profile.emails.map((email) => (
                <a key={email} href={`mailto:${email}`}>
                  {email}
                  <span className="external-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer>
        <span>{profile.name}</span>

        <a href="#">Back to top ↑</a>
      </footer>
    </>
  )
}
