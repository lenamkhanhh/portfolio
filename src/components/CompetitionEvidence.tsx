import { useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { aiChallengeEvidence, currentCompetitionEvidence } from "../content";
import { photoReveal, sectionReveal, sectionRevealGroup } from "../motion";

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

const aiGallery = [
  {
    src: aiChallengeEvidence.coverSrc,
    label: "Team Backdrop",
    caption: "Official Vòng Chung Kết backdrop at Nhà Văn Hóa Thanh Niên TP.HCM.",
    alt: "Team Reply 404 in front of official AI Challenge 2026 finals backdrop",
  },
  {
    src: aiChallengeEvidence.stageSrc,
    label: "On-Stage · Reply 404",
    caption: "Team Reply 404 on stage during the competition holding table card.",
    alt: "Team Reply 404 on stage holding table card",
  },
  {
    src: aiChallengeEvidence.certSrc,
    label: "Certificate & Badge",
    caption: "Official Certificate and Contestant Badge of Le Nam Khanh.",
    alt: "Official AI Challenge 2026 certificate and badge of Le Nam Khanh",
  },
] as const;

export function CompetitionEvidence() {
  const reduce = useReducedMotion();
  const [galleryIdx, setGalleryIdx] = useState(0);
  const activePhoto = aiGallery[galleryIdx];

  return (
    <motion.section
      className="competition-section"
      id="competition"
      aria-labelledby="competition-title"
      variants={reduce ? undefined : sectionRevealGroup}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
    >
      <motion.div variants={reduce ? undefined : sectionReveal} className="section-label competition-section-label">
        <span>03</span>
        <div>
          <p>University competition record</p>
          <time>2026</time>
        </div>
      </motion.div>

      <motion.div variants={reduce ? undefined : sectionRevealGroup} className="competition-story">
        <motion.div variants={reduce ? undefined : sectionReveal} className="competition-copy">
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
        </motion.div>

        <motion.figure variants={reduce ? undefined : photoReveal} className="competition-hero-figure">
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
        </motion.figure>

        <div className="competition-supporting" aria-label="Competition photographs">
          {supportingImages.map((image, index) => (
            <motion.figure variants={reduce ? undefined : photoReveal} key={image.src}>
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
            </motion.figure>
          ))}
        </div>

        {/* AI Challenge 2026 - Interactive Split Dossier & Gallery */}
        <motion.article variants={reduce ? undefined : photoReveal} className="ai-challenge-dossier-card">
          <div className="ai-dossier-col">
            <div className="ai-dossier-kicker-row">
              <span className="ai-kicker-tag">MAJOR CITY & UNIVERSITY RECORD</span>
              <span className="ai-kicker-year">2026</span>
            </div>

            <h3 className="ai-dossier-title">{aiChallengeEvidence.event}</h3>
            <div className="ai-dossier-result-badge">{aiChallengeEvidence.result}</div>

            <p className="ai-dossier-team">
              Team <b>{aiChallengeEvidence.team}</b> · {aiChallengeEvidence.focus}
            </p>

            <div className="ai-dossier-paper">
              <span className="paper-label">SOICT 2026 FULL PAPER · FIRST AUTHOR</span>
              <p>
                An interactive multimodal video search system combining dual visual-text embeddings with a
                dynamic programming temporal alignment engine (GEMTRA DP).
              </p>
            </div>

            <dl className="ai-dossier-metrics">
              <div>
                <dt>Scale</dt>
                <dd>1,487 Videos · 533K Keyframes</dd>
              </div>
              <div>
                <dt>Alignment Engine</dt>
                <dd>GEMTRA DP (sub-7ms latency)</dd>
              </div>
              <div>
                <dt>Encoders & API</dt>
                <dd>SigLIP2 · ViT-B/16 · DRES</dd>
              </div>
            </dl>

            <div className="ai-dossier-actions">
              <a className="ai-action-btn primary" href={aiChallengeEvidence.href} target="_blank" rel="noreferrer">
                <span>View system repository & paper</span>
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="ai-action-btn secondary" href={aiChallengeEvidence.certSrc} target="_blank" rel="noreferrer">
                <span>View certificate & badge</span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="ai-gallery-col">
            <div className="ai-gallery-frame">
              <img
                key={activePhoto.src}
                className="ai-gallery-photo"
                src={activePhoto.src}
                alt={activePhoto.alt}
                decoding="async"
              />
              <span className="photo-index" aria-hidden="true">EVIDENCE 04</span>
            </div>
            <div className="ai-gallery-bar">
              <figcaption className="ai-gallery-caption">
                <span>Field note / Finals</span>
                <p>{activePhoto.caption}</p>
              </figcaption>
              <div className="ai-gallery-switcher" role="tablist" aria-label="Evidence switcher">
                {aiGallery.map((item, idx) => (
                  <button
                    key={item.label}
                    type="button"
                    className={galleryIdx === idx ? "ai-switcher-tab active" : "ai-switcher-tab"}
                    onClick={() => setGalleryIdx(idx)}
                    role="tab"
                    aria-selected={galleryIdx === idx}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.article>

        {/* GDGoC AI Challenge Record */}
        <motion.article variants={reduce ? undefined : photoReveal} className="gdoc-dossier-card">
          <div className="gdoc-card-kicker">
            <span>ADDITIONAL UNIVERSITY RECORD · 2026</span>
            <span className="photo-index-inline">EVIDENCE 05</span>
          </div>
          <div className="gdoc-card-content">
            <div className="gdoc-card-copy">
              <h3>{currentCompetitionEvidence.event}</h3>
              <p className="gdoc-card-result">{currentCompetitionEvidence.result}</p>
              <small>Team {currentCompetitionEvidence.team} · {currentCompetitionEvidence.approach}</small>
            </div>
            <a className="gdoc-card-btn" href={currentCompetitionEvidence.href} target="_blank" rel="noreferrer">
              <span>View certificate evidence</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </motion.article>
      </motion.div>
    </motion.section>
  );
}
