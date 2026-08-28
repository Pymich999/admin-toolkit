"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";
import { EASE_STANDARD } from "@/lib/easing";

interface StaggerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: number) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom,
      delayChildren: custom * 0.2,
    },
  }),
};

export function Stagger({
  children,
  staggerDelay = 0.12,
  className,
}: StaggerProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-5% 0px" }}
      custom={staggerDelay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_STANDARD },
  },
};

export function StaggerItem({ children, delay, y, className }: StaggerItemProps) {
  return (
    <motion.div
      variants={itemVariants}
      custom={delay}
      style={y !== undefined ? { y } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}
