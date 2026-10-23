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
      "Canonical learner copy lives in Markdown alongside YAML metadata, research notes, registries, and artifact manifests. A typed content loader validates records and maps authored metadata into the website model.",
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
      "A versioned source-of-truth system for field studies, with curriculum validation, reporting scripts, and a website content layer. The publishing system continues to evolve alongside The Lunara Edit.",
    limits:
      "This case study covers publishing infrastructure; it does not imply every planned field study has shipped.",
  },
  {
    slug: "secondbrain",
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
      "Source-specific ingestion pipelines feed SQLite for structured records and ChromaDB for embeddings. An MCP interface exposes tools to an AI client, while local sentence-transformer embeddings support semantic retrieval.",
    outcome:
      "A prototype architecture for ingestion, storage, retrieval, and AI tool access. The README marks financial ingestion as ready and other connectors as planned; connector completeness should be assessed individually.",
    limits:
      "Personal data is excluded from this portfolio. No live data interface or financial records are embedded here.",
  },
  {
    slug: "nest-quest",
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
      "A React interface uses Leaflet for geographic comparison and Recharts for demographic and economic views. A Flask API serves the project data from JSON.",
    outcome:
      "An exploration of frontend visualization, geographic interfaces, and a separate Python API. The original backend hosting is no longer maintained, so the source is the reliable review entry point.",
  },
  {
    slug: "trello-automation",
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
      "A parser interprets the project’s Markdown syntax and uses Trello’s REST API to create board objects. List mappings connect the written plan to its destination on the board.",
    outcome:
      "A focused automation project connecting text parsing to an external service. Updates to existing cards and broader board management are future extensions, rather than current guarantees.",
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
      "Product browsing, collection storytelling, and cart state are brought together in a responsive single-page interface. Motion supports transitions between browsing and cart interactions.",
    outcome:
      "A frontend commerce study. Cart totals and quantity controls demonstrate interaction logic; payment processing and order fulfillment are outside the prototype.",
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
      "The monorepo separates the backend API and admin from the customer storefront. Development runs the two processes independently, with migration and deployment preparation documented alongside the code.",
    outcome:
      "Experience working with a headless commerce starter and its backend/storefront boundary. This is a development project, not a claim of a launched store or a commerce engine built from scratch.",
  },
  {
    slug: "boho-journal",
    title: "Boho Journal",
    eyebrow: "Writing application",
    category: "Products",
    areas: ["Products", "Creative coding", "AI & research"],
    status: "Prototype",
    visual: "journal",
    summary:
      "A journaling application exploring authenticated writing, rich text, media, and AI prompts.",
    stack: ["React", "Supabase", "TipTap", "OpenAI"],
    approach:
      "A private writing interface and public reading experience support rich-text entries, media attachments, tags, and generated inspiration with fallback prompts.",
    outcome:
      "An exploration of content CRUD, protected routes, extensible editing, and the transition between private creation and public presentation.",
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
      "A digital-hearth concept brings reflective writing, collections, and community-oriented interaction into a warm visual system.",
    outcome:
      "A creative technology exploration within Lunara LLC. The related Harmony repository records an earlier React, TypeScript, and Vite implementation.",
  },
  {
    slug: "cozy-garden",
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
      "Redux manages shared simulation state, while stable plant identifiers support individual entities. The project explores how growth, environmental conditions, and plant traits can interact.",
    outcome:
      "A learning project in state modeling and simulation interfaces. The repository describes a broader game vision; not every proposed mechanic is presented here as complete.",
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
      "A Swift game prototype with inventory, spellcasting, and scene-based world restoration.",
    stack: ["Swift", "Game systems", "Scene architecture"],
    source: repo("theForgottenKeeper"),
    approach:
      "Gameplay logic is organized around inventory, spells, scenes, and UI. A library hub and frozen-glade scene establish the structure for exploring and restoring book worlds.",
    outcome:
      "A native programming exploration beyond the browser. The README identifies inventory and spellcasting as core progress; scenes remain in development and assets include placeholders.",
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
    stack: ["Astro", "Markdown", "Vercel"],
    source: repo("show-me-resistance"),
    approach:
      "Static pages, shared layouts, and Markdown content form the basis of a civic education and action-resource site.",
    outcome:
      "An exploration of content-first static generation. Bill tracking, vote dashboards, and other elements of the project vision are development goals, not verified completed features.",
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
      "Parent planning, lesson libraries, learner dashboards, and AI assistance established the foundations that continued into Lunara Quest v2.",
    outcome:
      "Included as part of the product’s development history. The current Lunara Quest case study covers the newer implementation.",
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
      "A Bootstrap starter was adapted into a homeschool dashboard. The work involved restructuring the template, exploring Sass and Grunt, and learning the deployment process.",
    outcome:
      "An early demonstration rather than a fully functional platform. It provides a useful starting point for the longer path toward Lunara Quest.",
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
      "Mapped discovery paths for events, volunteering, resources, and community stories. The project explored how first-time participants could find an actionable next step.",
    outcome:
      "Retained from the original portfolio as a design foundation. Wireframes, interactive prototypes, and usability findings are not presented as completed deliverables.",
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
