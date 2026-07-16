"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import styles from "./about.module.css";

export function About() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.section} id="about">
      <div className={`page-shell ${styles.stage}`}>
        <div className={styles.panel}>
          <div className={styles.introduction}>
          <motion.div
            className={styles.identity}
            initial={reduce ? false : { opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
          >
            <h2 className="display-type">
              Hi there, I&apos;m <em>Ziyang.</em>
            </h2>
            <p className={styles.nameTag}>Also Ziyang Chen.</p>
          </motion.div>

          <motion.div
            className={styles.bio}
            initial={reduce ? false : { opacity: 0, y: 34 }}
            transition={{ delay: reduce ? 0 : 0.08 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
          >
            <p>
              I am an AI Experience Designer working across product thinking,
              UX/UI, interaction design and AI-assisted coding.
            </p>
            <p>
              My background moves from 3D and game experiences to digital
              interaction and AI products. I turn complex systems into clear,
              testable experiences people can understand and control.
            </p>
          </motion.div>
          </div>
        </div>

        <div className={styles.portraitStage} aria-label="Portrait area">
          <div className={styles.accentDisc} aria-hidden="true" />

          <motion.figure
            className={`${styles.photoCard} ${styles.primaryPhoto}`}
            initial={reduce ? false : { opacity: 0, rotate: -8, y: 90 }}
            whileInView={{ opacity: 1, rotate: -4, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reduce ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              alt="Ziyang Chen overlooking the Old Man of Storr landscape"
              className={styles.photo}
              fill
              quality={95}
              sizes="(max-width: 767px) 64vw, (max-width: 900px) 52vw, 470px"
              src="/about/ziyang-rome.jpg"
            />
          </motion.figure>

          <motion.figure
            className={`${styles.photoCard} ${styles.secondaryPhoto}`}
            initial={reduce ? false : { opacity: 0, rotate: 8, y: 110 }}
            whileInView={{ opacity: 1, rotate: 6, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: reduce ? 0 : 0.08,
              duration: reduce ? 0 : 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Image
              alt="Ziyang Chen in front of the Colosseum in Rome"
              className={styles.photo}
              fill
              quality={95}
              sizes="(max-width: 767px) 52vw, (max-width: 900px) 45vw, 430px"
              src="/about/ziyang-death-stranding.png"
            />
          </motion.figure>

          <p className={styles.journey}>
            Digital Media <span>+</span> Interaction Design <span>+</span> AI
            Experience <span>+</span> Creative Technology
          </p>
        </div>
      </div>
    </section>
  );
}
