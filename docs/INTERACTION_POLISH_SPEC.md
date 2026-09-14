Continue polishing the existing portfolio in place.

The previous Codex run ended because of credit limits, so do not assume all earlier polish was completed. However, do not redo working functionality unnecessarily.

Be token-efficient:

* inspect only the components/CSS needed for the items below
* do not re-research portfolio content
* do not rewrite facts
* do not rebuild the site
* preserve working game interactions
* implement missing/incomplete items only
* run the production build after the changes

The overall goal is:

**Scanning gives the visitor the important portfolio information.**
**Playing reveals additional technical detail, methodology, and relationships.**

---

## 1. Fix the persistent green interaction outline

The universal green highlight/focus treatment is still appearing.

Find its actual source rather than overriding it with another layer.

Check:

* `:focus`
* `:focus-visible`
* `:active`
* selected/active classes
* shared button/link styles
* CSS variables
* box-shadow/ring rules
* browser/component defaults
* any hardcoded green values

Remove the unwanted universal green styling at its source.

### Give keyboard focus more breathing room

The current outline is also too close to the text.

For genuine keyboard focus states, create:

**content → breathing room → outline**

Use:

* larger `outline-offset`
* appropriate component padding
* sensible border radius

Do not globally disable focus outlines.

---

## 2. Actually use section-specific interaction colors

Create centralized tokens such as:

* `--accent-hero`
* `--accent-experience`
* `--accent-research`
* `--accent-projects`

Suggested restrained direction:

**Hero / Crossword**
muted blue

**Experience / Wordle**
muted warm gold

**Research / Strands**
muted lavender/purple

**Projects / Connections**
muted coral/orange

Exact colors can be adjusted to fit the current warm/off-white palette and accessibility needs.

Do NOT color entire sections.

Use these mainly for:

* selected states
* active tiles
* paths
* connecting lines
* small indicators
* completion states
* appropriate focus treatment

Verify that interactions in different sections visibly use different accents rather than reverting to the same green.

---

## 3. Do not use the same outline treatment for every interaction

Use component-appropriate states:

**Text links**
underline / color / arrow

**Crossword**
cell or word highlight

**Wordle**
tile background/border/flip

**Strands**
node + path treatment

**Connections**
tile/group treatment

**Keyboard focus**
accessible offset outline

Do not make every clickable object look like a boxed button.

---

## 4. Finish the visual-density differentiation

This was part of the earlier design pass and may not have been completed.

The sections should intentionally have different visual densities.

### Experience

Most information-dense.

Hierarchy:

**Company → Role → What I did → Key result → Interactive deeper detail**

Keep enough technical detail to understand the internship without playing.

### Research

Information-rich, but more relational and visual.

Hierarchy:

**Question/project → Method → Finding → Strands exploration**

Give methodology/path visuals more breathing room.

### Projects

More visual and playful.

Prioritize:

* project name
* what it actually does
* real screenshot/visual
* concise technical context
* recognition
* relevant links

Do not make each project feel like another Experience résumé block.

### Education & Involvement

Restrained and scannable.

### Recognition

Compact.

### Contact

Very simple.

Accomplish this through typography, whitespace, image proportions, and layout—not additional decorative cards.

---

## 5. Slim visible copy slightly

Some sections can be tightened now that the interactive layer carries additional information.

Do a conservative copy-density pass.

Do NOT aggressively shorten substantive technical work.

Focus on:

* repeated phrases
* information already communicated by a metric
* technology names repeated in paragraph + tags + interaction
* explanations repeated immediately by an interactive reveal
* unnecessary setup wording

Prefer **2 strong substantive bullets/paragraph units** where 3 are redundant.

Keep important:

* problem/context
* what I actually built/did
* meaningful result

Do not turn the writing into action-verb fragments.

Do not create compressed phrases like:

“Built agents. Improved routing. Designed security.”

Keep complete, natural sentences.

---

## 6. Every interaction must reveal something NEW

Audit only the current interactive reveals.

For every Crossword / Wordle / Strands / Connections interaction, ask:

**Does clicking this teach me something I did not already know from the text directly around it?**

If no, change the reveal using information already available in the site's existing content/data.

Do not research anything new.

### Visible layer

Should explain:

**what I did + why it matters + important result**

### Interactive layer

Should explain things such as:

**how it worked**
**architecture**
**methodology**
**evaluation**
**inputs**
**relationships**
**technical decisions**
**supporting result**

Do not simply restate the visible paragraph in a colored box.

---

## 7. Wordle specifically = technical depth

Keep the Wordle interactions fully playable.

For Tata, the intended distinction is approximately:

**Visible copy**
AI analysis system, manufacturing context, major security/routing results.

**GUARD**
Six-layer architecture:
intent classification → prompt constraints → AST validation → runtime isolation → post-execution verification → recovery

plus 100% of 500+ adversarial executions blocked.

**ROUTE**
DSPy
58% → 87%
65-question benchmark

**EVAL**
Pytest
DeepEval
BERTScore
ROUGE-L
FETA-QA / 7k+ records

**DATA**
inspection files
sensor logs
Excel / CSV / Parquet

Use the same principle for CWL and AMD.

If the reveal repeats the visible copy, move the deeper existing detail into the reveal.

Keep:

* press
* flip
* reveal
* selected state

Do not convert these into static tags.

---

## 8. Keep Strands playable, but cognitively simple

Do NOT reduce Strands to a static flowchart.

Simplify the conceptual structure around it.

For Coffee Research, keep only:

**Conflict & Econometrics**

and

**Drought & ML Forecasting**

Do not use Treatment / Comparison / Climate / Models / Projections as five top-level categories.

Those are nodes inside the research.

Examples of meaningful paths:

EL SALVADOR
→ TREATMENT
→ DIFFERENCE-IN-DIFFERENCES
→ FIXED EFFECTS

COSTA RICA
→ COMPARISON
→ PARALLEL TRENDS

19 FACTORS
→ RANDOM FOREST
→ GRADIENT BOOSTING
→ FORECASTING

NDVI
→ PRECIPITATION
→ CLIMATE

2009–2022
→ TRAINING DATA
→ 2035
→ PROJECTIONS

Tang:

RAINFALL
→ STORM EVENTS
→ IDF CURVES
→ NOAA
→ DIGITAL TWIN

Collis:

1.73M DISSERTATIONS
→ MPNet
→ 768-D EMBEDDINGS
→ CENTROIDS
→ COSINE SIMILARITY
→ SEMANTIC CHANGE

When completed:

* clearly draw the relationship
* use a restrained completion animation
* optionally reveal the related finding
* then settle the completed strand into a quieter persistent state

The currently active strand should have more visual emphasis than already-completed strands.

Keep Reveal available.

---

## 9. Projects before Connections

If not already completed, place the full Connections game **after all individual project showcases**.

Flow:

**Projects heading**
**→ individual projects**
**→ Connections**

The visitor should learn what the projects are first and then play with their relationships.

The project showcase should have more visual prominence than the game.

---

## 10. Make Connections intentionally easier

Keep Connections as the most game-like section.

Do NOT remove manual solving.

But make it easier than NYT Connections.

Aim for:

* 1 obvious group
* 2 moderate groups
* 1 slightly harder group

Groups should be inferable from project information the visitor just saw.

Avoid:

* obscure implementation trivia
* categories requiring information not presented
* highly ambiguous overlap
* clever-but-meaningless technical groupings

The goal is:

**“Oh, that's a cool relationship.”**

not:

**“How was I supposed to know that?”**

Keep:

* manual selection
* Submit
* incorrect feedback
* One Away
* Hint
* Try a Group
* solved groups
* Reveal All

---

## 11. Fix the two-tile Hint

The hint that identifies two related tiles has not been visually clear/reliable.

Fix it if still broken.

When activated:

* choose two tiles from the same unsolved group
* clearly highlight both
* use the Projects/Connections accent
* do NOT auto-select them
* do NOT choose solved tiles
* retain the hint long enough to understand
* support desktop and touch

If accent styling alone is too subtle, add a very small:

**HINT**

indicator.

Hinted and user-selected tiles should remain distinguishable.

Do not repeat the same hint if another useful hint is available.

---

## 12. Make ALL project recognition use yellow hexagons

The recognition-marker vocabulary needs to be consistent.

If a project has an award/recognition attached to it, use the same small yellow hexagon marker.

Do not use the hexagon for only some awards.

Examples include:

### GrantScope

**2nd Place · CMU IronViz Datathon**

### March Madness

**6th Place · CMU March Madness ML Competition**

### Loom

**Top Finisher · Hacking4Humanity**

and any other project-level recognition already displayed in the Projects section.

Do not invent awards.

### Hexagon design

Create one reusable CSS/SVG component.

It should be:

* small
* geometric
* muted yellow/gold
* visually consistent
* clean on desktop/mobile
* subtly reminiscent of NYT Spelling Bee geometry

This is NOT another game.

The yellow hexagon simply means:

**recognized / awarded project**

Do not use emoji.

Do not mix emoji, trophy icons, stars, and hexagons for the same concept.

One recognition vocabulary only.

---

## 13. Keep recognition text compact

The project card does not need the complete award explanation.

Use a concise line beside the hexagon.

Examples:

**2nd Place · CMU IronViz**

**6th Place · CMU March Madness ML**

**Top Finisher · Hacking4Humanity**

If fuller context already exists in the Recognition section, avoid repeating it in full inside Projects.

For Loom, the Pennsylvania Governor’s Residence AI Policy Roundtable can remain visible as relevant context, but do not make the project card read like a second Recognition card.

Projects = concise recognition.

Recognition section = fuller distinction.

---

## 14. Remove remaining award emojis

Especially on mobile, remove decorative emoji used for awards or recognition.

Do not use:
🏆
🥇
⭐
🎖️
or similar emoji.

Use the yellow hexagon system instead.

Also remove other nonessential decorative emoji if they visually clash with the editorial/game design.

Do not remove meaningful icons that are part of functional controls.

---

## 15. Make external links consistently obvious

Create one reusable external-link language.

Preferred:

**Live Demo ↗**
**GitHub ↗**
**LinkedIn ↗**

Use a typographic or SVG northeast arrow, not emoji. Wait this is still an emoji if possible keep it typographic

External links should:

* visibly read as links before hover
* have a restrained underline or other text-link treatment
* align the arrow properly with the baseline
* remain obvious on mobile
* optionally shift the arrow very slightly on hover
* use semantic `<a>` elements
* preserve appropriate `target` / `rel`

Do not turn every link into a giant button/pill.

---

## 16. Keep recognition and external links visually distinct

The interface vocabulary should be:

**yellow hexagon**
= this work received recognition

**some arrow **
= this takes me somewhere external

**section accent**
= I am interacting with this part of the portfolio

Do not mix these meanings.

---

## 17. Simplify excessive tags

Audit visible project/experience tags only.

If an item has a wall of technologies, keep approximately the **4–5 most useful/characteristic** visible tags.

Do not repeat every technology already named in:

* the paragraph
* the interaction
* the tags

For example, if clicking EVAL already exposes several evaluation libraries, not all of them also need to occupy permanent tag space.

Technical specificity should remain available; it simply does not need to appear three times.

---

## 18. Give real project visuals more priority

In Projects, real screenshots and project-specific visuals should generally have more visual prominence than decorative interface elements.

Keep:

* Loom UI
* WheelWay/map visuals
* GrantScope dashboard/visual
* meaningful March Madness visual
* other real supplied assets

Do not replace them with generic generated illustrations.

Use restrained consistent image sizing while allowing some layout variation.

Preserve aspect ratios.

Avoid making every project card geometrically identical.

---

## 19. Mobile-specific polish

Do a deliberate 375–430px pass.

Check:

* yellow award hexagons
* recognition text
* external-link arrows
* project screenshots
* Wordle
* Strands
* Connections
* crossword
* selected states
* keyboard/touch focus behavior

Requirements:

* no award emojis
* hexagons remain small
* award text wraps cleanly
* ↗ aligns with external link text
* no horizontal overflow
* touch targets remain comfortable
* screenshots remain useful rather than tiny
* interactive states work without hover
* outlines have breathing room from text

If a desktop interaction needs a simpler mobile presentation, simplify it rather than squeezing the desktop layout onto the phone.

---

## 20. Keep surrounding UI restrained

The games provide the personality.

Do not add:

* new games
* extra decorative illustrations
* generic icon clutter
* gradients
* glows
* custom cursor
* loading screens
* more slogans
* filler headings
* unnecessary cards

Whitespace is preferable to filling every gap.

---

## 21. Final QA

Before finishing, verify:

### Interaction styling

* universal green outline is gone
* actual source of green was fixed
* keyboard focus remains accessible
* focus indicator has adequate offset
* Hero / Experience / Research / Projects use distinct accents

### Content hierarchy

* visible copy is slightly leaner where it was redundant
* substantive technical information was not lost
* interactions reveal new information instead of repeating visible copy
* long tag walls are reduced

### Projects

* ALL project-level awards use the yellow hexagon
* award emojis are gone
* project recognition text is concise
* external links consistently use ↗
* recognition marker and external-link indicator have different meanings
* real project imagery remains prominent
* individual projects appear before Connections

### Connections

* groups are reasonably solvable
* two-tile hint visibly works
* hints do not use solved groups
* One Away works
* solved groups lock
* Reveal All works
* touch/mobile works

### Research

* Strands remains playable
* Coffee uses only the two meaningful analytical tracks
* completed strands are quieter than the actively selected path

### Mobile

* check approximately 375px and 430px
* no horizontal overflow
* no awkward emoji
* award/link markers align properly
* game interactions remain understandable

Run the production build.

Do not re-research or re-audit unrelated portfolio facts.

At the end report only:

1. green-outline cause/fix
2. accent system
3. copy/density changes
4. interaction-reveal changes
5. award hexagon + link treatment
6. Connections/Strands fixes
7. mobile fixes
