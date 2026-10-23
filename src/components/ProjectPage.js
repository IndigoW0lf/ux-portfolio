import React from "react";
import { Link, useParams } from "react-router-dom";
import { Link as HashLink } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectVisual from "./ProjectVisual";
import ProjectGallery from "./ProjectGallery";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  if (!project)
    return (
      <section className="shell not-found">
        <p className="eyebrow">PAGE NOT FOUND</p>
        <h1>That project isn’t here.</h1>
        <p>The collection is a good place to start.</p>
        <HashLink className="button primary" to="/#collection">
          Browse projects →
        </HashLink>
      </section>
    );
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <article className="case-study">
      <div className="shell">
        <HashLink className="back-link" to="/#collection">
          ← All projects
        </HashLink>
        <header className="case-header">
          <p className="eyebrow">{project.eyebrow}</p>
          <h1>{project.title}</h1>
          <p className="case-summary">{project.summary}</p>
          <div className="case-actions">
            <span className="status">{project.status}</span>
            {project.live ? (
              <a
                className="text-link"
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                Visit website ↗
              </a>
            ) : null}
            {project.source ? (
              <a
                className="text-link"
                href={project.source}
                target="_blank"
                rel="noreferrer"
              >
                View source ↗
              </a>
            ) : (
              <span className="source-note">
                Private source / public overview
              </span>
            )}
          </div>
        </header>
        {project.screenshots ? (
          <ProjectGallery key={project.slug} project={project} />
        ) : project.illustration ? (
          <figure className="system-illustration">
            <img
              src={project.illustration.src}
              alt={project.illustration.alt}
              width={project.illustration.width}
              height={project.illustration.height}
            />
            <figcaption>
              <span className="eyebrow">IMPLEMENTATION SKETCH</span>
              <p>{project.illustration.caption}</p>
              <a
                className="text-link"
                href={project.illustration.src}
                target="_blank"
                rel="noreferrer"
              >
                Open full-size illustration ↗
              </a>
            </figcaption>
          </figure>
        ) : (
          <ProjectVisual project={project} />
        )}
        <div className="case-layout">
          <aside className="case-sidebar">
            <div>
              <p className="eyebrow">MY WORK</p>
              <p>{project.role || "Independent exploration & development"}</p>
            </div>
            <div>
              <p className="eyebrow">TOOLS & METHODS</p>
              <ul className="tech-tags">
                {project.stack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <nav aria-label="Case study sections">
              {project.problem ? (
                <HashLink to={`/projects/${slug}#problem`}>
                  The problem
                </HashLink>
              ) : null}
              <HashLink to={`/projects/${slug}#implementation`}>
                The implementation
              </HashLink>
              {project.decisions ? (
                <HashLink to={`/projects/${slug}#decisions`}>
                  {project.decisionsTitle || "Engineering decisions"}
                </HashLink>
              ) : null}
              <HashLink to={`/projects/${slug}#status`}>
                Where it stands
              </HashLink>
            </nav>
          </aside>
          <div className="case-content">
            {project.problem ? (
              <section id="problem">
                <p className="eyebrow">01 / THE PROBLEM</p>
                <h2>
                  What needed
                  <br />
                  <em>figuring out.</em>
                </h2>
                <p>{project.problem}</p>
              </section>
            ) : null}
            <section id="implementation">
              <p className="eyebrow">
                {project.problem ? "02" : "01"} / THE IMPLEMENTATION
              </p>
              <h2>How it comes together.</h2>
              <p>{project.approach}</p>
              {project.flow ? (
                <ol className="system-flow" aria-label="System flow">
                  {project.flow.map((step, i) => (
                    <li key={step}>
                      <span>0{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              ) : null}
            </section>
            {project.decisions ? (
              <section id="decisions">
                <p className="eyebrow">
                  03 /{" "}
                  {(
                    project.decisionsTitle || "Engineering decisions"
                  ).toUpperCase()}
                </p>
                <h2>Choices behind the experience.</h2>
                <div className="decisions">
                  {project.decisions.map(([title, text]) => (
                    <div key={title}>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}
            <section id="status">
              <p className="eyebrow">CURRENT STATE</p>
              <h2>Where it stands.</h2>
              <p>{project.outcome}</p>
              {project.nextStep ? (
                <div className="case-next-step">
                  <p className="eyebrow">
                    {project.status === "Earlier iteration" ||
                    project.slug === "homeschool-haven"
                      ? "PROJECT DIRECTION"
                      : "NEXT STEP"}
                  </p>
                  <p>{project.nextStep}</p>
                </div>
              ) : null}
              {project.limits ? (
                <div className="case-note">
                  <strong>Scope & limitations</strong>
                  <p>{project.limits}</p>
                </div>
              ) : null}
            </section>
          </div>
        </div>
        <div className="next-project">
          <span className="eyebrow">KEEP EXPLORING</span>
          <Link to={`/projects/${next.slug}`}>
            {next.title} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
