import {
  ArrowUpRight,
  Article,
  CheckCircle,
  DownloadSimple,
  Globe,
  Sparkle,
} from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { acceptedPublication, contact } from "../content";
import { photoReveal, sectionReveal, sectionRevealGroup } from "../motion";

export function PublicationSection() {
  const reduce = useReducedMotion();

  return (
    <motion.section
      className="publication-section"
      id="publications"
      aria-labelledby="publication-title"
      variants={reduce ? undefined : sectionRevealGroup}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
    >
      <motion.div variants={reduce ? undefined : sectionReveal} className="section-label publication-section-label">
        <span>01</span>
        <div>
          <p>Accepted Publication</p>
          <time>MMM 2027</time>
        </div>
      </motion.div>

      <motion.div variants={reduce ? undefined : sectionRevealGroup} className="publication-main">
        <motion.div variants={reduce ? undefined : sectionReveal} className="publication-header-block">
          <div className="publication-kicker-row">
            <span className="pub-kicker-tag">
              <Sparkle size={13} weight="fill" aria-hidden="true" />
              PEER-REVIEWED SCIENTIFIC RESEARCH
            </span>
          </div>
          <h2 id="publication-title">Publications & Accepted Research</h2>
          <p className="publication-intro">
            Accepted conference proceedings and multimodal video retrieval systems presented at premier international venues.
          </p>
        </motion.div>

        <motion.article variants={reduce ? undefined : photoReveal} className="publication-card">
          <div className="pub-card-topbar">
            <div className="pub-status-badges">
              <span className="pub-badge accepted">
                <CheckCircle size={14} weight="fill" aria-hidden="true" />
                <span>Accepted · Camera-Ready in Preparation</span>
              </span>
              <span className="pub-badge venue">
                <Article size={14} weight="bold" aria-hidden="true" />
                <span>Video Browser Showdown (VBS) @ MMM 2027</span>
              </span>
            </div>
            <div className="pub-paper-id">
              <span>{acceptedPublication.paperId}</span>
              <span className="pub-sep">/</span>
              <span>Springer LNCS</span>
            </div>
          </div>

          <div className="pub-card-body">
            <div className="pub-title-group">
              <h3 className="pub-paper-title">{acceptedPublication.title}</h3>
              <p className="pub-author-line">
                <strong>{acceptedPublication.author}</strong> · <span className="author-role">{acceptedPublication.authorRole}</span> · <span>Faculty of Information Technology, HCMUS</span>
              </p>
            </div>

            <div className="pub-venue-strip" aria-label="Publication specifications">
              <div className="pub-venue-item">
                <span className="pub-venue-label">Conference</span>
                <strong>{acceptedPublication.venue}</strong>
              </div>
              <div className="pub-venue-item">
                <span className="pub-venue-label">Special Track</span>
                <strong>{acceptedPublication.track}</strong>
              </div>
              <div className="pub-venue-item">
                <span className="pub-venue-label">Proceedings</span>
                <strong>{acceptedPublication.series}</strong>
              </div>
              <div className="pub-venue-item">
                <span className="pub-venue-label">Evaluation</span>
                <strong>{acceptedPublication.competition}</strong>
              </div>
            </div>

            <div className="pub-abstract-box">
              <span className="abstract-label">SYSTEM & METHOD OVERVIEW</span>
              <p>{acceptedPublication.abstract}</p>
            </div>

            <div className="pub-highlights-grid">
              {acceptedPublication.highlights.map((highlight, idx) => (
                <div key={idx} className="pub-highlight-item">
                  <span className="highlight-bullet" aria-hidden="true">0{idx + 1}</span>
                  <p>{highlight}</p>
                </div>
              ))}
            </div>

            <div className="pub-actions-row">
              <a
                className="pub-action-btn primary"
                href={acceptedPublication.href}
                target="_blank"
                rel="noreferrer"
              >
                <Globe size={16} aria-hidden="true" />
                <span>View System Repository & Paper Code</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <a
                className="pub-action-btn secondary"
                href={contact.cv.href}
                download
              >
                <DownloadSimple size={16} aria-hidden="true" />
                <span>Download Academic CV (PDF)</span>
              </a>
            </div>
          </div>
        </motion.article>
      </motion.div>
    </motion.section>
  );
}
