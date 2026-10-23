import gardenDiagram from "../assets/projects/system-illustrations/cozy-garden.svg";
import journalDiagram from "../assets/projects/system-illustrations/boho-journal.svg";
import trelloDiagram from "../assets/projects/system-illustrations/trello-automation.svg";
import nestDiagram from "../assets/projects/system-illustrations/nest-quest.svg";
import brainDiagram from "../assets/projects/system-illustrations/secondbrain.svg";
import publishingDiagram from "../assets/projects/system-illustrations/lunara-publishing.svg";
import questLesson from "../assets/projects/lunara-quest/illustrated-quest.webp";
import questLessonCard from "../assets/projects/lunara-quest/illustrated-quest-card.webp";
import labAccuracy from "../assets/projects/agent-behavior-lab/confirmatory-accuracy.webp";
import labAccuracyCard from "../assets/projects/agent-behavior-lab/confirmatory-accuracy-card.webp";
import labChanges from "../assets/projects/agent-behavior-lab/paired-answer-changes.webp";
import editHomepage from "../assets/projects/the-lunara-edit/homepage.webp";
import editHomepageCard from "../assets/projects/the-lunara-edit/homepage-card.webp";
import editShop from "../assets/projects/the-lunara-edit/shop.webp";
import worldOverview from "../assets/projects/the-world-clearly/reading-overview.webp";
import worldOverviewCard from "../assets/projects/the-world-clearly/reading-overview-card.webp";
import worldQuickRead from "../assets/projects/the-world-clearly/quick-read.webp";
import worldArchive from "../assets/projects/the-world-clearly/archive.webp";

const repo = (name) => `https://github.com/IndigoW0lf/${name}`;

// Public portfolio copy. Evidence and private source references belong in docs/CONTENT_SOURCES.md.
export const projects = [
  {
    slug: "lunara-quest",
    title: "Lunara Quest",
    eyebrow: "Family learning platform",
    category: "Products",
    areas: ["Products", "AI & research"],
    status: "Active development",
    featured: true,
    visual: "quest",
    cover: { src: questLessonCard, width: 960, height: 647 },
    screenshots: [
      {
        src: questLesson,
        width: 2048,
        height: 1381,
        label: "Inside an illustrated quest",
        alt: "Lunara Quest lesson showing a multiple-choice prompt, an illustrated friendship investigation, and follow-up evidence questions.",
        caption:
          "An authored quest combines an interactive choice, explanatory artwork, and follow-up questions inside the learning platform. This curriculum preview shows the lesson experience without exposing learner profiles or responses.",
      },
    ],
    summary:
      "A homeschool platform that connects parent planning with independent, quest-based learning.",
    stack: ["Next.js", "TypeScript", "Supabase", "OpenAI", "Upstash", "Vitest"],
    role: "Product direction, full-stack development & curriculum integration",
    problem:
      "A homeschool day involves several overlapping systems: planning, instructions, independent work, feedback, and progress. Parents and learners need different views of the same work.",
    approach:
      "Separate parent and learner experiences share a lesson and assignment model. Parents organize the week; learners see actionable quests, journal prompts, and rewards. Luna provides scoped assistance for planning and structured activity generation.",
    decisions: [
      [
        "Authorization follows the learner",
        "A shared access helper accepts a signed learner session for its own data, or checks authenticated parent membership in the same family. A learner ID in a URL is not treated as permission.",
      ],
      [
        "AI has a defined boundary",
        "The assistant is scoped to family learning. Per-minute limits and daily quotas use Upstash when configured; an in-memory fallback supports local development.",
      ],
      [
        "Content is part of the application",
        "Typed curriculum manifests and quest records connect authored learning sequences to the learner interface, rather than treating every activity as an unstructured chat response.",
      ],
    ],
    flow: [
      "Parent planner",
      "Lessons & assignments",
      "Learner quests",
      "Progress & rewards",
    ],
    outcome:
      "An actively used family learning tool, with separate parent and learner portals, printable worksheet support, and a growing authored curriculum. Continuing work includes lesson QA and clearer independent-learning instructions.",
    limits:
      "Family accounts and learner records remain private. The public capture shows an authored lesson; profile, activity, and journal screenshots are excluded.",
  },
  {
    slug: "the-lunara-edit",
    title: "The Lunara Edit",
    eyebrow: "Publishing & commerce",
    category: "Products",
    areas: ["Products", "Data & APIs"],
    status: "Live",
    featured: true,
    visual: "edit",
    cover: { src: editHomepageCard, width: 960, height: 534 },
    screenshots: [
      {
        src: editHomepage,
        width: 2048,
        height: 1140,
        label: "Editorial homepage",
        alt: "The Lunara Edit homepage with a workspace photograph, editorial introduction, and navigation to learning and home resources.",
        caption:
          "The entry point brings editorial content, learning resources, and practical home tools into one navigation system. Shared site components keep that experience consistent across sections.",
      },
      {
        src: editShop,
        width: 2048,
        height: 1143,
        label: "Searchable resource catalog",
        alt: "The Lunara Edit shop with a search field, audience, age, subject, price, and sort controls above printable resource cards.",
        caption:
          "Search and multiple filters help visitors narrow a mixed resource catalog. Product cards bring preview artwork, pricing, audience guidance, and checkout links together.",
      },
    ],
    summary:
      "The editorial and storefront system behind my independent learning-resource business.",
    stack: ["Next.js", "React", "TypeScript", "PostHog", "Playwright"],
    role: "Founder, product design, engineering & publishing operations",
    live: "https://www.lunaraedit.com/",
    problem:
      "Articles, learning resources, product listings, images, email signups, and checkout links need to stay consistent as a small publishing business grows.",
    approach:
      "Shared article, product, and image manifests support an editorial site and resource storefront. Publication-aware routes manage drafts and timed releases; automated checks cover images, publishing, catalog data, email, and analytics.",
    decisions: [
      [
        "Keep addresses stable",
        "Topic shelves classify content without changing article URLs. Permanent redirects preserve older links when a published route moves.",
      ],
      [
        "Make media requirements explicit",
        "The image manifest carries dimensions and alt text. Self-hosted WebP assets and smaller card images support performance and predictable layout.",
      ],
      [
        "Measure useful actions with consent",
        "Consent gates analytics. Event properties and URLs are sanitized, internal traffic can be excluded, and checkout clicks remain distinct from completed purchases.",
      ],
    ],
    flow: [
      "Content manifests",
      "Publication checks",
      "Articles & storefront",
      "Consent-aware events",
    ],
    outcome:
      "A live publishing and commerce site supporting original curriculum, editorial content, product discovery, downloads, and email acquisition. The engineering work extends into release checks and ongoing content operations.",
    limits:
      "Commerce uses external checkout providers. A tracked checkout click is not presented as a sale.",
  },
  {
    slug: "the-world-clearly",
    title: "The World, Clearly",
    eyebrow: "Newsroom & reader application",
    category: "Products",
    areas: ["Products", "AI & research"],
    status: "Live · iterating",
    featured: true,
    visual: "world",
    cover: { src: worldOverviewCard, width: 960, height: 534 },
    screenshots: [
      {
        src: worldOverview,
        width: 2048,
        height: 1140,
        label: "One story, four reading modes",
        alt: "The World, Clearly overview showing First Look, Quick Read, Full Story, and Deep Dive choices alongside a vocabulary sidebar.",
        caption:
          "The overview offers four routes into the same story, with reading-time estimates and nearby vocabulary support. Readers choose the amount of explanation and context they want.",
      },
      {
        src: worldQuickRead,
        width: 2046,
        height: 1884,
        label: "Inside Quick Read",
        alt: "A Quick Read article with the active reading mode highlighted, source and verification metadata, vocabulary definitions, and a reflection question.",
        caption:
          "The article keeps mode switching available beside source and verification metadata. Vocabulary definitions and a reflection prompt support understanding within the reading experience.",
      },
      {
        src: worldArchive,
        width: 1896,
        height: 1924,
        label: "Topic-based story archive",
        alt: "The World, Clearly archive with topic navigation and story summaries that include reading times and source counts.",
        caption:
          "The archive makes earlier coverage discoverable by subject. Consistent story summaries, reading-time labels, and source counts give readers context before opening an article.",
      },
    ],
    summary:
      "Current events for young readers, with four reading modes and an integrated editorial newsroom.",
    stack: [
      "Next.js",
      "TypeScript",
      "Payload CMS",
      "PostgreSQL",
      "Vitest",
      "Playwright",
    ],
    role: "Product direction, content modeling & full-stack development",
    live: "https://theworldclearly.com/",
    problem:
      "Making a story easier to read can accidentally remove the context that makes it understandable. A youth news product needs both approachable language and a durable evidence model.",
    approach:
      "The public reader and Payload newsroom share one TypeScript application. An issue supports First Look, Quick Read, Full Story, and Deep Dive, while topics, entities, and story relationships connect coverage across the archive.",
    decisions: [
      [
        "Reading depth is a choice",
        "Modes describe the reading experience instead of labeling a child by age or ability. The same issue can offer different levels of support and context.",
      ],
      [
        "Model connections early",
        "Topics, entities, and typed story relationships support background, follow-ups, and explainers. The content model can grow beyond a chronological news feed.",
      ],
      [
        "Keep the editorial problem visible",
        "Readability reports and content audits support review. Simplification still needs human judgment: preserving facts and causal explanations remains an active challenge.",
      ],
    ],
    flow: [
      "Editorial newsroom",
      "Structured issue",
      "Four reading modes",
      "Connected archive",
    ],
    outcome:
      "A live reader and newsroom with multi-mode issue publishing and a connected archive model. Further work focuses on reading-level quality, editorial workflow, and sustainable issue production.",
    limits:
      "Reading-level generation is still being refined. This is an evolving publication, not a claim of fully automated editorial accuracy.",
  },
  {
    slug: "agent-behavior-lab",
    title: "Agent Behavior Lab",
    eyebrow: "Research engineering",
    category: "AI & research",
    areas: ["AI & research", "Data & APIs"],
    status: "Research in progress",
    featured: true,
    visual: "lab",
    galleryType: "research",
    galleryHeading: "EVIDENCE FROM THE EXPERIMENT",
    galleryDateLabel: "Confirmatory run · September 16, 2026",
    mediaSource:
      "https://github.com/IndigoW0lf/agent-behavior-lab/blob/main/results/study-001-confirmatory.md",
    cover: { src: labAccuracyCard, width: 960, height: 600 },
    screenshots: [
      {
        src: labAccuracy,
        width: 2160,
        height: 1350,
        label: "Confirmatory accuracy",
        alt: "Accuracy across 48 held-out items: baseline 43 of 48, 89.6 percent; repetition control 29 of 48, 60.4 percent; named peers 10 of 48, 20.8 percent.",
        caption:
          "The primary comparison is named peers versus repetition, a decrease of 39.6 percentage points. Baseline is a descriptive reference. This figure is generated from the published confirmatory report, not a screenshot of a graphical application.",
      },
      {
        src: labChanges,
        width: 2160,
        height: 1350,
        label: "Paired answer changes",
        alt: "Paired answers under repetition versus named peers: 9 correct in both, 20 correct-to-wrong, 1 wrong-to-correct, and 18 wrong in both; total 48 items.",
        caption:
          "The paired view follows the same questions across both conditions: 20 changed from correct to wrong, while one changed from wrong to correct. Exact McNemar p = 0.0000209808. The result is specific to this model, prompt format, and task family.",
      },
    ],
    summary:
      "Reproducible experiments testing how attributed peer answers affect model behavior.",
    stack: ["Python", "Inspect AI", "pytest", "Ruff", "Paired analysis"],
    role: "Experimental design, evaluation tooling & analysis",
    source: repo("agent-behavior-lab"),
    problem:
      "A model may change its answer after seeing other agents disagree. Measuring that behavior requires separating social framing from repetition, task difficulty, and answer-position effects.",
    approach:
      "Inspect tasks separate datasets, prompt conditions, and scoring. Calibration, repeated-answer controls, a frozen confirmatory plan, and deterministic integrity tests make the experiment reviewable and repeatable.",
    decisions: [
      [
        "Separate exploration from confirmation",
        "Calibration and pilot data inform the design. A fresh 48-item confirmatory plan was frozen before the held-out run.",
      ],
      [
        "Use a matched control",
        "The peer condition is compared with repetition of the same incorrect answer, so repetition alone is not mistaken for the effect of peer attribution.",
      ],
      [
        "Publish the limits alongside the result",
        "A paired analysis tracks correct-to-wrong and wrong-to-correct switches. The result supports a narrow claim about observed model behavior, without attributing human mental states.",
      ],
    ],
    flow: [
      "Reviewed items",
      "Prompt conditions",
      "Scored responses",
      "Paired comparison",
    ],
    outcome:
      "The repository includes an exploratory pilot, repetition control, confirmatory report, analysis scripts, and deterministic tests. A separate cross-model replication design is implemented; its runs are a future milestone.",
    limits:
      "Findings are specific to the tested model and task family. Cross-model generalization has not been established.",
  },
  {
    slug: "lunara-publishing",
    illustration: {
      src: publishingDiagram,
      alt: "Canonical Markdown and YAML feed a validator and typed website model; print manifests reference the canonical records.",
      caption:
        "Canonical records connect the website model and print sequence.",
      width: 1100,
      height: 620,
    },
    title: "Lunara Project",
    eyebrow: "Curriculum publishing system",
    category: "Products",
    areas: ["Products", "Data & APIs"],
    status: "Evolving publishing system",
    visual: "publishing",
    summary:
      "Structured curriculum records, validation, and a Next.js publishing layer for original field studies.",
    stack: ["Next.js", "TypeScript", "YAML", "Markdown", "Node.js"],
    role: "Content architecture, validation tooling & product development",
    problem:
      "When curriculum exists only inside PDFs and artwork, edits can drift between learner pages, catalog descriptions, and teaching notes.",
    approach:
      "Learner copy lives in Markdown alongside YAML metadata, research notes, registries, and print manifests. A server-side TypeScript loader reads those files, validates them, and maps the authored fields into the website’s content model. The same record carries age and grade ranges, learning objectives, materials, review requirements, and publication status, keeping the catalog connected to the curriculum behind it.",
    decisions: [
      [
        "Validate at the content boundary",
        "The loader checks required fields, registry references, learning-experience scales, and publication-stage requirements before returning a typed field study.",
      ],
      [
        "Keep artwork and content in agreement",
        "Artifact manifests map the print sequence to canonical records. Visual layout can change without silently becoming a separate version of the curriculum.",
      ],
    ],
    flow: [
      "Canonical records",
      "Registry validation",
      "Typed content loader",
      "Site & print outputs",
    ],
    outcome:
      "The repository has a working content loader, curriculum validation, and reporting scripts, with a versioned source for site and print production. It continues to evolve alongside The Lunara Edit; the infrastructure is further along than the full planned field-study catalog.",
    limits:
      "This case study covers publishing infrastructure; it does not imply every planned field study has shipped.",
    nextStep:
      "Run each new field study through the complete content, print, and publication review cycle.",
  },
  {
    slug: "secondbrain",
    illustration: {
      src: brainDiagram,
      alt: "Source importers feed SQLite for structured records and ChromaDB for text embeddings; MCP tools query both stores.",
      caption:
        "Structured filters and semantic retrieval share one tool interface.",
      width: 1100,
      height: 620,
    },
    title: "SecondBrain",
    eyebrow: "Personal data & AI tooling",
    category: "Data & APIs",
    areas: ["Data & APIs", "AI & research"],
    status: "Prototype",
    visual: "brain",
    summary:
      "A self-hosted Python system combining structured records, vector retrieval, and an MCP tool interface.",
    stack: ["Python", "SQLite", "ChromaDB", "MCP", "FastAPI"],
    source: repo("secondbrain"),
    problem:
      "Useful personal information is spread across services that do not share a query interface.",
    approach:
      "Python ingestion modules feed two complementary stores: SQLite holds structured records, while ChromaDB holds text and locally generated embeddings. Shared helpers handle database transactions, ingest logs, stable IDs, and vector upserts. A FastAPI tool interface exposes targeted queries for transactions, email, calendar events, documents, and cross-source search to an AI client.",
    outcome:
      "The code includes storage helpers and callable retrieval tools beyond the initial financial-ingestion milestone. It remains a personal prototype: connector coverage and live service configuration vary, and the portfolio does not connect to any personal records.",
    limits:
      "Personal data is excluded from this portfolio. No live data interface or financial records are embedded here.",
    decisions: [
      [
        "Choose retrieval by the question",
        "Dates, amounts, and categories use SQL filters; open-ended text queries use vector similarity. Email search merges semantic and keyword matches and removes duplicate IDs.",
      ],
      [
        "Keep storage behind shared helpers",
        "Connection cleanup, rollback, embedding initialization, and collection access live in one module. Individual importers can focus on translating their source into records.",
      ],
    ],
    nextStep:
      "Verify each importer and retrieval path against a small synthetic dataset before treating it as a dependable assistant.",
  },
  {
    slug: "nest-quest",
    illustration: {
      src: nestDiagram,
      alt: "City JSON feeds metric selection and numeric normalization for Recharts, alongside a separate Leaflet map view.",
      caption:
        "A closer look at the chart\u2019s data preparation and geographic view.",
      width: 1100,
      height: 620,
    },
    title: "Nest Quest",
    eyebrow: "Geospatial exploration",
    category: "Data & APIs",
    areas: ["Data & APIs"],
    status: "Archived prototype",
    visual: "map",
    summary:
      "A city-comparison tool bringing demographic data, charts, and an interactive map together.",
    stack: ["React", "React Leaflet", "Recharts", "Flask", "JSON"],
    source: repo("Nest_Quest"),
    problem:
      "Choosing where to live means comparing several dimensions across places, not just searching for one number.",
    approach:
      "The React dashboard combines a Leaflet map with Recharts comparisons and demographic views. Its chart component reads city records from a separate Flask-backed JSON API and builds the metric selector from the returned fields. Selecting a metric reshapes each record into city/value pairs; currency and percentage strings are parsed before plotting, then formatted appropriately in tooltips.",
    outcome:
      "An archived exploration of geospatial interfaces, data transformation, and the frontend/API boundary. The original backend hosting is no longer maintained, so the source is the reliable review entry point.",
    decisions: [
      [
        "Let the dataset supply the choices",
        "The selector derives metric names from the API response and excludes geographic coordinates. The interface can expose available comparisons without a separately maintained menu.",
      ],
      [
        "Normalize values before visualization",
        "Monetary and percentage fields arrive as formatted strings. Parsing those values and dropping nonnumeric entries keeps chart preparation separate from presentation.",
      ],
    ],
    nextStep:
      "A revival would start with a versioned sample dataset, a maintained endpoint, and visible loading and failure states.",
  },
  {
    slug: "trello-automation",
    illustration: {
      src: trelloDiagram,
      alt: "Markdown headings map to Trello cards, checklists, and tasks; each API write passes its returned parent ID to the next.",
      caption: "The document hierarchy becomes the board hierarchy.",
      width: 1100,
      height: 620,
    },
    title: "Markdown → Trello",
    eyebrow: "Workflow automation",
    category: "Data & APIs",
    areas: ["Data & APIs"],
    status: "Script",
    visual: "automation",
    summary:
      "A Python utility that turns structured Markdown into Trello cards, checklists, and checklist items.",
    stack: ["Python", "REST APIs", "Markdown"],
    source: repo("Trello_API"),
    problem:
      "Moving a written project plan into a task board involved repeatedly copying individual checklist items.",
    approach:
      "The first line of a Markdown file selects a mapped Trello list. The parser converts the remaining Markdown to HTML, then interprets second-level headings as cards, third-level headings as checklists, and list items as tasks. Separate request helpers create each Trello object in order, passing the returned card and checklist IDs into the next operation.",
    outcome:
      "A small creation-oriented automation with a concrete Markdown-to-board path. It does not reconcile an existing board, prevent duplicate imports, or provide synchronization.",
    decisions: [
      [
        "Use the document hierarchy as the interface",
        "Headings and lists already express a project plan. Mapping that structure onto board objects makes the input readable before it ever reaches Trello.",
      ],
      [
        "Separate parsing from API writes",
        "The parser returns a list ID and structured card details. Request helpers handle card, checklist, and item creation, keeping document interpretation out of the HTTP layer.",
      ],
    ],
    nextStep:
      "Add input validation and a dry-run preview, then record created IDs so a repeat run can be deliberate.",
  },
  {
    slug: "lunara-ritual",
    title: "Lunara Ritual",
    eyebrow: "Commerce interaction prototype",
    category: "Creative coding",
    areas: ["Products", "Creative coding"],
    status: "Frontend prototype",
    visual: "ritual",
    summary:
      "A React storefront exploration with a cart drawer, quantity controls, and motion.",
    stack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    source: repo("lunara-ritual"),
    approach:
      "A single React application brings together a sample product catalog, collection sections, brand storytelling, and an animated cart drawer. Adding an existing product increments its quantity; quantity changes remove zero-count items. The cart badge and total are derived from the same array, while separate state controls the drawer and mobile menu.",
    outcome:
      "The browsing and cart interactions are implemented as a frontend prototype using sample products. Payments, inventory, persistent carts, and order fulfillment would require a separate commerce integration.",
    problem:
      "A storefront should make browsing feel inviting while keeping the cart’s contents, quantity, and total easy to understand.",
    decisions: [
      [
        "Derive totals from the cart",
        "The count and price total are reductions over cart items, rather than separate values to update after every interaction.",
      ],
      [
        "Explore the interaction before the service layer",
        "Local product data and component state make the browsing-to-cart loop easy to iterate on. Framer Motion handles drawer, menu, and product transitions.",
      ],
    ],
    nextStep:
      "Extract the cart and catalog into reusable modules before connecting a real commerce backend.",
  },
  {
    slug: "sacred-iron",
    title: "Sacred Iron",
    eyebrow: "Headless commerce",
    category: "Products",
    areas: ["Products", "Data & APIs"],
    status: "Development project",
    visual: "iron",
    summary:
      "An exploration of a Medusa commerce backend paired with a separate Next.js storefront.",
    stack: ["Medusa", "Next.js", "Node.js"],
    approach:
      "A Medusa starter supplies the backend and admin, paired with a separate Next.js storefront in the same repository. The storefront adds brand-specific routes for apparel, gear, drops, a journal, and a catalog of symbolic marks. Mark records carry categories, meaning, and design notes, giving the brand’s content a structured place alongside the commerce integration.",
    outcome:
      "A development storefront that adds brand-specific content and routes to a Medusa foundation. The work connects a customer experience to a separate commerce service; end-to-end purchasing is still a validation milestone.",
    problem:
      "A branded store needs a distinctive customer experience while still relying on dependable catalog and commerce foundations.",
    decisions: [
      [
        "Keep the commerce boundary explicit",
        "Backend/admin and customer storefront run as separate applications. The starter provides the commerce foundation while the storefront owns presentation and brand content.",
      ],
      [
        "Model the brand content as data",
        "Typed mark records and category grouping support consistent browsing and reuse. This is a concrete layer of customization on top of the starter.",
      ],
    ],
    nextStep:
      "Validate the full catalog-to-order flow in a configured test environment.",
  },
  {
    slug: "boho-journal",
    illustration: {
      src: journalDiagram,
      alt: "The React editor uses a Zustand store, which writes through a StorageAdapter contract to the selected Supabase adapter.",
      caption:
        "The writing interface stays separate from the persistence contract.",
      width: 1100,
      height: 620,
    },
    title: "Boho Journal",
    eyebrow: "Writing application",
    category: "Products",
    areas: ["Products", "Creative coding", "AI & research"],
    status: "Prototype",
    visual: "journal",
    summary:
      "A journaling application exploring authenticated writing, rich text, media, and AI prompts.",
    stack: ["Astro", "React", "Zustand", "Supabase", "TipTap", "OpenAI"],
    approach:
      "Astro pages host React writing and reading interfaces. A Zustand store coordinates entry selection, search, and asynchronous CRUD through a storage adapter. Entries carry rich text, attachments, dates, tags, and optional mood or context. The storage contract includes list, lookup, create, update, delete, and attachment operations, with Supabase selected in the current store.",
    outcome:
      "A prototype connecting rich-text editing, entry metadata, persistence, and public reading routes. AI prompt generation is also prototyped; its current browser-side integration needs further work before a public release.",
    problem:
      "A journal needs a comfortable writing surface, a way to find older entries, and a clear boundary between editing and reading.",
    decisions: [
      [
        "Give persistence a replaceable contract",
        "The editor and state layer depend on a StorageAdapter interface. Supabase, local, and Memos adapter files provide room to explore different persistence choices.",
      ],
      [
        "Apply local changes after persistence succeeds",
        "Create, update, and delete await storage before changing the local entry list. Failed deletion leaves the entry visible rather than presenting a removal that was never saved.",
      ],
    ],
    nextStep:
      "Move AI requests behind a server boundary and verify publication behavior with synthetic entries.",
  },
  {
    slug: "harmony-and-howls",
    title: "Harmony & Howls",
    eyebrow: "Creative web experience",
    category: "Creative coding",
    areas: ["Products", "Creative coding"],
    status: "Evolving prototype",
    visual: "harmony",
    summary:
      "A creative community and storytelling concept exploring a more personal kind of web interface.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Supabase"],
    approach:
      "The Next.js implementation includes a digital hearth where a contribution can carry a theme, intention, mood, and optional closing note. The client provides a short grounding timer, content feedback, filtering, and sorting. A server action validates the contribution, writes to Supabase, returns a structured result, and revalidates the hearth page after success.",
    outcome:
      "An evolving creative prototype with an implemented hearth submission path and broader storytelling and community routes. The related Harmony repository preserves an earlier React, TypeScript, and Vite iteration; the wider community vision remains in development.",
    problem:
      "Community publishing can feel impersonal. The project explores how reflection and small acts of participation could shape a warmer interface.",
    decisions: [
      [
        "Validate on both sides of the form",
        "The client and server action share the content validator. Immediate feedback helps the writer, while the write path performs its own check.",
      ],
      [
        "Make the result part of the interaction",
        "Pending, error, and success states belong to the submission flow. On success, the form resets and the page refreshes its contributions.",
      ],
    ],
    nextStep:
      "Exercise contribution failures, empty states, and community publishing rules in a configured demo environment.",
  },
  {
    slug: "cozy-garden",
    illustration: {
      src: gardenDiagram,
      alt: "A timer dispatches updates to a garden reducer, which changes a plant\u2019s stage and remaining time; updated state informs the next tick.",
      caption:
        "The simulation clock requests changes; the reducer owns plant transitions.",
      width: 1100,
      height: 620,
    },
    title: "Cozy Garden Simulator",
    eyebrow: "Simulation & state",
    category: "Creative coding",
    areas: ["Creative coding"],
    status: "Game prototype",
    visual: "garden",
    summary:
      "A garden simulation exploring plant state, growth progression, and environmental systems.",
    stack: ["React", "Redux", "nanoid"],
    source: repo("cozygardensim"),
    approach:
      "Redux stores the plant collection and magic conditions. A nonvisual React component dispatches growth updates on a timer; the reducer advances plants through seed, sprouting, growing, flowering, mature, and harvestable stages. Plant IDs let actions target an individual entity. Additional actions cover breeding, harvesting, removal, and changes to the environment.",
    outcome:
      "A game prototype with concrete growth stages and Redux actions, alongside experimental environmental and breeding logic. Timing and balance still need refinement; the broader game vision is not presented as a finished simulation.",
    problem:
      "A garden simulation needs individual plants to change over time while the interface stays in step with shared environmental conditions.",
    decisions: [
      [
        "Keep the clock separate from the transition",
        "The timer requests updates, while the reducer calculates the next plant state and resets the stage duration. Rendering does not own the growth rule.",
      ],
      [
        "Represent plants as individual entities",
        "Stable IDs allow quantity-independent operations: harvest one plant, remove another, or add offspring without treating the garden as a single progress value.",
      ],
    ],
    nextStep:
      "Make the simulation clock deterministic so growth and environmental modifiers can be checked without waiting in real time.",
  },
  {
    slug: "forgotten-keeper",
    title: "The Forgotten Keeper",
    eyebrow: "Native game exploration",
    category: "Creative coding",
    areas: ["Creative coding"],
    status: "Work in progress",
    visual: "keeper",
    summary:
      "A Swift and SpriteKit prototype exploring a library hub and scene-based world restoration.",
    stack: ["Swift", "SpriteKit", "Scene architecture"],
    source: repo("theForgottenKeeper"),
    approach:
      "A SpriteKit library scene lays out glowing book sprites relative to the screen size and gives each one a name for touch handling. Selecting the Frozen Glade book constructs the next scene and presents it with a fade transition. The destination scene loads its background and a placeholder welcome message; the other book destinations remain under construction.",
    outcome:
      "An early native game prototype with an implemented library interaction and a Frozen Glade scene scaffold. Inventory, spellcasting, and world-restoration mechanics remain future work.",
    problem:
      "The game concept uses books as doorways into damaged worlds, so the first technical step is turning that navigation idea into an interactive scene.",
    decisions: [
      [
        "Use named scene nodes for interaction",
        "The library assigns each book an indexed node name. Touch handling translates that name into a destination choice instead of relying on fixed screen coordinates.",
      ],
      [
        "Prove the scene boundary first",
        "The Frozen Glade transition establishes the hub-to-world path before the larger restoration mechanics are complete. Layout positions scale from the scene dimensions.",
      ],
    ],
    nextStep:
      "Implement one small restoration interaction before expanding the inventory, spells, or additional worlds.",
  },
  {
    slug: "show-me-resistance",
    title: "Show Me Resistance",
    eyebrow: "Civic information",
    category: "Products",
    areas: ["Products"],
    status: "In progress",
    visual: "civic",
    summary:
      "An Astro publishing project for making Missouri civic information easier to navigate.",
    stack: ["Astro", "TypeScript", "MySQL", "Markdown", "Vercel"],
    source: repo("show-me-resistance"),
    approach:
      "Astro routes combine civic content with database-backed bill pages. A TypeScript query layer joins bill records and text summaries in MySQL, using a generated summary when available and falling back to the bill description. The detail page renders bill number, title, chamber, date, status, summary, and tags, with a return link that preserves the list’s status and page parameters.",
    outcome:
      "Bill lookup and detail rendering are implemented, including summary fallbacks and return navigation. The project remains in progress: data imports, source freshness, and a maintained deployment need validation before expanding into broader vote dashboards.",
    problem:
      "Civic information becomes difficult to act on when bill identity, status, and explanation are scattered across different views.",
    decisions: [
      [
        "Keep database access behind a query layer",
        "The route asks for bill details by number. A parameterized SQL query handles the lookup and closes its connection in a finally block.",
      ],
      [
        "Preserve the reader’s place",
        "The detail page carries filter and pagination parameters into its back link, keeping a closer connection between browsing bills and reading one in depth.",
      ],
    ],
    nextStep:
      "Verify bill imports and source freshness, then exercise list filtering and detail navigation against a maintained dataset.",
  },
  {
    slug: "homeschool-portal",
    title: "Homeschool Portal · v1",
    eyebrow: "Earlier product iteration",
    category: "Products",
    areas: ["Products", "AI & research"],
    status: "Earlier iteration",
    visual: "quest",
    summary:
      "The earlier homeschool platform repository, connecting lesson planning, learner portals, and Luna.",
    stack: ["Next.js", "TypeScript", "Supabase", "OpenAI"],
    source: repo("homeschool_portal"),
    approach:
      "The earlier Next.js application brings parent planning, learner routes, lesson tools, and AI assistance into one platform. Schedule items also carry actual minutes: a server action updates the selected record in Supabase, returns a success or error result, and revalidates the parent progress page so a saved time entry can appear in the reporting view.",
    outcome:
      "An earlier product iteration with substantial planning, learner, and API route structure. It records the development path into Lunara Quest; the newer case study is the main reference for current work.",
    problem:
      "Family learning involves planning ahead and recording what actually happened. Those two views need to refer to the same activities.",
    decisions: [
      [
        "Track actual time on the schedule item",
        "The time-update action writes actual minutes onto the existing scheduled activity. Planning and reporting can refer back to one record.",
      ],
      [
        "Refresh the dependent view after a write",
        "The time update revalidates parent progress rather than relying only on a local form change. Errors are returned to the calling interface.",
      ],
    ],
    nextStep:
      "Use this version as development history while consolidating new product work in Lunara Quest.",
  },
  {
    slug: "homeschool-haven",
    title: "Homeschool Haven",
    eyebrow: "Early homeschool demo",
    category: "Design",
    areas: ["Products", "Design"],
    status: "Early demo · 2022",
    visual: "haven",
    summary:
      "An early homeschool dashboard concept for organizing subjects, assignments, and learning hours.",
    stack: ["HTML", "SCSS", "JavaScript", "Bootstrap", "Grunt"],
    source: repo("homeschoolhaven"),
    approach:
      "A Bootstrap dashboard starter was adapted into an education-focused interface using HTML, SCSS, and JavaScript. The work involved reorganizing template navigation and content, learning the Sass and Grunt workflow, and deploying the result. Dashboard scripts include ApexCharts demonstrations with sample dates and generated values, establishing the visual direction for time and progress views.",
    outcome:
      "A 2022 demo with incomplete product functionality and template-derived chart examples. Its value in the portfolio is the visible starting point: interface adaptation and early tooling practice before the later full-stack homeschool projects.",
    problem:
      "An early homeschool dashboard needed to make subjects, assignments, and hours feel like parts of one manageable day.",
    decisions: [
      [
        "Start with an established dashboard vocabulary",
        "Using a starter made it possible to explore navigation, cards, and information hierarchy while learning the frontend build process. The template foundation remains credited.",
      ],
      [
        "Sketch the reporting experience with demo data",
        "Sample chart values let the interface communicate the idea of learning-hour summaries. They demonstrate presentation rather than a working learner record system.",
      ],
    ],
    nextStep:
      "Retain it as an honest early milestone rather than treating it as the current homeschool product.",
  },
  {
    slug: "justice-connect",
    title: "Justice Connect",
    eyebrow: "UX foundations",
    category: "Design",
    areas: ["Design"],
    status: "Design concept",
    visual: "justice",
    summary:
      "An information architecture concept connecting people to local activism and community resources.",
    stack: ["User flows", "Information architecture", "Miro"],
    approach:
      "The concept maps entry paths for events, volunteering, resources, and community stories in Miro. It considers both someone arriving for the first time and organizations trying to make participation easier to find. The work concentrates on how content is grouped and how a visitor reaches a useful next step, before committing to a visual interface or application stack.",
    outcome:
      "Retained as a user-flow and information-architecture concept from the original portfolio. It demonstrates the UX foundation behind the software work; completed wireframes, interactive prototypes, and usability findings are not claimed.",
    problem:
      "People looking for local activism and community support need a clear route from discovering an opportunity to deciding how to participate.",
    decisionsTitle: "Design decisions",
    decisions: [
      [
        "Organize around participation",
        "Events and volunteering provide action-oriented routes, while resources and stories support visitors who need context before taking part.",
      ],
      [
        "Map the journey before choosing components",
        "User flows expose the sequence from discovery to participation. That work provides a foundation for later navigation and screen design without implying a built platform.",
      ],
    ],
    nextStep:
      "Validate the discovery paths with prospective participants before moving into wireframes.",
  },
];

export const categories = [
  "All work",
  "Products",
  "AI & research",
  "Data & APIs",
  "Creative coding",
  "Design",
];
export function filterProjects(category, query = "") {
  const term = query.trim().toLowerCase();
  return projects.filter(
    (project) =>
      (category === "All work" || project.areas.includes(category)) &&
      [project.title, project.summary, project.eyebrow, ...project.stack]
        .join(" ")
        .toLowerCase()
        .includes(term),
  );
}
