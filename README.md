# Le Nam Khanh — Portfolio

[![Live site](https://img.shields.io/badge/Live%20site-Netlify-00C7B7?logo=netlify&logoColor=white)](https://lenamkhanh.netlify.app)
[![GitHub profile](https://img.shields.io/badge/GitHub-lenamkhanhh-181717?logo=github&logoColor=white)](https://github.com/lenamkhanhh)

Personal portfolio for **Le Nam Khanh**, a second-year student at the Faculty of Information Technology, University of Science, VNU-HCM (HCMUS). It presents academic and competitive-programming evidence alongside an evolving trajectory from algorithms toward multimodal retrieval and LLM agents.

## Live website

**[lenamkhanh.netlify.app](https://lenamkhanh.netlify.app)**

## Highlights

- **Accepted Paper Author**, VBS at MMM 2027 ("Reply 404 at VBS 2027: Interactive Video Retrieval with Temporal Alignment and Native DRES Integration", sole author, Springer LNCS)
- **Finalist · Bảng A**, AI Challenge HCMC 2026 (Reply 404; Team Lead & Core Architect)
- Codeforces **Expert**, maximum rating **1854**
- **Champion**, HCMUS Coding Challenge 2026
- Current direction: competitive programming & algorithms → multimodal video retrieval & AI systems

The portfolio intentionally avoids unsupported claims about employment, publications, research impact, lab affiliation, testimonials, or project metrics.

## Features

- Evidence-led, responsive one-page portfolio
- Accessible navigation, desktop project tabs, mobile inline project regions, and reduced-motion behavior
- Fixed Canvas constellation field with a static technical-blueprint overlay
- Deterministic visual field, capped DPR/FPS, and lifecycle-aware animation cleanup
- English-only visitor-facing content with links to CV, GitHub, Codeforces, and selected work

## Tech stack

- React 19 + TypeScript
- Vite
- Motion
- CSS-first responsive design
- Vitest + ESLint
- Netlify

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Quality checks

```bash
npm test
npm run lint
npx tsc --noEmit
npm run build
```

## Deployment

The site is deployed to Netlify. `netlify.toml` builds the app with `npm run build`, publishes `dist`, and includes a SPA fallback redirect.

To create a production deployment from this repository:

```bash
npx netlify-cli deploy --prod
```

## Project structure

```text
src/
  components/   # portfolio sections and visual field
  content.ts    # verified visitor-facing content
  constellation.ts # deterministic canvas-field logic
public/         # CV and static assets
docs/           # design rationale and research notes
```

## Links

- [Live portfolio](https://lenamkhanh-portfolio.netlify.app)
- [GitHub profile](https://github.com/lenamkhanhh)
- [Codeforces profile](https://codeforces.com/profile/Average2k7)
- [CV](https://lenamkhanh-portfolio.netlify.app/le-nam-khanh-cv.pdf)
