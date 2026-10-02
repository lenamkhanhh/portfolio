import {
  preUniversityAchievements,
  preUniversityArchivePeriod,
} from "../content";
import {
  ArrowUpRight,
  Certificate,
  GraduationCap,
  Medal,
  SealCheck,
  TrendUp,
  Trophy,
} from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { sectionReveal, sectionRevealGroup } from "../motion";

function YoungInformaticsLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="thtShieldGrad" x1="4" y1="4" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E40AF" />
          <stop offset="0.5" stopColor="#1D4ED8" />
          <stop offset="1" stopColor="#0284C7" />
        </linearGradient>
        <linearGradient id="thtStarGrad" x1="16" y1="12" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDE047" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="40" height="40" rx="10" fill="url(#thtShieldGrad)" />
      <rect x="2.5" y="2.5" width="39" height="39" rx="9.5" stroke="#60A5FA" strokeOpacity="0.45" strokeWidth="1" />
      <path d="M7 22H13M31 22H37M22 7V13M22 31V37" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" opacity="0.65" />
      <circle cx="7" cy="22" r="1.5" fill="#93C5FD" />
      <circle cx="37" cy="22" r="1.5" fill="#93C5FD" />
      <circle cx="22" cy="7" r="1.5" fill="#93C5FD" />
      <circle cx="22" cy="37" r="1.5" fill="#93C5FD" />
      <path
        d="M22 13L31 18.5V25.5L22 31L13 25.5V18.5L22 13Z"
        fill="#0F172A"
        fillOpacity="0.6"
        stroke="#38BDF8"
        strokeWidth="1.2"
      />
      <path
        d="M22 15L23.8 20.2H29.2L24.8 23.4L26.5 28.5L22 25.2L17.5 28.5L19.2 23.4L14.8 20.2H20.2L22 15Z"
        fill="url(#thtStarGrad)"
      />
      <rect x="14" y="29.5" width="16" height="6.5" rx="3.25" fill="#1E293B" stroke="#F59E0B" strokeWidth="0.8" />
      <text x="22" y="34.2" textAnchor="middle" fill="#FEF08A" fontSize="4.6" fontFamily="monospace" fontWeight="bold" letterSpacing="0.05em">
        THT·30
      </text>
    </svg>
  );
}

function YoungInformaticsWatermark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="110" cy="110" r="102" stroke="#1D4ED8" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />
      <circle cx="110" cy="110" r="80" stroke="#0284C7" strokeWidth="1.2" opacity="0.45" />
      <circle cx="110" cy="110" r="56" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.55" />
      <path
        d="M110 32L177.5 71V149L110 188L42.5 149V71L110 32Z"
        stroke="#2563EB"
        strokeWidth="1.2"
        opacity="0.4"
      />
      <path d="M110 8V32M110 188V212M8 110H32M188 110H212" stroke="#3B82F6" strokeWidth="1.5" opacity="0.5" />
      <path d="M38 38L56 56M164 164L182 182M38 182L56 164M164 56L182 38" stroke="#38BDF8" strokeWidth="1.2" opacity="0.4" />
      <path
        d="M110 65L118 96L149 104L118 112L110 143L102 112L71 104L102 96L110 65Z"
        fill="#1D4ED8"
        fillOpacity="0.08"
        stroke="#2563EB"
        strokeWidth="1.2"
        opacity="0.6"
      />
    </svg>
  );
}

function OlympicOlympiadLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="olympBaseGrad" x1="4" y1="4" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#064E3B" />
          <stop offset="0.6" stopColor="#047857" />
          <stop offset="1" stopColor="#0D9488" />
        </linearGradient>
        <linearGradient id="olympFlameGrad" x1="18" y1="8" x2="26" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBBF24" />
          <stop offset="0.5" stopColor="#F59E0B" />
          <stop offset="1" stopColor="#EA580C" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="40" height="40" rx="10" fill="url(#olympBaseGrad)" />
      <rect x="2.5" y="2.5" width="39" height="39" rx="9.5" stroke="#34D399" strokeOpacity="0.45" strokeWidth="1" />
      <path
        d="M13 18C12 21 12 26 15 29C17 31 19 32 22 32M31 18C32 21 32 26 29 29C27 31 25 32 22 32"
        stroke="#6EE7B7"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M12 19C14 18 16 19 16 21C14 21 12 21 12 19Z" fill="#A7F3D0" />
      <path d="M11 23C13 22 15 24 15 25C13 25 11 25 11 23Z" fill="#A7F3D0" />
      <path d="M32 19C30 18 28 19 28 21C30 21 32 21 32 19Z" fill="#A7F3D0" />
      <path d="M33 23C31 22 29 24 29 25C31 25 33 25 33 23Z" fill="#A7F3D0" />
      <path d="M20 22H24L23 28H21L20 22Z" fill="#D97706" stroke="#FEF3C7" strokeWidth="0.8" />
      <path d="M19 22H25C25 22 24.5 24 22 24C19.5 24 19 22 19 22Z" fill="#B45309" />
      <path
        d="M22 7C22 7 25 12 25 15C25 18 23 20 22 20C21 20 19 18 19 15C19 12 22 7 22 7Z"
        fill="url(#olympFlameGrad)"
      />
      <path
        d="M23 11C23 11 25 13.5 25 15.5C25 17 24 18 23 18C22 18 21 17 21 15.5C21 13.5 23 11 23 11Z"
        fill="#FEF08A"
        opacity="0.9"
      />
      <rect x="12.5" y="33" width="19" height="6.5" rx="3.25" fill="#064E3B" stroke="#34D399" strokeWidth="0.8" />
      <text x="22" y="37.8" textAnchor="middle" fill="#A7F3D0" fontSize="4.4" fontFamily="monospace" fontWeight="bold" letterSpacing="0.04em">
        30/4·XXVIII
      </text>
    </svg>
  );
}

function OlympicWatermark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="110" cy="110" r="102" stroke="#059669" strokeWidth="1" strokeDasharray="4 6" opacity="0.38" />
      <circle cx="110" cy="110" r="82" stroke="#047857" strokeWidth="1.2" opacity="0.45" />
      <circle cx="110" cy="110" r="62" stroke="#D97706" strokeWidth="0.9" strokeDasharray="3 4" opacity="0.5" />
      <path
        d="M60 90C50 115 55 145 75 165C95 185 125 185 145 165C165 145 170 115 160 90"
        stroke="#10B981"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <ellipse cx="56" cy="100" rx="9" ry="5" transform="rotate(-35 56 100)" fill="#10B981" fillOpacity="0.12" stroke="#059669" strokeWidth="1" opacity="0.6" />
      <ellipse cx="56" cy="125" rx="9" ry="5" transform="rotate(-15 56 125)" fill="#10B981" fillOpacity="0.12" stroke="#059669" strokeWidth="1" opacity="0.6" />
      <ellipse cx="68" cy="150" rx="9" ry="5" transform="rotate(20 68 150)" fill="#10B981" fillOpacity="0.12" stroke="#059669" strokeWidth="1" opacity="0.6" />
      <ellipse cx="164" cy="100" rx="9" ry="5" transform="rotate(35 164 100)" fill="#10B981" fillOpacity="0.12" stroke="#059669" strokeWidth="1" opacity="0.6" />
      <ellipse cx="164" cy="125" rx="9" ry="5" transform="rotate(15 164 125)" fill="#10B981" fillOpacity="0.12" stroke="#059669" strokeWidth="1" opacity="0.6" />
      <ellipse cx="152" cy="150" rx="9" ry="5" transform="rotate(-20 152 150)" fill="#10B981" fillOpacity="0.12" stroke="#059669" strokeWidth="1" opacity="0.6" />
      <path d="M102 125L118 125L114 175L106 175Z" fill="#D97706" fillOpacity="0.15" stroke="#B45309" strokeWidth="1.2" opacity="0.6" />
      <path
        d="M110 40C110 40 132 75 132 95C132 112 120 125 110 125C100 125 88 112 88 95C88 75 110 40 110 40Z"
        fill="#F59E0B"
        fillOpacity="0.12"
        stroke="#D97706"
        strokeWidth="1.5"
        opacity="0.65"
      />
    </svg>
  );
}

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
            Four years of competitive programming and informatics olympiads.
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
                    <Trophy size={14} weight="fill" aria-hidden="true" />
                    <span>Regional Champion · Rank 1</span>
                  </span>
                  <p>The 30th National Young Informatics Contest · 2024</p>
                </div>
                <h3 className="foundation-feature-award">{regionalFirst.award}</h3>
                <p className="foundation-feature-subaward">Central & Central Highlands Region · Vô địch Miền Trung</p>
              </div>
              <div className="foundation-feature-detail">
                <div className="c2-dossier-card">
                  <div className="c2-dossier-tags">
                    <span className="c2-tag division">
                      <GraduationCap size={13} aria-hidden="true" />
                      <span>Table C2 · Specialized High Schools</span>
                    </span>
                  </div>
                  <p className="c2-dossier-desc">
                    Secured First Place across Central Vietnam specialized high schools (Table C2), advancing to the National Finals in Hanoi.
                  </p>
                  <div className="c2-dossier-footer">
                    <span className="c2-organizer">Central Youth Union · MOST · MOET</span>
                    {regionalFirst.href ? (
                      <a className="c2-source-btn" href={regionalFirst.href} target="_blank" rel="noreferrer">
                        <span>Official Archive</span>
                        <ArrowUpRight size={13} aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </motion.article>

            <motion.article variants={reduce ? undefined : sectionReveal} className="foundation-timeline-node foundation-proof-stage">
              <span className="foundation-timeline-marker" aria-hidden="true" />
              <span className="foundation-stage-index">03—04</span>
              <div className="foundation-stage-copy">
                <h3>Two national distinctions.</h3>
                <p>National finals & regional invitational · 2024</p>
              </div>
              <div className="foundation-proof-strip" aria-label="Additional verified distinctions">
                <div className="foundation-distinction-card national-card">
                  <YoungInformaticsWatermark className="distinction-watermark" />
                  <div className="distinction-card-header">
                    <div className="distinction-brand">
                      <div className="distinction-logo-box national">
                        <YoungInformaticsLogo className="distinction-logo-svg" />
                      </div>
                      <div className="distinction-brand-meta">
                        <span className="distinction-brand-edition">30th Edition · 2024</span>
                        <span className="distinction-brand-scope">National Finals · Hanoi</span>
                      </div>
                    </div>
                    <span className="distinction-status-pill national">
                      <SealCheck size={13} weight="fill" aria-hidden="true" />
                      <span>National Finalist</span>
                    </span>
                  </div>

                  <div className="distinction-award-block">
                    <div className="distinction-tier-tag national">
                      <Certificate size={13} weight="bold" aria-hidden="true" />
                      <span>National Distinction</span>
                    </div>
                    <strong className="distinction-award-title">{nationalFinal.award}</strong>
                    <p className="distinction-contest-title">The 30th National Young Informatics Contest</p>
                    <p className="distinction-contest-vn">Hội thi Tin học trẻ toàn quốc lần thứ XXX · 2024</p>
                  </div>

                  <div className="distinction-card-footer">
                    <div className="distinction-authority">
                      <span className="authority-label">Organizers:</span>
                      <span className="authority-val">Central Youth Union · MOST · MOET</span>
                    </div>
                    <div className="distinction-chips-row">
                      <span className="distinction-chip highlight">Table C2 · Specialized</span>
                      <span className="distinction-chip">Hanoi Finals</span>
                    </div>
                  </div>
                </div>

                <div className="foundation-distinction-card olympic-card">
                  <OlympicWatermark className="distinction-watermark" />
                  <div className="distinction-card-header">
                    <div className="distinction-brand">
                      <div className="distinction-logo-box olympic">
                        <OlympicOlympiadLogo className="distinction-logo-svg" />
                      </div>
                      <div className="distinction-brand-meta">
                        <span className="distinction-brand-edition">XXVIII Edition · 2024</span>
                        <span className="distinction-brand-scope">Southern Invitational Olympiad</span>
                      </div>
                    </div>
                    <span className="distinction-status-pill bronze">
                      <Medal size={13} weight="fill" aria-hidden="true" />
                      <span>Olympic Medalist</span>
                    </span>
                  </div>

                  <div className="distinction-award-block">
                    <div className="distinction-tier-tag olympic">
                      <Trophy size={13} weight="bold" aria-hidden="true" />
                      <span>Olympiad Distinction</span>
                    </div>
                    <strong className="distinction-award-title">{aprilOlympiad.award}</strong>
                    <p className="distinction-contest-title">The 28th Traditional April 30 Olympiad</p>
                    <p className="distinction-contest-vn">Kỳ thi Olympic truyền thống 30/4 lần thứ XXVIII · 2024</p>
                  </div>

                  <div className="distinction-card-footer">
                    <div className="distinction-authority">
                      <span className="authority-label">Host:</span>
                      <span className="authority-val">THPT Chuyên Lê Hồng Phong TP.HCM</span>
                    </div>
                    <div className="distinction-chips-row">
                      <span className="distinction-chip highlight">Specialized High Schools</span>
                      <span className="distinction-chip">Informatics Division</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
