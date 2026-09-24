"use client";

import { motion, useReducedMotion } from "framer-motion";

export function MotionSection({ children, className = "", id }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      className={className}
      id={id}
      initial={shouldReduceMotion ? false : { y: 24 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.18 }}
      whileInView={shouldReduceMotion ? undefined : { y: 0 }}
    >
      {children}
    </motion.section>
  );
}
