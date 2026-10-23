import React, { useState } from "react";
import { Link } from "react-router-dom";
import study from "../data/agent-behavior-results.json";

const rounds = [
  {
    label: "No hint",
    title: "First, how did it do on its own?",
    description:
      "The AI answered 48 code questions without being shown anyone else’s answer.",
    setup: "The model worked out an answer on its own.",
    explanation:
      "This gives us a starting point before adding a misleading hint.",
    next: "Next: a repeated wrong answer",
  },
  {
    label: "A repeated wrong answer",
    title: "What if a wrong answer keeps coming up?",
    description:
      "This time, the AI saw one wrong answer repeated three times before answering each question. The hint didn’t say who the answer came from.",
    setup:
      "One wrong answer appeared three times, without saying who had given it.",
    explanation:
      "It got fewer questions right than it did without a hint. Repetition alone mattered in this run.",
    next: "Next: answers from other AIs",
  },
  {
    label: "Other AI answers",
    title: "What if three other AIs seem to agree?",
    description:
      "The AI was told that three other AIs had all picked one answer. They all appeared to agree on the same wrong answer.",
    setup:
      "The wrong answer was presented as the answer chosen by three other AIs.",
    explanation:
      "It got fewer questions right again, even compared with the repeated wrong answer. This was the comparison the study was designed to test.",
    next: "Compare all three results",
  },
];

export default function TinyLab() {
  const [roundIndex, setRoundIndex] = useState(0);
  const [prediction, setPrediction] = useState(24);
  const [guesses, setGuesses] = useState([null, null, null]);
  const [complete, setComplete] = useState(false);
  const round = rounds[roundIndex];
  const result = study.conditions[roundIndex];
  const revealed = guesses[roundIndex] !== null;
  const fewerCorrect =
    study.conditions[1].correct - study.conditions[2].correct;

  function advance() {
    if (complete) {
      setRoundIndex(0);
      setPrediction(24);
      setGuesses([null, null, null]);
      setComplete(false);
    } else if (!revealed) {
      setGuesses(
        guesses.map((guess, index) =>
          index === roundIndex ? prediction : guess,
        ),
      );
    } else if (roundIndex < rounds.length - 1) {
      setRoundIndex(roundIndex + 1);
      setPrediction(24);
    } else {
      setComplete(true);
    }
  }

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
            I was curious how easily a misleading hint could throw off an AI’s
            answer. You’ll make three guesses, then see what happened in the
            recorded experiment.
          </p>
        </div>
        <div className="lab-workspace">
          <div className="lab-setup">
            <span className="lab-pencil-note">
              let’s see what a hint can do
            </span>
            <h3>Here’s how the experiment worked.</h3>
            <p>
              I gave one AI model 48 short questions about what a piece of
              Python code would do. Each question had a known correct answer, so
              I could check how often the model got it right.
            </p>
            <p className="lab-setup-context">
              I tested three versions of each question:
            </p>
            <ol className="lab-conditions">
              {rounds.map((item, index) => (
                <li key={item.label}>
                  <span aria-hidden="true">0{index + 1}</span>
                  <div>
                    <strong>{item.label}</strong>
                    <p>{item.setup}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="lab-setup-context">
              Those supposed “other AI answers” were written ahead of time, so I
              could control exactly what the model saw.
            </p>
            <p className="lab-instructions">
              Your turn: guess how many of the 48 questions it answered
              correctly in each version. Move the slider, reveal the result,
              then try the next round.
            </p>
            <Link className="text-link" to="/projects/agent-behavior-lab">
              Explore the full experiment <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="lab-notebook">
            <div className="demo-header">
              <span className="eyebrow">
                {complete
                  ? "THE RESULTS TOGETHER"
                  : `YOUR PREDICTION / ROUND ${roundIndex + 1} OF ${rounds.length}`}
              </span>
              <span className="demo-label">
                Recorded experiment · Study 001
              </span>
            </div>
            <ol className="lab-progress" aria-label="Prediction rounds">
              {rounds.map((item, index) => (
                <li
                  key={item.label}
                  aria-current={
                    !complete && index === roundIndex ? "step" : undefined
                  }
                  data-done={guesses[index] !== null}
                >
                  <span aria-hidden="true">{index + 1}</span>
                  {item.label}
                </li>
              ))}
            </ol>
            {!complete ? (
              <>
                <div
                  className="lab-round-context"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <h3 className="lab-question">{round.title}</h3>
                  <p id="lab-round-description">{round.description}</p>
                </div>
                <label className="lab-guess-label" htmlFor="lab-prediction">
                  How many of the {study.items} questions did it get right?
                </label>
                <div className="lab-prediction-value">
                  <output htmlFor="lab-prediction">{prediction}</output>
                  <span>your guess, out of {study.items}</span>
                </div>
                <input
                  id="lab-prediction"
                  type="range"
                  min="0"
                  max={study.items}
                  step="1"
                  value={prediction}
                  disabled={revealed}
                  aria-describedby="lab-round-description"
                  aria-valuetext={`${prediction} of ${study.items} correct`}
                  onChange={(event) =>
                    setPrediction(Number(event.target.value))
                  }
                />
                <div className="lab-range-ends" aria-hidden="true">
                  <span>None correct</span>
                  <span>All correct</span>
                </div>
                <div
                  id="lab-round-result"
                  className="lab-round-result"
                  hidden={!revealed}
                >
                  <p className="lab-reveal" role="status">
                    {revealed
                      ? `Your guess: ${guesses[roundIndex]} of ${study.items}. It got ${result.correct} of ${study.items} right (${((result.correct / study.items) * 100).toFixed(1)}%).`
                      : ""}
                  </p>
                  <p>{round.explanation}</p>
                </div>
              </>
            ) : (
              <div id="lab-results">
                <h3 className="lab-question">Here’s how the hints lined up.</h3>
                <p className="lab-summary-intro" role="status">
                  You’ve explored all three versions. These are the recorded
                  results for the 48 questions in each one.
                </p>
                <div
                  className="lab-bars"
                  aria-label="Recorded results and your predictions"
                >
                  {study.conditions.map((condition, index) => (
                    <div
                      className={`lab-bar-row ${index === 2 ? "lab-bar-peers" : ""}`}
                      key={condition.label}
                    >
                      <div>
                        <span>{rounds[index].label}</span>
                        <strong>
                          {condition.correct}/{study.items} ·{" "}
                          {((condition.correct / study.items) * 100).toFixed(1)}
                          %
                        </strong>
                      </div>
                      <div className="lab-bar-track" aria-hidden="true">
                        <span
                          style={{
                            width: `${(condition.correct / study.items) * 100}%`,
                          }}
                        />
                      </div>
                      <p className="lab-saved-guess">
                        You guessed {guesses[index]} of {study.items}.
                      </p>
                    </div>
                  ))}
                </div>
                <p className="lab-finding">
                  The model got{" "}
                  <strong>{fewerCorrect} fewer questions right</strong> when the
                  wrong answer was presented as coming from other AIs than when
                  it was simply repeated. Comparing those two versions helps us
                  look beyond repetition alone.
                </p>
                <details className="lab-details">
                  <summary>
                    Look at the questions side by side{" "}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>
                    For each question, I compared the answer with a repeated
                    wrong hint against the answer with the supposed AI
                    agreement:
                  </p>
                  <dl className="lab-pairs">
                    <div>
                      <dt>Right in both versions</dt>
                      <dd>{study.paired.bothCorrect}</dd>
                    </div>
                    <div>
                      <dt>Right with repetition; wrong with AI agreement</dt>
                      <dd>{study.paired.correctToWrong}</dd>
                    </div>
                    <div>
                      <dt>Wrong with repetition; right with AI agreement</dt>
                      <dd>{study.paired.wrongToCorrect}</dd>
                    </div>
                    <div>
                      <dt>Wrong in both versions</dt>
                      <dd>{study.paired.bothWrong}</dd>
                    </div>
                  </dl>
                  <p>
                    Each version was a separate test. These counts don’t
                    describe the model changing its answer during a
                    conversation.
                  </p>
                </details>
                <p className="lab-scope">
                  This result covers one model and one kind of code question. It
                  doesn’t establish human-like conformity or tell us how other
                  models would behave.
                </p>
              </div>
            )}
            <button className="button primary" type="button" onClick={advance}>
              {complete
                ? "Start the three rounds again"
                : revealed
                  ? round.next
                  : "Reveal this result"}
              <span aria-hidden="true">
                {complete ? "↺" : revealed ? "→" : "↓"}
              </span>
            </button>
            {complete ? (
              <details className="lab-details lab-method">
                <summary>
                  Open the research notebook <span aria-hidden="true">+</span>
                </summary>
                <p>
                  The 48 test questions, planned comparison, and analysis rules
                  were fixed before the run. Python execution supplied the
                  correct answers. The answer choices appeared in a balanced mix
                  of orders, and no questions were excluded.
                </p>
                <p>
                  The versions with repeated answers and supposed AI agreement
                  also differed in wording and length, so this test doesn’t
                  isolate which part of the hint mattered.
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
            ) : (
              <p className="lab-recorded-note">
                You’re exploring a completed study. Your guesses won’t change
                its results.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
