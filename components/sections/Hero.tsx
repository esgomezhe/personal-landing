"use client";

import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

const TYPED_TEXTS = [
  "Backend Developer",
  "IT Lead",
  "API Architect",
  "Python Engineer",
  "Physics Engeneer"
];

function useTypingEffect(texts: string[], speed = 70, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, speed / 2);
    } else {
      timeout = setTimeout(() => {
        setDeleting(false);
        setTextIdx((i) => (i + 1) % texts.length);
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, textIdx, texts, speed, pause]);

  return display;
}

const statusItems = [
  { label: "OPERATIONAL_STATUS", value: "ACTIVE_DEVELOPMENT", color: "text-green-400" },
  { label: "API_LAYER", value: "STABLE_99.9%_UPTIME", color: "text-amber-400" },
  { label: "LOCATION_COORDS", value: "MANIZALES, CO", color: "text-zinc-300" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  const typed = useTypingEffect(TYPED_TEXTS);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center border-b border-zinc-800 pb-20"
    >
      {/* Psycho-Pass — JP background watermark */}
      <div
        aria-hidden="true"
        className="jp-watermark absolute bottom-24 right-0 text-[10rem] md:text-[14rem] font-bold leading-none select-none pointer-events-none hidden md:block"
      >
        公安局
      </div>

      {/* Top-right system info panel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute top-4 right-4 p-3 border border-zinc-800 hidden md:block"
        style={{ fontFamily: "var(--font-roboto-mono)" }}
      >
        <div className="text-[9px] text-zinc-400 leading-relaxed">
          SYS_VER: 2.0.4
          <br />
          KERNEL: SIBYL_OS
          <br />
          UPLINK: STABLE
          <br />
          <span className="jp-label">シビュラシステム</span>
        </div>
      </motion.div>

      <div className="space-y-4 max-w-4xl">
        {/* Label row */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex items-center gap-4 mb-2"
        >
          <span
            className="text-green-400 text-xs tracking-widest glow-text-subtle"
            style={{ fontFamily: "var(--font-roboto-mono)" }}
          >
            [ ONLINE_IDENTITY ]
          </span>
          <div className="h-px flex-1 bg-zinc-800" />
          <span
            className="text-[9px] text-zinc-400"
            style={{ fontFamily: "var(--font-roboto-mono)" }}
          >
            OPERATOR_ID: 00482
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-5xl md:text-8xl font-bold text-zinc-100 uppercase tracking-tighter leading-none"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Esteban Gomez
        </motion.h1>

        <motion.h2
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-3xl md:text-6xl font-bold text-green-400 glow-text uppercase tracking-tight -mt-2"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Hernandez
        </motion.h2>

        {/* Typing role */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex items-center gap-2 mt-2"
          style={{ fontFamily: "var(--font-roboto-mono)" }}
        >
          <span className="text-zinc-400 text-sm">ROLE:</span>
          <span className="text-green-400 text-sm min-w-[200px]">{typed}</span>
          <span className="text-green-400 cursor-blink font-bold">█</span>
        </motion.div>

        {/* Description */}
        <motion.p
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed mt-2"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Desarrollador backend especializado en Python, APIs REST, integraciones
          empresariales y soluciones impulsadas por IA. Diseño sistemas que escalan.
        </motion.p>

        {/* Status panels */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6"
        >
          {statusItems.map((item) => (
            <div
              key={item.label}
              className="p-4 bg-zinc-900/60 border-l-2 border-green-400/50 border border-zinc-800 relative"
            >
              <div className="bracket-top-left" />
              <div
                className="text-[9px] text-zinc-400 uppercase mb-1"
                style={{ fontFamily: "var(--font-roboto-mono)" }}
              >
                {item.label}
              </div>
              <div
                className={`text-xs ${item.color}`}
                style={{ fontFamily: "var(--font-roboto-mono)" }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-wrap gap-4 mt-8"
        >
          <a
            href="#experience"
            className="px-8 py-3 bg-green-400 text-black font-bold text-sm flex items-center gap-2 hover:bg-white transition-all duration-200 group"
            style={{ fontFamily: "var(--font-roboto-mono)" }}
          >
            <span className="material-symbols-outlined text-sm">crossword</span>
            [ EXEC_VIEW_EXP ]
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-zinc-600 text-zinc-300 text-sm font-bold flex items-center gap-2 hover:bg-green-400/10 hover:border-green-400 hover:text-green-400 transition-all duration-200"
            style={{ fontFamily: "var(--font-roboto-mono)" }}
          >
            <span className="material-symbols-outlined text-sm">alternate_email</span>
            [ OPEN_COMM_LINK ]
          </a>
        </motion.div>

        {/* Psycho-Pass coefficient strip */}
        <motion.div
          custom={7}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex items-center gap-4 mt-6"
          style={{ fontFamily: "var(--font-roboto-mono)" }}
        >
          <span className="text-[9px] text-zinc-400">犯罪係数:</span>
          <span className="text-[9px] hue-clear">0.00</span>
          <span className="text-zinc-400 text-[9px]">──</span>
          <span className="text-[9px] text-zinc-400">色相:</span>
          <span className="text-[9px] hue-clear">CLEAR</span>
          <span className="text-zinc-400 text-[9px]">──</span>
          <span className="text-[9px] text-zinc-400">公安局 第一係</span>
        </motion.div>

        {/* Signal bars */}
        <motion.div
          custom={8}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex gap-1 items-end h-8 mt-8"
        >
          {[8, 4, 2, 6, 3, 10, 5, 8, 4, 7].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h * 3}px` }}
              transition={{ delay: 1.2 + i * 0.05, duration: 0.4 }}
              className={i % 3 === 0 ? "w-1 bg-green-400" : "w-1 bg-zinc-800"}
            />
          ))}
          <span
            className="ml-4 text-[9px] text-zinc-400 self-end"
            style={{ fontFamily: "var(--font-roboto-mono)" }}
          >
            REALTIME_SIGNAL_FREQ: 440HZ
          </span>
        </motion.div>
      </div>
    </section>
  );
}
