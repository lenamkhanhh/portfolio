import request from "supertest";
import { beforeEach, describe, expect, it } from "vitest";
import { createApp } from "./app";
import { createProjectStore } from "./projectStore";

const seed = [
  {
    id: "portfolio",
    title: "Portfolio",
    description: "Evidence-led React portfolio",
    image: "https://example.com/portfolio.png",
    technologies: ["ReactJS", "TypeScript"],
    link: "https://example.com/portfolio",
  },
  {
    id: "api-lab",
    title: "API Lab",
    description: "Node REST API",
    image: "https://example.com/api.png",
    technologies: ["NodeJS", "Express"],
    link: "https://example.com/api",
  },
];

describe("projects REST API", () => {
  let app: ReturnType<typeof createApp>;

  beforeEach(() => {
    app = createApp(createProjectStore(seed));
  });

  it("lists and filters projects with query parameters", async () => {
    const all = await request(app).get("/api/projects").expect(200);
    expect(all.body.data).toHaveLength(2);

    const filtered = await request(app).get("/api/projects?technology=reactjs&q=evidence").expect(200);
    expect(filtered.body.data).toEqual([expect.objectContaining({ id: "portfolio" })]);
  });

  it("creates, updates, and deletes a project", async () => {
    const created = await request(app)
      .post("/api/projects")
      .send({
        title: "Course Project",
        description: "Submission demo",
        image: "https://example.com/course.png",
        technologies: ["ReactJS"],
        link: "https://example.com/course",
      })
      .expect(201);

    const id = created.body.data.id;
    await request(app).patch(`/api/projects/${id}`).send({ title: "Updated Course Project" }).expect(200);
    await request(app).delete(`/api/projects/${id}`).expect(204);
    await request(app).get(`/api/projects/${id}`).expect(404);
  });

  it("rejects invalid input without exposing internals", async () => {
    const response = await request(app).post("/api/projects").send({ title: "" }).expect(400);
    expect(response.body).toEqual({ error: "Invalid project data" });
  });
});
