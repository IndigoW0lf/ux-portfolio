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
