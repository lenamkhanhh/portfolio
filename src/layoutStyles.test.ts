import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const styles = readFileSync("src/styles.css", "utf8");

describe("portfolio layout styles", () => {
  it("keeps the sticky header outside any clipped scroll ancestor", () => {
    const shellRule = styles.match(/\.portfolio-shell\s*{([^}]*)}/)?.[1] ?? "";
    const headerRule = styles.match(/\.site-header\s*{([^}]*)}/)?.[1] ?? "";

    expect(shellRule).not.toMatch(/overflow:\s*(?:clip|hidden|auto|scroll)/);
    expect(headerRule).toMatch(/position:\s*sticky/);
    expect(headerRule).toMatch(/top:\s*0/);
  });
});
