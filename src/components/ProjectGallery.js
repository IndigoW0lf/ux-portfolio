import React, { useState } from "react";

export default function ProjectGallery({ project }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const screenshot = project.screenshots[selectedIndex];

  return (
    <section
      className="project-gallery"
      aria-label={`${project.title} screenshots`}
    >
      <div className="gallery-heading">
        <p className="eyebrow">A LOOK INSIDE THE PRODUCT</p>
        <span>Captured October 2026</span>
      </div>
      <div
        className="gallery-controls"
        role="group"
        aria-label="Choose a screenshot"
      >
        {project.screenshots.map((item, index) => (
          <button
            key={item.src}
            type="button"
            aria-pressed={selectedIndex === index}
            aria-controls={`screenshot-${project.slug}`}
            onClick={() => setSelectedIndex(index)}
          >
            <span aria-hidden="true">0{index + 1}</span> {item.label}
          </button>
        ))}
      </div>
      <figure id={`screenshot-${project.slug}`}>
        <div className="screenshot-stage">
          <a
            href={screenshot.src}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open full-size ${screenshot.label} screenshot in a new tab`}
          >
            <img
              src={screenshot.src}
              alt={screenshot.alt}
              width={screenshot.width}
              height={screenshot.height}
            />
          </a>
        </div>
        <figcaption>
          <div
            className="gallery-caption"
            aria-live="polite"
            aria-atomic="true"
          >
            <h2>{screenshot.label}</h2>
            <p>{screenshot.caption}</p>
          </div>
          <a
            className="text-link"
            href={screenshot.src}
            target="_blank"
            rel="noreferrer"
          >
            Open full-size image ↗
          </a>
        </figcaption>
      </figure>
    </section>
  );
}
