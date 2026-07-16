"use client";

import { motion, useReducedMotion } from "motion/react";
import styles from "./manifesto.module.css";

export function Manifesto() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.section} aria-label="Design approach">
      <motion.div
        className={`page-shell ${styles.shape}`}
        initial={reduce ? false : { opacity: 0, y: 70, scale: 0.96, rotate: -3.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9 }}
      >
        <div className={styles.plateDisc} data-hero-dock aria-hidden="true" />
        <p className={`display-type ${styles.statement}`}>
          I bridge creativity,
          <br />
          technology and
          <br />
          <em>human experience.</em>
        </p>
        <p className={styles.support}>
          Research, interaction and code in the same loop.
        </p>
      </motion.div>
    </section>
  );
}
