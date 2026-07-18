import { describe, expect, it } from "vitest";
import { createProjectStore, type Project } from "./projectStore";

const project: Project = {
  id: "one",
  title: "Portfolio",
  description: "React evidence",
  image: "/portfolio.png",
  technologies: ["ReactJS", "TypeScript"],
  link: "https://example.com/portfolio",
};

describe("project store", () => {
  it("filters, clones, finds, replaces, and deletes without leaking mutable state", () => {
    const store = createProjectStore([project]);
    expect(store.list()).toHaveLength(1);
    expect(store.list({ q: "evidence", technology: "reactjs" })).toHaveLength(1);
    expect(store.list({ technology: "python" })).toEqual([]);

    const copy = store.findById("one");
    expect(copy).toEqual(project);
    copy!.technologies.push("Mutation");
    expect(store.findById("one")!.technologies).not.toContain("Mutation");

    expect(
      store.replace("one", { ...project, title: "Replaced", technologies: ["Express"] }),
    ).toMatchObject({ id: "one", title: "Replaced" });
    expect(store.replace("missing", project)).toBeUndefined();
    expect(store.update("missing", { title: "Missing" })).toBeUndefined();
    expect(store.delete("one")).toBe(true);
    expect(store.delete("one")).toBe(false);
  });

  it("creates and partially updates independent projects", () => {
    const store = createProjectStore();
    const created = store.create({ ...project, technologies: ["NodeJS"] });
    expect(created.id).toBeTruthy();
    expect(store.update(created.id, { title: "Updated" })).toMatchObject({
      title: "Updated",
      technologies: ["NodeJS"],
    });
  });
});
