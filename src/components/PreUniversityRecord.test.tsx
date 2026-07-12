import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { PreUniversityRecord } from "./PreUniversityRecord";

describe("PreUniversityRecord", () => {
  it("renders the archive as a dense evidence spread with a clearly dated university bridge", () => {
    const markup = renderToStaticMarkup(<PreUniversityRecord />);

    expect(markup).toContain("foundation-archive-section");
    expect(markup).toContain("foundation-record-ledger");
    expect(markup).not.toContain("foundation-photo-diptych");
    expect(markup).toContain("foundation-bridge-figure");
    expect(markup).toContain("/assets/achievement/competition-stage-enhanced.webp");
    expect(markup).toContain("HCMUS Coding Challenge · 2026");
    expect(markup).not.toContain('class="section-label"');
  });
});
