import { useEffect, useState, type KeyboardEvent } from "react";
import { ArrowRight, ArrowUpRight, GithubLogo, Globe } from "@phosphor-icons/react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react";
import { work } from "../content";
import type { WorkItem } from "../content";
import { layoutTransition } from "../motion";
import { ArtifactPreview } from "./ArtifactPreview";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 640px)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(max-width: 640px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return isMobile;
}

function ProjectDetailContent({
  item,
  index,
}: {
  item: WorkItem;
  index: number;
}) {
  const isGithub = item.href.includes("github.com");

  return (
    <>
      <div className="project-detail-index">0{index + 1}</div>
      <div className="project-detail-copy">
        <span className="status-pill">{item.status}</span>
        <h3>{item.title}</h3>
        <p>{item.detail}</p>
      </div>
      <div className="artifact-ledger">
        <small>Technical highlights</small>
        <p>{item.artifact}</p>
      </div>
      <a className="project-link" href={item.href} target="_blank" rel="noreferrer">
        {isGithub ? <GithubLogo aria-hidden="true" /> : <Globe aria-hidden="true" />}
        {item.action}
        {isGithub ? <ArrowRight aria-hidden="true" /> : <ArrowUpRight aria-hidden="true" />}
      </a>
    </>
  );
}

export function ProjectEvidence() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  const selected = work[active];

  const handleKeyDown = (e: KeyboardEvent, index: number) => {
    let nextIndex: number;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      nextIndex = (index + 1) % work.length;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      nextIndex = (index - 1 + work.length) % work.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = work.length - 1;
    } else {
      return;
    }
    e.preventDefault();
    setActive(nextIndex);
    const nextBtn = document.getElementById(`project-tab-${nextIndex}`);
    nextBtn?.focus();
  };

  return (
    <section className="work-section" id="work">
      <div className="section-heading">
        <div className="section-label">
          <span>04</span>
          <p>Featured projects</p>
        </div>
        <div>
          <h2>Production systems & research software.</h2>
          <p>
            End-to-end multimodal retrieval engines, interactive web platforms, and open-source developer tooling.
          </p>
        </div>
      </div>

      <LayoutGroup>
        <div className="project-tabs" role="tablist" aria-label="Featured projects">
          {work.map((item, index) => {
            const isActive = active === index;
            const tabButton = (
              <motion.button
                layout
                transition={reduce ? { duration: 0 } : layoutTransition}
                className={isActive ? "project-tab active" : "project-tab"}
                onClick={() => setActive(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                role="tab"
                id={`project-tab-${index}`}
                aria-selected={isActive}
                aria-controls="selected-project-detail"
                tabIndex={isActive ? 0 : -1}
                key={item.title}
              >
                <span className="project-tab-topline">
                  <b>0{index + 1}</b>
                  <small>{item.status}</small>
                </span>
                <span className="project-preview">
                  <ArtifactPreview kind={item.artifactKind} />
                </span>
                <span className="project-tab-title">{item.title}</span>
                <span>{item.focus}</span>
                {isActive && (
                  <motion.span className="active-rule" layoutId="active-project-rule" />
                )}
              </motion.button>
            );

            if (isMobile) {
              return (
                <div className="project-mobile-item-wrap" key={item.title}>
                  {tabButton}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.article
                        id="selected-project-detail"
                        className="project-detail project-detail-mobile"
                        role="tabpanel"
                        aria-labelledby={`project-tab-${active}`}
                        aria-live="polite"
                        tabIndex={0}
                        key={`mobile-detail-${item.title}`}
                        initial={reduce ? false : { opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={reduce ? undefined : { opacity: 0, height: 0 }}
                        transition={reduce ? { duration: 0 } : { duration: 0.24, ease: "easeOut" }}
                      >
                        <ProjectDetailContent item={selected} index={active} />
                      </motion.article>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return tabButton;
          })}
        </div>

        {!isMobile && (
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              layout
              id="selected-project-detail"
              className="project-detail project-detail-desktop"
              role="tabpanel"
              aria-labelledby={`project-tab-${active}`}
              aria-live="polite"
              tabIndex={0}
              key={selected.title}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -6 }}
              transition={reduce ? { duration: 0 } : layoutTransition}
            >
              <ProjectDetailContent item={selected} index={active} />
            </motion.article>
          </AnimatePresence>
        )}
      </LayoutGroup>
    </section>
  );
}

