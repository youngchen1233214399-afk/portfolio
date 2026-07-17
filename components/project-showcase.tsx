"use client";

import { ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { projects, type PortfolioProject } from "@/data/projects";
import { ProjectName } from "./project-name";
import styles from "./project-showcase.module.css";

export function ProjectShowcase() {
  const reduce = useReducedMotion();
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  // Hover intent: when the pointer hops between adjacent titles it briefly
  // crosses the gap. Deactivating immediately would start collapsing the
  // preview circle and re-trigger the reveal delay, causing flicker. Instead,
  // deactivation is debounced; entering another title cancels it and the
  // circle stays open while the image swaps.
  const leaveTimer = useRef<number | null>(null);
  const activate = (slug: string) => {
    if (leaveTimer.current !== null) {
      window.clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
    setActiveSlug(slug);
  };
  const scheduleDeactivate = () => {
    if (leaveTimer.current !== null) window.clearTimeout(leaveTimer.current);
    leaveTimer.current = window.setTimeout(() => {
      leaveTimer.current = null;
      setActiveSlug(null);
    }, 200);
  };
  useEffect(
    () => () => {
      if (leaveTimer.current !== null) window.clearTimeout(leaveTimer.current);
    },
    [],
  );

  const activeProject = projects.find((project) => project.slug === activeSlug);

  // The circle animates as a sequence: switching to a different title first
  // collapses the circle to its centre, then swaps the image and expands
  // again. `displayed` is the project currently inside the circle and `open`
  // drives the clip-path; rapid hops always settle on the latest hover.
  const [displayed, setDisplayed] = useState<PortfolioProject | null>(null);
  const [open, setOpen] = useState(false);
  const switchTimer = useRef<number | null>(null);
  const activeRef = useRef<string | null>(null);
  activeRef.current = activeSlug;
  const displayedRef = useRef<PortfolioProject | null>(null);
  displayedRef.current = displayed;
  const openRef = useRef(false);
  openRef.current = open;

  useEffect(() => {
    if (switchTimer.current !== null) {
      window.clearTimeout(switchTimer.current);
      switchTimer.current = null;
    }
    const active = activeSlug
      ? projects.find((project) => project.slug === activeSlug) ?? null
      : null;
    if (!active) {
      setOpen(false);
      return;
    }
    const current = displayedRef.current;
    if (!current) {
      // Fresh mount: paint the mask closed first, then open on a later tick
      // so the clip-path has a starting state to transition from.
      setDisplayed(active);
      switchTimer.current = window.setTimeout(() => {
        switchTimer.current = null;
        if (activeRef.current) setOpen(true);
      }, 50);
      return;
    }
    if (!openRef.current || current.slug === active.slug) {
      if (current.slug !== active.slug) setDisplayed(active);
      setOpen(true);
      return;
    }
    // Different title while the circle is open: collapse first, then swap.
    setOpen(false);
    switchTimer.current = window.setTimeout(() => {
      switchTimer.current = null;
      const latestSlug = activeRef.current;
      const latest = latestSlug
        ? projects.find((project) => project.slug === latestSlug) ?? null
        : null;
      if (!latest) return;
      setDisplayed(latest);
      setOpen(true);
    }, 580);
  }, [activeSlug]);

  useEffect(
    () => () => {
      if (switchTimer.current !== null) window.clearTimeout(switchTimer.current);
    },
    [],
  );

  const displayedIndex = displayed
    ? projects.findIndex((project) => project.slug === displayed.slug)
    : 0;
  const shownSide = displayedIndex % 2 === 0 ? "left" : "right";

  return (
    <section
      className={styles.section}
      data-preview-side={activeProject ? shownSide : undefined}
      id="work"
    >
      <div className={styles.previewLayer} aria-hidden="true">
        {displayed ? (
          <div
            className={`${styles.previewMask} ${
              shownSide === "right" ? styles.previewRight : ""
            } ${open ? styles.revealed : ""}`}
            style={{ "--preview-surface": displayed.previewSurface } as CSSProperties}
          >
            <Image
              alt=""
              className={styles.previewImage}
              fill
              key={displayed.slug}
              quality={95}
              sizes="(max-width: 1200px) 75vw, 1400px"
              src={displayed.previewImage}
            />
          </div>
        ) : null}
      </div>

      <div className={`page-shell ${styles.inner}`}>
        <motion.div
          className={styles.intro}
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
        >
          <h2 className="display-type">Portfolio</h2>
          <p>Preview the work, then enter the project.</p>
        </motion.div>

        <ul className={styles.index} aria-label="Selected projects">
          {projects.map((project, index) => (
            <motion.li
              key={project.name}
              initial={reduce ? false : { opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ delay: index * 0.08 }}
            >
              <Link
                className={`${styles.projectLink} ${
                  activeSlug === project.slug ? styles.active : activeSlug ? styles.dimmed : ""
                }`}
                href={`/work/${project.slug}`}
                onBlur={scheduleDeactivate}
                onFocus={() => activate(project.slug)}
                onMouseEnter={() => activate(project.slug)}
                onMouseLeave={scheduleDeactivate}
              >
                <span className={styles.nameRow}>
                  <span className={`display-type ${styles.projectName}`}>
                    <ProjectName
                      name={project.name}
                      displayCode={project.displayCode}
                      codeClassName={styles.projectCode}
                    />
                  </span>
                  <ArrowRight aria-hidden="true" size={34} weight="regular" />
                </span>
                <span className={styles.projectMeta}>
                  <span>{project.type}</span>
                  <span>{project.year}</span>
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
