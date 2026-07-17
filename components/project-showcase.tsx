"use client";

import { ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useRef, useState, type CSSProperties } from "react";
import { projects, type PortfolioProject } from "@/data/projects";
import { ProjectName } from "./project-name";
import styles from "./project-showcase.module.css";

export function ProjectShowcase() {
  const reduce = useReducedMotion();
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const activeProject = projects.find((project) => project.slug === activeSlug);
  const activeIndex = projects.findIndex((project) => project.slug === activeSlug);
  const previewSide = activeIndex % 2 === 0 ? "left" : "right";

  // Keep the last previewed project mounted so it can collapse back to the
  // circle's centre on mouse-leave instead of vanishing instantly.
  const lastShown = useRef<{ project: PortfolioProject; side: "left" | "right" } | null>(
    null,
  );
  if (activeProject) {
    lastShown.current = { project: activeProject, side: previewSide };
  }
  const shown = activeProject ?? lastShown.current?.project ?? null;
  const shownSide = activeProject ? previewSide : lastShown.current?.side ?? "left";

  return (
    <section
      className={styles.section}
      data-preview-side={activeProject ? previewSide : undefined}
      id="work"
    >
      <div className={styles.previewLayer} aria-hidden="true">
        {shown ? (
          <div
            className={`${styles.previewMask} ${
              shownSide === "right" ? styles.previewRight : ""
            } ${activeProject ? styles.revealed : ""}`}
            style={{ "--preview-surface": shown.previewSurface } as CSSProperties}
          >
            <Image
              alt=""
              className={styles.previewImage}
              fill
              key={shown.slug}
              quality={95}
              sizes="(max-width: 1200px) 75vw, 1400px"
              src={shown.previewImage}
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
                onBlur={() => setActiveSlug(null)}
                onFocus={() => setActiveSlug(project.slug)}
                onMouseEnter={() => setActiveSlug(project.slug)}
                onMouseLeave={() => setActiveSlug(null)}
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
