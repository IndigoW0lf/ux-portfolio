import React from "react";
import { Link } from "react-router-dom";
import { Link as HashLink } from "react-router-dom";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link className="wordmark" to="/" aria-label="Kai Indigo Wolf, home">
          <span className="monogram">
            k<span>i</span>w.
          </span>
          <span>
            Kai Indigo Wolf
            <span className="wordmark-role">SOFTWARE ENGINEER</span>
          </span>
        </Link>
        <nav aria-label="Main navigation">
          <HashLink to="/#work">Work</HashLink>
          <HashLink to="/#tiny-lab">Tiny lab</HashLink>
          <HashLink to="/#about">About</HashLink>
          <HashLink className="nav-contact" to="/#contact">
            Let’s talk <span aria-hidden="true">↗</span>
          </HashLink>
        </nav>
      </div>
    </header>
  );
}
