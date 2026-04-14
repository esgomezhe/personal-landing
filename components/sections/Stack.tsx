"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    icon: "code",
    label: "LANGUAGES",
    items: [
      { name: "PYTHON", level: 95 },
      { name: "JAVASCRIPT / TS", level: 80 },
      { name: "PHP", level: 65 },
    ],
  },
  {
    icon: "layers",
    label: "FRAMEWORKS",
    items: [
      { name: "DJANGO REST FW", level: 92 },
      { name: "FASTAPI", level: 88 },
      { name: "REACT / ANGULAR", level: 72 },
    ],
  },
  {
    icon: "database",
    label: "DATABASES",
    items: [
      { name: "POSTGRESQL", level: 88 },
      { name: "MYSQL / SQLITE", level: 82 },
      { name: "MSSQL SERVER", level: 70 },
    ],
  },
  {
    icon: "cloud",
    label: "INFRA & DEPLOY",
    items: [
      { name: "NGINX / UVICORN", level: 85 },
      { name: "DOCKER / GCP", level: 78 },
      { name: "APACHE", level: 72 },
    ],
  },
  {
    icon: "bug_report",
    label: "TESTING & TOOLS",
    items: [
      { name: "PYTEST / UNITTEST", level: 85 },
      { name: "POSTMAN / GIT", level: 90 },
    ],
  },
  {
    icon: "neurology",
    label: "AI / INTEGRATIONS",
    items: [
      { name: "LLM / LANGCHAIN", level: 82 },
      { name: "ERP / CRM APIs", level: 78 },
      { name: "WORDPRESS / DRUPAL", level: 75 },
    ],
  },
];

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-10">
    <div className="flex items-center gap-4 mb-3">
      <span
        className="text-[10px] text-green-400 tracking-widest"
        style={{ fontFamily: "var(--font-roboto-mono)" }}
      >
        [ MODULE_03 ]
      </span>
      <div className="h-px flex-1 bg-zinc-800" />
    </div>
    <h3
      className="text-3xl md:text-4xl font-black text-zinc-100 tracking-widest uppercase mb-2"
      style={{ fontFamily: "var(--font-space-grotesk)" }}
    >
      {children}
    </h3>
    <div className="w-16 h-0.5 bg-green-400" />
  </div>
);

export default function Stack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stack" className="py-20 border-b border-zinc-800" ref={ref}>
      <SectionLabel>CORE_ENGINE_SPECS</SectionLabel>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, catIdx) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: catIdx * 0.08, duration: 0.5 }}
            className="p-5 border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-colors"
          >
            {/* Category header */}
            <div className="flex items-center gap-2 mb-5">
              <span className="material-symbols-outlined text-green-400 text-lg">
                {cat.icon}
              </span>
              <span
                className="text-[11px] tracking-widest text-zinc-400"
                style={{ fontFamily: "var(--font-roboto-mono)" }}
              >
                {cat.label}
              </span>
            </div>

            {/* Skill bars */}
            <div className="space-y-4">
              {cat.items.map((item, i) => (
                <div key={item.name}>
                  <div
                    className="flex justify-between text-[10px] mb-1.5"
                    style={{ fontFamily: "var(--font-roboto-mono)" }}
                  >
                    <span className="text-zinc-300">{item.name}</span>
                    <span className="text-green-400">{item.level}%</span>
                  </div>
                  <div className="h-0.5 bg-zinc-800 overflow-hidden">
                    <motion.div
                      className="h-full bg-green-400"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${item.level}%` } : {}}
                      transition={{
                        delay: catIdx * 0.08 + i * 0.1 + 0.3,
                        duration: 1,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tech tags grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-10 flex flex-wrap gap-2"
      >
        {[
          "Python", "Django", "FastAPI", "React", "Angular", "PostgreSQL",
          "MySQL", "Docker", "Nginx", "Git", "Pytest", "Postman",
          "LangChain", "OpenAI", "WordPress", "Drupal",
        ].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 border border-zinc-700 text-[10px] text-zinc-400 hover:border-green-400/50 hover:text-green-400 transition-all cursor-default"
            style={{ fontFamily: "var(--font-roboto-mono)" }}
          >
            {tech.toUpperCase()}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
