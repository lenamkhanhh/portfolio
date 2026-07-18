import { describe, expect, it } from "vitest";
import { validateContact } from "./contactForm";

describe("validateContact", () => {
  it("requires every field and a valid email", () => {
    expect(validateContact({ name: "", email: "bad", message: "" })).toEqual({
      name: "Please enter your name.",
      email: "Please enter a valid email.",
      message: "Please enter a message.",
    });
  });

  it("accepts a complete contact message", () => {
    expect(
      validateContact({
        name: "Course reviewer",
        email: "reviewer@example.com",
        message: "Hello from the portfolio.",
      }),
    ).toEqual({});
  });
});
