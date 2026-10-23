# Content evidence and editorial boundaries

Reviewed 2026-10-23 for the software engineering portfolio refresh.

## Positioning

Software engineering leads the portfolio. UX is presented as a supporting foundation. Professional context supplied by Kai establishes Pantheon employment beginning in 2025 and independent work through Lunara LLC. The site does not disclose employer implementation details, internal code, compensation, performance-review information, or invented business metrics.

## Source inventory

Repository files were read through the connected GitHub tools. Public project links appear only when the repository is public. A private repository's existence does not mean its code or data should be copied here.

| Project               | Reviewed evidence                                                                                                                        | Scope used in portfolio                                                                                                         |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Lunara Quest          | `homeschool_portal_v2/README.md`, `package.json`, `src/lib/kid-access.ts`, `src/lib/ai/rate-limiter.ts`, curriculum manifest/quest paths | Parent and learner portals, family authorization helper, typed content, AI limits; active development                           |
| The Lunara Edit       | `the_lunara_edit/README.md`, `package.json`, `src/analytics.ts`                                                                          | Content/image manifests, publishing controls, permanent redirects, consent-aware analytics and checks; live                     |
| The World, Clearly    | `the-world-clearly/README.md`, `package.json`                                                                                            | Payload newsroom, reader, four modes, content graph; live with reading-level quality still being refined                        |
| Agent Behavior Lab    | `agent-behavior-lab/README.md`                                                                                                           | Inspect evaluations, calibration/control design, frozen confirmatory protocol, paired comparison; limited generalization        |
| Lunara Project        | `lunara-labs-media/README.md`, `lib/content/curriculum.ts`                                                                               | Canonical Markdown/YAML records, registry validation, publication-stage checks, typed loader; evolving infrastructure           |
| SecondBrain           | `secondbrain/README.md`                                                                                                                  | Python ingestion/storage/MCP architecture; prototype, individual connectors have different completion states                    |
| Nest Quest            | `Nest_Quest/README.md`, earlier project context                                                                                          | React/Leaflet/Recharts/Flask architecture; archived prototype, original backend no longer maintained                            |
| Markdown → Trello     | `Trello_API/README.md`                                                                                                                   | Markdown parsing and creation of cards/checklists; no claim of synchronization or update support                                |
| Lunara Ritual         | `lunara-ritual/README.md`                                                                                                                | React storefront/cart interactions; frontend prototype, no payment/fulfillment claim                                            |
| Sacred Iron           | `sacred_iron/README.md`                                                                                                                  | Medusa and Next.js starter-based monorepo; no custom commerce engine or launch claim                                            |
| Boho Journal          | `boho-journal/README.md`                                                                                                                 | Authenticated journal, TipTap, content CRUD/media and prompts; prototype                                                        |
| Harmony & Howls       | `Harmony_and_Howls/README.md`, `Harmony/README.md`                                                                                       | Next.js creative concept, earlier React/Vite version; evolving prototype                                                        |
| Cozy Garden Simulator | `cozygardensim/README.md`                                                                                                                | React/Redux simulation exploration; no guarantee every README game mechanic is implemented                                      |
| The Forgotten Keeper  | `theForgottenKeeper/README.md`                                                                                                           | Swift inventory/spellcasting progress and scene structure; work in progress with placeholder assets                             |
| Show Me Resistance    | `show-me-resistance/README.md`                                                                                                           | Astro/Markdown civic publishing; broader tracking features explicitly treated as goals                                          |
| Homeschool Portal v1  | `homeschool_portal/README.md`                                                                                                            | Earlier iteration of Lunara Quest, distinct from the current private v2 repository                                              |
| Homeschool Haven      | `homeschoolhaven/README.md`                                                                                                              | Starter adaptation, early dashboard concept, demo with incomplete functionality                                                 |
| Justice Connect       | Original portfolio source and earlier project context                                                                                    | User-flow and information-architecture concept; removed contradictory claims that wireframes were both complete and future work |

README-backed descriptions are not independent audits of those products. This refresh verifies the portfolio implementation, not the correctness, availability, or security of every external project.

## Important presentation choices

- No child names, family account records, learner photos, private dashboards, or personal financial records.
- System illustrations and editorial concepts are labeled. They are not screenshots or interactive versions of the underlying products.
- The small publication demo uses illustrative records, explicitly distinguished from the live catalog.
- No fabricated conversion rates, user counts, revenue, performance improvements, or accessibility certifications.
- No blanket legal/security-compliance claims. Access-control descriptions explain the reviewed mechanism rather than declaring the whole application secure.
- No generic Figma link, broken résumé download, placeholder projects, or nonfunctional contact form. Contact uses a real email link; no message is sent by this application.
- The standalone curriculum project remains visible alongside The Lunara Edit because its source-of-truth and validation work demonstrate a different engineering boundary.
- Planned worksheet/puzzle products are not listed as implemented projects.
- Pantheon work stays high-level. A future approved work case study could add much stronger collaboration and production evidence.

## Next editorial improvements

1. Add public-safe product screenshots or a synthetic demo account after selecting representative screens. Live screenshot access was unavailable during this session.
2. Add a Pantheon case study with Kai's exact contribution, approved public details, tradeoffs, and verifiable outcomes. Potential subjects include the notifications hackathon, routing/authentication work, and observability; this refresh does not invent those details.
3. Expand the most important case studies with a concrete bug, tradeoff, or failed approach in Kai's own words.
4. Reassess older prototypes as their external APIs and dependencies change.
5. Review the public-facing prose and confirm the preferred career emphasis before merging/deploying.
