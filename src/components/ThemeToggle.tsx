import { Moon, Sun } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { resolveInitialTheme, type Theme } from "../course/theme";

const storageKey = "portfolio-theme";

function initialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  return resolveInitialTheme(
    window.localStorage.getItem(storageKey),
    window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false,
  );
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(storageKey, theme);
  }, [theme]);

  const nextTheme: Theme = theme === "light" ? "dark" : "light";

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={`Switch to ${nextTheme} mode`}
      onClick={() => setTheme(nextTheme)}
    >
      {theme === "light" ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
      <span>{theme === "light" ? "Dark" : "Light"}</span>
    </button>
  );
}
