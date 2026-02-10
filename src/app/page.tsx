"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ clipPath: "inset(5%)", opacity: 0, scale: 1.05 }}
      animate={{ clipPath: "inset(0%)", opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        backgroundImage: "url(/images/hero.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "50% 40%",
      }}
    />
  );
}
