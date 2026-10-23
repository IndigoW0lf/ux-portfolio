import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";
import { projects } from "./data/projects";

beforeEach(() => {
  window.history.replaceState(null, "", "/#/");
  window.scrollTo = jest.fn();
});

test("shows engineering work and filters the collection by technology and area", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Useful software.",
  );
  const collection = document.getElementById("collection");
  fireEvent.click(
    within(collection).getByRole("button", { name: "Data & APIs" }),
  );
  fireEvent.change(screen.getByRole("searchbox"), {
    target: { value: "Flask" },
  });
  expect(
    within(collection).getByRole("heading", { name: /Nest Quest/ }),
  ).toBeInTheDocument();
  expect(
    within(collection).queryByRole("heading", { name: /Lunara Ritual/ }),
  ).not.toBeInTheDocument();
  fireEvent.change(screen.getByRole("searchbox"), {
    target: { value: "no-such-tech" },
  });
  expect(
    screen.getByText("No projects match that combination."),
  ).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Show all work" }));
  expect(within(collection).getByRole("status")).toHaveTextContent(
    `${projects.length} projects`,
  );
});

test("review gate changes the demo output while drafts stay private", () => {
  render(<App />);
  expect(
    screen.getByText("1 of 3 records reach the public collection."),
  ).toBeInTheDocument();
  fireEvent.click(
    screen.getByRole("checkbox", { name: "Require editorial review" }),
  );
  expect(
    screen.getByText("2 of 3 records reach the public collection."),
  ).toBeInTheDocument();
  expect(screen.getByText(/Draft stays private/)).toBeInTheDocument();
});

test("every project has a unique route, complete overview, and no placeholder link", () => {
  expect(new Set(projects.map((p) => p.slug)).size).toBe(projects.length);
  for (const project of projects) {
    expect(project.approach).toBeTruthy();
    expect(project.outcome).toBeTruthy();
    expect(project.stack.length).toBeGreaterThan(0);
    for (const url of [project.live, project.source].filter(Boolean)) {
      expect(new URL(url).protocol).toBe("https:");
    }
  }
});
