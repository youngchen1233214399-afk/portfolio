"use client";

import {
  motion,
  useAnimation,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTime,
  useTransform,
} from "motion/react";
import { PointerEvent, useEffect, useRef, useState } from "react";
import styles from "./hero.module.css";

const reveal = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

// Where the hero disc must land so it lines up with the accent circle on the
// manifesto plate, in layout coordinates (transform-free, so measurements stay
// valid while either element is mid-animation).
type Dock = { x: number; y: number; scale: number };

function layoutOrigin(el: HTMLElement) {
  let x = 0;
  let y = 0;
  let node: HTMLElement | null = el;
  while (node) {
    x += node.offsetLeft;
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return { x, y };
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [dock, setDock] = useState<Dock | null>(null);
  const reduce = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const presence = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 92, damping: 18, mass: 0.65 });
  const springY = useSpring(pointerY, { stiffness: 92, damping: 18, mass: 0.65 });
  const springPresence = useSpring(presence, { stiffness: 110, damping: 22 });
  const ripple = useAnimation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      const target = document.querySelector<HTMLElement>("[data-hero-dock]");
      if (!track || !target) return;

      const trackOrigin = layoutOrigin(track);
      // .mediaTrack sits at left:50%/top:50% with a CSS translate of -50% -47%,
      // so its visual centre is offset from its layout origin by +3% height.
      const discCenter = {
        x: trackOrigin.x,
        y: trackOrigin.y + track.offsetHeight * 0.03,
      };
      const targetOrigin = layoutOrigin(target);
      const dockCenter = {
        x: targetOrigin.x + target.offsetWidth / 2,
        y: targetOrigin.y + target.offsetHeight / 2,
      };
      setDock({
        x: dockCenter.x - discCenter.x,
        y: dockCenter.y - discCenter.y,
        scale: target.offsetWidth / track.offsetWidth,
      });
    };

    measure();
    const raf = requestAnimationFrame(measure);
    document.fonts?.ready.then(measure).catch(() => undefined);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const docking = !reduce && dock !== null;
  const dockX = docking ? dock.x : 0;
  const dockY = docking ? dock.y : reduce ? 0 : 250;
  const dockScale = docking ? dock.scale : reduce ? 1 : 1.24;

  const mediaX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, dockX]);
  const mediaY = useTransform(
    scrollYProgress,
    [0, 0.48, 0.78, 1],
    [0, 0, reduce ? 0 : dockY * 0.36, dockY],
  );
  const mediaScale = useTransform(
    scrollYProgress,
    [0, 0.55, 0.82, 1],
    [1, 1, reduce ? 1 : 1 + (dockScale - 1) * 0.3, dockScale],
  );
  const mediaOpacity = useTransform(
    scrollYProgress,
    [0, 0.68, 0.9, 1],
    docking ? [1, 1, 1, 1] : [1, 1, reduce ? 1 : 0.72, reduce ? 1 : 0.16],
  );
  const mediaRotate = useTransform(scrollYProgress, [0, 0.65, 1], [-5, -4, reduce ? -5 : 0]);
  const opticalOpacity = useTransform(
    scrollYProgress,
    [0, 0.6, 0.88, 1],
    [1, 1, reduce ? 1 : 0.42, reduce ? 1 : 0],
  );
  const solidOpacity = useTransform(
    scrollYProgress,
    [0, 0.55, 0.92],
    [0, 0, docking ? 1 : 0],
  );
  const titleY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -70]);
  const titleLeftX = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0, reduce ? 0 : -150]);
  const titleRightX = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0, reduce ? 0 : 150]);

  // Idle drift: with no pointer nearby the light keeps travelling slowly
  // across the mineral surface, so the disc reads as alive rather than a
  // static texture. Amplitudes go to zero under reduced motion.
  const time = useTime();
  const amp = reduce ? 0 : 1;
  const fieldX = useTransform(
    [springX, time],
    ([s, t]: number[]) => s * 30 + Math.sin(t / 4200) * 7 * amp,
  );
  const fieldY = useTransform(
    [springY, time],
    ([s, t]: number[]) => s * 30 + Math.cos(t / 5300) * 6 * amp,
  );
  const lensX = useTransform(
    [springX, time],
    ([s, t]: number[]) => s * -18 - Math.sin(t / 4700 + 2) * 5 * amp,
  );
  const lensY = useTransform(
    [springY, time],
    ([s, t]: number[]) => s * -18 - Math.cos(t / 5600 + 2) * 4 * amp,
  );
  const highlightX = useTransform(
    [springX, time],
    ([s, t]: number[]) => s * 70 + Math.sin(t / 6400) * 15 * amp,
  );
  const highlightY = useTransform(
    [springY, time],
    ([s, t]: number[]) => s * 70 + Math.cos(t / 7300) * 12 * amp,
  );
  const tiltX = useTransform(
    [springY, time],
    ([s, t]: number[]) => s * -7 + Math.sin(t / 8200) * 1.1 * amp,
  );
  const tiltY = useTransform(
    [springX, time],
    ([s, t]: number[]) => s * 7 + Math.cos(t / 9100) * 1.1 * amp,
  );
  const activeScale = useTransform(springPresence, [0, 1], [1, 1.025]);
  const detailOpacity = useTransform(springPresence, [0, 1], [0.42, 0.92]);

  // The soft shadow slides opposite the pointer (fixed light source) and
  // deepens slightly as the pointer approaches, selling real depth.
  const shadowX = useTransform(
    [springX, time],
    ([s, t]: number[]) => s * -16 + Math.sin(t / 5900) * 4 * amp,
  );
  const shadowY = useTransform(
    [springY, time],
    ([s, t]: number[]) => 14 + s * -10 + Math.cos(t / 6800) * 3 * amp,
  );
  const shadowOpacity = useTransform(springPresence, [0, 1], [0.5, 0.72]);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (reduce || !mediaRef.current) return;

    const bounds = mediaRef.current.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    const dx = event.clientX - centerX;
    const dy = event.clientY - centerY;
    const radius = bounds.width / 2;
    const distance = Math.hypot(dx, dy);

    pointerX.set(Math.max(-1, Math.min(1, dx / radius)));
    pointerY.set(Math.max(-1, Math.min(1, dy / radius)));
    presence.set(Math.max(0, Math.min(1, 1.35 - distance / (radius * 1.35))));
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
    presence.set(0);
  };

  const triggerRipple = () => {
    if (reduce) return;
    ripple.set({ scale: 0.34, opacity: 0 });
    void ripple.start({
      scale: [0.34, 1.12],
      opacity: [0, 0.72, 0],
      transition: { duration: 0.82, times: [0, 0.18, 1], ease: [0.16, 1, 0.3, 1] },
    });
  };

  return (
    <section
      ref={ref}
      className={styles.hero}
      id="top"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className={`page-shell ${styles.canvas}`}>
        <motion.div
          ref={trackRef}
          className={styles.mediaTrack}
          aria-hidden="true"
          style={{ x: mediaX, y: mediaY, rotate: mediaRotate, scale: mediaScale, opacity: mediaOpacity }}
          initial={reduce ? false : { opacity: 0, scale: 0.72 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.15, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className={styles.discShadow}
            style={{ x: shadowX, y: shadowY, opacity: shadowOpacity }}
          />
          <motion.div
            ref={mediaRef}
            className={styles.media}
            style={{ scale: activeScale }}
            onPointerDown={triggerRipple}
          >
            <motion.div
              className={styles.field}
              style={{ x: fieldX, y: fieldY, rotateX: tiltX, rotateY: tiltY }}
            />
            <motion.div className={styles.optics} style={{ opacity: opticalOpacity }}>
              <motion.div
                className={styles.lens}
                style={{ x: lensX, y: lensY, opacity: detailOpacity }}
              >
                <div className={styles.sheen} />
              </motion.div>
              <div className={styles.orbit}>
                <span />
                <span />
              </div>
              <motion.div
                className={styles.highlight}
                style={{ x: highlightX, y: highlightY, opacity: detailOpacity }}
              />
              <motion.div className={styles.ripple} animate={ripple} />
            </motion.div>
            <motion.div className={styles.solid} style={{ opacity: solidOpacity }} />
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.title}
          style={{ y: titleY }}
          initial={reduce ? false : "hidden"}
          animate="visible"
          transition={{ staggerChildren: 0.1, delayChildren: 0.08 }}
        >
          <motion.h1 className="display-type" variants={reveal}>
            <motion.span style={{ x: titleLeftX }}>ZIYANG</motion.span>
            <motion.span style={{ x: titleRightX }}>CHEN</motion.span>
          </motion.h1>
        </motion.div>

      </div>
    </section>
  );
}
