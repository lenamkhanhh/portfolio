import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { PublicationSection } from "./PublicationSection";

describe("PublicationSection", () => {
  it("renders the accepted VBS MMM 2027 paper card with full specifications", () => {
    const markup = renderToStaticMarkup(<PublicationSection />);

    expect(markup).toContain('class="publication-section"');
    expect(markup).toContain('id="publications"');
    expect(markup).toContain("Accepted Publication");
    expect(markup).toContain("MMM 2027");
    expect(markup).toContain("Reply 404 at VBS 2027: Interactive Video Retrieval with Temporal Alignment and Native DRES Integration");
    expect(markup).toContain("Paper #874");
    expect(markup).toContain("Sole Author");
    expect(markup).toContain("Springer LNCS");
    expect(markup).toContain("Video Browser Showdown (VBS) @ MMM 2027");
    expect(markup).not.toContain("SOICT");
  });
});
