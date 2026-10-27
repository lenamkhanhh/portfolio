import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import { ProjectEvidence } from "./ProjectEvidence";

describe("ProjectEvidence", () => {
  it("renders a 4-project tablist with accessible controls and key specifications", () => {
    const markup = renderToStaticMarkup(<ProjectEvidence />);

    expect(markup).toContain('class="section-label"');
    expect(markup).toContain("Featured projects");
    expect(markup).toContain('role="tablist"');
    expect(markup).toContain('aria-label="Featured projects"');
    expect(markup.match(/role="tab"/g)).toHaveLength(4);
    expect(markup).toContain('id="selected-project-detail"');
    expect(markup).toContain('role="tabpanel"');
    expect(markup).toContain("Technical highlights");
    expect(markup).toContain("Reply 404 Video Retrieval");
  });

  it("keeps mobile controls linked to unique inline regions", () => {
    vi.stubGlobal("window", {
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      matchMedia: () => ({ matches: true, addEventListener: vi.fn(), removeEventListener: vi.fn() }),
    });
    try {
      const markup = renderToStaticMarkup(<ProjectEvidence activeIndex={2} />);
      const controls = [...markup.matchAll(/aria-controls="([^"]+)"/g)].map((match) => match[1]);
      expect(controls).toHaveLength(4);
      expect(new Set(controls).size).toBe(4);
      for (const id of controls) expect(markup).toContain(`id="${id}"`);
      expect(markup.match(/aria-expanded="true"/g)).toHaveLength(1);
      expect(markup.match(/hidden=""/g)).toHaveLength(3);
      expect(markup).not.toContain('role="tablist"');
      expect(markup).toContain('aria-labelledby="project-tab-2"');
    } finally {
      vi.unstubAllGlobals();
    }
  });
});
