"use client";

import { ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState, type CSSProperties } from "react";
import { projects } from "@/data/projects";
import styles from "./project-showcase.module.css";

export function ProjectShowcase() {
  const reduce = useReducedMotion();
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const activeProject = projects.find((project) => project.slug === activeSlug);
  const activeIndex = projects.findIndex((project) => project.slug === activeSlug);
  const previewSide = activeIndex % 2 === 0 ? "left" : "right";

  return (
    <section
      className={styles.section}
      data-preview-side={activeProject ? previewSide : undefined}
      id="work"
    >
      <div className={styles.previewLayer} aria-hidden="true">
        <AnimatePresence mode="wait">
          {activeProject ? (
            <motion.div
              animate={{ opacity: 1, x: 0, scale: 1 }}
              className={`${styles.previewMask} ${
                previewSide === "right" ? styles.previewRight : ""
              }`}
              exit={{
                opacity: 0,
                x: previewSide === "left" ? -34 : 34,
                scale: 0.98,
              }}
              initial={
                reduce
                  ? false
                  : {
                      opacity: 0,
                      x: previewSide === "left" ? -42 : 42,
                      scale: 0.98,
                    }
              }
              key={activeProject.slug}
              style={
                { "--preview-surface": activeProject.previewSurface } as CSSProperties
              }
              transition={{ duration: reduce ? 0 : 0.52, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                alt=""
                className={styles.previewImage}
                fill
                quality={95}
                sizes="(max-width: 1200px) 75vw, 1400px"
                src={activeProject.previewImage}
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
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
                  <span className={`display-type ${styles.projectName}`}>{project.name}</span>
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
