import {
  preUniversityAchievements,
  preUniversityArchivePeriod,
} from "../content";
import { Certificate, Medal, TrendUp, Trophy } from "@phosphor-icons/react";
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
                {[
                  { achievement: grade10, grade: "Grade 10", year: "2022", medal: "bronze" as const, rank: "Provincial HSG" },
                  { achievement: grade11, grade: "Grade 11", year: "2023", medal: "bronze" as const, rank: "Provincial HSG" },
                  { achievement: grade12, grade: "Grade 12", year: "2024", medal: "silver" as const, rank: "Provincial HSG · Rank Up", progressed: true },
                ].map(({ achievement, grade, year, medal, rank, progressed }) => (
                  <li key={achievement.context} className={`foundation-year-item medal-${medal}`}>
                    <div className="foundation-year-top">
                      <span className="foundation-year-grade">{grade}</span>
                      <span className={`foundation-medal-pill ${medal}`}>
                        <Medal size={14} aria-hidden="true" />
                        <small>{year}</small>
                      </span>
                    </div>
                    <strong>{achievement.award}</strong>
                    <span className="foundation-year-rank">
                      {rank}
                      {progressed && <TrendUp size={13} aria-hidden="true" className="rank-up-icon" />}
                    </span>
                  </li>
                ))}
              </ol>
            </motion.article>

            <motion.article variants={reduce ? undefined : sectionReveal} className="foundation-timeline-node foundation-feature">
              <span className="foundation-timeline-marker" aria-hidden="true" />
              <span className="foundation-stage-index">02</span>
              <div className="foundation-stage-copy">
                <div className="foundation-feature-kicker-row">
                  <span className="foundation-trophy-badge">
                    <Trophy size={14} aria-hidden="true" />
                    <span>Regional Champion</span>
                  </span>
                  <p>The 30th National Young Informatics Contest · 2024</p>
                </div>
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
                <div className="foundation-distinction-card">
                  <div className="distinction-badge-row">
                    <span className="distinction-tag national">
                      <Certificate size={15} aria-hidden="true" />
                      <span>National Finals</span>
                    </span>
                  </div>
                  <strong>{nationalFinal.award}</strong>
                  <p>The 30th National Young Informatics Contest · National Finals</p>
                </div>
                <div className="foundation-distinction-card">
                  <div className="distinction-badge-row">
                    <span className="distinction-tag olympic">
                      <Medal size={15} aria-hidden="true" />
                      <span>Olympic 30/4</span>
                    </span>
                  </div>
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
