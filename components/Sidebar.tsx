"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { href: "#hero", icon: "terminal", label: "TERMINAL" },
  { href: "#about", icon: "person", label: "PROFILE" },
  { href: "#stack", icon: "hub", label: "NETWORK" },
  { href: "#experience", icon: "folder_open", label: "ARCHIVE" },
  { href: "#projects", icon: "deployed_code", label: "ASSETS" },
  { href: "#contact", icon: "settings_ethernet", label: "COMS" },
];

export default function Sidebar() {
  const [active, setActive] = useState("#hero");

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

  return (
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
              className="text-[9px] text-zinc-500 uppercase truncate"
              style={{ fontFamily: "var(--font-roboto-mono)" }}
            >
              AUTH_LEVEL: ADMIN
            </span>
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
                      : "text-zinc-500 hover:text-green-400 hover:bg-zinc-900"
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
        <div
          className="flex items-center gap-3 text-zinc-600 p-3 font-mono text-xs tracking-widest hover:text-white transition-colors cursor-pointer"
          style={{ fontFamily: "var(--font-roboto-mono)" }}
        >
          <span className="material-symbols-outlined text-sm">
            power_settings_new
          </span>
          LOG_OFF
        </div>
      </div>
    </motion.nav>
  );
}
