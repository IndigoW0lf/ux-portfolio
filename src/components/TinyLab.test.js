import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TinyLab from "./TinyLab";
import study from "../data/agent-behavior-results.json";

test("three distinct prediction rounds hide future answers and preserve guesses for the comparison", () => {
  render(
    <MemoryRouter>
      <TinyLab />
    </MemoryRouter>,
  );
  const setup = document.querySelector(".lab-setup");
  expect(setup).not.toHaveTextContent(/43|29|10 of 48/);
  expect(screen.queryByText(/named.peer cue/i)).not.toBeInTheDocument();
  const titles = [
    "First, how did it do on its own?",
    "What if a wrong answer keeps coming up?",
    "What if three other AIs seem to agree?",
  ];
  const predictions = [40, 30, 20];
  for (let index = 0; index < 3; index++) {
    expect(screen.getByRole("heading", { name: titles[index] })).toBeVisible();
    expect(
      screen.getByText(`YOUR PREDICTION / ROUND ${index + 1} OF 3`),
    ).toBeVisible();
    expect(document.getElementById("lab-results")).not.toBeInTheDocument();
    expect(
      screen.queryByText(/It got \d+ of 48 right/),
    ).not.toBeInTheDocument();
    const slider = screen.getByRole("slider");
    expect(slider).toBeEnabled();
    fireEvent.change(slider, { target: { value: String(predictions[index]) } });
    fireEvent.click(screen.getByRole("button", { name: "Reveal this result" }));
    expect(slider).toBeDisabled();
    expect(
      within(document.getElementById("lab-round-result")).getByRole("status"),
    ).toHaveTextContent(
      `Your guess: ${predictions[index]} of 48. It got ${study.conditions[index].correct} of 48 right`,
    );
    expect(
      screen.queryByRole("button", { name: /Start the three rounds again/ }),
    ).not.toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", {
        name: index < 2 ? /Next:/ : /Compare all three results/,
      }),
    );
  }
  expect(screen.queryByRole("slider")).not.toBeInTheDocument();
  const results = document.getElementById("lab-results");
  for (let index = 0; index < 3; index++) {
    expect(
      within(results).getByText(`You guessed ${predictions[index]} of 48.`),
    ).toBeVisible();
    expect(
      within(results).getByText(
        `${study.conditions[index].correct}/48 · ${((study.conditions[index].correct / 48) * 100).toFixed(1)}%`,
      ),
    ).toBeVisible();
  }
  expect(screen.getByText("19 fewer questions right")).toBeVisible();
  expect(
    screen.getByRole("link", { name: /published report/, hidden: true }),
  ).toHaveAttribute("href", study.source);
  fireEvent.click(
    screen.getByRole("button", { name: "Start the three rounds again" }),
  );
  expect(screen.getByRole("heading", { name: titles[0] })).toBeVisible();
  expect(screen.getByRole("slider")).toHaveValue("24");
  expect(document.getElementById("lab-results")).not.toBeInTheDocument();
  expect(screen.queryByText(/It got \d+ of 48 right/)).not.toBeInTheDocument();
});

test("paired outcomes reconcile with each reported condition and sample size", () => {
  const { bothCorrect, correctToWrong, wrongToCorrect, bothWrong } =
    study.paired;
  expect(bothCorrect + correctToWrong + wrongToCorrect + bothWrong).toBe(
    study.items,
  );
  expect(bothCorrect + correctToWrong).toBe(study.conditions[1].correct);
  expect(bothCorrect + wrongToCorrect).toBe(study.conditions[2].correct);
});
