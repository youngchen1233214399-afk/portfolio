"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import styles from "./what-i-do.module.css";

const capabilities = [
  {
    label: "AI Experience",
    lines: ["AI", "Experience"],
    className: styles.capabilityCore,
  },
  { label: "UX/UI Design", lines: ["UX/UI", "Design"], className: styles.capabilityUx },
  {
    label: "Interaction Design",
    lines: ["Interaction", "Design"],
    className: styles.capabilityInteraction,
  },
  { label: "AI Coding", lines: ["AI", "Coding"], className: styles.capabilityCode },
  {
    label: "Product Prototyping",
    lines: ["Product", "Prototyping"],
    className: styles.capabilityProduct,
  },
];

export function WhatIDo() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const ringRotate = useTransform(scrollYProgress, [0, 1], [-1.5, 2]);
  const discScale = useTransform(scrollYProgress, [0, 0.52, 1], [0.93, 1, 1.035]);
  const clusterY = useTransform(scrollYProgress, [0, 1], [45, -20]);
  const clusterRotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  return (
    <section className={styles.section} id="what-i-do" ref={sectionRef}>
      <div className={styles.sticky}>
        <motion.div
          className={styles.disc}
          style={reduce ? undefined : { scale: discScale }}
        >
          <h2 className={styles.accessibleTitle}>What I Do</h2>

          <motion.svg
            aria-hidden="true"
            className={styles.ring}
            style={reduce ? undefined : { rotate: ringRotate }}
            viewBox="0 0 1300 1000"
          >
            <defs>
              {/* Elliptical arc concentric with the dome (1.3:1), inset 70
                  units, so the text runs parallel to the card edge. */}
              <path
                d="M 71,530 A 580,430 0 0,1 1229,530"
                id="what-i-do-ring"
              />
            </defs>
            <text>
              <textPath
                href="#what-i-do-ring"
                lengthAdjust="spacingAndGlyphs"
                startOffset="0%"
                textLength="1580"
              >
                What I Do. See how I make AI clear, useful and testable.
              </textPath>
            </text>
          </motion.svg>

          <motion.ul
            aria-label="What I do"
            className={styles.capabilities}
            style={reduce ? undefined : { y: clusterY, rotate: clusterRotate }}
          >
            {capabilities.map((capability, index) => (
              <motion.li
                className={`${styles.capability} ${capability.className}`}
                initial={reduce ? false : { opacity: 0, scale: 0.78 }}
                key={capability.label}
                transition={{
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 105,
                  damping: 18,
                }}
                viewport={{ once: true, amount: 0.55 }}
                whileHover={reduce ? undefined : { scale: 1.055, rotate: index % 2 ? -3 : 3 }}
                whileInView={{ opacity: 1, scale: 1 }}
              >
                <span>
                  {capability.lines.map((line) => (
                    <span className={styles.capabilityLine} key={line}>
                      {line}
                    </span>
                  ))}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
