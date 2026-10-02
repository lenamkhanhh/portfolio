import { useState, type KeyboardEvent } from "react";
import {
  ArrowUpRight,
  Code,
  GraduationCap,
  SealCheck,
  Sparkle,
  TerminalWindow,
  Trophy,
  UsersThree,
} from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { aiChallengeEvidence, currentCompetitionEvidence, ktcIdeathonEvidence } from "../content";
import { photoReveal, sectionReveal, sectionRevealGroup } from "../motion";

const supportingImages = [
  {
    src: "/assets/achievement/competition-focus-enhanced.webp",
    alt: "Le Nam Khanh concentrating at a computer during HCMUS Coding Challenge 2026",
    label: "Live contest · Algorithm formulation & implementation",
    tag: "Contest Terminal",
    className: "competition-photo competition-photo-focus",
  },
  {
    src: "/assets/achievement/competition-stage-enhanced.webp",
    alt: "Le Nam Khanh solving a problem on stage at HCMUS Coding Challenge 2026",
    label: "Live stage · Real-time solving & scoreboard tracking",
    tag: "Live Solving Stage",
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

  const handleGalleryKeyDown = (e: KeyboardEvent, idx: number) => {
    let nextIdx: number;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      nextIdx = (idx + 1) % aiGallery.length;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      nextIdx = (idx - 1 + aiGallery.length) % aiGallery.length;
    } else if (e.key === "Home") {
      nextIdx = 0;
    } else if (e.key === "End") {
      nextIdx = aiGallery.length - 1;
    } else {
      return;
    }
    e.preventDefault();
    setGalleryIdx(nextIdx);
    const nextBtn = document.getElementById(`ai-gallery-tab-${nextIdx}`);
    nextBtn?.focus();
  };

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
        {/* Record 01: HCMUS Coding Challenge 2026 */}
        <motion.article variants={reduce ? undefined : photoReveal} className="competition-record-card coding-challenge-spotlight-card">
          <div className="record-header-bar">
            <div className="record-badge">
              <span className="record-badge-num">RECORD 01</span>
              <span className="record-badge-sep">/</span>
              <span className="record-badge-type">UNIVERSITY COMPETITION</span>
            </div>
            <span className="record-year-tag">2026</span>
          </div>

          <div className="coding-challenge-grid">
            <div className="competition-header-block">
              <div className="coding-challenge-kicker-row">
                <p className="competition-kicker">FIT — HCMUS · ANNUAL COMPETITIVE PROGRAMMING</p>
              </div>
              <h2 id="competition-title">HCMUS Coding Challenge <span>2026</span></h2>

              <div className="competition-champion-card">
                <div className="champion-badge-icon">
                  <Trophy size={24} weight="fill" aria-hidden="true" />
                </div>
                <div className="champion-badge-body">
                  <span className="champion-award-title">First Place Champion · Rank 1</span>
                  <p className="champion-award-subtitle">Faculty of Information Technology · HCMUS, VNU-HCM</p>
                </div>
              </div>

              <p className="competition-intro">
                Ranked 1st overall solving algorithmic problems under strict real-time and correctness constraints.
              </p>
            </div>

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
                <span className="photo-glass-pill" aria-hidden="true">
                  <Trophy size={12} weight="fill" />
                  <span>Champion Ceremony</span>
                </span>
              </div>
              <figcaption>
                <span>Award Presentation / HCMUS</span>
                <p>First Place Champion award board in front of the Faculty of Information Technology, HCMUS.</p>
              </figcaption>
            </motion.figure>

            <div className="competition-metrics-grid" aria-label="Competition specifications">
              <div className="comp-metric-card">
                <div className="comp-metric-header">
                  <Trophy size={14} className="metric-icon gold" aria-hidden="true" />
                  <span>Standing</span>
                </div>
                <strong>Rank 1 · Champion</strong>
              </div>
              <div className="comp-metric-card">
                <div className="comp-metric-header">
                  <GraduationCap size={14} className="metric-icon blue" aria-hidden="true" />
                  <span>Host</span>
                </div>
                <strong>FIT — HCMUS</strong>
              </div>
              <div className="comp-metric-card">
                <div className="comp-metric-header">
                  <Code size={14} className="metric-icon emerald" aria-hidden="true" />
                  <span>Domain</span>
                </div>
                <strong>Algorithms & DS</strong>
              </div>
              <div className="comp-metric-card">
                <div className="comp-metric-header">
                  <TerminalWindow size={14} className="metric-icon purple" aria-hidden="true" />
                  <span>Format</span>
                </div>
                <strong>Speed & Precision</strong>
              </div>
            </div>

            <dl className="sr-only competition-facts">
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

          <div className="competition-supporting" aria-label="Competition photographs">
            {supportingImages.map((image, index) => (
              <motion.figure variants={reduce ? undefined : photoReveal} key={image.src}>
                <div className="competition-image-frame">
                  <img
                    className={image.className}
                    src={image.src}
                    alt={image.alt}
                    width="1280"
                    height="720"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="photo-glass-pill" aria-hidden="true">
                    {index === 0 ? <TerminalWindow size={12} /> : <UsersThree size={12} />}
                    <span>{image.tag}</span>
                  </span>
                </div>
                <figcaption>{image.label}</figcaption>
              </motion.figure>
            ))}
          </div>
        </motion.article>

        {/* Record 02: AI Challenge 2026 - Interactive Split Dossier & Gallery */}
        <motion.article variants={reduce ? undefined : photoReveal} className="competition-record-card ai-challenge-dossier-card">
          <div className="record-header-bar">
            <div className="record-badge">
              <span className="record-badge-num">RECORD 02</span>
              <span className="record-badge-sep">/</span>
              <span className="record-badge-type">HCMC MUNICIPAL COMPETITION</span>
            </div>
            <span className="record-year-tag">2026</span>
          </div>

          <div className="ai-dossier-split">
            <div className="ai-dossier-col">
              <div className="ai-dossier-kicker-row">
                <span className="ai-kicker-tag">TEAM LEAD · MULTIMODAL VIDEO RETRIEVAL</span>
              </div>

              <h3 className="ai-dossier-title">{aiChallengeEvidence.event}</h3>
              <div className="ai-dossier-result-badge">{aiChallengeEvidence.result}</div>

              <p className="ai-dossier-team">
                <b>Team Lead & Core Architect</b> · Team <b>Reply 404</b> · {aiChallengeEvidence.focus}
              </p>

              <div className="ai-dossier-paper">
                <span className="paper-label">SOICT 2026 FULL PAPER · FIRST AUTHOR</span>
                <p>
                  Interactive multimodal video search engine combining visual-text embeddings with GEMTRA dynamic programming temporal alignment.
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
              <div
                className="ai-gallery-frame"
                id="ai-gallery-panel"
                role="tabpanel"
                aria-labelledby={`ai-gallery-tab-${galleryIdx}`}
                tabIndex={0}
              >
                <img
                  key={activePhoto.src}
                  className="ai-gallery-photo"
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  width="1200"
                  height="800"
                  loading="lazy"
                  decoding="async"
                />
                <span className="photo-glass-pill" aria-hidden="true">
                  <Sparkle size={12} weight="fill" />
                  <span>Finals Evidence</span>
                </span>
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
                      onKeyDown={(e) => handleGalleryKeyDown(e, idx)}
                      role="tab"
                      id={`ai-gallery-tab-${idx}`}
                      aria-selected={galleryIdx === idx}
                      aria-controls="ai-gallery-panel"
                      tabIndex={galleryIdx === idx ? 0 : -1}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Record 03: K-Tech College Ideathon 2026 - Hackathon Spotlight Card */}
        <motion.article variants={reduce ? undefined : photoReveal} className="competition-record-card ktc-spotlight-card">
          <div className="record-header-bar">
            <div className="record-badge">
              <span className="record-badge-num">RECORD 03</span>
              <span className="record-badge-sep">/</span>
              <span className="record-badge-type">HACKATHON FINALIST</span>
            </div>
            <span className="record-year-tag">2026</span>
          </div>

          <div className="ktc-spotlight-media">
            <div className="ktc-spotlight-frame">
              <img
                className="ktc-spotlight-img"
                src={ktcIdeathonEvidence.stageSrc}
                alt="KTC Ideathon 2026 finals stage group photo with official backdrop and organizers"
                width="1280"
                height="720"
                loading="lazy"
                decoding="async"
              />
              <span className="photo-glass-pill" aria-hidden="true">
                <UsersThree size={12} weight="bold" />
                <span>Finals Delegation</span>
              </span>
            </div>

            <div className="ktc-media-bar">
              <div className="ktc-caption-col">
                <span className="ktc-caption-kicker">May Matching Week · Cobi Work</span>
                <p>Finals at Cobi Work: Contestants, organizers and judging panel from LIKELION, KOSME, and JOBKOREA.</p>
              </div>
            </div>
          </div>

          <div className="ktc-spotlight-body">
            <div className="ktc-body-main">
              <div className="ktc-body-kicker-row">
                <span className="ktc-kicker-tag">LIKELION & KOSME · 2026</span>
              </div>

              <h3 className="ktc-spotlight-title">{ktcIdeathonEvidence.event}</h3>
              <div className="ktc-result-pill">{ktcIdeathonEvidence.result}</div>

              <p className="ktc-team-line">
                Team <b>HrClaw</b> · {ktcIdeathonEvidence.team}
              </p>

              <div className="ktc-project-desc-box">
                <span className="ktc-desc-label">PROJECT · HRCLAW RECRUITMENT AGENT</span>
                <p>
                  AI recruiting copilot that parses resumes, scores candidate-job fit via multi-criteria embeddings, and generates structured interview questions.
                </p>
              </div>
            </div>

            <div className="ktc-body-side">
              <dl className="ktc-specs-list">
                <div>
                  <dt>Hackathon Track</dt>
                  <dd>Idea: Solve with AI</dd>
                </div>
                <div>
                  <dt>Technology Stack</dt>
                  <dd>Gemini 2.0 Flash · Next.js · MongoDB</dd>
                </div>
                <div>
                  <dt>Organizers & Host</dt>
                  <dd>LIKELION · KOSME · JOBKOREA</dd>
                </div>
              </dl>

              <div className="ktc-action-buttons">
                <a className="ai-action-btn primary" href={ktcIdeathonEvidence.href} target="_blank" rel="noreferrer">
                  <span>View HrClaw repository</span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
                <a className="ai-action-btn secondary" href={ktcIdeathonEvidence.reelHref} target="_blank" rel="noreferrer">
                  <span>Watch official recap video</span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Record 04: GDGoC AI Challenge Record - Cyber Cover Card */}
        <motion.article variants={reduce ? undefined : photoReveal} className="competition-record-card competition-current-proof gdgoc-proof-card">
          <div className="record-header-bar record-header-bar-cyber">
            <div className="record-badge">
              <span className="record-badge-num">RECORD 04</span>
              <span className="record-badge-sep">/</span>
              <span className="record-badge-type">UNIVERSITY AI CHALLENGE</span>
            </div>
            <span className="record-year-tag">2026</span>
          </div>

          <div className="gdgoc-inner-wrap">
            <img
              className="ai-challenge-cover"
              src={currentCompetitionEvidence.coverSrc}
              alt="GDGoC AI Challenge 2026 futuristic cover artwork"
              width="1200"
              height="630"
              loading="lazy"
              decoding="async"
            />
            <div className="ai-challenge-overlay">
              <div className="gdgoc-kicker-row">
                <span className="gdgoc-kicker">GDG ON CAMPUS · 2026</span>
                <span className="photo-glass-pill-inline" aria-hidden="true">
                  <SealCheck size={12} weight="fill" />
                  <span>Top 20 Verified</span>
                </span>
              </div>
              <span className="gdgoc-event-name">{currentCompetitionEvidence.event}</span>
              <h3 className="gdgoc-result">{currentCompetitionEvidence.result}</h3>
              <p className="gdgoc-team-info">Team <b>{currentCompetitionEvidence.team}</b> · {currentCompetitionEvidence.approach} approach</p>
              <a className="gdgoc-action-btn" href={currentCompetitionEvidence.href} target="_blank" rel="noreferrer">
                <span>View certificate folder</span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.article>
      </motion.div>
    </motion.section>
  );
}
