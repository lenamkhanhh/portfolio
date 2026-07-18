export interface SearchableProject {
  title: string;
  detail: string;
  focus: string;
}

export function filterProjects<T extends SearchableProject>(projects: readonly T[], query: string): T[] {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  if (!normalizedQuery) {
    return [...projects];
  }

  return projects.filter((project) =>
    [project.title, project.detail, project.focus]
      .join(" ")
      .toLocaleLowerCase()
      .includes(normalizedQuery),
  );
}
