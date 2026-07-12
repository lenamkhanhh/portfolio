import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { PreUniversityRecord } from "./PreUniversityRecord";

describe("PreUniversityRecord", () => {
  it("renders the archive as a photo-free results ledger without a reserved side label", () => {
    const markup = renderToStaticMarkup(<PreUniversityRecord />);

    expect(markup).toContain("foundation-archive-section");
    expect(markup).toContain("foundation-record-ledger");
    expect(markup).not.toContain("foundation-photo-diptych");
    expect(markup).not.toContain('class="section-label"');
  });
});
