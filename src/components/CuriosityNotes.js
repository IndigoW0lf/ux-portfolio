import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    question: "Can this part be a little less fiddly?",
    project: "The Lunara Edit",
    path: "/projects/the-lunara-edit",
    detail:
      "The publishing tools and checks behind a small business with a lot of moving pieces.",
  },
];

function CircuitMoth() {
  return (
    <svg
      className="notes-moth"
      viewBox="0 0 360 310"
      fill="none"
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          className="moth-wing"
          d="M178 139C144 97 80 48 23 61C12 110 55 149 143 161C91 158 64 187 72 224C105 222 130 205 146 181C133 225 118 248 93 281C134 268 164 221 178 165Z"
        />
        <path
          className="moth-wing"
          d="M182 139C216 97 280 48 337 61C348 110 305 149 217 161C269 158 296 187 288 224C255 222 230 205 214 181C227 225 242 248 267 281C226 268 196 221 182 165Z"
        />
        <path
          d="M176 136C169 117 174 106 180 106C186 106 191 117 184 136L187 171L180 190L173 171Z"
          fill="#746a91"
          fillOpacity=".2"
        />
        <path d="M177 108C174 91 162 78 151 76M183 108C186 91 198 78 209 76M153 80L147 74M159 83L154 75M165 88L160 80M207 80L213 74M201 83L206 75M195 88L200 80" />
        <path
          className="moth-trace"
          d="M168 145L137 121H92L68 97H45M192 145L223 121H268L292 97H315M159 159H115L92 183M201 159H245L268 183M151 181L135 211L118 226M209 181L225 211L242 226"
        />
        <circle className="moth-eye" cx="92" cy="121" r="13" />
        <circle className="moth-eye" cx="268" cy="121" r="13" />
        <circle cx="92" cy="121" r="4" />
        <circle cx="268" cy="121" r="4" />
        <circle cx="45" cy="97" r="3" />
        <circle cx="315" cy="97" r="3" />
        <circle cx="92" cy="183" r="3" />
        <circle cx="268" cy="183" r="3" />
      </g>
      <g className="notes-stars" stroke="currentColor" strokeWidth="1.1">
        <path d="M282 19V37M273 28H291M35 236V248M29 242H41M322 217V225M318 221H326" />
        <path d="M78 19A13 13 0 1 0 94 36A13 13 0 0 1 78 19Z" />
        <circle cx="121" cy="40" r="2" fill="currentColor" />
        <circle cx="314" cy="165" r="1.5" fill="currentColor" />
        <path d="M54 151C22 164 20 198 42 218M31 186L17 177M32 194L48 181M36 207L51 199" />
      </g>
    </svg>
  );
}

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
        <CircuitMoth />
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
