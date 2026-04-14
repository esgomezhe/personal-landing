"use client";

import { motion } from "framer-motion";

export default function MobileHeader() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 w-full z-50 flex justify-between items-center px-4 h-14 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 lg:hidden"
    >
      <span
        className="text-base font-black text-green-400 tracking-widest uppercase glow-text-subtle"
        style={{ fontFamily: "var(--font-roboto-mono)" }}
      >
        OPERATOR_ID: 00482
      </span>
      <div className="flex gap-4 items-center">
        <div className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
        <span className="material-symbols-outlined text-green-400 text-xl">
          terminal
        </span>
      </div>
    </motion.header>
  );
}
