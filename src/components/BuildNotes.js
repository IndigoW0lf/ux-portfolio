import React from "react";
import { Link } from "react-router-dom";
import { buildNotes } from "../data/build-notes";

export default function BuildNotes() {
  return (
    <section
      className="build-notes section-pad shell"
      id="build-notes"
      aria-labelledby="build-notes-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">NOTES FROM THE BUILD</p>
          <h2 id="build-notes-title">
            The bits I keep
            <br />
            <em>thinking about.</em>
          </h2>
        </div>
        <p>
          Some decisions deserve a little more room than a technology tag. Here
          are a few from projects I’m working on.
        </p>
      </div>
      <div className="build-notes-grid">
        {buildNotes.map((note, index) => (
          <article className="build-note" key={note.slug}>
            <div className="build-note-meta">
              <span className="eyebrow">
                0{index + 1} / {note.project}
              </span>
              <span aria-hidden="true">↳</span>
            </div>
            <span className="build-note-margin">{note.margin}</span>
            <h3>{note.title}</h3>
            <p>{note.preview}</p>
            <details>
              <summary>
                Read the note <span aria-hidden="true">+</span>
              </summary>
              <div className="build-note-body">
                <p>{note.body}</p>
                <p>{note.followUp}</p>
                <Link to={`/projects/${note.slug}`}>
                  {note.link} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </details>
          </article>
        ))}
      </div>
    </section>
  );
}
