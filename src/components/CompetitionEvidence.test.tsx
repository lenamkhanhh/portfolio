import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { CompetitionEvidence } from "./CompetitionEvidence";

describe("CompetitionEvidence", () => {
  it("uses the shared indexed sidebar with a university-specific label and period", () => {
    const markup = renderToStaticMarkup(<CompetitionEvidence />);

    expect(markup).toContain('class="section-label competition-section-label"');
    expect(markup).toContain("University competition record");
    expect(markup).toContain("2026");
    expect(markup).not.toContain(">Competition evidence<");
  });
});
