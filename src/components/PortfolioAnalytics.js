import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { useLocation } from "react-router-dom";

export default function PortfolioAnalytics() {
  const { pathname } = useLocation();
  const hostname = window.location.hostname;
  const hostedOnVercel =
    hostname === "indigowolf.tech" ||
    hostname === "www.indigowolf.tech" ||
    hostname.endsWith(".vercel.app");

  // GitHub Pages and local builds do not serve Vercel's analytics endpoint.
  if (!hostedOnVercel) return null;

  // HashRouter paths need to be supplied explicitly to record each case study.
  return <Analytics route={pathname} path={pathname} />;
}
