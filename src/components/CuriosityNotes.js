import React, { useState } from "react";
import { Link } from "react-router-dom";
import lunaMoth from "../assets/identity/luna-moth-watercolor.webp";

const threads = [
  {
    id: "learning",
    label: "Learning",
    question: "Could this feel more like an adventure?",
    project: "Lunara Quest",
    path: "/projects/lunara-quest",
    detail:
      "Parent plans, learner quests, and room for a curious kid to follow a question.",
  },
  {
    id: "questions",
    label: "Questions",
    question: "Wait, why did the answer change?",
    project: "Agent Behavior Lab",
    path: "/projects/agent-behavior-lab",
    detail:
      "A Python experiment looking at what happens when a model sees other agents disagree.",
  },
  {
    id: "making",
    label: "Making things",
    question: "Can I make this a little easier?",
    project: "The Lunara Edit",
    path: "/projects/the-lunara-edit",
    detail:
      "The publishing tools and checks behind a small business with a lot of moving pieces.",
  },
];

export default function CuriosityNotes() {
  const [activeId, setActiveId] = useState(threads[0].id);
  const active = threads.find((thread) => thread.id === activeId);
  return (
    <aside
      className="curiosity-notes"
      data-thread={activeId}
      aria-label="A few threads from my work"
    >
      <div className="notes-heading">
        <p className="eyebrow">FROM MY FIELD NOTES</p>
        <h2>I wonder if…</h2>
        <span className="notes-margin" aria-hidden="true">
          ☾
        </span>
      </div>
      <div className="notes-desk">
        <img
          className="notes-moth"
          src={lunaMoth}
          alt="Watercolor luna moth with pale sage wings, plum edges, and long trailing tails."
          width="900"
          height="750"
          fetchPriority="high"
          decoding="async"
        />
        <div
          className="notes-threads"
          role="group"
          aria-label="Pick a thread to explore"
        >
          {threads.map((thread, index) => (
            <button
              className={`thread-note thread-${thread.id}`}
              key={thread.id}
              type="button"
              aria-pressed={activeId === thread.id}
              aria-controls="thread-detail"
              onClick={() => setActiveId(thread.id)}
            >
              <span className="thread-label">
                0{index + 1} / {thread.label}
              </span>
              <span className="thread-question">{thread.question}</span>
              <span className="thread-pin" aria-hidden="true" />
            </button>
          ))}
        </div>
        <span className="notes-aside" aria-hidden="true">
          usually how it starts.
        </span>
      </div>
      <div
        className="thread-detail"
        id="thread-detail"
        aria-live="polite"
        aria-atomic="true"
      >
        <p>{active.detail}</p>
        <Link to={active.path}>
          {active.project} <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <span className="notes-invitation">Pick a note to see where it led.</span>
    </aside>
  );
}
