# Verification — 2026-10-23

## Visitor story

A visitor opens the portfolio on GitHub Pages, understands Kai's software engineering focus, explores featured work, filters the wider collection, opens a project, reads its implementation and limitations, and follows a contact or source link.

## Results

| Boundary                  | Result | Evidence                                                                                                                                      |
| ------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Production compilation    | Pass   | `npm run build` completed successfully; main JavaScript approximately 83.5 kB gzip, CSS approximately 6.4 kB gzip                             |
| Component behavior        | Pass   | Three Jest tests: category/text filtering and empty-state reset; publication demo gate; unique complete project records and valid HTTPS links |
| Project routing           | Pass   | Chromium opened all 18 case-study routes and checked each project title and implementation section                                            |
| Deep links and refresh    | Pass   | Direct case-study load, browser reload, and in-page engineering-decision navigation preserved the hash route                                  |
| Unknown project           | Pass   | Missing slug displayed a useful fallback and collection link                                                                                  |
| Collection controls       | Pass   | Data & APIs plus Flask returned Nest Quest; an unmatched query showed the empty state; reset restored all 18 projects                         |
| Interactive demo          | Pass   | Native checkbox changed the output from one to two public records while the draft remained hidden                                             |
| Responsive layout         | Pass   | No document-level horizontal overflow on home or Lunara Quest at 1440, 1024, 768, 390, and 320 px                                             |
| Keyboard entry            | Pass   | Tab reached the skip link; Enter moved focus to the main content                                                                              |
| Browser errors and assets | Pass   | No page runtime errors or HTTP errors observed in the production-preview harness                                                              |
| Formatting and whitespace | Pass   | Prettier check and `git diff --check`                                                                                                         |

The browser harness served the production build at `/ux-portfolio/`, matching the existing GitHub Pages asset base. Chromium used reduced-motion preference for deterministic navigation. The source also includes a reduced-motion stylesheet.

Desktop and mobile layouts were visually inspected. Screenshots in this folder show the reviewed implementation. They are local production-preview captures, not a deployed production site.

## Boundaries

- No deployment was performed. The reviewed changes are proposed in a separate branch.
- The browser checks cover the portfolio, not the correctness/security of external products.
- Outbound email links were inspected without sending a message. External product availability was not asserted; public-site screenshot requests were unavailable in this environment.
- No family accounts, private dashboards, or live customer records were opened.
- Existing Create React App tooling emits non-blocking Browserslist and Node deprecation notices. A build-tool migration is outside this refresh.
- Keyboard and responsive checks do not constitute a complete assistive-technology or WCAG audit.

## Screenshot gallery follow-up — 2026-10-23

The Lunara Edit and The World, Clearly now use five supplied product captures. Other projects retain their labeled illustrations.

- Four Jest tests pass, including gallery selection, full-size link behavior, and selection reset when navigating between projects.
- The production build passes with GitHub Pages asset paths preserved.
- Chromium confirmed that all five gallery images and both card covers load. Gallery selectors, keyboard activation, full-size asset links, and selection reset passed.
- Home/card previews and both galleries were visually inspected. No horizontal document overflow occurred at 1440, 768, 390, or 320 px while selecting any gallery image.
- No page runtime or HTTP errors occurred in the screenshot checks.
- All five full-size WebP files were compared against the supplied PNGs and match their decoded RGB pixels exactly. Smaller card covers are separate resized assets.
- Original uploads remain unchanged. No messages, production deployments, or edits to the underlying product sites were performed.

## Quest and research-media follow-up — 2026-10-23

- Five Jest tests pass, including research labeling, source-link preservation, gallery selection, and cross-project reset.
- Production build passes. Chromium checks load all eight product/research gallery images and four card covers, test keyboard selection and full-size links, and check all four galleries at 1440/768/390/320 px without horizontal overflow or page/HTTP errors.
- The Quest gallery uses only the 1.08.26 PM illustrated lesson capture. The other five supplied Quest captures are not copied to the public repository because they show family profiles, learner activity, or journal content.
- The two research figures were visually inspected and generated from the published confirmatory summary. Script assertions verify the paired counts total 48 and agree with the repetition and peer accuracy totals. The JSON source snapshot records the retrieved report blob SHA.
- Figure generation makes no model/API calls and does not modify the Agent Behavior Lab project or its raw logs.

## Secondary case studies — 2026-10-23

- Production build succeeds without application lint warnings.
- All five existing Jest tests pass.
- Browser checked all fourteen secondary project routes at 1440, 768, 390, and 320 px: problem, 02 implementation, 03 decisions, and current state render without horizontal overflow.
- Six implementation SVGs decode at their intrinsic dimensions, have descriptive alternative text, and expose working full-size links.
- Engineering/design section navigation works at desktop widths. The sidebar navigation is intentionally hidden by the existing mobile layout.
- Existing full-site browser checks pass: eighteen routes, refresh, project filters, publication demo, unknown routes, five responsive widths, and keyboard skip link.
- No page or local HTTP errors during browser checks. New illustrations visually inspected; featured galleries and homepage retain their existing layout.
- Source evidence and corrections are recorded in `CONTENT_SOURCES.md`. Checks cover the portfolio, not live integrations in the linked projects.

Publishing remains a separate GitHub Pages step after merge; creating this PR does not update the public site.

## Light voice pass — 2026-10-23

Copy-only changes preserve layout, technical mechanisms, links, and project scope. Production build and all five Jest tests pass. Full-site and secondary-case-study browser checks pass again, including responsive widths down to 320 px, without runtime or HTTP errors.

## Personal hero and resume — 2026-10-23

Production build and six Jest tests pass, including selected-question/project navigation. Browser verification checks all three notes, exclusive pressed state, Space activation, project destinations, PDF response bytes and content type, and contact links. Hero checked at 1440, 1024, 768, 700, 390, and 320 px with no horizontal overflow. Full-site checks pass for eighteen routes, filters, publication demo, refresh, unknown routes, and skip link. No runtime or HTTP errors. Reduced-motion styling disables note transitions.

The one-page PDF was text-extracted, checked for expected names/contact information, rendered with Poppler, and visually inspected. A public live-site check follows deployment.

## Painted moth replacement — 2026-10-23

Production build and all six Jest tests pass. Browser checks confirm the 900-pixel image decodes, the three note controls and destinations work, keyboard activation remains available, and the layout fits 1440/1024/768/700/390/320 px. Desktop and mobile compositions visually inspected. No runtime or HTTP errors; PDF and contact checks continue to pass. WebP export retains an alpha channel and is approximately 100 KB.

## Tiny lab, build notes, and résumé domain — 2026-10-23

The visitor story runs from a keyboard-adjustable prediction through a reveal of the existing JSON study results, optional paired-outcome/method details, and links to the complete case study/report. No API or credentials are involved. Three native details elements expand the build notes and expose the relevant project links.

- Production build and eight Jest tests pass, including prediction/reveal/reset and reconciliation of paired counts with the reported sample size and accuracy totals.
- Chromium checks slider Home/End/Arrow keys, Enter activation, locked prediction after reveal, exact results, paired details, methods/source link, reset, three expandable notes and project navigation.
- No document overflow at 1440/1024/768/760/700/390/320 px with all details open. Desktop and mobile captures visually inspected. No browser runtime or HTTP errors.
- The regenerated résumé remains one page. Extracted text and all four URI annotations were inspected: the displayed portfolio domain and target are both updated; no GitHub Pages address remains. Poppler render visually inspected, and the served PDF matches the generated bytes.

## Direct field-note links — 2026-10-23

The moth note cards are native router links to their respective projects, with visible link arrows. Hover or keyboard focus updates the preview; activating a card navigates directly. Eight Jest tests and the production build pass. Chromium verified all three destinations with Enter, pointer navigation, preview/destination agreement, and six widths down to 320 px without overflow or runtime/HTTP errors. Mobile composition visually inspected. The friendlier tiny-lab margin note and heading were also checked in the browser.

## Three-round tiny lab — 2026-10-23

The overview now explains the experiment in plain language without giving away accuracy counts. Each condition has its own prediction, reveal, explanation, and next step. Only the completed activity shows the comparison and restart button. No model requests, new study results, or individual question logs were added.

Eight Jest tests pass, including all three conditions, hidden future results, preserved guesses, and restart. Chromium verified the complete flow using keyboard input, including zero and maximum predictions, locked revealed inputs, next-round progression, exact recorded outcomes, saved guesses, final paired counts/methods/source, and clearing all prior guesses on restart. Six widths down to 320 px fit throughout the rounds and expanded summary without horizontal overflow or runtime/HTTP errors. Initial and completed desktop/mobile layouts visually inspected.

## Analytics, navigation, and share preview — 2026-10-23

Added Vercel Web Analytics 2.0.1 at the application root. Explicit HashRouter path/route props keep case studies distinct and avoid extra views from section anchors. Analytics renders only on the portfolio's custom and Vercel preview hosts, so local and GitHub Pages builds do not request unavailable Vercel endpoints. The existing TypeScript 4 and Testing Library DOM peers are now explicit development dependencies; a normal npm ci dry run passes without legacy-peer flags. CRA's Jest resolver uses the SDK's CommonJS entry point.

All eight Jest tests and the root-domain production build pass. Chromium with a controlled SDK script verifies one script injection, a home view, a project view, no extra section-jump view, and return navigation. Canonical/Twitter metadata, the 1200 × 630 share image, and the main-navigation Tiny lab link were checked. The preview was visually inspected. Live endpoint checks follow deployment.
