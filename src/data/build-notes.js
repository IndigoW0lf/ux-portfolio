// Grounded in the reviewed implementations and public confirmatory report.
// These describe shipped choices, not reconstructed debugging anecdotes.
export const buildNotes = [
  {
    slug: "agent-behavior-lab",
    project: "Agent Behavior Lab",
    margin: "check the comparison",
    title: "Was it the peers, or just the repetition?",
    preview:
      "A wrong answer repeated three times is already a pretty strong nudge. That needed its own control.",
    body: "I compared the named-peer condition with the same wrong answer repeated without peer attribution. Accuracy was lower with named peers, even against that repetition control. That gives the result a much narrower, more useful meaning than simply comparing peers with an unprompted baseline.",
    followUp:
      "The wording and length still differ between prompts. Separating those cues is a question for a fresh study.",
    link: "See the study and its limits",
  },
  {
    slug: "lunara-publishing",
    project: "Lunara publishing",
    margin: "give an edit one home",
    title: "Which version has the right sentence?",
    preview:
      "The lesson, the website, and the print layout all need to agree. Keeping separate copies makes that harder than it sounds.",
    body: "I keep the curriculum copy in Markdown with YAML metadata, then validate it before the loader returns a typed record. Print manifests point back to those records too. It gives an edit somewhere definite to begin, even when the final layouts look quite different.",
    followUp:
      "The checks catch missing fields and broken references. They don’t decide whether a lesson is clear or worth teaching; that still needs review.",
    link: "Follow the content through the system",
  },
  {
    slug: "the-world-clearly",
    project: "The World, Clearly",
    margin: "leave room to go deeper",
    title: "A shorter story still needs its why.",
    preview:
      "Making news easier to read gets complicated when the explanation is the part that gets cut.",
    body: "I built four reading modes around the same issue: First Look, Quick Read, Full Story, and Deep Dive. Readers can choose how much context they want without being assigned an age or ability label. Topics and story relationships also leave a way back to the background.",
    followUp:
      "Reading levels are still being refined. A readability check can help flag a passage, but it can’t tell me whether the explanation survived.",
    link: "Explore the reading modes",
  },
];
