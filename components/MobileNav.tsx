"use client";

import { useState, useEffect } from "react";

const navItems = [
  { href: "#hero", icon: "grid_view", label: "HOME" },
  { href: "#about", icon: "person", label: "PROFILE" },
  { href: "#stack", icon: "sensors", label: "NET" },
  { href: "#experience", icon: "list_alt", label: "LOG" },
  { href: "#contact", icon: "settings_ethernet", label: "COMS" },
];

export default function MobileNav() {
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const sections = ["hero", "about", "stack", "experience", "contact"];
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
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 bg-zinc-950/90 backdrop-blur-lg border-t border-zinc-800 lg:hidden">
      {navItems.map((item) => {
        const isActive = active === item.href;
        return (
          <a
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center pt-1 transition-colors ${
              isActive
                ? "text-green-400 border-t-2 border-green-400"
                : "text-zinc-400 hover:text-zinc-400"
            }`}
          >
            <span className="material-symbols-outlined text-xl">
              {item.icon}
            </span>
            <span
              className="text-[9px] tracking-tight mt-0.5"
              style={{ fontFamily: "var(--font-roboto-mono)" }}
            >
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
