export type Theme = "light" | "dark";

export function resolveInitialTheme(savedTheme: string | null, prefersDark: boolean): Theme {
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return prefersDark ? "dark" : "light";
}
