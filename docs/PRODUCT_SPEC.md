You are building my complete personal portfolio website for job recruiting. Work directly in this repository and own the implementation end-to-end: architecture, components, styling, responsive behavior, accessibility, testing, and final polish.

Before coding:

1. Read this entire specification.
2. Create a concise root-level `AGENTS.md` with the persistent engineering and design rules future Codex tasks should follow.
3. Create `docs/PRODUCT_SPEC.md` with this product specification.
4. Create `docs/IMPLEMENTATION_PLAN.md` with a phased checklist.
5. Scaffold the project if necessary.
6. Implement the complete first usable version.
7. Run the app, linting, type checking, and available tests.
8. Fix errors and obvious visual issues before finishing.
9. Keep all content easy to update later.
10. Do not stop after planning or scaffolding.

## Goal

Build a polished recruiting portfolio for Shreya Prashantha.

The site should be visually inspired by the interaction language of NYT Games, especially Wordle, Connections, Strands, Crossword/The Mini, and Spelling Bee.

It is not a game website.

The balance should be approximately:

* 80% clear professional portfolio
* 20% optional interaction and visual play

A recruiter should understand the important information without clicking anything. Interactions should add context or relationships, not gate content.

The site should feel restrained, editorial, thoughtful, and visually polished.

Do not make it feel like a generic developer portfolio or an AI-generated portfolio template.

## Positioning

Do not define me too narrowly by a single domain.

I have worked across:

* software engineering
* AI systems
* data analysis
* research
* manufacturing technology
* product
* finance and markets
* business and operations
* strategy
* social-impact projects

These should appear as areas I have worked in, not as a permanent professional identity.

Avoid statements such as:

* “AI + Finance + Manufacturing specialist”
* “I work at the intersection of X, Y, and Z”
* “I am passionate about leveraging technology”
* “I transform complex problems into meaningful solutions”

The portfolio should let the breadth emerge from the work itself.

The strongest common thread is that I am comfortable working across technical and nontechnical contexts and like understanding both how a system works and why it matters.

Do not overstate this in the copy.

## Profile

Name:
Shreya Prashantha

School:
Carnegie Mellon University

Degree:
B.S. Information Systems & Computer Science

External links:

* GitHub: https://github.com/shreyap15/
* LinkedIn: https://www.linkedin.com/in/shreyaprashantha/

Do not put a date in the hero.

Do not include a résumé button or résumé page.

## Technical stack

Use:

* React
* TypeScript
* Vite
* React Router only if useful for project detail routes
* Framer Motion sparingly
* Lucide React if simple icons are needed
* regular CSS or CSS Modules
* SVG for custom path / Strands visuals

Avoid unnecessary dependencies.

Do not use:

* Three.js
* WebGL
* giant UI libraries
* custom cursor libraries
* scroll hijacking
* glassmorphism
* glowing gradient backgrounds
* excessive parallax
* large page-transition effects

The site should be fast and easy to maintain.

## Maintainability

All professional content must live in structured data files rather than being repeated inside components.

Create data structures for:

* profile
* experiences
* research
* projects
* education
* involvement
* recognition
* domains
* metrics
* technologies / skills

Use stable IDs and relationships.

Example:

```ts
{
  id: "loom",
  name: "Loom",
  type: "project",
  domains: ["AI", "software", "product"],
  skills: ["React", "Node.js", "MongoDB", "FastAPI", "CLIP"],
  recognition: ["hacking4humanity"],
  links: {
    github: "..."
  }
}
```

Recognition should be able to reference related projects:

```ts
{
  id: "hacking4humanity",
  title: "Top Finisher",
  related: ["loom"]
}
```

This relationship should let the UI link related projects and awards.

Adding or updating an experience later should usually require editing a data file rather than rewriting layout code.

## Visual direction

Take clear inspiration from NYT Games without recreating the NYT website literally.

Use:

* warm white / off-white background
* near-black text
* muted secondary text
* strong grid geometry
* restrained borders
* serif + sans-serif typography pairing
* generous whitespace
* carefully limited color
* Wordle-like square tiles
* Connections-like colored groups
* Strands-like pale blue paths
* crossword cells
* Spelling-Bee-like hexagonal forms
* compact black or outlined buttons where appropriate

Color should primarily appear inside game-inspired components.

The rest of the site should remain visually neutral.

Do not create fake newspaper branding.

Do not add:

* “The Shreya Times”
* “Today’s Edition”
* fake dates
* fake NYT-style publication language

Do not invent substitute names for Wordle, Connections, or Strands.

The design can visibly reference them.

## Writing style

Keep text concise.

Do not add long explanatory paragraphs.

Do not write generic personal-brand statements.

Avoid copy that sounds polished for the sake of sounding polished.

Prefer:

* company or project name
* role
* one short context line if useful
* 2–3 concise bullets
* metrics
* methods / technologies
* recognition

Descriptions should feel close to resume density, but easier to scan visually.

Do not turn every project into a narrative case study on the homepage.

If a detail page exists, longer explanation can live there.

## Site structure

Primary homepage:

1. Hero
2. Quick Scan
3. Experience
4. Research
5. Projects
6. Education & Involvement
7. Recognition
8. Contact

Priority:

Experience > Research > Projects

Education, involvement, and awards should support the main work rather than compete with it.

## Hero

Keep the hero minimal.

Required content:

Shreya Prashantha

Information Systems + Computer Science
Carnegie Mellon University

Optional compact descriptor line such as:

Software · Research · Product · Systems · Business

Do not hardcode me into a specific domain such as finance or manufacturing in the hero.

Those areas should appear elsewhere through actual experience.

Links:

* GitHub
* LinkedIn
* Email/contact if configured

No opening paragraph.

## Hero crossword element

Include a crossword-inspired visual on the homepage.

It should not be a puzzle someone must solve.

Use a small number of intersecting words based on broad capabilities or areas of work.

Possible words:

* SYSTEMS
* SOFTWARE
* RESEARCH
* PRODUCT
* DATA
* BUSINESS
* AI

Avoid using highly domain-specific terms like MANUFACTURING or FINANCE as permanent identity labels in the hero.

Those can appear contextually elsewhere.

Desktop:
hovering or selecting a crossword word may highlight related work.

Examples:

SYSTEMS:

* Tata
* Loom
* WheelWay
* Tang Lab

RESEARCH:

* Tang
* Collis
* Arabica study

BUSINESS:

* JFC
* Smart Woman Securities
* CWL
* DECA / FBLA context

AI:

* Tata
* Loom
* recommendation systems

On mobile, use tap rather than hover.

Do not let the interaction hide content or control navigation.

## Quick Scan

Immediately below the hero, create a compact section with approximately six strong metrics.

Initial metrics:

* 100% — 500+ adversarial test executions blocked — Tata Electronics
* 58% → 87% — query-routing accuracy — Tata Electronics
* 25.4 years — hourly rainfall analyzed — Tang Lab
* 1.73M — dissertation records — Heinz / Collis research
* 2nd — CMU IronViz Datathon
* 1st — FBLA Nationals, Intro to Marketing Concepts

This section should be visually easy to skim.

Do not animate every number aggressively.

## Experience

This is the most important section.

Order:

1. Tata Electronics
2. Coffee & Water Lab
3. AMD

Use Wordle-inspired visual cues:

* tiles
* subtle flip states
* gray / yellow / green language where appropriate

Do not make this an actual guessing game.

All core information must remain visible.

### Tata Electronics

Role:
Software Engineering Intern — Industrial AI

Location:
Santa Clara, CA

Dates:
May 2026 – Aug. 2026

Core content:

* Built and evaluated AI agents for heterogeneous manufacturing and operational data.
* Designed a six-layer security architecture spanning intent classification, prompt constraints, AST validation, runtime isolation, post-execution verification, and recovery.
* Blocked 100% of 500+ adversarial test executions.
* Improved DSPy routing accuracy from 58% to 87% on a 65-question benchmark.
* Evaluated 7k+ FETA-QA records and reached 92% BERTScore on tabular reasoning.
* Worked with inconsistent inspection records, tooling logs, sensor exports, and Excel/CSV/Parquet schemas.

Do not make 7,333 the headline number.

Preferred tags:
Python
AI Agents
DSPy
LangChain
AST
Pytest
DeepEval
LLM Evaluation
Manufacturing Data

Optional tile interaction may show categories such as:
BUILD
GUARD
ROUTE
EVALUATE
DATA

Clicking one can change a small supporting detail panel.

### Coffee & Water Lab

Role:
Data Analysis Intern

Location:
San Jose, CA

Dates:
June 2023 – June 2025

Data and personalization should come before marketing.

Core content:

* Built an auto-updating Neural Collaborative Filtering recommendation system.
* Combined order history, seasonality, digital signals, and 2,500 survey responses.
* Worked on customer cold-start and personalization.
* Used NLP and customer analytics on unstructured feedback.
* Increased Yelp search visibility 15%.
* Increased average Instagram Reels views 500% through demographic engagement analysis, if this fits without overcrowding.

Tags:
Recommendation Systems
Customer Analytics
NLP
Python
Product
Marketing Analytics

Do not present this primarily as a marketing internship.

### AMD

Role:
Data & Operations Research Intern

Dates:
Sept. 2024 – Dec. 2024

Core content:

* Benchmarked revenue per employee across semiconductor competitors before and after COVID.
* Identified labor and resource-allocation differences at a competitor.
* Consolidated CPU/GPU specifications and architecture benchmarks across major supercomputer deployments.
* Analyzed competitive positioning and hardware adoption.

Interactive element:
two compact modes:

OPERATIONS
HARDWARE

Operations may surface:

* revenue per employee
* pre/post COVID
* competitors
* allocation

Hardware may surface:

* CPU
* GPU
* supercomputers
* architecture

Keep the main information visible regardless of selected mode.

## Research

Use Strands-inspired visual language.

Create three distinct research strands.

Each research item should contain:

* short title
* one short context line
* 2–4 concise bullets
* methods
* metrics
* GitHub link if applicable

### Tang Lab / Human-Machine Harmony Lab

Topic:
Sewer System Digital Twin

Core content:

* Integrated 25.4 years of hourly precipitation data with BIM/GIS.
* Isolated 1,646 storms.
* Derived site-specific 1–24 hour IDF curves.
* Used the analysis to stress-test campus sewer infrastructure and support digital-twin calibration.
* Benchmarked against NOAA Atlas 14.
* Found short-duration campus intensities 51–77% below regional values.
* Found 24-hour totals within -7.4% at the 25-year return period.

Suggested Strand nodes:
Rain
25.4 Years
1,646 Storms
IDF
NOAA
GIS/BIM
Digital Twin

Link the public storm-analysis repository if appropriate.

### Heinz College / Collis Research

Topic:
Semantic Trajectories of Doctoral Dissertations

Core content:

* Processed 1.73M German PhD dissertation records.
* Used multilingual MPNet embeddings.
* Used 768-D centroid cosine similarity.
* Analyzed longitudinal semantic shifts and East/West or demographic alignment around reunification.
* Built supporting data-processing and automation pipelines where supported by source material.

Suggested nodes:
1.73M
Germany
Embeddings
768D
Cosine Similarity
Reunification
Semantic Change

### Arabica / Coffee Econometrics

Treat this as a separate research project.

Topic:
El Salvador vs. Costa Rica coffee analysis

Period:
2009–2022

Treatment:
El Salvador

Control:
Costa Rica

Method:
Difference-in-Differences with fixed effects

Outcomes:

* quality
* Arabica production
* bean exports
* price

Concepts:

* parallel trends
* treatment period
* fixed effects
* agricultural markets
* policy/economics

Suggested Strand nodes:
El Salvador
Costa Rica
Conflict
Arabica
Production
Exports
Price
Difference-in-Differences

Do not make this section read like a finance project. Keep it framed as applied econometric research.

## Projects

Use a Connections-inspired board as the most game-like component.

The interaction must remain optional.

Provide:

* Try it
* Reveal groups

Never require solving to access project information.

If someone ignores the puzzle, the project cards should still be understandable.

Important projects:

### Loom

Ethical art social platform.

Core content:

* React frontend
* Node/Express backend
* MongoDB
* FastAPI
* CLIP zero-shot tagging
* content recommendations
* behavioral bot detection
* honeypot / anti-scraping work

Recognition:

* Hacking4Humanity Top Finisher
* invited to the PA Governor’s Residence to speak on AI policy

### WheelWay

Accessibility routing system.

Inspect the current public GitHub repository before writing details.

Themes may include:

* accessible routing
* route geometry
* Mapbox
* slope/elevation
* Raspberry Pi
* sensing
* React
* Flask
* computer vision / hardware where supported

Do not invent unsupported capabilities.

### Grant Planner / GrantScope

Inspect the current GitHub repository.

Themes:

* AAU research funding
* CMU targeting
* opportunity analysis
* visualization
* decision support

Recognition:

* 2nd, CMU IronViz Datathon

### March Madness

Inspect the public GitHub repository.

Themes may include:

* men’s and women’s tournament data
* logistic regression
* Elo
* model comparison
* calibration
* log loss
* historical results

Recognition:

* 6th, CMU March Madness Machine Learning Competition

### Lunar Llamas

Use as a project / social-impact / engineering bridge.

Core content:

* automated self-cleaning shower prototype
* UV-C sanitation
* hydrophobic coatings
* sensor-triggered cleaning
* work with Shalaka Enterprises
* intended use in unhoused-service environments

Keep this concise.

### Additional GitHub projects

Inspect:
https://github.com/shreyap15/

Curate rather than listing every repository.

Only include projects that add:

* quality
* technical depth
* breadth
* a different capability
* useful evidence for recruiters

Do not invent details from repository names alone.

## Connections board

Use 16 tiles and four groups if practical.

Groups should represent meaningful relationships across projects.

Do not make every group correspond to a hard professional domain.

Better group ideas:

* shared technical approaches
* products involving users
* projects involving modeling
* work involving hardware / physical systems
* projects tied to competition recognition
* projects involving decision support

The goal is to show breadth without forcing me into a fixed label.

Recognition and project terms may appear in the same group.

When groups resolve, the related project cards should become easier to explore.

## Education & Involvement

Replace a separate Leadership section with a compact Education & Involvement section.

This section should not be long.

### Carnegie Mellon University

B.S. Information Systems & Computer Science

Include relevant academic context such as:

* Teaching Assistant, Principles of Imperative Computation
* selected coursework if visually useful

Do not create a long coursework list unless it improves the page.

### Involvement

Include compact entries or chips for:

* Data Science Club
* Joint Funding Committee
* Smart Woman Securities
* ScottyLabs
* IS Sphere Leadership Team
* CMU Novice Rowing Team

Also include other current activities only if they improve the section.

Do not give every organization a paragraph.

For most, use:

* role
* one metric or one descriptor at most
* a few short tags

Examples:

Joint Funding Committee
Advisor · ~$2.1M allocation · 300+ organizations

Smart Woman Securities
Research Analyst · Crypto / Commodities

ScottyLabs
Tech Product Strategy

Data Science Club
Board Member

CMU Rowing
Novice Team

Rowing should be included because it adds personality and makes the section feel less like another résumé.

Do not over-explain it.

Older high-school leadership such as DECA / FBLA should generally appear only where relevant to recognition or business history rather than dominating this section.

## Recognition

Create a real Recognition section.

Use Spelling Bee hexagons, crossword cells, or a similarly compact visual system.

Do not make it a plain bullet list.

Include:

### Technical / project

* 2nd — CMU IronViz Datathon
* 6th — CMU March Madness Machine Learning Competition
* Hacking4Humanity — Top Finisher

### Academic / quantitative

* 2× AIME Qualifier
* one qualification with distinction
* Math Prize for Girls Qualifier

### Business / nontechnical

* 1st — FBLA Nationals, Intro to Marketing Concepts

Review LinkedIn for other strong recognition:
https://www.linkedin.com/in/shreyaprashantha/

Do not include every historical award.

Prioritize awards that demonstrate different kinds of strength.

## Award linking

Awards should appear both:

* in Recognition
* beside the work that earned them

Examples:

Loom ↔ Hacking4Humanity

Grant Planner ↔ IronViz

March Madness ↔ 6th Place

Hover, focus, or tap on one should subtly highlight its counterpart.

Do not rely on color alone.

## Skills

Do not create a standalone Skills section.

Skills should appear as tags on relevant work.

Examples:

Tata:
Python
DSPy
AST
Pytest
LLM Evaluation

Tang:
Python
pandas
GIS/BIM
Hydrology
Time Series

Loom:
React
Node.js
MongoDB
FastAPI
CLIP

WheelWay:
React
Flask
Mapbox
Raspberry Pi

Optionally include a small aggregated “Toolbox” view or modal.

Do not use skill percentages or progress bars.

## Contact

Keep contact minimal.

GitHub
LinkedIn
Email

No long About Me paragraph is required.

## Responsive behavior

Desktop:

* crossword visual
* multi-column experience layouts
* richer Strands paths
* Connections board
* linked hover states

Mobile:

* preserve hierarchy
* use tap instead of hover
* stack cards
* simplify SVG/path geometry
* never hide essential information
* ensure crossword and Connections remain legible

Test at least:
375px
430px
768px
1024px
1440px

## Accessibility

Required:

* semantic HTML
* correct heading hierarchy
* interactive tiles must use buttons
* keyboard navigation
* visible focus states
* sufficient contrast
* reduced-motion support
* no information conveyed by color alone
* icon-only controls need labels
* touch alternatives to hover

## Motion

Keep motion limited.

Allowed:

* Wordle-like tile flips
* Connections regrouping
* Strands paths drawing once
* subtle stat reveals
* linked project/award highlighting
* small hover/press states

Avoid:

* constant animation
* exaggerated spring motion
* scroll hijacking
* looping backgrounds
* large entrance animations

Respect `prefers-reduced-motion`.

## Project detail routes

Only create separate project pages when there is enough substance to justify them.

Likely candidates:

* Loom
* WheelWay
* Grant Planner
* March Madness

Do not create empty detail pages for consistency.

Detail pages should use normal editorial layout rather than additional game concepts.

Possible sections:

* overview
* problem
* what I built
* architecture / methods
* results
* recognition
* GitHub

Keep copy concise.

## Source quality

Before writing project-specific descriptions:

* inspect my public GitHub repositories
* inspect repository README files
* use the professional facts in this specification
* use LinkedIn only for profile/award context where useful
* do not invent results, technologies, titles, or recognition

If internet access is unavailable, use the supplied content and keep uncertain values easy to edit in the data layer.

## Repository structure

Use a maintainable structure such as:

```text
src/
  components/
    common/
    crossword/
    wordle/
    connections/
    strands/
    recognition/
    layout/

  sections/
    Hero/
    QuickScan/
    Experience/
    Research/
    Projects/
    Education/
    Recognition/
    Contact/

  data/
    profile.ts
    experiences.ts
    research.ts
    projects.ts
    education.ts
    involvement.ts
    recognition.ts
    domains.ts

  pages/
    Home.tsx
    ProjectDetail.tsx

  types/
    content.ts

  styles/
    tokens.css
    globals.css
    typography.css

  App.tsx
```

Adjust only when there is a clear reason.

## Design tokens

Centralize:

* colors
* spacing
* radius
* borders
* typography
* maximum widths
* breakpoints
* animation duration
* easing

Do not scatter arbitrary visual constants through components.

## Implementation order

### Phase 1

Repository setup
AGENTS.md
docs
React/Vite configuration
design tokens
typography
data types

### Phase 2

Structured content data

### Phase 3

Complete static homepage:
hero
quick scan
experience
research
projects
education & involvement
recognition
contact

The site should already look polished before game interactions are added.

### Phase 4

Responsive refinement

### Phase 5

Crossword hero interaction

### Phase 6

Experience microinteractions

### Phase 7

Research Strands

### Phase 8

Connections project board

### Phase 9

Award/project linking

### Phase 10

Optional detail routes

### Phase 11

Accessibility and reduced motion

### Phase 12

Visual QA and final polish

Do not begin with the complicated Connections logic.

## Quality checks

At minimum:

* `npm run build` passes
* TypeScript has no unresolved errors
* lint passes if configured
* external links work
* mobile layouts are checked
* keyboard navigation works
* reduced-motion behavior works
* no content requires interaction to be understood
* no horizontal overflow at common breakpoints

Add tests where they provide real value, especially for interaction logic.

Do not over-engineer testing.

## Final quality bar

For every section, verify:

1. Can someone understand it without interacting?
2. Is the important information visible quickly?
3. Does interaction reveal something useful?
4. Is the copy concise and factual?
5. Does the design feel restrained?
6. Does it work well on mobile?
7. Is the content easy to update?
8. Does it avoid boxing me into a single career domain?

When choosing between cleverness and readability, choose readability.

When choosing between animation and hierarchy, choose hierarchy.

When choosing between more content and stronger curation, choose stronger curation.

## First execution

Start by:

1. inspecting the repository
2. creating `AGENTS.md`
3. creating `docs/PRODUCT_SPEC.md`
4. creating `docs/IMPLEMENTATION_PLAN.md`
5. scaffolding/configuring React + TypeScript + Vite if necessary
6. establishing the data model
7. implementing the complete static portfolio
8. continuing through the interactive phases
9. running validation
10. visually reviewing the result
11. fixing obvious layout and hierarchy problems
12. summarizing what was built and where future edits should be made

Do not respond with only a plan. Execute the implementation.


# Authoritative writing supplement

## Writing style and voice

This is one of the most important requirements in the project.

Do not rewrite my experience into short, punchy, generic portfolio copy.

Avoid writing like:

* Built AI agents for manufacturing data.
* Designed a six-layer security system.
* Improved routing accuracy.
* Worked with customer data.
* Analyzed semiconductor competitors.
* Built recommendation systems.

These are technically correct but do not sound like me and strip away too much context.

My writing style is closer to my résumé: specific, direct, technical when necessary, and complete enough that the reader understands what the work actually involved.

Each major experience or research item should usually use 2–3 substantive bullets. A bullet may be one full sentence or occasionally two connected sentences when needed.

A good bullet should usually contain some combination of:

* what I was trying to build or analyze
* what kind of data/system/problem I was working with
* the method or technical decision
* what changed or what the result was

Do not shorten a sentence merely to make it sound punchier.

Do not turn every bullet into an action-verb fragment.

Do not invent conversational filler or personal-brand language.

Do not add sentences such as:

* “This taught me…”
* “What made this interesting was…”
* “I love working at the intersection of…”
* “I’m passionate about…”
* “I turn complex problems into…”
* “At its core, this project was about…”
* “The challenge? …”
* “The result? …”

Avoid rhetorical questions unless they come directly from my source material.

Avoid excessive em dashes, one-sentence fragments, and artificial contrast structures.

Do not use headings like:

* The Challenge
* The Solution
* The Impact
* What I Learned

unless a detailed project page genuinely benefits from them.

The writing should feel like an expanded, more readable version of my résumé, not a marketing rewrite of it.

When source material already has good wording, preserve as much of its structure and terminology as possible.

For homepage content:

* use 2–3 substantial bullets for major experiences
* keep bullets visually concise but not artificially short
* use metrics as supporting visual elements rather than replacing the explanation
* use technology tags separately so the sentence itself does not become a list of tools

The website should sound like the same person who wrote the résumé.

## Experience copy

### Tata Electronics

Software Engineering Intern — Industrial AI
Santa Clara, CA
May 2026 – Aug. 2026

Use wording close to the following:

* Built and evaluated an AI analysis agent for heterogeneous manufacturing data, including inspection files, sensor logs, and Excel/CSV/Parquet exports, with an emphasis on making exact calculations and analysis reproducible across inconsistent operational datasets.

* Designed a six-layer defense-in-depth architecture covering intent classification, prompt constraints, AST-based code validation, runtime isolation, post-execution verification, and recovery. The resulting system blocked 100% of 500+ adversarial test executions, including dataframe mutation, reflection, aliasing, magic-method, and dynamic-execution attacks.

* Improved DSPy-based query routing from 58% to 87% accuracy on a 65-question benchmark and built evaluation workflows using Pytest, DeepEval, BERTScore, ROUGE-L, and FETA-QA. Across 7k+ evaluation records, the system reached 92% BERTScore on tabular reasoning.

The first visible metric should be:

100%
of 500+ adversarial test executions blocked

The 7k+ FETA-QA figure should appear as secondary evaluation context, not as the hero statistic.

Suggested tags:
Python
DSPy
LangChain
AST Validation
Pytest
DeepEval
AI Agents
Manufacturing Data

### Coffee & Water Lab

Data Analysis Intern
San Jose, CA
June 2023 – June 2025

Data and personalization should come before marketing.

Use wording close to:

* Built an auto-updating Neural Collaborative Filtering recommendation system that combined order history, seasonality, digital signals, and 2,500 survey responses to address customer cold-start and personalize recommendations even when little purchase history was available.

* Built NLP and customer-analysis workflows around unstructured feedback and engagement data, using the results to improve both product decisions and customer discovery. This work contributed to a 15% increase in Yelp search visibility and a 500% increase in average Instagram Reels views.

Do not rewrite this as a marketing internship.

Suggested tags:
Recommendation Systems
Customer Analytics
NLP
Python
Personalization
Product Analytics

### AMD

Data & Operations Research Intern
Sept. 2024 – Dec. 2024

Use wording close to:

* Compared revenue per employee across semiconductor companies before and after COVID, identifying changes in labor efficiency at a major competitor’s U.S. operations that could inform resource-allocation decisions.

* Consolidated CPU/GPU specifications, architecture benchmarks, and supercomputer deployment data to compare competitive positioning and understand how different hardware architectures were being adopted across high-performance computing systems.

Keep the OPERATIONS / HARDWARE interactive treatment, but do not replace these explanations with short fragments.

OPERATIONS may emphasize:
Revenue per employee
Pre/post COVID
Competitor benchmarking
Resource allocation

HARDWARE may emphasize:
CPU
GPU
Architecture
Supercomputers

## Research copy

### Human-Machine Harmony Lab — Sewer System Digital Twin

Use wording close to:

* Built a Python pipeline integrating 25.4 years of hourly precipitation data with BIM and GIS inputs, separating 1,646 storm events and deriving localized 1–24 hour intensity-duration-frequency curves for use in a campus sewer-system digital twin.

* Benchmarked the resulting design intensities against NOAA Atlas 14 and found that short-duration campus rainfall estimates were 51–77% below the regional values, while 24-hour totals converged to within -7.4% at the 25-year return period.

Suggested Strand nodes:
25.4 years
1,646 storms
IDF
NOAA Atlas 14
BIM/GIS
Digital Twin

Do not reduce the research explanation to labels like “Rain → Storms → IDF → Digital Twin.” Those labels may exist in the visual treatment, but the complete explanation should remain alongside them.

### Heinz College — Semantic Trajectories of Doctoral Dissertations

Use wording close to:

* Processed 1.73 million German doctoral-dissertation records using multilingual MPNet embeddings and 768-dimensional centroid cosine similarity to measure how research topics shifted longitudinally.

* Used the resulting semantic trajectories to study patterns in East/West and demographic research alignment around German reunification, with supporting data-processing and LaTeX automation pipelines for large-scale analysis.

Keep this concise, but preserve the scale and methodology.

Suggested Strand nodes:
1.73M records
MPNet
768D
Cosine Similarity
Germany
Reunification
Semantic Change

### Coffee Econometrics — El Salvador vs. Costa Rica

Use wording close to:

* Studied the effect of conflict on El Salvador’s coffee sector from 2009–2022 using Costa Rica as a control and a difference-in-differences framework with fixed effects.

* Compared changes in coffee quality, Arabica production, bean exports, and price across pre-treatment, conflict, and post-conflict periods, including parallel-trends analysis before the treatment window.

Suggested methods/tags:
Difference-in-Differences
Fixed Effects
Parallel Trends
Econometrics
Agricultural Markets
Policy Analysis

Do not describe this primarily as a finance project. It is applied econometric research.

## Project copy

Project descriptions should follow the same rule: explain the system in a complete sentence rather than reducing it to a technology list.

### Loom

Use wording close to:

* Built a full-stack social platform for artists using React, Node/Express, MongoDB, and FastAPI, with CLIP-based zero-shot tagging and content recommendations used to generate personalized feeds.

* Added behavioral bot detection and anti-scraping measures, including ensemble detection logic and honeypot interactions, so the platform could use machine learning for discovery without treating unrestricted scraping as a necessary tradeoff.

Recognition:
Hacking4Humanity — Top Finisher
Invited to the Pennsylvania Governor’s Residence to speak on AI policy

Keep technologies in tags rather than forcing all of them into every sentence.

### WheelWay

Inspect the current GitHub repository before finalizing copy.

The description should explain:

* what accessibility problem the routing system addresses
* how route geometry/elevation/accessibility information is combined
* what role the hardware or sensing system plays, if currently supported by the repository

Do not write generic language such as:
“Built an AI-powered accessibility platform.”

Use the actual implementation.

### Grant Planner / GrantScope

Inspect the repository before finalizing the wording.

The description should explain that the project compares AAU research funding with CMU participation to identify research areas where funding is large or growing but CMU appears relatively under-targeted.

Do not reduce it to:
“Built a data visualization dashboard.”

Recognition:
2nd — CMU IronViz Datathon

### March Madness

Inspect the repository before finalizing wording.

The description should explain:

* the historical data pipeline
* the models compared
* why calibrated logistic regression performed well
* that model selection was based on predictive performance / log loss rather than model complexity

Recognition:
6th — CMU March Madness Machine Learning Competition

Do not write:
“Built a March Madness prediction model using machine learning.”

### Lunar Llamas

Use wording close to:

* Co-developed a five-part automated self-cleaning shower prototype with Shalaka Enterprises for use in unhoused-service environments, combining UV-C sanitation, hydrophobic coatings, and sensor-triggered cleaning cycles.

The portfolio may mention the broader social-impact context, but do not turn this into sentimental or overly promotional copy.

## Education & involvement

This section should be much lighter than Experience, Research, or Projects.

Do not write explanatory paragraphs for each organization.

Use compact entries.

Carnegie Mellon University
B.S. Information Systems & Computer Science

Teaching Assistant
Principles of Imperative Computation
C · Data Structures · Algorithms · Memory Management

Involvement:

Data Science Club
Board Member

Joint Funding Committee
Advisor · ~$2.1M Student Activities Fee allocation across 300+ organizations

Smart Woman Securities
Research Analyst · Crypto / Commodities

ScottyLabs
Tech Product Strategy

IS Sphere
Leadership Team

CMU Rowing
Novice Team

Rowing should remain simple. Do not try to explain why rowing demonstrates teamwork, discipline, resilience, or any other generic trait.

Its purpose is simply to show another part of my life at CMU.

## Recognition

Keep award wording straightforward.

Examples:

2nd Place
CMU IronViz Datathon

6th Place
CMU March Madness Machine Learning Competition

Top Finisher
Hacking4Humanity

2× AIME Qualifier
One with distinction

Math Prize for Girls
Qualifier

1st Place — Nationals
FBLA Intro to Marketing Concepts

Do not attach explanatory copy to every award.

Where an award is tied to a project, link the two visually.

## General editing rule

Before finalizing any visible text, ask:

“Would this plausibly appear in Shreya’s résumé or sound natural if she were explaining the work in an interview?”

If no, rewrite it.

Do not optimize for maximum brevity.

Do not optimize for cleverness.

Prioritize specificity, natural sentence structure, and accurate technical detail.

