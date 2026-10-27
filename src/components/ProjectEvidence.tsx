import { useEffect, useRef, useState, type Dispatch, type KeyboardEvent } from "react";
import { ArrowRight, ArrowUpRight, GithubLogo, Globe } from "@phosphor-icons/react";
import { LayoutGroup, motion, useReducedMotion } from "motion/react";
import { work } from "../content";
import type { WorkItem } from "../content";
import { layoutTransition } from "../motion";
import { ArtifactPreview } from "./ArtifactPreview";

function useIsMobile() {
  const focusAfterResize = useRef<string | null>(null);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 760px)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(max-width: 760px)");
    const handler = (e: MediaQueryListEvent) => {
      const focused = document.activeElement;
      if (focused instanceof HTMLElement && focused.closest("#work")) {
        focusAfterResize.current = focused.id.startsWith("project-tab-")
          ? focused.id
          : document.querySelector<HTMLElement>("#work .project-tab.active")?.id ?? null;
      }
      setIsMobile(e.matches);
    };
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!focusAfterResize.current) return;
    document.getElementById(focusAfterResize.current)?.focus({ preventScroll: true });
    focusAfterResize.current = null;
  }, [isMobile]);

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

export function ProjectEvidence({ activeIndex, onSelect }: { activeIndex?: number; onSelect?: Dispatch<number> } = {}) {
  const [localActive, setLocalActive] = useState(0);
  const active = activeIndex ?? localActive;
  const setActive = onSelect ?? setLocalActive;
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
    <section className="work-section" id="work" tabIndex={-1}>
      <div className="section-heading">
        <div className="section-label">
          <span>04</span>
          <p>Featured projects</p>
        </div>
        <div>
          <h2>Selected systems & research projects.</h2>
          <p>
            Video retrieval, collaborative web applications and developer tools. Explore the systems and their source code.
          </p>
        </div>
      </div>

      <LayoutGroup>
        <div className="project-tabs" role={isMobile ? undefined : "tablist"} aria-label="Featured projects">
          {work.map((item, index) => {
            const isActive = active === index;
            const tabButton = (
              <motion.button
                layout
                transition={reduce ? { duration: 0 } : layoutTransition}
                className={isActive ? "project-tab active" : "project-tab"}
                onClick={() => setActive(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                role={isMobile ? undefined : "tab"}
                id={`project-tab-${index}`}
                aria-selected={isMobile ? undefined : isActive}
                aria-expanded={isMobile ? isActive : undefined}
                aria-controls={isMobile ? `project-detail-${index}` : "selected-project-detail"}
                tabIndex={isMobile || isActive ? 0 : -1}
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
                  <motion.article
                    id={`project-detail-${index}`}
                    className="project-detail project-detail-mobile"
                    role="region"
                    aria-labelledby={`project-tab-${index}`}
                    hidden={!isActive}
                    tabIndex={0}
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={reduce ? { duration: 0 } : { duration: 0.24, ease: "easeOut" }}
                  >
                    {isActive && <ProjectDetailContent item={item} index={index} />}
                  </motion.article>
                </div>
              );
            }

            return tabButton;
          })}
        </div>

        {!isMobile && (
          <motion.article
            layout
            id="selected-project-detail"
            className="project-detail project-detail-desktop"
            role="tabpanel"
            aria-labelledby={`project-tab-${active}`}
            aria-live="polite"
            tabIndex={0}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={reduce ? { duration: 0 } : layoutTransition}
          >
            <ProjectDetailContent item={selected} index={active} />
          </motion.article>
        )}
      </LayoutGroup>
    </section>
  );
}

