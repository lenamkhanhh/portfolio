import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
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
});
