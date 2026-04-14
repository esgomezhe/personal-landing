"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "#hero", icon: "terminal", label: "TERMINAL" },
  { href: "#about", icon: "person", label: "PROFILE" },
  { href: "#stack", icon: "hub", label: "NETWORK" },
  { href: "#experience", icon: "folder_open", label: "ARCHIVE" },
  { href: "#projects", icon: "deployed_code", label: "ASSETS" },
  { href: "#contact", icon: "settings_ethernet", label: "COMS" },
];

const BOOT_LINES = [
  { text: "> SIBYL OS v2.0.4 — INITIALIZING...", delay: 0.3 },
  { text: "> SCANNING OPERATOR IDENTITY...", delay: 0.7 },
  { text: "> BIOMETRIC MATCH: ESTEBAN G. HERNANDEZ", delay: 1.1 },
  { text: "> CRIME COEFFICIENT: 0.00", delay: 1.5 },
  { text: "> COLOR HUE STATUS: CLEAR", delay: 1.9 },
  { text: "> AUTH LEVEL: ADMIN — DIVISION 01", delay: 2.3 },
  { text: "> BACKEND_OS MODULES: ONLINE", delay: 2.7 },
  { text: "> ALL SYSTEMS NOMINAL", delay: 3.1 },
];

function BootScreen({ onDismiss }: { onDismiss: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onDismiss}
      className="fixed inset-0 z-[9999] bg-zinc-950 flex flex-col items-center justify-center cursor-pointer select-none"
    >
      {/* Scanline overlay */}
      <div className="absolute inset-0 scanline pointer-events-none" />

      <div className="max-w-lg w-full px-8 space-y-6">
        {/* Header */}
        <div className="text-center space-y-1 mb-8">
          <div
            className="text-2xl font-bold text-green-400 glow-text tracking-widest"
            style={{ fontFamily: "var(--font-roboto-mono)" }}
          >
            シビュラシステム
          </div>
          <div
            className="text-[10px] text-zinc-400 tracking-[0.4em] uppercase"
            style={{ fontFamily: "var(--font-roboto-mono)" }}
          >
            PUBLIC SAFETY BUREAU — 公安局 第一係
          </div>
          <div className="w-full h-px bg-zinc-800 mt-4" />
        </div>

        {/* Boot sequence lines */}
        <div className="space-y-2">
          {BOOT_LINES.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: line.delay, duration: 0.2 }}
              className={`text-[11px] ${
                line.text.includes("CLEAR") || line.text.includes("NOMINAL")
                  ? "hue-clear"
                  : line.text.includes("0.00")
                  ? "hue-clear"
                  : "text-zinc-400"
              }`}
              style={{ fontFamily: "var(--font-roboto-mono)" }}
            >
              {line.text}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.8, duration: 0.4 }}
          className="mt-10 text-center space-y-2"
        >
          <div className="w-full h-px bg-zinc-800" />
          <div
            className="text-sm text-green-400 glow-text tracking-widest pt-4 flex items-center justify-center gap-2"
            style={{ fontFamily: "var(--font-roboto-mono)" }}
          >
            <span className="cursor-blink font-bold text-lg">{">"}</span>
            {"_ CLICK ANYWHERE TO INITIALIZE SYSTEM"}
          </div>
          <div
            className="text-[9px] text-zinc-400 tracking-widest"
            style={{ fontFamily: "var(--font-roboto-mono)" }}
          >
            犯罪係数 0.00 — アクセス許可
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Sidebar() {
  const [active, setActive] = useState("#hero");
  const [bootScreen, setBootScreen] = useState(false);

  useEffect(() => {
    const sections = navItems.map((item) => item.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setBootScreen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <AnimatePresence>
        {bootScreen && (
          <BootScreen onDismiss={() => setBootScreen(false)} />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed left-0 top-0 h-full w-64 border-r border-zinc-800 hidden lg:flex flex-col justify-between py-6 bg-zinc-950 z-40"
      >
        {/* Logo */}
        <div className="px-6">
          <div
            className="text-lg font-bold text-green-400 mb-8 tracking-widest uppercase glow-text-subtle"
            style={{ fontFamily: "var(--font-roboto-mono)" }}
          >
            SOVEREIGN_OPS
          </div>

          {/* Operator badge */}
          <div className="flex items-center gap-3 mb-8 p-3 bg-zinc-900/50 border border-zinc-800">
            <div className="w-10 h-10 bg-green-400 flex items-center justify-center text-black font-bold text-sm shrink-0">
              EG
            </div>
            <div className="flex flex-col min-w-0">
              <span
                className="text-[10px] text-green-400 uppercase tracking-widest"
                style={{ fontFamily: "var(--font-roboto-mono)" }}
              >
                STATUS: ACTIVE
              </span>
              <span
                className="text-[9px] text-zinc-400 uppercase truncate"
                style={{ fontFamily: "var(--font-roboto-mono)" }}
              >
                AUTH_LEVEL: ADMIN
              </span>
              <span className="jp-label mt-0.5">犯罪係数: 0.00</span>
            </div>
            {/* Pulse dot */}
            <div className="ml-auto w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot shrink-0" />
          </div>

          {/* Nav links */}
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`flex items-center gap-3 p-3 transition-all duration-200 font-mono text-xs uppercase tracking-widest ${
                      isActive
                        ? "bg-green-400 text-black font-bold border-l-4 border-white"
                        : "text-zinc-400 hover:text-green-400 hover:bg-zinc-900"
                    }`}
                    style={{ fontFamily: "var(--font-roboto-mono)" }}
                  >
                    <span className="material-symbols-outlined text-sm">
                      {item.icon}
                    </span>
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Bottom actions */}
        <div className="px-6 space-y-4">
          <a
            href="#contact"
            className="block w-full bg-green-400 text-black font-bold py-3 text-center font-mono text-xs tracking-widest hover:bg-white transition-colors"
            style={{ fontFamily: "var(--font-roboto-mono)" }}
          >
            EXECUTE_SYNC
          </a>
          <button
            onClick={() => setBootScreen(true)}
            className="flex items-center gap-3 w-full text-zinc-400 p-3 font-mono text-xs tracking-widest hover:text-green-400 transition-colors cursor-pointer"
            style={{ fontFamily: "var(--font-roboto-mono)" }}
          >
            <span className="material-symbols-outlined text-sm">
              power_settings_new
            </span>
            LOG_OFF
          </button>
        </div>
      </motion.nav>
    </>
  );
}
