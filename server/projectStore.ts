import { randomUUID } from "node:crypto";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

export type ProjectDraft = Omit<Project, "id">;
export type ProjectUpdate = Partial<ProjectDraft>;

export interface ProjectFilters {
  q?: string;
  technology?: string;
}

export interface ProjectStore {
  list(filters?: ProjectFilters): Project[];
  findById(id: string): Project | undefined;
  create(draft: ProjectDraft): Project;
  replace(id: string, draft: ProjectDraft): Project | undefined;
  update(id: string, update: ProjectUpdate): Project | undefined;
  delete(id: string): boolean;
}

function cloneProject(project: Project): Project {
  return { ...project, technologies: [...project.technologies] };
}

export function createProjectStore(seed: readonly Project[] = []): ProjectStore {
  let projects = seed.map(cloneProject);

  return {
    list(filters = {}) {
      const query = filters.q?.trim().toLocaleLowerCase();
      const technology = filters.technology?.trim().toLocaleLowerCase();

      return projects
        .filter((project) => {
          const matchesQuery =
            !query ||
            [project.title, project.description, ...project.technologies]
              .join(" ")
              .toLocaleLowerCase()
              .includes(query);
          const matchesTechnology =
            !technology ||
            project.technologies.some((item) => item.toLocaleLowerCase() === technology);
          return matchesQuery && matchesTechnology;
        })
        .map(cloneProject);
    },
    findById(id) {
      const project = projects.find((item) => item.id === id);
      return project ? cloneProject(project) : undefined;
    },
    create(draft) {
      const project = { id: randomUUID(), ...draft, technologies: [...draft.technologies] };
      projects = [...projects, project];
      return cloneProject(project);
    },
    replace(id, draft) {
      const index = projects.findIndex((item) => item.id === id);
      if (index < 0) return undefined;
      const project = { id, ...draft, technologies: [...draft.technologies] };
      projects = projects.map((item, itemIndex) => (itemIndex === index ? project : item));
      return cloneProject(project);
    },
    update(id, update) {
      const project = projects.find((item) => item.id === id);
      if (!project) return undefined;
      const updated = {
        ...project,
        ...update,
        technologies: update.technologies ? [...update.technologies] : project.technologies,
      };
      projects = projects.map((item) => (item.id === id ? updated : item));
      return cloneProject(updated);
    },
    delete(id) {
      const nextProjects = projects.filter((item) => item.id !== id);
      const deleted = nextProjects.length !== projects.length;
      projects = nextProjects;
      return deleted;
    },
  };
}
