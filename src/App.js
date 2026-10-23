import React, { useEffect, useRef } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import HomePage from "./components/HomePage";
import ProjectPage from "./components/ProjectPage";
import PortfolioAnalytics from "./components/PortfolioAnalytics";
import { projects } from "./data/projects";
import "./App.css";

function RouteEffects() {
  const { pathname, hash } = useLocation();
  const previousPath = useRef(null);
  useEffect(() => {
    const project = projects.find((p) => pathname === `/projects/${p.slug}`);
    document.title = project
      ? `${project.title} | Kai Indigo Wolf`
      : "Kai Indigo Wolf | Software Engineer";
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
      if (previousPath.current !== null && previousPath.current !== pathname) {
        document.getElementById("main-content")?.focus({ preventScroll: true });
      }
    }
    previousPath.current = pathname;
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <RouteEffects />
      <PortfolioAnalytics />
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("main-content")?.focus();
        }}
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="*" element={<ProjectPage />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <div className="shell footer-inner">
          <span>© {new Date().getFullYear()} Kai Indigo Wolf</span>
          <span>Built with React. Always a work in progress.</span>
          <div>
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
          </div>
        </div>
      </footer>
    </HashRouter>
  );
}
