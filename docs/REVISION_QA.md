# Revision validation

Latest asset/content pass completed September 14, 2026.

- Production build, TypeScript, and ESLint passed.
- Full Playwright suite: 16 tests passed.
- Five responsive widths: 375, 430, 768, 1024, and 1440px; no horizontal overflow, broken internal anchors, browser JavaScript errors, or axe violations in the checked states.
- Visual review included desktop, tablet, and mobile screenshots of experience, coffee research, project media, teaching, and the March Madness chart.
- All 11 used supplied images load, retain their proportions, and open in constrained enlarged views. CWL images stay at or below native width.
- Content assertions cover both coffee tracks, methods, variables, dates, the Robotics minor, teaching numbers, Loom recognition, and Live Demo destination. The live Loom URL returned HTTP 200 during verification.
- March Madness values match the saved source CSV rows exactly; both pipeline toggles display the appropriate lowest-loss model.
- Interaction coverage includes all experience categories, research paths and reveal/reset, all eight crossword relationships, full manual Connections play with mistakes/limits/locks, and touch selection/deselection.
- Keyboard checks cover the skip link, reduced motion, dialog Escape/focus behavior, and relationship links.

The latest user specification resolves the prior coffee-ML source limitation. No deployment was performed. Automated accessibility checks do not constitute a full manual screen-reader audit.
