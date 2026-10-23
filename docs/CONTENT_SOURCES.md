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

- The tiny lab is a three-round prediction-and-reveal explorer of the existing public Study 001 confirmatory report. The left-hand overview explains the design without accuracy totals. The visitor predicts no-hint, repeated-wrong-answer, and supposed-other-AI-answer accuracy in sequence, revealing only the current result. The final comparison retains all three guesses; restart explicitly begins the complete activity again. These are three conditions from the same completed study, not three newly executed studies. Its three accuracy totals, paired outcomes, model, run date, and source come from `src/data/agent-behavior-results.json`, checked against the report again on 2026-10-23. No new model requests or individual response logs are used. Condition descriptions summarize the design rather than quoting complete prompts. Paired totals are not presented as sequential changes within a conversation.
- Build notes describe the already reviewed repetition control, canonical curriculum loader/manifests, and four reading modes. They do not invent personal debugging incidents, user feedback, or historical motivations. Each links to its corresponding case study.
- The résumé's displayed portfolio address and PDF URI annotation now use `https://www.indigowolf.tech/`.

- No child names, family account records, learner photos, private dashboards, or personal financial records.
- The Lunara Edit and The World, Clearly use screenshots supplied by Kai on 2026-10-23. Full-size assets preserve the original pixels using lossless WebP; smaller card thumbnails are resized separately. Other projects retain labeled illustrations. Captures demonstrate interface presentation, not a live embedded product.
- The small publication demo uses illustrative records, explicitly distinguished from the live catalog.
- No fabricated conversion rates, user counts, revenue, performance improvements, or accessibility certifications.
- No blanket legal/security-compliance claims. Access-control descriptions explain the reviewed mechanism rather than declaring the whole application secure.
- No generic Figma link, broken résumé download, placeholder projects, or nonfunctional contact form. Contact uses a real email link; no message is sent by this application.
- The standalone curriculum project remains visible alongside The Lunara Edit because its source-of-truth and validation work demonstrate a different engineering boundary.
- Planned worksheet/puzzle products are not listed as implemented projects.
- Pantheon work stays high-level. A future approved work case study could add much stronger collaboration and production evidence.

## Next editorial improvements

1. Further Lunara Quest profile/planning demonstrations should use demo accounts or properly anonymized captures. The illustrated quest preview is integrated. Agent Behavior Lab uses sourced research figures rather than application screenshots.
2. Add a Pantheon case study with Kai's exact contribution, approved public details, tradeoffs, and verifiable outcomes. Potential subjects include the notifications hackathon, routing/authentication work, and observability; this refresh does not invent those details.
3. Expand the most important case studies with a concrete bug, tradeoff, or failed approach in Kai's own words.
4. Reassess older prototypes as their external APIs and dependencies change.
5. Review the public-facing prose and confirm the preferred career emphasis before merging/deploying.

## Screenshot additions — 2026-10-23

| Supplied capture | Portfolio use                                                                                         |
| ---------------- | ----------------------------------------------------------------------------------------------------- |
| 10.47.30 AM      | The Lunara Edit editorial homepage; first gallery image and featured-card cover                       |
| 10.48.00 AM      | The Lunara Edit searchable resource catalog                                                           |
| 10.48.17 AM      | The World, Clearly story overview and four reading modes; first gallery image and featured-card cover |
| 10.48.47 AM      | Quick Read article, vocabulary sidebar, source metadata, and reflection prompt                        |
| 10.49.10 AM      | Topic-based archive and consistent story summaries                                                    |

Original uploaded PNGs are unchanged. Captions describe visible interface features without treating screenshot text as an independently verified factual source. No learner data, private dashboards, or browser credentials appear in these captures.

## Quest and research figures — 2026-10-23

The 1.08.26 PM Lunara Quest capture shows an illustrated authored lesson, a choice prompt, and follow-up questions. It contains no learner profile, personal photo, journal response, or selected learner answer. That capture is the sole public Quest screenshot in this change.

The five supplied 12.11–12.13 PM captures contain family profiles, learner activity, or journal content and are deliberately excluded from the repository and public assets. Original uploaded files are unchanged.

Agent Behavior Lab figures are generated by `scripts/render_lab_figures.py` from the summary snapshot in `src/data/agent-behavior-results.json`. The primary source is the published `results/study-001-confirmatory.md` report in the Agent Behavior Lab repository, read on 2026-10-23. No raw logs were published and no evaluations or model calls were run.

The confirmatory figures show 43/48, 29/48, and 10/48 correct for baseline, repetition, and named-peer conditions, respectively. The paired table contains 9 both-correct, 20 correct-to-wrong, 1 wrong-to-correct, and 18 both-wrong items. Both comparisons retain the source model/task limitations; exploratory results are not combined with confirmatory data.

## Secondary case-study expansion — 2026-10-23

All fourteen secondary projects now carry a problem, implementation, decisions, current state, and a clearly separated next step or project direction. Justice Connect labels its section “Design decisions.” The four featured case studies and homepage layout are unchanged.

Additional implementation evidence read for this pass:

| Repository           | Files                                                                                                                                    | Details used                                                                                                                                                  |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `secondbrain`        | `storage/store.py`, `mcp_server/server.py`                                                                                               | Shared SQLite transactions, ingest logs, lazy local embeddings, Chroma upserts, SQL and semantic retrieval, duplicate removal                                 |
| `Nest_Quest`         | `src/App.js`, `src/components/DataVisualization.js`                                                                                      | API-derived metric choices, formatted-number parsing, chart input preparation, separate map view                                                              |
| `Trello_API`         | `scripts/parse_markdown.py`, `scripts/create_trello_card.py`                                                                             | List mapping, heading hierarchy, parsed object structure, parent-first API creation                                                                           |
| `lunara-ritual`      | `src/App.jsx`                                                                                                                            | Local sample catalog, cart quantity updates, derived count and total, drawer/menu state                                                                       |
| `sacred_iron`        | Storefront `src/lib/data/marks.ts` and route tree                                                                                        | Typed symbolic mark catalog and category grouping, brand-specific storefront routes on a Medusa starter                                                       |
| `boho-journal`       | `src/react/lib/storage/index.ts`, `store.ts`, `llm.ts`, repository tree                                                                  | Storage contract, Zustand persistence sequence, Astro/React structure, AI prototype boundary                                                                  |
| `Harmony_and_Howls`  | `components/HearthClient.tsx`, `lib/actions/submitHearthPiece.ts`                                                                        | Shared validation, contribution metadata, timer, structured results, Supabase write and route revalidation                                                    |
| `cozygardensim`      | `src/store/reducers/gardenReducer.js`, `src/components/GameLogicManager.js`                                                              | Concrete stages, plant IDs, timed dispatch, reducer transitions; timing/balance remain experimental                                                           |
| `theForgottenKeeper` | Xcode `Scenes/LibraryScene.swift`, `Scenes/FrozenGladeScene.swift`; both copies of `GameLogic/Inventory.swift`, `GameLogic/Spells.swift` | Named book nodes, relative layout, scene fade, placeholder destination. Inventory/spell files are empty: this corrects the earlier README-backed description. |
| `show-me-resistance` | `src/lib/db.ts`, `src/pages/bill/[billNumber].astro`                                                                                     | MySQL lookup, summary fallback, status/detail rendering, preserved list parameters. This corrects the earlier static-only description.                        |
| `homeschool_portal`  | `src/app/actions/activityTime.ts`, route tree                                                                                            | Actual-minute update on schedule items, error result, parent progress revalidation                                                                            |
| `homeschoolhaven`    | `js/page/dashboard.js`, repository tree                                                                                                  | Template chart demonstrations with generated/sample data; no production learner records                                                                       |

Lunara Project retains the previously reviewed `lib/content/curriculum.ts` evidence. Justice Connect retains only its confirmed original flow/IA scope.

Six SVG implementation sketches were authored for Lunara Project, SecondBrain, Nest Quest, Markdown → Trello, Boho Journal, and Cozy Garden. They illustrate source-grounded relationships and are explicitly labeled as sketches, with accessible descriptions and full-size links. They are not screenshots or evidence of a deployed service. No external database, private journal, financial record, or learner account was accessed. Next steps are proposed development directions, not commitments or completed work.

## Light voice pass — 2026-10-23

Applied The Lunara Edit Brand Voice at Kai’s request, scaled to a personal engineering portfolio. Warmed project problems and current-state paragraphs, selected summaries/captions, and the home/about/collection introductions. Implementation mechanisms, research results, stack metadata, privacy boundaries, and unfinished-work distinctions are preserved. No new project capabilities or personal anecdotes were added. The site layout is unchanged.

## Personal hero and resume — 2026-10-23

Kai approved a luna-moth/field-notes direction and explicitly authorized merge and deployment. The replacement hero is a native SVG circuit-moth motif with keyboard-operable question notes leading to three existing case studies. It introduces no new product claims.

The supplied career-history text is the source for the public one-page resume and the high-level Pantheon hackathon highlight. It supplies current work, internship and freelance experience, Tech Elevator training, and prior supervisory experience. The resume emphasizes software engineering; the full supplied history and employer incident details are not copied into the site. Public contact links use the portfolio’s existing email, GitHub, and LinkedIn URLs; the resume includes city/state. No street address or phone number is added. No degree completion or graduation date is inferred.

`public/resume/Kai-Indigo-Wolf-Resume.pdf` contains selectable text and clickable contact links. `scripts/render_resume.py` rebuilds it with ReportLab and checks its one-page length and key text. The PDF was rendered and visually inspected before publication.

## Painted moth replacement — 2026-10-23

Kai requested a generated luna moth instead of the code-drawn illustration, retaining layered notes with slightly smaller cards. The transparent raster asset and generation prompt are documented in `IMAGE_SOURCES.md`. The “making things” note now reads “Can I make this a little easier?” No project capabilities or resume content changed.
