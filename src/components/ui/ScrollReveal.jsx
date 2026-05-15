"use client";
import { motion } from "framer-motion";

export default function ScrollReveal({ children, className = "", delay = 0, type = "fade-up" }) {
  const variants = {
    "fade-up": { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
    "fade-in": { initial: { opacity: 0 }, animate: { opacity: 1 } },
    "scale-up": { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
    "slide-right": { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 } }
  };

  const selectedVariant = variants[type] || variants["fade-up"];

  return (
    <motion.div
      initial={selectedVariant.initial}
      whileInView={selectedVariant.animate}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
