# Shreya Prashantha — portfolio

A responsive, editorial recruiting portfolio built with React, TypeScript, Vite, and CSS. Crossword, Wordle, Strands, Connections, and hexagonal award treatments provide optional ways to explore relationships. All professional content is visible without interaction.

## Run

```sh
npm install
npm run dev
```

On Windows PowerShell with script execution disabled, use `npm.cmd` instead of `npm`.

## Validate

```sh
npm run typecheck
npm run lint
npm run build
npm test
```

Browser tests use the installed Microsoft Edge browser. On a machine without Edge, run `npx playwright install chromium` and remove `channel: 'msedge'` from playwright.config.ts. Tests cover five viewport widths, axe accessibility, internal links, content relationships, crossword intersections, Connections logic, keyboard controls, and reduced motion. Screenshots are written to test-results/.

## Edit content

- `src/data/profile.ts`: name, school, external links, and both clickable email addresses.
- `src/data/experiences.ts`, `research.ts`, `projects.ts`: substantive bullets, tags, dates, and repository links.
- `src/data/recognition.ts`: awards and stable related project IDs. Add the award ID to the project's recognition array too.
- `src/data/education.ts`, `involvement.ts`, `metrics.ts`: supporting content.
- `src/data/domains.ts`: crossword words, grid placements, and domain identifiers. Work items carry the corresponding IDs.
- `src/data/connections.ts`: four groups, their terms, and related project IDs.
- `src/data/experienceDetails.ts`: shared Wordle category labels, supporting details, and company logos.
- `src/data/researchDetails.ts`: selectable research strands and attribution; `coffee.ts` contains both supplied analytical tracks.
- `src/data/visuals.ts`: supplied image galleries; `marchMetrics.ts` contains source-pinned model results.
- `src/data/skills.ts`: derived technology registry; no separate skills section.
- `src/styles/tokens.css`: colors, typefaces, spacing, and shared visual values.

Preserve stable IDs so in-page links keep working. Read AGENTS.md, docs/PRODUCT_SPEC.md, docs/REVISION_SPEC.md, and the latest docs/ASSET_CONTENT_REVISION_SPEC.md before revising the copy. Revision decisions are documented in docs/REVISION_NOTES.md and visual provenance in docs/ASSETS.md. The full Connections board is playable immediately, and research/experience interactions never hide the main explanation.

## Deploy

`npm run build` outputs a static site in `dist/`. Deploy that directory to a static host. `npm run preview` serves the production build locally. For hosting under a subdirectory, set Vite's `base` and update the favicon path to match. No secrets or backend services are needed.

