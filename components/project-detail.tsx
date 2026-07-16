"use client";

import { ArrowRight, ArrowUpRight, X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { PortfolioProject } from "@/data/projects";
import styles from "./project-detail.module.css";

type ProjectDetailProps = {
  project: PortfolioProject;
  nextProject: PortfolioProject;
};

export function ProjectDetail({ project, nextProject }: ProjectDetailProps) {
  const reduce = useReducedMotion();
  const galleryRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const gallery = galleryRef.current;
    const slides = slideRefs.current.filter(Boolean) as HTMLElement[];

    if (!gallery || slides.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveIndex(Number((visible.target as HTMLElement).dataset.index));
        }
      },
      {
        root: gallery,
        threshold: [0.45, 0.65, 0.85],
      },
    );

    slides.forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, []);

  const activeSlide = project.slides[activeIndex];

  const moveToSlide = (index: number) => {
    slideRefs.current[index]?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <main className={styles.detail}>
      <div className={styles.gallery} ref={galleryRef} aria-label={`${project.name} image gallery`}>
        {project.slides.map((slide, index) => (
          <section
            className={styles.slide}
            data-index={index}
            key={slide.title}
            ref={(node) => {
              slideRefs.current[index] = node;
            }}
            style={{ "--slide-surface": slide.surface } as React.CSSProperties}
          >
            <motion.div
              className={styles.imageFrame}
              initial={reduce ? false : { opacity: 0, scale: 0.96, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ root: galleryRef, once: true, amount: 0.5 }}
              transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                alt={slide.alt}
                fill
                priority={index === 0}
                quality={90}
                sizes="(max-width: 767px) 92vw, 46vw"
                src={slide.image}
              />
            </motion.div>
          </section>
        ))}
      </div>

      <aside className={styles.panel} aria-live="polite">
        <div className={styles.panelTop}>
          <div>
            <span className={styles.projectLabel}>{project.name}</span>
            <span className={styles.year}>{project.year}</span>
          </div>
          <Link className={styles.close} href="/#work" aria-label="Close project introduction">
            <X aria-hidden="true" size={38} weight="thin" />
          </Link>
        </div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className={styles.copy}
          initial={reduce ? false : { opacity: 0, y: 18 }}
          key={`${project.slug}-${activeIndex}`}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
        >
          {activeIndex === 0 ? (
            <>
              <h1 className="display-type">{project.name}</h1>
              <p className={styles.type}>{project.type}</p>
            </>
          ) : (
            <p className={styles.chapter}>{activeSlide.chapter}</p>
          )}
          <h2 className={styles.slideTitle}>{activeSlide.title}</h2>
          <p className={styles.description}>{activeSlide.description}</p>
        </motion.div>

        <div className={styles.panelBottom}>
          <div className={styles.slideNavigation} aria-label="Project views">
            {project.slides.map((slide, index) => (
              <button
                aria-current={activeIndex === index ? "true" : undefined}
                className={activeIndex === index ? styles.currentSlide : undefined}
                key={slide.title}
                onClick={() => moveToSlide(index)}
                type="button"
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {slide.chapter}
              </button>
            ))}
          </div>

          <div className={styles.actions}>
            <a className={styles.liveLink} href={project.liveUrl} target="_blank" rel="noreferrer">
              Open live product
              <ArrowUpRight aria-hidden="true" size={22} />
            </a>
            <Link className={styles.nextLink} href={`/work/${nextProject.slug}`}>
              Next project
              <ArrowRight aria-hidden="true" size={22} />
            </Link>
          </div>
        </div>
      </aside>
    </main>
  );
}
