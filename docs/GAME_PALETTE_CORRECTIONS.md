Make these corrections to the polish prompt I just submitted. Treat these instructions as overriding the previous instructions where they conflict.

Do not redo unrelated work or re-research portfolio content.

## 1. IMPORTANT: Correct the interaction color system

The previous prompt misunderstood the color coding.

I do **NOT** want arbitrary colors assigned to portfolio sections like:

Hero = blue
Experience = gold
Research = purple
Projects = coral

Instead, each interactive section should inherit the recognizable visual language of the **NYT game it is based on**.

The overall site should remain warm/off-white, black, gray, and editorial. Game colors should appear as accents, selections, paths, tiles, small markers, and interaction states.

### Experience / Wordle → Wordle palette

Use the recognizable Wordle visual language:

* green = correct/active/revealed
* yellow = secondary/accent state where relevant
* gray = neutral/inactive tile state

Wordle tiles, flips, selected/revealed states, and small Experience interaction accents can use shades derived from this palette.

This is where green belongs.

Do not apply the Wordle green globally to links, Research, Projects, etc.

### Research / Strands → Strands palette

Use **blue / light blue** as the primary Strands interaction language.

Use blue for:

* active research nodes
* selected paths
* connection lines
* relevant research interaction accents
* subtle small section accents where appropriate

Completed paths can settle into a softer/lighter blue so the active path remains visually dominant.

Do not use Wordle green for Strands.

### Projects / Connections → Connections palette

Use the recognizable multi-color Connections language for the game itself, including the familiar:

* yellow
* green
* blue
* purple

Solved groups should use their appropriate Connections colors.

Before solving, keep tiles relatively neutral so the solution colors remain satisfying.

Outside the actual Connections board, do not make the entire Projects section rainbow-colored. Small accents can reference the palette where appropriate.

### Recognition / Spelling Bee reference → yellow hexagon

Continue using the small yellow hexagon as the visual language for **actual awards/competition recognition**.

This subtly references Spelling Bee without creating another game.

The hexagon means:

**award / competition recognition**

It does NOT mean:

* notable event
* speaking invitation
* general achievement
* external link

### Hero / Crossword

Keep the crossword primarily black/white/gray like the crossword itself.

Selected crossword words/cells can use a restrained crossword-appropriate highlight.

Do not force an unrelated blue section color onto the hero simply because the previous prompt requested one.

### Overall rule

The color should make someone subconsciously recognize the NYT game reference.

Do not create a generic “each section gets a random brand color” system.

Centralize these game palettes in CSS variables so they remain easy to tune.

Where relevant, add **small accents of the corresponding game colors** elsewhere in that section, but keep them restrained.

The page background and core typography should remain neutral.

---

## 2. Fix the focus/outline issue using the game palette

The green focus line was previously appearing everywhere and sitting too close to text.

Green should now appear primarily where Wordle semantics call for it.

For normal keyboard focus:

* use a neutral or context-appropriate accessible focus treatment
* increase `outline-offset`
* ensure there is visible space between text/content and the outline

Do not let clicking a normal text link create a tight Wordle-green rectangle around the text.

Do not globally remove accessible focus.

---

## 3. Yellow hexagons ONLY for actual awards

Continue making actual project awards consistent:

**GrantScope**
yellow hexagon + `2nd Place · CMU IronViz`

**March Madness**
yellow hexagon + `6th Place · CMU March Madness ML`

**Loom**
yellow hexagon + `Top Finisher · Hacking4Humanity`

However:

**Pennsylvania Governor’s Residence — AI Policy Roundtable**

should NOT have a yellow hexagon.

That is important context connected to Loom/Hacking4Humanity, but it is not itself an award.

Present it cleanly as secondary context without an award icon.

Do not use an emoji for it either.

---

## 4. Add the 15-122 course website

In the Teaching / 15-122 TA section, make the course name or an appropriate small course link point to the official course website:

https://www.cs.cmu.edu/~15122/

Use the site's established external-link treatment.

Do not display the raw URL.

A treatment such as:

**15-122: Principles of Imperative Computation ↗**

is appropriate.

Keep the TA content itself unchanged unless needed for layout.

---

## 5. Remove undermining/disclaimer-style copy

Remove language like:

**“Neither measure is a direct sales metric.”**

Do not replace it with another disclaimer.

More generally, while doing the small copy-density pass from the previous prompt, remove unnecessary sentences that:

* defensively qualify legitimate results
* undermine the work immediately after presenting it
* explain what a metric is *not* without a real need
* sound like caveats inserted by an AI rather than useful portfolio information

Do NOT exaggerate or change factual claims.

Simply present supported results clearly and confidently.

For example, if the portfolio accurately says Yelp visibility increased 15% and Instagram Reels averaged 500% more views, state those results with their proper context. Do not immediately weaken them with an unnecessary sentence about sales unless that distinction is actually required to understand the work.

---

## 6. Rename the two Coffee research tracks

Remove the redundant leading words.

Change:

**Conflict / Conflict & Econometrics**
or
**Conflict / econometric analysis**

to simply:

**Econometric Analysis**

Change:

**Drought / Drought & ML Forecasting**
or
**Drought / machine-learning forecasting**

to simply:

**Machine-Learning Forecasting**

The underlying research content remains unchanged.

The first track is still the El Salvador vs. Costa Rica Difference-in-Differences/fixed-effects analysis.

The second remains the 19-factor + NDVI + precipitation Random Forest / Gradient Boosting forecasting work.

Do not re-research or rewrite those methods.

---

## 7. Keep the previous “interaction reveals something new” requirement

This is important and should remain part of the implementation.

Slightly slim visible copy where information is genuinely duplicated, but do not make the portfolio terse.

The rule is:

### Visible content

Communicates:

* what I did
* why it mattered
* important result

### Playable interaction

Reveals:

* how it worked
* architecture
* methodology
* evaluation
* inputs
* technical decisions
* relationships
* additional supporting results

If clicking something merely repeats the sentence immediately above it, improve the reveal using **existing content already in the code/data**.

Do not research new facts.

Do not hide essential information just to make the interaction useful.

---

## 8. External links should be typographic, not emoji-like

Continue the external-link cleanup from the previous prompt.

Use a small CSS/SVG external-link arrow rather than an emoji glyph.

Examples visually:

**GitHub [small northeast arrow]**
**Live Demo [small northeast arrow]**
**15-122 Course [small northeast arrow]**

The arrow should:

* inherit the text styling
* align cleanly with the baseline
* be visibly smaller than emoji
* work on mobile
* optionally shift 1–2px on hover
* clearly communicate an external destination

Do not depend on the Unicode ↗ glyph if it renders emoji-like on some platforms. Prefer a simple CSS/SVG icon.

---

## 9. Preserve the density changes from the previous prompt

Do not lose the intended section variation while making these corrections:

**Experience**
denser, technical, Wordle reveals deeper detail

**Research**
more spacious/relational, Strands communicates methodology

**Projects**
more visual, real screenshots prominent, Connections after projects

**Education & Involvement**
restrained

**Recognition**
compact

**Contact**
minimal

Do not make all sections look like the same reusable card.

---

## 10. Quick QA

Only verify these corrections plus the unfinished items from the previous prompt:

* Wordle uses green/yellow/gray rather than an arbitrary Experience color
* Strands uses blue/light blue
* Connections uses its yellow/green/blue/purple solved-group palette
* Crossword remains primarily neutral
* game colors appear as restrained accents where appropriate
* universal green focus/highlight is gone outside appropriate Wordle states
* focus indicators have breathing room
* actual project awards use yellow hexagons
* Governor’s Residence AI Policy Roundtable does NOT use a yellow hexagon
* no award emojis
* 15-122 links to the official CMU course site
* external-link icon is CSS/SVG rather than emoji-like
* “Neither measure is a direct sales metric.” is removed
* no similar unnecessary self-undermining disclaimers remain in the content being touched
* Coffee labels are `Econometric Analysis` and `Machine-Learning Forecasting`
* interactions reveal additional information rather than repeating visible copy
* section density differentiation from the previous prompt remains
* production build passes

Do not conduct another broad portfolio audit.

At the end, briefly report only the corrections made.
