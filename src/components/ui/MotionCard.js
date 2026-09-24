"use client";

import { motion, useReducedMotion } from "framer-motion";

export function MotionCard({ children, className = "" }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className={className}
      transition={{ duration: 0.2, ease: "easeOut" }}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
    >
      {children}
    </motion.article>
  );
}
