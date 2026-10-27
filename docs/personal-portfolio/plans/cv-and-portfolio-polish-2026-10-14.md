# CV and portfolio polish — 14 October 2026

## Result

The approved portfolio direction is retained. Visitor-facing content and the downloadable academic CV now agree on the student's year, exploratory research interests, SOICT submission status and Codeforces peak rating. Changes are prepared and verified locally; the Netlify production site has not been redeployed in this pass.

## Changes

- Public CV: replaced the legacy PDF with the approved one-page research CV; rebuilt its generator and preview. SOICT #1839 is a submitted manuscript, under review, with first and corresponding author credit. No LNCS/publication label or latency metric.
- Website copy: clearer second-year identity, exploratory LLM/Agentic AI interests and a shorter contact invitation; no unsupported production-system headline.
- SOICT: submission status is visible in the AI Challenge record, featured project and sharing descriptions. Removed latency figures from prose and the illustrative project SVG.
- Provincial progression: Grade 11 certificate year corrected to 2024 and Grade 12 to 2025. The previously confirmed Grade 10 result remains without a guessed year.
- Hero project shortcuts select their corresponding project rather than only scrolling to a common default.
- Desktop projects keep one persistent tabpanel. Mobile projects use native button controls and unique inline regions; inactive regions are hidden. Their breakpoint matches the layout at 760px. Active selection and project-control focus survive changes across the breakpoint.
- Skip navigation targets the actual H1, not an empty marker.
- AI Challenge gallery uses the actual asset dimensions. The square certificate uses contain rather than a cropped cover image.
- Narrow layouts use shrinkable grid tracks and wrapping action links; no page-wide overflow clipping was added.

## Verification executed

- `python scripts/build_cv.py`: generated and visually checked one PDF page; no latency phrase, pending SOICT label present, 8 PDF hyperlinks; text bounds inside the page.
- Vitest: **7 files, 25 tests passed**, including mobile control/region integrity and pending-paper content checks.
- TypeScript `tsc --noEmit`: exit 0.
- ESLint: exit 0.
- Vite production build: exit 0.
- `git diff --check`: no whitespace errors.
- Public and built CV copies have matching SHA-256.

Checks used the bundled runtime's direct CLI entry points, equivalent to the project's test/lint/build scripts. Final captured exit codes are in `output/portfolio-polish-2026-10-14/quality-checks.json`.

## Browser checks

| Viewport width | Document client width | Document scroll width | Result |
|---|---:|---:|---|
| 320 | 305 | 305 | No horizontal page overflow |
| 390 | 375 | 375 | No horizontal page overflow |
| 760 | 745 | 745 | Inline project layout |
| 820 | 805 | 805 | Desktop tabs, one tabpanel |
| 1280 | 1265 | 1265 | Desktop layout |

The 15px difference is the scrollbar space in the tested browser. Checked all four mobile project selections: one visible region, existing control targets and no duplicate DOM IDs. Checked Home/End keyboard behavior, focus restoration when resizing, TripFlow/AI Switcher hero shortcuts, skip link landing on the H1 and the certificate's square dimensions with `object-fit: contain`. No browser console errors/warnings appeared in the targeted pass.

The preview server runs at http://127.0.0.1:5174/. Desktop screenshot: `output/portfolio-polish-2026-10-14/portfolio-preview.jpg`.

## Remaining review boundaries

- Await the actual SOICT decision before changing submitted / under review to accepted. Accepted is not yet published. Update `src/content.ts`, sharing descriptions and `scripts/build_cv.py` when a real decision arrives.
- Personal project responsibilities, IELTS date and whether Coding Challenge was an individual/team result remain the applicant's factual review items; this pass adds no invented answers.
- Portfolio/certificate photos and the submitted manuscript were not retouched or revised.
- The application draft remains unsent. Netlify still serves its previous deployment until publishing is requested/completed.
