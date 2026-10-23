import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ProjectPage from "./components/ProjectPage";
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

test("screenshot selection updates the image and resets when opening another project", () => {
  render(
    <MemoryRouter initialEntries={["/projects/the-lunara-edit"]}>
      <Routes>
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
    </MemoryRouter>,
  );
  fireEvent.click(
    screen.getByRole("button", { name: /Searchable resource catalog/ }),
  );
  expect(screen.getByRole("img")).toHaveAttribute(
    "alt",
    expect.stringContaining("shop with a search field"),
  );
  expect(
    screen.getByRole("button", { name: /Searchable resource catalog/ }),
  ).toHaveAttribute("aria-pressed", "true");
  expect(
    screen.getByRole("link", {
      name: /Open full-size Searchable resource catalog screenshot/,
    }),
  ).toHaveAttribute("target", "_blank");
  fireEvent.click(screen.getByRole("link", { name: /The World, Clearly/ }));
  expect(
    screen.getByRole("button", { name: /One story, four reading modes/ }),
  ).toHaveAttribute("aria-pressed", "true");
  expect(screen.getByRole("img")).toHaveAttribute(
    "alt",
    expect.stringContaining("overview showing First Look"),
  );
});

test("research figures are labeled as figures and retain a report source", () => {
  render(
    <MemoryRouter initialEntries={["/projects/agent-behavior-lab"]}>
      <Routes>
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
    </MemoryRouter>,
  );
  expect(
    screen.getByRole("group", { name: "Choose a figure" }),
  ).toBeInTheDocument();
  expect(screen.getByRole("img")).toHaveAttribute(
    "alt",
    expect.stringContaining("43 of 48"),
  );
  fireEvent.click(
    screen.getByRole("button", { name: /Paired answer changes/ }),
  );
  expect(screen.getByRole("img")).toHaveAttribute(
    "alt",
    expect.stringContaining("20 correct-to-wrong"),
  );
  expect(
    screen.getByRole("link", { name: /Source: published confirmatory report/ }),
  ).toHaveAttribute(
    "href",
    "https://github.com/IndigoW0lf/agent-behavior-lab/blob/main/results/study-001-confirmatory.md",
  );
  expect(
    screen.getByRole("link", {
      name: /Open full-size Paired answer changes figure/,
    }),
  ).toHaveAttribute("target", "_blank");
});

test("field notes preview on hover or focus and link directly to their projects", () => {
  render(<App />);
  const notes = screen.getByRole("complementary", {
    name: "A few threads from my work",
  });
  const question = within(notes).getByRole("link", {
    name: /why did the answer change/i,
  });
  fireEvent.mouseEnter(question);
  expect(question).toHaveAttribute("href", "#/projects/agent-behavior-lab");
  expect(
    within(notes).getByRole("link", {
      name: "Agent Behavior Lab",
      exact: true,
    }),
  ).toHaveAttribute("href", "#/projects/agent-behavior-lab");
  const learning = within(notes).getByRole("link", {
    name: /Could this feel more like an adventure/i,
  });
  fireEvent.focus(learning);
  expect(learning).toHaveAttribute("href", "#/projects/lunara-quest");
  expect(
    within(notes).getByRole("link", { name: "Lunara Quest", exact: true }),
  ).toHaveAttribute("href", "#/projects/lunara-quest");
  expect(
    within(notes).getByRole("link", {
      name: /Can I make this a little easier/i,
    }),
  ).toHaveAttribute("href", "#/projects/the-lunara-edit");
  fireEvent.click(question);
  expect(
    screen.getByRole("heading", { level: 1, name: "Agent Behavior Lab" }),
  ).toBeInTheDocument();
});
