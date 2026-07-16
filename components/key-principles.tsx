"use client";

import {
  ChatCircleText,
  Cube,
  PersonSimple,
  Sparkle,
} from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import styles from "./key-principles.module.css";

const principles = [
  {
    title: "Human needs come first",
    Icon: PersonSimple,
    className: styles.human,
  },
  {
    title: "Technology should amplify creativity",
    Icon: Sparkle,
    className: styles.creativity,
  },
  {
    title: "From ideas to prototypes",
    Icon: Cube,
    className: styles.prototype,
  },
  {
    title: "Design is a continuous conversation",
    Icon: ChatCircleText,
    className: styles.conversation,
  },
];

export function KeyPrinciples() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.section} aria-labelledby="principles-title">
      <div className={`page-shell ${styles.panel}`}>
        <div className={styles.intro}>
          <motion.div
            className={styles.titleBlock}
            initial={reduce ? false : { opacity: 0, y: 36 }}
            viewport={{ once: true, amount: 0.55 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="display-type" id="principles-title">
              Key <em>Principles</em>
            </h2>
            <p className={styles.tag}>What guides my work</p>
          </motion.div>

          <motion.div
            className={styles.positioning}
            initial={reduce ? false : { opacity: 0, y: 36 }}
            transition={{ delay: reduce ? 0 : 0.08 }}
            viewport={{ once: true, amount: 0.55 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className={styles.belief}>
              I design at the intersection of creativity, technology and human
              experience.
            </p>
            <p className={styles.role}>
              AI Experience Designer exploring how emerging technologies reshape
              the way people create and interact.
            </p>
          </motion.div>
        </div>

        <ul className={styles.grid}>
          {principles.map(({ title, Icon, className }, index) => (
            <motion.li
              className={`${styles.card} ${className}`}
              initial={reduce ? false : { opacity: 0, y: 42, scale: 0.96 }}
              key={title}
              transition={{
                delay: reduce ? 0 : index * 0.07,
                duration: reduce ? 0 : 0.62,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, amount: 0.35 }}
              whileHover={reduce ? undefined : { y: -5, scale: 1.012 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
            >
              <span className={styles.icon} aria-hidden="true">
                <Icon size={40} weight="duotone" />
              </span>
              <h3 className="display-type">{title}</h3>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
