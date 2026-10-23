import React, { useState } from "react";
import { Link } from "react-router-dom";
import study from "../data/agent-behavior-results.json";

const conditionNotes = [
  "Answer the code question without a misleading hint.",
  "See the same wrong answer repeated three times.",
  "See that wrong answer attributed to three named AI peers.",
];

export default function TinyLab() {
  const [prediction, setPrediction] = useState(24);
  const [revealed, setRevealed] = useState(false);
  const peers = study.conditions[2].correct;
  const repetition = study.conditions[1].correct;
  const difference = (((repetition - peers) / study.items) * 100).toFixed(1);

  return (
    <section
      className="tiny-lab section-pad"
      id="tiny-lab"
      aria-labelledby="lab-title"
    >
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A TINY LAB / COME FOLLOW A QUESTION</p>
            <h2 id="lab-title">
              Would the answer
              <br />
              <em>still hold up?</em>
            </h2>
          </div>
          <p>
            I was curious what would happen when a model saw other AI agents
            disagree with it. Here’s a small window into the experiment. Make a
            guess before you peek.
          </p>
        </div>
        <div className="lab-workspace">
          <div className="lab-setup">
            <span className="lab-pencil-note">
              let’s see what a hint can do
            </span>
            <h3>What happens when the hint is wrong?</h3>
            <p>
              One model answered the same {study.items} Python code questions in
              three conditions. The peer statements were written into the
              prompt; they weren’t replies from live agents.
            </p>
            <ol className="lab-conditions">
              {study.conditions.map((condition, index) => (
                <li key={condition.label}>
                  <span aria-hidden="true">0{index + 1}</span>
                  <div>
                    <strong>{condition.label}</strong>
                    <p>{conditionNotes[index]}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="lab-baseline">
              Without a misleading hint, it got{" "}
              <strong>
                {study.conditions[0].correct} of {study.items}
              </strong>{" "}
              right.
            </p>
            <Link className="text-link" to="/projects/agent-behavior-lab">
              Explore the full experiment <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="lab-notebook">
            <div className="demo-header">
              <span className="eyebrow">YOUR PREDICTION</span>
              <span className="demo-label">
                Recorded experiment · 48 questions
              </span>
            </div>
            <label className="lab-question" htmlFor="lab-prediction">
              How many would it get right with the named-peer cue?
            </label>
            <div className="lab-prediction-value">
              <output htmlFor="lab-prediction">{prediction}</output>
              <span>out of {study.items} questions</span>
            </div>
            <input
              id="lab-prediction"
              type="range"
              min="0"
              max={study.items}
              step="1"
              value={prediction}
              disabled={revealed}
              aria-valuetext={`${prediction} of ${study.items} correct`}
              onChange={(event) => setPrediction(Number(event.target.value))}
            />
            <div className="lab-range-ends" aria-hidden="true">
              <span>None correct</span>
              <span>All correct</span>
            </div>
            <button
              className={`button ${revealed ? "secondary" : "primary"}`}
              type="button"
              aria-controls="lab-results"
              aria-expanded={revealed}
              onClick={() => {
                setRevealed(!revealed);
                if (revealed) setPrediction(24);
              }}
            >
              {revealed ? "Try another prediction" : "Let’s see what happened"}
              <span aria-hidden="true">{revealed ? "↺" : "↓"}</span>
            </button>
            <div id="lab-results" hidden={!revealed}>
              <p className="lab-reveal" role="status">
                {revealed
                  ? `Your guess: ${prediction} of ${study.items}. The observed result: ${peers} of ${study.items} correct.`
                  : ""}
              </p>
              <div
                className="lab-bars"
                aria-label="Observed accuracy in each condition"
              >
                {study.conditions.map((condition, index) => (
                  <div
                    className={`lab-bar-row ${index === 2 ? "lab-bar-peers" : ""}`}
                    key={condition.label}
                  >
                    <div>
                      <span>{condition.label}</span>
                      <strong>
                        {condition.correct}/{study.items} ·{" "}
                        {((condition.correct / study.items) * 100).toFixed(1)}%
                      </strong>
                    </div>
                    <div className="lab-bar-track" aria-hidden="true">
                      <span
                        style={{
                          width: `${(condition.correct / study.items) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="lab-finding">
                Accuracy was{" "}
                <strong>{difference} percentage points lower</strong> with named
                peers than with repetition alone. That’s the comparison the
                study was designed to test.
              </p>
              <details className="lab-details">
                <summary>
                  Follow the same 48 questions <span aria-hidden="true">+</span>
                </summary>
                <p>
                  Comparing repetition with named peers, question by question:
                </p>
                <dl className="lab-pairs">
                  <div>
                    <dt>Correct in both</dt>
                    <dd>{study.paired.bothCorrect}</dd>
                  </div>
                  <div>
                    <dt>Correct → wrong</dt>
                    <dd>{study.paired.correctToWrong}</dd>
                  </div>
                  <div>
                    <dt>Wrong → correct</dt>
                    <dd>{study.paired.wrongToCorrect}</dd>
                  </div>
                  <div>
                    <dt>Wrong in both</dt>
                    <dd>{study.paired.bothWrong}</dd>
                  </div>
                </dl>
                <p>
                  These are paired outcomes across conditions, not answers
                  changing during one conversation.
                </p>
              </details>
              <p className="lab-scope">
                This result covers one model and one kind of code question. It
                doesn’t establish human-like conformity or tell us how other
                models would behave.
              </p>
            </div>
            <details className="lab-details lab-method">
              <summary>
                Open the research notebook <span aria-hidden="true">+</span>
              </summary>
              <p>
                The 48 held-out questions, primary comparison, and analysis
                rules were frozen before the run. Python execution supplied the
                correct answers. Answer order was balanced, and no items were
                excluded.
              </p>
              <p>
                The peer and repetition prompts also differed in wording and
                length, so this test doesn’t isolate which part of the wording
                caused the difference.
              </p>
              <p>
                <strong>Model:</strong> {study.model}
                <br />
                <strong>Run:</strong> {study.runDate}
              </p>
              <a href={study.source} target="_blank" rel="noreferrer">
                Read the published report ↗
              </a>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
