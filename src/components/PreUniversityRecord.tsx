import {
  preUniversityAchievements,
  preUniversityArchivePeriod,
} from "../content";
import { motion, useReducedMotion } from "motion/react";
import { sectionReveal, sectionRevealGroup } from "../motion";

export function PreUniversityRecord() {
  const [grade10, grade11, grade12, regionalFirst, nationalFinal, aprilOlympiad] = preUniversityAchievements;
  const reduce = useReducedMotion();

  return (
    <motion.section
      className="foundation-section foundation-archive-section"
      aria-labelledby="foundation-title"
      variants={reduce ? undefined : sectionRevealGroup}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
    >
      <motion.div variants={reduce ? undefined : sectionReveal} className="section-label foundation-section-label">
        <span>02</span>
        <div>
          <p>Pre-university record</p>
          <time>{preUniversityArchivePeriod}</time>
        </div>
      </motion.div>

      <motion.div variants={reduce ? undefined : sectionRevealGroup} className="foundation-main">
        <motion.div variants={reduce ? undefined : sectionReveal} className="foundation-heading">
          <div>
            <p className="foundation-kicker">Informatics competition record</p>
            <h2 id="foundation-title">A record built before university.</h2>
          </div>
          <p>
            A four-year evidence ledger connected by one continuous competition trajectory.
          </p>
        </motion.div>

        <motion.div variants={reduce ? undefined : sectionReveal} className="foundation-archive">
          <div className="foundation-record-ledger foundation-timeline" aria-label="Pre-university competition trajectory">
            <motion.span
              className="foundation-timeline-progress"
              aria-hidden="true"
              initial={reduce ? { scaleY: 1 } : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: reduce ? 0 : 0.72, ease: "easeOut" }}
            />
            <motion.article variants={reduce ? undefined : sectionReveal} className="foundation-timeline-node foundation-progression">
              <span className="foundation-timeline-marker" aria-hidden="true" />
              <span className="foundation-stage-index">01</span>
              <div className="foundation-stage-copy">
                <h3>Three years of steady progression.</h3>
                <p>Provincial Excellent Student Selection Examination · Informatics</p>
              </div>
              <ol className="foundation-years">
                {[grade10, grade11, grade12].map((achievement) => (
                  <li key={achievement.context}>
                    <span>{achievement.context.replace("Informatics · ", "")}</span>
                    <strong>{achievement.award}</strong>
                  </li>
                ))}
              </ol>
            </motion.article>

            <motion.article variants={reduce ? undefined : sectionReveal} className="foundation-timeline-node foundation-feature">
              <span className="foundation-timeline-marker" aria-hidden="true" />
              <span className="foundation-stage-index">02</span>
              <div className="foundation-stage-copy">
                <p>The 30th National Young Informatics Contest · 2024</p>
                <h3 className="foundation-feature-award">{regionalFirst.award}</h3>
              </div>
              <div className="foundation-feature-detail">
                <strong>Central Region<br />Table C2</strong>
                {regionalFirst.href ? (
                  <a className="foundation-source" href={regionalFirst.href} target="_blank" rel="noreferrer">
                    Official announcement <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </div>
            </motion.article>

            <motion.article variants={reduce ? undefined : sectionReveal} className="foundation-timeline-node foundation-proof-stage">
              <span className="foundation-timeline-marker" aria-hidden="true" />
              <span className="foundation-stage-index">03—04</span>
              <div className="foundation-stage-copy">
                <h3>Two national distinctions.</h3>
                <p>Verified competition record · 2024</p>
              </div>
              <div className="foundation-proof-strip" aria-label="Additional verified distinctions">
                <div>
                  <strong>{nationalFinal.award}</strong>
                  <p>The 30th National Young Informatics Contest · National Finals</p>
                </div>
                <div>
                  <strong>{aprilOlympiad.award}</strong>
                  <p>The 28th Traditional April 30 Olympiad · Informatics</p>
                </div>
              </div>
            </motion.article>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
