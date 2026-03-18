"use client";

import { motion, AnimatePresence, useInView } from "motion/react";
import { useRef, useEffect, useState, type ReactNode } from "react";

const ease = [0.25, 0.1, 0.25, 1] as const;

// Fade in with optional directional slide
export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  className,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}) {
  const offsets = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: -60 },
    right: { y: 0, x: 60 },
    none: { y: 0, x: 0 },
  };

  const { x, y } = offsets[direction];

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Slide in from left or right
export function SlideIn({
  children,
  direction = "left",
  delay = 0,
  duration = 0.7,
  className,
}: {
  children: ReactNode;
  direction?: "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <FadeIn
      direction={direction}
      delay={delay}
      duration={duration}
      className={className}
    >
      {children}
    </FadeIn>
  );
}

// Scale in from 0.85 to 1 with fade
export function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  className,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger container
const staggerContainerVariants = {
  hidden: {},
  visible: (staggerDelay: number) => ({
    transition: {
      staggerChildren: staggerDelay,
    },
  }),
};

export function StaggerChildren({
  children,
  staggerDelay = 0.1,
  className,
}: {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={staggerDelay}
      variants={staggerContainerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger child item
const staggerItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerItemVariants} className={className}>
      {children}
    </motion.div>
  );
}

// Animated counter
export function CountUp({
  end,
  duration = 2,
  className,
}: {
  end: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState("0");

  // Extract numeric portion
  const match = end.match(/^(\d+)(.*)$/);
  const isNumeric = !!match;
  const target = isNumeric ? parseInt(match![1], 10) : 0;
  const suffix = isNumeric ? match![2] : "";

  useEffect(() => {
    if (!isInView) return;
    if (!isNumeric) {
      setDisplay(end);
      return;
    }

    let start = 0;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * target);
      setDisplay(start + suffix);
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [isInView, isNumeric, target, suffix, duration, end]);

  if (!isNumeric) {
    return (
      <motion.span
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease }}
        className={className}
      >
        {end}
      </motion.span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

// Re-export AnimatePresence for Navbar
export { AnimatePresence, motion };
