"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerChildrenProps {
  children: ReactNode;
  stagger?: number;
  delayChildren?: number;
  whileInView?: boolean;
  once?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const containerVariants = (stagger: number, delayChildren: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function StaggerChildren({
  children,
  stagger = 0.08,
  delayChildren = 0,
  whileInView: useWhileInView = false,
  once = true,
  className,
  style,
}: StaggerChildrenProps) {
  const animationProps = useWhileInView
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once, amount: 0.2 },
      }
    : {
        initial: "hidden",
        animate: "visible",
      };

  return (
    <motion.div
      variants={containerVariants(stagger, delayChildren)}
      {...animationProps}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
