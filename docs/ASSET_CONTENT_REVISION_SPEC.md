Revise the existing portfolio in place. Do not rebuild it from scratch.

Do not re-investigate content that is explicitly provided below. Use this prompt as the source of truth unless a task specifically says to inspect an existing repo or image.

This pass should focus on:

* real project assets
* better visual grounding
* stronger interactivity
* corrected content
* removal of strange/generated-looking graphics
* more natural copy
* a more handmade feel

## 1. Use the real images already in the repository

I added images under:

`src/images/`

These include project visuals and Coffee & Water Lab app/project assets.

Inspect the images once, match them to the appropriate content, and use them selectively.

Prioritize:

1. images I supplied
2. real screenshots from live projects
3. data-derived charts/diagrams from my work
4. simple CSS/SVG interaction graphics

Do not create generic decorative illustrations.

For supplied images:

* preserve aspect ratio
* use sensible max dimensions
* avoid giant full-width images unless justified
* avoid awkward cropping
* never stretch screenshots
* add useful alt text
* use `object-fit` appropriately

Several current graphics feel strange and oversized.

Remove them if they do not communicate something real about the work.

Do not preserve a graphic just because it has already been implemented.

## 2. Loom

Live demo:

https://loom-art-app.vercel.app/

Add:

Live Demo
GitHub

Do not spend time re-researching Loom unless needed for implementation.

### Copy

Use wording close to:

Built a full-stack social platform for artists using React, Node/Express, MongoDB, and FastAPI, with CLIP-based zero-shot tagging and content recommendations used to generate personalized discovery feeds.

Added behavioral bot detection and anti-scraping safeguards, including ensemble detection logic and honeypot interactions, so recommendations and discovery could coexist with stronger protections against automated scraping.

### Recognition

Include:

Hacking4Humanity — Top Finisher

Pennsylvania Governor’s Residence — AI Policy Roundtable

Make clear that the Governor’s Residence event was a roundtable/discussion on AI policy.

Do not make it sound like a separate project.

If useful, visually connect:

Loom
↔ Hacking4Humanity
↔ Governor’s Residence AI Policy Roundtable

### Visual

Use:

* a Loom screenshot already under `src/images` if available
* otherwise the live demo as reference

Do not create an oversized fake browser mockup.

A small methods strip may include:

CLIP
Recommendations
Bot Detection
Anti-Scraping

## 3. Coffee research — correct and expand this substantially

Replace the current simplified coffee research treatment.

Present this under a broader heading such as:

Coffee Econometrics & Machine Learning

Research with Seyed Ghafouri · London Business School

Do not overstate his title.

There are TWO related analytical tracks.

Do not incorrectly merge them into one method.

### Track A — Conflict / econometric analysis

Studied how conflict affected El Salvador’s coffee sector from 2009–2022 using Costa Rica as the comparison country.

Treatment:
El Salvador

Control:
Costa Rica

Outcomes:

* coffee quality
* Arabica production
* bean exports
* price

Methods:

* Difference-in-Differences
* fixed effects
* pre-treatment parallel-trends analysis

Time structure:

* pre-period: 2009–2012
* conflict / treatment period: 2012–2015
* short post-period: 2015–2018
* long post-period: 2018–2022

Use wording close to:

Analyzed how conflict affected El Salvador’s coffee industry from 2009–2022 using Costa Rica as a comparison country, measuring changes in coffee quality, Arabica production, exports, and prices across pre-conflict, conflict, and post-conflict periods.

Used Difference-in-Differences with fixed effects and pre-treatment parallel-trends testing to distinguish treatment effects from underlying country-level differences.

A supporting statistic may mention that the pre-treatment quality trend estimate was approximately +0.0203 with p = 0.010, but do not make this the headline without context.

### Track B — Drought / machine-learning forecasting

This is a distinct ML analysis and should be explicitly included.

Use the following as source-of-truth content:

The study used a dataset containing 19 econometric factors from 2009–2022, including variables such as:

* coffee price
* quality score
* production
* other market/economic indicators

It combined these with climate/environmental variables including:

* NDVI
* precipitation

The modeling goal was to study how climate conditions, especially drought-related changes, influence coffee production, quality, and broader market behavior.

Future projections extended through 2035.

Models:

* Random Forest
* Gradient Boosting

The models were used to predict coffee-related econometric factors for approximately 2023–2035.

The analysis also included:

* feature importance
* nonlinear relationships between climatic and economic variables
* cross-validation
* regional comparisons

Use wording close to:

Built Random Forest and Gradient Boosting models using 19 econometric variables, NDVI, and precipitation data to study how climatic conditions affect coffee production, quality, and market behavior.

Trained models on historical data from 2009–2022 and generated forward-looking predictions through 2035, using feature-importance analysis to identify which climatic variables were most strongly associated with coffee yield, quality, and market trends.

Used cross-validation to evaluate model robustness and compared regional effects across major coffee-producing countries.

You may mention selected findings visually rather than putting all of them in prose:

Brazil:
declines across most major econometric indicators except price

Guatemala:
quality declined while production showed growth in the modeled data

Uganda:
continued production declines associated with climate stress

Do not overstate causality.

### Coffee visual treatment

This research deserves a stronger visual than plain text.

Prefer supplied coffee-related assets under `src/images`.

Possible interactive/data visuals:

#### Econometrics view

Treatment/control timeline:

2009
→ pre-period
→ conflict
→ short post
→ long post
→ 2022

with:
El Salvador = treatment
Costa Rica = control

#### ML view

A compact flow such as:

2009–2022 data
→ 19 econometric factors

* NDVI
* precipitation
  → Random Forest / Gradient Boosting
  → feature importance
  → 2023–2035 projections

An interactive toggle between:

ECONOMETRICS
MACHINE LEARNING

would work well.

Do not create a giant infographic.

### Coffee Strands interaction

Use meaningful strands such as:

EL SALVADOR
→ TREATMENT
→ DIFFERENCE-IN-DIFFERENCES
→ FIXED EFFECTS

COSTA RICA
→ CONTROL
→ PARALLEL TRENDS

NDVI
→ PRECIPITATION
→ CLIMATE

19 FACTORS
→ RANDOM FOREST
→ GRADIENT BOOSTING
→ FORECASTING

2009–2022
→ TRAINING DATA
→ 2035
→ PROJECTIONS

The research prose must remain readable without solving the interaction.

## 4. 15-122 Teaching Assistant

Under Education, add a distinct teaching block.

Use:

15-122 Teaching Assistant · CMU School of Computer Science

August 2026 – Present

Bullets:

* TA for a course serving 500+ students, covering C programming, data structures, algorithms, and program correctness through contracts, representation invariants, and loop invariants.

* Lead weekly recitations for 20+ students and hold office hours focused on debugging, data-structure reasoning, memory behavior, algorithm design, and asymptotic-complexity analysis.

Tags:

C
Data Structures
Algorithms
Correctness
Memory Management
Asymptotic Analysis

Do not display tags as run-on text.

Treat this as substantive teaching experience, not just involvement.

## 5. Education

Use:

Carnegie Mellon University

B.S. Information Systems & Computer Science
Minor in Robotics

Keep the Robotics minor visible but visually subordinate.

Do not add a graduation date to the main hero.

## 6. Education & Involvement structure

Use three levels:

### Education

Carnegie Mellon University
B.S. Information Systems & Computer Science
Minor in Robotics

### Teaching

15-122 Teaching Assistant · CMU School of Computer Science
August 2026 – Present

Include the substantive bullets above.

### Involvement

Keep these compact:

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

Do not give each club a paragraph.

## 7. March Madness visual

For this task only, inspect the existing March Madness GitHub repository because I want the visual to come from the actual project.

Do not broadly re-research other projects.

Create a technically meaningful visual based on the repo.

Prefer one of these if supported:

### Model comparison

Compare actual models used, such as:

* Logistic Regression
* Elo
* Random Forest
* XGBoost

Use actual evaluation results.

### Calibration visual

If probabilities/results are available, show predicted probability vs observed outcome.

### Pipeline

Historical game data
→ ratings/features
→ model comparison
→ calibrated probabilities
→ tournament predictions

### Men / women pipelines

If both exist in the repo, show them as parallel pipelines using the same modeling framework.

Do not invent numbers.

Do not create a decorative basketball graphic.

Keep the visual compact.

## 8. Interaction reference

Use this only as an interaction reference:

https://evali.vercel.app/

Do not copy its visual design.

The target is:

more interactive than the current portfolio
less maximal than this reference

The site should feel authored and responsive without becoming chaotic.

Good:

* responsive hover/tap states
* subtle object movement
* physical-feeling tile interactions
* meaningful reveals
* linked project/award highlights
* interactive research relationships

Avoid:

* custom cursor
* constant mouse-following
* excessive physics
* floating decorative objects
* nonstop animations

## 9. Crossword

Make sure MANUFACTURING is represented.

The crossword should include a balanced set such as:

AI
SOFTWARE
MANUFACTURING
RESEARCH
PRODUCT
FINANCE
SYSTEMS
ECONOMETRICS

These are areas represented in my work, not labels that permanently define me.

Examples:

MANUFACTURING
→ Tata
→ AMD

AI
→ Tata
→ Loom
→ recommendation systems

ECONOMETRICS
→ Coffee research

RESEARCH
→ Tang
→ Collis
→ Coffee

PRODUCT
→ CWL
→ Loom
→ WheelWay

FINANCE
→ Smart Woman Securities
→ JFC
→ funding analysis

When a crossword word is selected:

* activate the relevant cells
* highlight related content
* optionally scroll to the first related item

Keep it optional.

## 10. Improve Wordle / Experience interaction

Experience should not use Wordle tiles as decoration only.

Make them interactive.

Tata examples:

AGENT
GUARD
ROUTE
EVAL
DATA

Selecting a tile reveals focused supporting information.

GUARD:

* six-layer defense-in-depth
* AST validation
* runtime isolation
* 100% of 500+ adversarial test executions blocked

ROUTE:

* DSPy
* 58% → 87%
* 65-question benchmark

EVAL:

* Pytest
* DeepEval
* BERTScore
* ROUGE-L
* 7k+ FETA-QA records

DATA:

* inspection data
* sensor logs
* Excel
* CSV
* Parquet

CWL examples:

RECOMMEND
COLD START
SURVEY
NLP
GROWTH

AMD examples:

OPERATIONS
CPU
GPU
HPC
BENCHMARK

Interactions should:

* depress slightly
* flip
* visibly change state
* reveal useful content

Do not hide the primary bullets.

## 11. Improve Strands interaction

Make Strands meaningfully interactive.

Users should be able to:

* select related nodes
* visually connect concepts
* complete a valid research path
* reveal the relationship/result

Always provide a Reveal option.

Do not force solving.

Use:

* Tang research
* Collis research
* both coffee analytical tracks

as the research systems.

## 12. Fix Connections manual mode

The guided / try-group behavior currently works.

The full “do it yourself” mode does not.

Fix it.

Manual mode should support:

* tile selection
* deselection
* exactly four selected items
* group submission
* correct/incorrect feedback
* locking solved groups
* continuing through remaining groups
* reveal all

Do not heavily penalize mistakes.

Make touch behavior work properly.

## 13. Real visual feedback

Add subtle feedback throughout.

### Project images

On hover:

* very slight scale/crop movement
* caption or View Project
* no dramatic zoom

### Recognition linking

IronViz
→ GrantScope

Hacking4Humanity
→ Loom

March Madness recognition
→ March Madness project

Hovering one should subtly highlight the linked item.

### Research

Nodes:

* hover response
* selection state
* line/path creation
* completed strand state

### Experience

Tiles:

* press
* flip
* reveal
* selected state

Keep the page calm overall.

## 14. Remove strange / oversized graphics

Audit current custom graphics.

Remove a graphic if:

* it communicates nothing specific
* it looks generated
* it is disproportionately large
* a real supplied image would communicate the work better

Do not add replacements simply to fill the empty space.

Whitespace is fine.

## 15. Asset sizing

Use reusable media styles.

Project thumbnail:
approximately 4:3 or 16:10

Compact chart:
approximately 420–650px desktop width

Company logo:
small and secondary

Full screenshot:
constrained to content width

Use responsive max-width / `clamp()` behavior.

Do not let individual graphics consume an entire desktop viewport unless there is a very strong reason.

## 16. Company logos

Use supplied company logos if available.

Do not spend time searching for replacements unnecessarily.

If a company has no good supplied logo, typography alone is fine.

Logos are secondary to the work.

## 17. Recognition

Keep:

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

Merge DECA and FBLA into one compact business-competition item.

Example:

DECA + FBLA
National & state competition recognition

Strongest result:

1st Place — FBLA Nationals
Intro to Marketing Concepts

Do not create many separate high-school award tiles.

## 18. Contact

Remove decorative closing copy.

Include:

GitHub
LinkedIn

Email:

[sprasha2@andrew.cmu.edu](mailto:sprasha2@andrew.cmu.edu)
[shreyaprashantha15@gmail.com](mailto:shreyaprashantha15@gmail.com)

Both emails should be clickable `mailto:` links.

## 19. Copy audit

Remove remaining generic/AI-sounding phrases.

Do not use things like:

“Where code meets curiosity”

“Built with intention”

“A few things I’ve been working on”

“Numbers that tell the story”

“Connecting the dots”

“Beyond the classroom”

“More than code”

“Selected work & a few connections”

“Following the data”

“A selection of things I’ve built”

“Across a few different boards”

“A little structure. A few connections.”

Prefer:

Experience
Research
Projects
Education & Involvement
Recognition
Contact

The site should not narrate its own design.

## 20. Typography

The current body/main typography feels too default / Arial-like.

Use a more intentional editorial pairing.

Possible direction:

Sans:
Instrument Sans
Inter Tight
IBM Plex Sans

Serif:
Newsreader
Source Serif 4

Use only one sans and one serif.

Keep it professional.

Do not use novelty fonts.

## 21. Handmade feel

Keep a consistent design system, but do not force every section into identical cards.

Allow each major section to have a slightly different structure:

Experience
→ Wordle-inspired interaction

Research
→ Strands-inspired interaction

Projects
→ Connections-inspired interaction

Hero
→ crossword

Recognition
→ compact game-like geometric treatment

Education
→ mostly editorial/static

Use:

* asymmetry
* varied layouts
* real project imagery
* subtle annotations
* meaningful diagrams
* connecting lines
* captions

Do not use fake handwriting or scrapbook styling.

Handmade should mean deliberately authored.

## 22. Final QA

After changes:

* verify all `src/images` assets used have valid paths
* verify supplied images are not distorted
* verify Loom Live Demo link
* verify Loom roundtable recognition
* verify Robotics minor
* verify TA section
* verify 500+ and 20+ teaching numbers
* verify coffee research includes BOTH econometric and ML tracks
* verify Random Forest and Gradient Boosting appear correctly
* verify NDVI, precipitation, 19 factors, and 2035 projections
* verify March Madness visual uses actual repo data
* verify MANUFACTURING appears in crossword
* verify Wordle interaction
* verify Strands interaction
* verify Connections manual mode
* remove strange oversized graphics
* test desktop
* test tablet
* test mobile
* run build
* run typecheck
* run lint if configured
* fix visible issues before stopping

Do not spend tokens re-verifying facts that are explicitly supplied in this prompt.

At the end, give a short summary only:

* major visual changes
* which supplied images were used
* March Madness visual created
* interaction bugs fixed
