// @vitest-environment jsdom

import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { ContactForm } from "./ContactForm";
import { ThemeToggle } from "./ThemeToggle";

describe("course rubric interactions", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
  });

  it("persists dark mode in localStorage", () => {
    render(<ThemeToggle />);

    fireEvent.click(screen.getByRole("button", { name: "Switch to dark mode" }));

    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(localStorage.getItem("portfolio-theme")).toBe("dark");
  });

  it("validates and accepts the controlled contact form", () => {
    render(<ContactForm />);

    fireEvent.click(screen.getByRole("button", { name: "Send message" }));
    expect(screen.getByText("Please enter your name.")).toBeTruthy();

    fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Course reviewer" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "reviewer@example.com" } });
    fireEvent.change(screen.getByLabelText("Message"), { target: { value: "Great portfolio" } });
    fireEvent.click(screen.getByRole("button", { name: "Send message" }));

    expect(screen.getByRole("status").textContent).toContain("Thank you");
  });
});
