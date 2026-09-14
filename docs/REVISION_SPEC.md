You are revising the existing portfolio implementation.

Do not rebuild the project from scratch.

First inspect the current site in the browser and the existing codebase. Then implement the changes below directly.

The goal of this pass is to make the portfolio feel less templated, less AI-written, more visually specific to my actual work, and more obviously handmade.

Preserve the overall NYT Games-inspired concept and the existing information architecture unless a change below explicitly modifies it.

## 1. Remove awkward decorative micro-copy

Several short phrases currently sound artificial and should be removed or replaced with straightforward section labels.

Remove or rewrite phrases like:

* “Selected work & a few connections”
* “Following the data”
* “A selection of things I’ve built”
* “Optional”
* “Across a few different boards”
* “A little structure. A few connections.”

Do not replace them with similarly clever phrases.

Prefer simple section names:

Experience
Research
Projects
Education & Involvement
Recognition

If a section needs supporting text, use one natural sentence only when it genuinely clarifies the interaction.

Do not add taglines just to fill space.

## 2. Rework the homepage crossword

The current crossword does not represent the breadth of my work well enough.

It should include meaningful areas I have actually worked in.

Use a set closer to:

AI
SOFTWARE
MANUFACTURING
RESEARCH
PRODUCT
FINANCE
SYSTEMS
ECONOMETRICS

These should read as domains represented in my work, not as a permanent professional identity.

MANUFACTURING must be included.

The crossword should visually feel intentional rather than randomly generated.

Build the words into a clean intersecting grid with good spacing and a deliberate composition.

Hover/tap behavior should highlight relevant work elsewhere on the page.

Suggested mappings:

MANUFACTURING

* Tata Electronics
* AMD
* Tang Lab where relevant to infrastructure/systems

AI

* Tata
* Loom
* recommendation systems
* selected ML work

FINANCE

* Smart Woman Securities
* JFC
* GrantScope / funding decisions
* relevant competition/business experience

ECONOMETRICS

* coffee conflict study

RESEARCH

* Tang
* Collis
* coffee econometrics

PRODUCT

* CWL
* Loom
* WheelWay
* ScottyLabs

Do not make the crossword an actual required puzzle.

## 3. Improve the typography

The current main font treatment feels too close to Arial/default web typography.

Make the type system more distinctive while remaining professional.

Try a pairing such as:

* Instrument Sans, Inter Tight, or IBM Plex Sans for UI/body
* Newsreader or Source Serif 4 for selected display/headline text

Use only one sans and one serif.

Do not use decorative or novelty fonts.

The site should feel editorial and intentional, not corporate-template-like.

Use typography hierarchy rather than excessive boxes.

Review:

* hero
* section headings
* company names
* role titles
* metric numerals
* project names
* interaction labels

Do not make every heading oversized.

## 4. Make Wordle more interactive

The Experience section should have more than decorative Wordle tiles.

Keep all important content visible, but allow the user to interact with a small Wordle-like component that reveals more about each experience.

For Tata, create a set of meaningful categories such as:

AGENT
GUARD
ROUTE
EVAL
DATA

These do not have to behave like literal five-letter Wordle guesses.

Instead, make the interaction borrow from Wordle:

* tile selection
* tile flip
* state change
* small reveal
* green/yellow/gray language where appropriate

When the user selects a category, show one focused supporting detail.

Example:

GUARD
reveals:

* six-layer defense-in-depth
* AST validation
* runtime isolation
* 100% of 500+ adversarial test executions blocked

ROUTE
reveals:

* DSPy
* 58% → 87%
* 65-question benchmark

EVAL
reveals:

* Pytest
* DeepEval
* BERTScore
* ROUGE-L
* 7k+ FETA-QA records

DATA
reveals:

* inspection files
* sensor logs
* Excel
* CSV
* Parquet

The base Tata bullets should remain visible.

For CWL and AMD, use the same underlying component with different content rather than creating three unrelated implementations.

CWL could reveal:

* Recommendation
* Cold-start
* Survey data
* NLP
* Growth

AMD could reveal:

* Operations
* CPU
* GPU
* Supercomputers
* Benchmarking

The interaction should feel playful enough to notice but not turn the section into a game.

## 5. Make Strands more interactive

The Research section should borrow more meaningfully from Strands.

Currently, simply drawing lines is not enough.

Create an interaction where research concepts can be actively connected.

Possible behavior:

* present a small set of concept nodes
* allow the user to select or drag through related nodes
* connected nodes visually form a strand
* once a valid strand is completed, reveal the corresponding research result or method
* provide a Reveal / Show Connections option at all times

The research content itself must remain readable outside the interaction.

Do not block the section behind solving.

### Tang Lab

Possible strands:

RAINFALL
→ STORM EVENTS
→ IDF CURVES
→ NOAA
→ DIGITAL TWIN

Another:
BIM
→ GIS
→ INFRASTRUCTURE
→ DIGITAL TWIN

### Collis

Possible strand:

DISSERTATIONS
→ EMBEDDINGS
→ CENTROIDS
→ COSINE SIMILARITY
→ SEMANTIC CHANGE

### Coffee Econometrics

Create a more complete strand.

Do not reduce this project to only Difference-in-Differences.

The project should acknowledge that I worked with Seyed Ghafouri at London Business School.

Display something like:

Research with Seyed Ghafouri
London Business School

Do not invent his title if it cannot be verified from project/source material.

Include the existing econometric work:

* El Salvador as treatment
* Costa Rica as control
* 2009–2022
* Difference-in-Differences
* fixed effects
* parallel trends
* coffee quality
* Arabica production
* exports
* price

Also inspect the current source material / repository / existing project data for the machine-learning work associated with this research.

The previous implementation omitted it.

Add the actual ML methods, models, features, or evaluation work only if supported by source material.

Do not invent ML techniques.

If the repository does not currently contain enough detail, structure the data model so the ML portion can easily be added later and leave a clearly marked internal TODO rather than fabricating content.

## 6. Fix the Connections interaction

The current Connections section has a bug:

* the guided / “try group” behavior works
* the full “do it yourself” interaction does not work properly

Debug this.

The full mode should allow the user to:

* select and deselect tiles
* select exactly four items
* submit a group
* receive success/failure feedback
* lock solved groups
* continue solving remaining groups
* reveal all groups at any time

Do not penalize mistakes heavily.

Do not force the user to finish.

Make sure touch interaction works on mobile.

Add lightweight tests for this state logic if useful.

## 7. Improve the Projects section wording

Remove vague headings and filler.

Do not use:
“A selection of things I’ve built.”

Just use:

Projects

If useful, a small interaction label may say:

Try the board
Reveal groups

Nothing more is necessary.

Project cards should use complete sentences, not tiny fragments.

## 8. Add more actual visuals

The page currently needs more visual material.

Do not add stock illustrations.

Prefer real project/company visuals.

### Experience

Where visually appropriate, add company logos for:

* Tata Electronics
* Coffee & Water Lab
* AMD

Use official or clean logo assets.

Keep them restrained.

They should support the company identity without making the site look like a sponsorship page.

Use alt text.

### Research / Projects

Look for visual material from the actual work:

Tang:

* small rainfall / IDF chart
* storm-event visualization
* simplified curve or infrastructure diagram

Collis:

* small embedding / semantic-shift visualization
* centroid or trajectory diagram if available

Coffee econometrics:

* small treatment/control trend plot
* pre/during/post timeline
* model/evaluation visual if source material supports it

Loom:

* real screenshot or UI preview

WheelWay:

* route/map preview

GrantScope:

* actual dashboard / heatmap / funding visualization

March Madness:

* bracket/model/results visual where appropriate

Do not overcrowd the page.

One strong visual per major project is better than several weak ones.

If repository screenshots already exist, reuse them.

If no suitable screenshot exists, create a simple diagram from the actual project architecture/data rather than generating decorative art.

## 9. Make the site feel handmade

This is a high-priority design goal.

The site should not look perfectly uniform in a way that suggests it came from a template.

Keep a consistent design system, but allow sections to have their own small visual identity.

Examples:

* Wordle-like experience tiles
* Strands-like research navigation
* Connections project board
* crossword homepage
* hexagonal recognition layout
* project-specific diagrams and screenshots

Do not force every card to have the same size, spacing, and layout.

Avoid repetitive:
title
subtitle
three cards
button

for every section.

Use some asymmetry.

Allow certain metrics or visuals to extend beyond the standard text column.

Use small handcrafted details:

* tiny annotations
* diagram labels
* connecting rules
* imperfect-but-intentional grid alignment
* small project-specific symbols
* carefully positioned captions

Do not add fake handwritten fonts or scrapbook styling.

“Handmade” should mean deliberately designed, not messy.

## 10. Recognition

Keep Recognition as a dedicated section.

Link technical recognition to the work that earned it.

Include:

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

For DECA and FBLA, avoid scattering many individual high-school awards across the section.

Combine them into a single compact business-competition item.

Something like:

DECA + FBLA
National & state competition recognition

Then include the strongest result underneath:

1st Place — FBLA Nationals
Intro to Marketing Concepts

If the existing data contains other meaningful DECA/FBLA achievements, keep them subordinate rather than creating many separate award tiles.

This should communicate business/marketing strength without making the section feel dominated by high-school competitions.

## 11. Education & Involvement

Keep this concise.

Include:

Carnegie Mellon University
B.S. Information Systems & Computer Science

Teaching Assistant
Principles of Imperative Computation

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

Do not write explanatory paragraphs for these.

Rowing should stay simple.

Do not add generic teamwork or discipline language.

## 12. Contact

Remove:
“A little structure. A few connections.”

Do not replace it with another tagline.

Keep the end of the site simple.

Include:

GitHub
LinkedIn

Email:
[sprasha2@andrew.cmu.edu](mailto:sprasha2@andrew.cmu.edu)
[shreyaprashantha15@gmail.com](mailto:shreyaprashantha15@gmail.com)

Both emails should be clickable `mailto:` links.

## 13. Copy review

Audit every visible heading and subheading.

Remove anything that sounds like generic portfolio copy.

Especially remove:

* vague metaphors
* cute filler
* overly polished fragments
* sentence fragments added only for tone
* “a few...”
* “following...”
* “selected...”
* “across...”
  when they are not necessary

Use straightforward language.

Examples:

Bad:
Following the data

Better:
Research

Bad:
A selection of things I’ve built

Better:
Projects

Bad:
Selected work & a few connections

Better:
Projects

Bad:
Across a few different boards

Better:
Education & Involvement

The site should feel confident enough not to narrate its own design.

## 14. Preserve substantive copy

Do not shorten the experience/research bullets back into fragments.

Keep the fuller sentence style already specified in the project instructions.

The page can have fewer bullets, but the bullets that remain should explain the work properly.

Do not optimize for punchiness.

## 15. Visual QA

After implementation:

1. run the development server
2. inspect the full homepage visually
3. inspect 1440px desktop
4. inspect approximately 768px tablet
5. inspect 375–430px mobile
6. verify the crossword layout
7. verify Wordle interactions
8. verify Strands interactions
9. verify Connections full-play mode
10. verify project/award linking
11. verify company logos render cleanly
12. verify real project visuals are not distorted
13. check typography for any remaining default/Arial-like feel
14. run build/typecheck/lint
15. fix visible issues before finishing

Do not respond with only recommendations.

Implement the changes.

At the end, summarize:

* what changed
* which visual assets were added
* how Wordle now works
* how Strands now works
* what bug was fixed in Connections
* where the portfolio content can be edited later
* any research details that still require source verification
