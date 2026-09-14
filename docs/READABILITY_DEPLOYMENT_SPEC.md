Revise the existing portfolio in place.

Be token-efficient:

* do not rebuild the site
* do not re-research project content
* do not re-check sections that are unrelated to the changes below
* preserve existing working components unless a change is explicitly requested
* make the smallest clean implementation necessary

## 1. Remove “At a Glance”

Remove the entire “At a Glance” / quick-scan section.

Do not replace it with another summary section.

Let the page flow directly into the main content.

## 2. Increase typography slightly

Some text currently feels too small.

Increase font sizes modestly across the site, especially:

* body copy
* experience/research bullets
* project descriptions
* interactive labels
* education/involvement text

Do not dramatically enlarge headings.

Keep hierarchy clear and editorial.

Preserve mobile responsiveness.

The goal is improved readability, not a redesign.

## 3. Make clickable elements visually obvious

Some interactive elements do not currently look clickable.

Create a consistent visual language for interaction.

Clickable elements should have at least one visible cue such as:

* underline
* subtle border
* background change
* stronger text weight
* arrow/icon
* hover color shift
* cursor change
* pressed state

Do not rely only on hover because mobile users need to understand what is interactive too.

Apply this consistently to:

* project links
* Live Demo / GitHub links
* crossword words
* Wordle-style tiles
* Strands nodes
* Connections tiles/buttons
* linked Recognition items
* email links

Keep the treatment subtle. Do not turn everything into a large button.

Also ensure:

* keyboard focus states are visible
* clickable cards/tiles use appropriate semantic elements
* disabled/non-clickable items do not look interactive

## 4. Make Connections easier and more useful

The Connections game is currently too difficult.

Simplify the groupings so they reflect meaningful parts of my projects section of the portfolio rather than obscure associations.

The user should be able to solve groups based on information already visible on the site.

Use clearer categories built around important work.

Do not groups if duplicates make the game logic invalid. Build four clean non-overlapping groups from the actual existing tiles.

The categories should collectively cover the important parts of the project section of the portfolio.

Avoid trivia-level connections.

### Add a hint system

Add a lightweight hint option.

Examples:

* “Hint”
* “Need a hint?”

A hint may:

* reveal the category theme for one unsolved group
* highlight two tiles that belong together
* reveal one correct tile-category relationship

Do not immediately solve the group.

Allow multiple hints if needed.

Also keep:

* manual solving
* guided “Try a group”
* Reveal All

Do not penalize mistakes heavily.

Also add one away clues.

## 5. Make the Connections instructions clearer

Add one very short instruction above the board, for example:

“Find four groups of four related items.”

Optionally add:

“Need help? Try a hint.”

Do not add a paragraph explaining the game.

## 6. Deployment readiness

Make the project deployable without changing the current app behavior.

### GitHub Pages

Configure the project so it can deploy to GitHub Pages.

For Vite:

* set the correct `base` behavior for a repository subpath
* ensure asset paths work in production
* ensure client-side routing does not break on refresh

If React Router is currently used and would cause GitHub Pages routing issues, prefer the smallest reliable solution:

* HashRouter, or
* another minimal Pages-safe routing approach

Do not restructure routing unnecessarily.

Add a GitHub Actions workflow for deployment to GitHub Pages if one does not already exist.

The workflow should:

* install dependencies
* build
* deploy the production output

Document the one-time GitHub Pages setting I need to enable.

### Vercel

Also keep the app compatible with Vercel.

Do not add Vercel-specific code unless needed.

If the current project can already deploy to Vercel from GitHub, simply document:

1. import repository into Vercel
2. framework = Vite
3. build command
4. output directory

Do not attempt to create or access my Vercel account.

## 7. Production check

Before finishing:

* run the production build
* verify no broken asset paths
* verify `src/images` assets render in production
* verify Loom Live Demo / GitHub links
* verify internal navigation
* verify GitHub Pages base path behavior
* verify mobile interaction cues
* test Connections hint behavior
* confirm At a Glance is fully removed

Do not spend tokens re-reviewing unrelated portfolio copy or project facts.

At the end, give only a short summary of:

* UI changes
* Connections changes
* GitHub Pages deployment setup
* exact steps I need to take to publish
