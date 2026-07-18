import { describe, expect, it } from "vitest";
import { filterProjects } from "./projectFilters";

const projects = [
  { title: "Portfolio", detail: "React interface", focus: "ReactJS · TypeScript" },
  { title: "API Lab", detail: "REST backend", focus: "NodeJS · Express" },
];

describe("filterProjects", () => {
  it("returns every project for an empty query", () => {
    expect(filterProjects(projects, "")).toHaveLength(2);
  });

  it("matches title, description, and technology without case sensitivity", () => {
    expect(filterProjects(projects, "portfolio")).toEqual([projects[0]]);
    expect(filterProjects(projects, "EXPRESS")).toEqual([projects[1]]);
    expect(filterProjects(projects, "interface")).toEqual([projects[0]]);
  });

  it("returns no projects when nothing matches", () => {
    expect(filterProjects(projects, "python")).toEqual([]);
  });
});
