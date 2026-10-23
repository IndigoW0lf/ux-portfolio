import React, { useState } from "react";
import { Link } from "react-router-dom";
import { categories, filterProjects } from "../data/projects";

export default function WorkCollection() {
  const [category, setCategory] = useState("All work");
  const [query, setQuery] = useState("");
  const visible = filterProjects(category, query);
  return (
    <section id="collection" className="collection section-pad">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE WIDER EXPLORATION</p>
            <h2>
              A curious engineer’s
              <br />
              <em>working collection.</em>
            </h2>
          </div>
          <p>
            Products, prototypes, scripts, and experiments. Different tools,
            different problems, and plenty learned along the way.
          </p>
        </div>
        <div className="collection-tools">
          <div
            className="filters"
            role="group"
            aria-label="Filter projects by area"
          >
            {categories.map((name) => (
              <button
                key={name}
                type="button"
                aria-pressed={category === name}
                onClick={() => setCategory(name)}
              >
                {name}
              </button>
            ))}
          </div>
          <div className="search-wrap">
            <label className="sr-only" htmlFor="project-search">
              Search projects or technologies
            </label>
            <input
              id="project-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a project or technology…"
            />
          </div>
        </div>
        <p className="result-count" role="status">
          {visible.length} {visible.length === 1 ? "project" : "projects"}
          {category !== "All work" ? ` in ${category}` : ""}
        </p>
        <div className="project-list">
          {visible.map((project, index) => (
            <article className="project-row" key={project.slug}>
              <span className="row-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="row-copy">
                <span className="row-area">{project.eyebrow}</span>
                <h3>
                  <Link to={`/projects/${project.slug}`}>
                    {project.title}
                    <span aria-hidden="true"> ↗</span>
                  </Link>
                </h3>
                <p>{project.summary}</p>
              </div>
              <div className="row-meta">
                <span className="status">{project.status}</span>
                <p>{project.stack.slice(0, 3).join(" / ")}</p>
              </div>
            </article>
          ))}
        </div>
        {visible.length === 0 ? (
          <div className="empty-state">
            <h3>No projects match that combination.</h3>
            <p>Try another technology or return to the whole collection.</p>
            <button
              className="button secondary"
              type="button"
              onClick={() => {
                setCategory("All work");
                setQuery("");
              }}
            >
              Show all work
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
