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
