import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TinyLab from "./TinyLab";
import study from "../data/agent-behavior-results.json";

test("prediction is revealed against fixed study data and can be reset", () => {
  render(
    <MemoryRouter>
      <TinyLab />
    </MemoryRouter>,
  );
  const slider = screen.getByRole("slider");
  expect(screen.queryByText(/The observed result:/)).not.toBeInTheDocument();
  fireEvent.change(slider, { target: { value: "40" } });
  fireEvent.click(screen.getByRole("button", { name: /see what happened/ }));
  expect(slider).toBeDisabled();
  expect(
    screen.getByText(
      /Your guess: 40 of 48. The observed result: 10 of 48 correct./,
    ),
  ).toBeVisible();
  expect(screen.getByText(/39.6 percentage points lower/)).toBeVisible();
  const results = document.getElementById("lab-results");
  for (const condition of study.conditions) {
    expect(
      within(results).getByText(
        `${condition.correct}/${study.items} · ${((condition.correct / study.items) * 100).toFixed(1)}%`,
      ),
    ).toBeVisible();
  }
  fireEvent.click(
    screen.getByRole("button", { name: /Try another prediction/ }),
  );
  expect(slider).toBeEnabled();
  expect(slider).toHaveValue("24");
  expect(results).not.toBeVisible();
  expect(
    screen.getByRole("link", { name: /published report/, hidden: true }),
  ).toHaveAttribute("href", study.source);
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
