import React from "react";

// These are architecture illustrations, not screenshots of private customer data.
export default function ProjectVisual({ project, compact = false }) {
  return (
    <div
      className={`project-visual visual-${project.visual} ${compact ? "visual-compact" : ""}`}
      aria-hidden="true"
    >
      <div className="visual-topline">
        <span>{project.eyebrow}</span>
        <span>↗</span>
      </div>
      {project.visual === "quest" ? (
        <div className="quest-scene">
          <div className="quest-moon">☾</div>
          <div className="quest-path">
            <span>PLAN</span>
            <i />
            <span>EXPLORE</span>
            <i />
            <span>REFLECT</span>
          </div>
          <div className="quest-note">
            <span>THE LEARNING LOOP</span>
            <strong>
              A little structure.
              <br />
              Room for discovery.
            </strong>
          </div>
        </div>
      ) : project.visual === "edit" ? (
        <div className="edit-scene">
          <span className="edit-kicker">THE LUNARA EDIT</span>
          <strong>
            Thoughtful tools
            <br />
            <em>for curious lives.</em>
          </strong>
          <div className="edit-shelves">
            <span>READ</span>
            <span>LEARN</span>
            <span>MAKE</span>
          </div>
        </div>
      ) : project.visual === "world" ? (
        <div className="world-scene">
          <strong>
            The World,
            <br />
            <em>Clearly.</em>
          </strong>
          <div className="reading-modes">
            <span>First Look</span>
            <span>Quick Read</span>
            <span>Full Story</span>
            <span>Deep Dive</span>
          </div>
          <p>ONE STORY. FOUR WAYS IN.</p>
        </div>
      ) : project.visual === "lab" ? (
        <div className="lab-scene">
          <span>EXPERIMENT / 001</span>
          <div className="lab-branches">
            <span>Same items</span>
            <div>
              <b>Repetition control</b>
              <b>Attributed peers</b>
            </div>
            <span>Paired comparison</span>
          </div>
          <p>Control the conditions. Question the result.</p>
        </div>
      ) : (
        <div className="generic-scene">
          <span>{project.stack[0]}</span>
          <strong>{project.title}</strong>
          <div>
            {project.stack.slice(1, 4).map((tech) => (
              <b key={tech}>{tech}</b>
            ))}
          </div>
        </div>
      )}
      <span className="visual-caption">
        {["edit", "world"].includes(project.visual)
          ? "Editorial concept"
          : "System sketch"}
      </span>
    </div>
  );
}
