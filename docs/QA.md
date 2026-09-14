# First-version validation

Validated September 13, 2026 using local Microsoft Edge / Playwright.

- `npm run build`: passes (TypeScript and Vite production build).
- `npm run typecheck`: passes.
- `npm run lint`: passes.
- `npm test`: 8 tests pass.
- 375, 430, 768, 1024, and 1440px: all primary work content visible, no horizontal overflow, no broken internal anchors, no browser JavaScript errors, and no axe accessibility violations.
- Keyboard: skip link, crossword word selection, experience modes, and linked recognition tested.
- Reduced motion: native smooth scrolling disabled and animation/transition overrides applied.
- Connections: incorrect groups, four-selection limit, all groups solved, reveal, and restart tested. Projects remain visible throughout.
- Data integrity: unique IDs, bidirectional project/award relationships, 16 unique Connections tiles, and matching crossword intersections tested.
- Visual review: desktop full-page composition and requested viewport screenshots reviewed. Screenshots generated in `test-results/`.
- Production assets: approximately 78.2 kB gzipped JavaScript and 4.7 kB gzipped CSS. No external fonts or runtime APIs.

Browser testing caught two issues fixed before completion: the award highlight clearing during anchor navigation, and the missing restart state after solving every group. A test was also corrected to intentionally exercise the selection limit on an aria-disabled tile.

Public repository links were verified through the GitHub API. LinkedIn blocks automated retrieval (HTTP 999), so its destination is the user-provided URL. No email was provided; adding a verified address in `src/data/profile.ts` enables Email links. The project has not been published or deployed.

Automated accessibility checks complement the keyboard and visual review; a full screen-reader audit has not been performed.
