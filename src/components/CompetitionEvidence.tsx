import { ArrowUpRight } from "@phosphor-icons/react";
import { currentCompetitionEvidence } from "../content";

const supportingImages = [
  {
    src: "/assets/achievement/competition-focus-enhanced.webp",
    alt: "Le Nam Khanh concentrating at a computer during HCMUS Coding Challenge 2026",
    label: "During the competition",
    className: "competition-photo competition-photo-focus",
  },
  {
    src: "/assets/achievement/competition-stage-enhanced.webp",
    alt: "Le Nam Khanh solving a problem on stage at HCMUS Coding Challenge 2026",
    label: "On-stage problem solving",
    className: "competition-photo competition-photo-stage",
  },
] as const;

export function CompetitionEvidence() {
  return (
    <section className="competition-section" id="competition" aria-labelledby="competition-title">
      <div className="section-label">
        <span>03</span>
        <p>Competition evidence</p>
      </div>

      <div className="competition-story">
        <div className="competition-copy">
          <p className="competition-kicker">University competition record</p>
          <h2 id="competition-title">HCMUS Coding Challenge <span>2026</span></h2>
          <p className="competition-result">Champion.</p>
          <p className="competition-intro">
            Competitive programming is where I practise turning mathematical ideas into correct,
            efficient implementations under time constraints. This result records one step in that
            continuing practice.
          </p>
          <dl className="competition-facts">
            <div>
              <dt>Result</dt>
              <dd>Champion</dd>
            </div>
            <div>
              <dt>Setting</dt>
              <dd>University competition</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Algorithms · problem solving</dd>
            </div>
          </dl>
        </div>

        <figure className="competition-hero-figure">
          <div className="competition-image-frame">
            <img
              className="competition-photo competition-photo-champion"
              src="/assets/achievement/champion-enhanced.webp"
              alt="Le Nam Khanh holding the HCMUS Coding Challenge 2026 champion board in front of HCMUS"
              width="1024"
              height="1024"
              decoding="async"
            />
            <span className="photo-index" aria-hidden="true">EVIDENCE 01</span>
          </div>
          <figcaption>
            <span>Field note / HCMUS</span>
            <p>The award, participant, and university context remain visible in one frame.</p>
          </figcaption>
        </figure>

        <div className="competition-supporting" aria-label="Competition photographs">
          {supportingImages.map((image, index) => (
            <figure key={image.src}>
              <div className="competition-image-frame">
                <img
                  className={image.className}
                  src={image.src}
                  alt={image.alt}
                  decoding="async"
                />
                <span className="photo-index" aria-hidden="true">EVIDENCE 0{index + 2}</span>
              </div>
              <figcaption>{image.label}</figcaption>
            </figure>
          ))}
        </div>

        <article className="competition-current-proof">
          <img className="ai-challenge-cover" src={currentCompetitionEvidence.coverSrc} alt="GDGoC AI Challenge 2026 cover artwork" />
          <div className="ai-challenge-overlay">
            <p>Additional university record · 2026</p>
            <span>GDGoC AI Challenge 2026</span>
            <h3>{currentCompetitionEvidence.result}</h3>
            <small>Team {currentCompetitionEvidence.team} · {currentCompetitionEvidence.approach}</small>
            <a href={currentCompetitionEvidence.href} target="_blank" rel="noreferrer">
              View certificate evidence
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
