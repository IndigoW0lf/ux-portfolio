import React from "react";
import { Link } from "react-router-dom";
import { Link as HashLink } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectVisual from "./ProjectVisual";
import WorkCollection from "./WorkCollection";
import EngineeringDemo from "./EngineeringDemo";
import CuriosityNotes from "./CuriosityNotes";

export default function HomePage() {
  const resumeUrl = `${process.env.PUBLIC_URL || ""}/resume/Kai-Indigo-Wolf-Resume.pdf`;
  return (
    <>
      <section className="hero shell" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="availability-dot" /> SOFTWARE ENGINEER · BUILDER ·
            CURIOUS HUMAN
          </p>
          <h1>
            Useful software.
            <br />
            <em>Thoughtfully built.</em>
          </h1>
          <p className="hero-description">
            I’m Kai. I build web applications and tools that make complicated
            things a little easier to work with, from family learning and
            publishing to the data and AI questions I’m curious about.
          </p>
          <div className="hero-actions">
            <HashLink className="button primary" to="/#work">
              Explore my work <span aria-hidden="true">↓</span>
            </HashLink>
            <a
              className="text-link"
              href="https://github.com/IndigoW0lf"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a
              className="text-link"
              href={resumeUrl}
              download="Kai-Indigo-Wolf-Resume.pdf"
            >
              Résumé <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-context">
            <span>Currently</span>
            <strong>Software Engineer at Pantheon</strong>
            <span className="context-divider" />
            <strong>Building at Lunara LLC</strong>
          </div>
        </div>
        <CuriosityNotes />
      </section>
      <div className="stack-strip">
        <div className="shell">
          <span>TOOLS I WORK WITH</span>
          <p>
            React <i> / </i> TypeScript <i> / </i> Next.js <i> / </i> Python{" "}
            <i> / </i> APIs <i> / </i> Data & AI
          </p>
        </div>
      </div>
      <section id="work" className="featured shell section-pad">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SELECTED WORK / 01—04</p>
            <h2>
              Built around
              <br />
              <em>real questions.</em>
            </h2>
          </div>
          <p>
            A closer look at the products and experiments that bring together my
            engineering, design, and psychology interests.
          </p>
        </div>
        <div className="featured-grid">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <article className="featured-card" key={project.slug}>
                <Link
                  to={`/projects/${project.slug}`}
                  className="visual-link"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <ProjectVisual project={project} />
                </Link>
                <div className="featured-card-body">
                  <div className="card-meta">
                    <span>
                      0{i + 1} / {project.eyebrow}
                    </span>
                    <span className="status">{project.status}</span>
                  </div>
                  <h3>
                    <Link to={`/projects/${project.slug}`}>
                      {project.title}
                      <span aria-hidden="true">↗</span>
                    </Link>
                  </h3>
                  <p>{project.summary}</p>
                  <ul className="tech-tags" aria-label="Technologies">
                    {project.stack.slice(0, 4).map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <Link className="case-link" to={`/projects/${project.slug}`}>
                    Explore the build{" "}
                    <span className="sr-only">for {project.title}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
        </div>
        <HashLink className="collection-jump text-link" to="/#collection">
          Explore the full collection <span aria-hidden="true">↓</span>
        </HashLink>
      </section>
      <section id="approach" className="approach section-pad">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">HOW I THINK ABOUT THE BUILD</p>
              <h2>
                The interface is
                <br />
                <em>only the beginning.</em>
              </h2>
            </div>
            <p>
              I like understanding what sits underneath a good experience: the
              model, the boundaries, the failure states, and the people using
              it.
            </p>
          </div>
          <div className="approach-grid">
            <div className="principles">
              <article>
                <span>01 / MODEL THE PROBLEM</span>
                <h3>Give the information a shape.</h3>
                <p>
                  Typed curriculum records, connected news stories, and shared
                  lesson models make complex content easier to maintain and use.
                </p>
                <Link to="/projects/lunara-publishing">
                  See the publishing system →
                </Link>
              </article>
              <article>
                <span>02 / DESIGN THE BOUNDARIES</span>
                <h3>Make the rules explicit.</h3>
                <p>
                  Family authorization, AI quotas, and publication checks belong
                  in the system, with clear behavior when a request should not
                  proceed.
                </p>
                <Link to="/projects/lunara-quest">See Lunara Quest →</Link>
              </article>
              <article>
                <span>03 / CHECK WHAT YOU CLAIM</span>
                <h3>Evidence before confidence.</h3>
                <p>
                  Automated checks, controlled comparisons, and honest
                  limitations help distinguish what works from what I hope will
                  work.
                </p>
                <Link to="/projects/agent-behavior-lab">
                  See the research tooling →
                </Link>
              </article>
            </div>
            <EngineeringDemo />
          </div>
        </div>
      </section>
      <WorkCollection />
      <section id="about" className="about-section section-pad">
        <div className="shell about-grid">
          <div>
            <p className="eyebrow">A LITTLE CONTEXT</p>
            <h2>
              Engineering,
              <br />
              with people
              <br />
              <em>in the picture.</em>
            </h2>
            <span className="about-mark" aria-hidden="true">
              kiw.
            </span>
          </div>
          <div className="about-copy">
            <p className="lead">
              I’m a software engineer at Pantheon and the founder of Lunara LLC.
              Alongside my frontend work, I build products around the questions
              and everyday problems that keep catching my attention.
            </p>
            <p>
              My UX background still shapes how I work. I care about readable
              interfaces, understandable instructions, and what happens when
              someone gets stuck. Studying psychology and homeschooling have
              given me plenty of reasons to question whether an experience
              actually works for the person using it.
            </p>
            <p>
              Outside my day job, I build learning tools, publishing systems,
              and small experiments that let me follow a question into
              unfamiliar territory. Sometimes that means a Python script.
              Sometimes it means a full application.
            </p>
            <div className="experience">
              <article>
                <div>
                  <h3>Pantheon</h3>
                  <span>2025—present</span>
                </div>
                <p>Software Engineer · Frontend</p>
                <small>
                  React, TypeScript, Apollo, authentication, routing, and
                  automated testing.
                </small>
                <small className="experience-highlight">
                  Led the Unified Notifications Hub: People’s Choice, 1st Place,
                  and Overall, 2nd Place, at the 2026 Pantheon Hackathon.
                </small>
              </article>
              <article>
                <div>
                  <h3>Lunara LLC</h3>
                  <span>Independent work</span>
                </div>
                <p>Founder & Product Builder</p>
                <small>
                  Product direction, full-stack development, learning resources,
                  publishing, and day-to-day operations.
                </small>
              </article>
            </div>
            <p className="development-note">
              AI tools are part of how I build. I make the product decisions,
              review the code, test the behavior, and take responsibility for
              what ships.
            </p>
          </div>
        </div>
      </section>
      <section id="contact" className="contact-section">
        <div className="shell contact-inner">
          <p className="eyebrow">LET’S MAKE SOMETHING USEFUL</p>
          <h2>
            Have a problem
            <br />
            <em>worth thinking through?</em>
          </h2>
          <a className="button primary" href="mailto:kai.indigo.wolf@gmail.com">
            Say hello <span aria-hidden="true">↗</span>
          </a>
          <a className="contact-email" href="mailto:kai.indigo.wolf@gmail.com">
            kai.indigo.wolf@gmail.com
          </a>
          <nav className="contact-links" aria-label="Contact and résumé links">
            <a
              href="https://github.com/IndigoW0lf"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/indigowolf"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a href={resumeUrl} download="Kai-Indigo-Wolf-Resume.pdf">
              Download résumé (PDF) ↓
            </a>
          </nav>
        </div>
      </section>
    </>
  );
}
