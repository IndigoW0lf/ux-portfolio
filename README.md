# Kai Indigo Wolf — Software Engineering Portfolio

A React portfolio focused on software engineering, independent product development, and research tooling. Includes 18 project overviews, four featured case studies, searchable category filters, and an interactive publication-rules demo.

## Develop

```sh
npm ci
npm start
```

## Validate

```sh
CI=true npm test -- --watchAll=false --runInBand
npm run build
npm run format:check
```

The project retains its Create React App build and React Router hash routes for GitHub Pages compatibility. Jest aliases in `package.json` let CRA's older resolver use the React Router and Vercel Analytics CommonJS entry points. TypeScript 4 and Testing Library DOM are explicit development dependencies so a normal `npm ci` remains compatible with the existing toolchain.

## Content & components

- `src/data/projects.js`: project catalog, status, technologies, case-study copy, and public links.
- `src/components/HomePage.js`: positioning, selected work, approach, experience, resume download, and contact.
- `src/components/CuriosityNotes.js`: interactive field notes and a generated watercolor luna-moth illustration.
- `src/components/TinyLab.js`: three prediction rounds using the recorded Agent Behavior Lab results.
- `src/components/BuildNotes.js`: expandable notes about concrete project decisions.
- `src/components/PortfolioAnalytics.js`: Vercel Web Analytics with explicit HashRouter page paths; disabled on GitHub Pages and local hosts.
- `src/components/ProjectPage.js`: data-driven case studies and project navigation.
- `src/components/WorkCollection.js`: category filtering, text search, and empty states.
- `src/components/EngineeringDemo.js`: deterministic publication-rule example using explicitly illustrative records.
- `src/components/ProjectVisual.js`: real screenshot covers when available, with labeled system illustrations for other projects.
- `src/components/ProjectGallery.js`: keyboard-accessible screenshot selectors, captions, and full-size image links.
- `src/assets/projects/`: supplied product captures, with lossless full-size WebP images and smaller card thumbnails.
- `src/fonts/`: self-hosted Latin fonts and their licenses.
- `docs/CONTENT_SOURCES.md`: editorial provenance, claim boundaries, and follow-up opportunities.
- `docs/VERIFICATION.md`: verification scope and results.

Keep project copy specific about shipped behavior versus prototypes and future work. Public source links should only point to public repositories. Use synthetic content for demonstrations; never copy family records, private dashboards, access tokens, or customer data into this repository.

## Hosting

The existing `homepage` remains `https://indigow0lf.github.io/ux-portfolio`. A production build expects the `/ux-portfolio/` subdirectory. Hash routes such as `/ux-portfolio/#/projects/lunara-quest` survive direct opening and refresh on static hosting.

`npm run deploy` publishes the build to the `gh-pages` branch. Run it only when the reviewed version is ready to become public. This branch does not publish a deployment automatically.

The primary site is `https://www.indigowolf.tech/`, served by the `kai-portfolio` Vercel project. Vercel builds `main` with `PUBLIC_URL=/ npm run build` and serves `build`. Keep `homepage` unchanged so the GitHub Pages copy continues to build with its subdirectory prefix.

## Analytics and link previews

Vercel Web Analytics uses `@vercel/analytics/react`. The root integration supplies the router pathname as both `route` and `path`, so case-study visits are distinct while within-page section jumps do not create extra views. It runs only on the custom portfolio domain and Vercel preview domains. Web Analytics must be enabled in the Vercel project's Analytics tab.

The homepage metadata includes the canonical custom domain and a 1200 × 630 Open Graph/Twitter preview at `public/images/portfolio-preview.png`, rendered from the portfolio's existing fonts, artwork, and note markup. Hash-based project URLs share this site-level preview.

## Research figures

Agent Behavior Lab has a CLI workflow rather than an application UI. Its portfolio images are research figures, labeled separately from product screenshots, with a link to the published confirmatory report. Rebuild them with `python scripts/render_lab_figures.py` in a Python environment containing matplotlib and Pillow. The script uses the reviewed JSON summary; it does not run evaluations or call model APIs.

## Public resume

The site serves a one-page, selectable-text PDF at `public/resume/Kai-Indigo-Wolf-Resume.pdf`. Rebuild it with `python scripts/render_resume.py` (ReportLab, pypdf, and the system DejaVu fonts). Review the rendered page after any content change before publishing.
