"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const certifications = [
  "Machine Learning con scikit-learn",
  "Django REST Framework",
  "FastAPI — Desarrollo de APIs modernas",
  "Análisis de Datos con Pandas y Matplotlib",
  "Machine Learning / Data Science en Python",
];

export default function Credentials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="credentials" className="py-20 border-b border-zinc-800" ref={ref}>
      <div className="flex items-center gap-4 mb-3">
        <span
          className="text-[10px] text-green-400 tracking-widest"
          style={{ fontFamily: "var(--font-roboto-mono)" }}
        >
          [ MODULE_07 ]
        </span>
        <div className="h-px flex-1 bg-zinc-800" />
      </div>
      <h3
        className="text-3xl md:text-4xl font-black text-zinc-100 tracking-widest uppercase mb-2"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        CREDENTIALS
      </h3>
      <div className="w-16 h-0.5 bg-green-400 mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div
            className="text-[10px] text-green-400 mb-5 tracking-widest uppercase"
            style={{ fontFamily: "var(--font-roboto-mono)" }}
          >
            ACADEMIC_RECORDS
          </div>

          <div className="p-5 border-l-2 border-green-400 bg-zinc-900/40 border border-zinc-800 relative">
            <div className="bracket-top-right" />
            <div
              className="text-[9px] text-zinc-600 mb-2"
              style={{ fontFamily: "var(--font-roboto-mono)" }}
            >
              RECORD_ID: EDU_001
            </div>
            <div
              className="text-sm font-bold text-white mb-1"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              INGENIERÍA FÍSICA
            </div>
            <div
              className="text-[10px] text-zinc-500 uppercase mb-3"
              style={{ fontFamily: "var(--font-roboto-mono)" }}
            >
              UNIVERSIDAD NACIONAL DE COLOMBIA
            </div>
            <div
              className="text-[9px] text-zinc-400 bg-zinc-900 border-zinc-700 inline-block px-2 py-0.5"
              style={{ fontFamily: "var(--font-roboto-mono)" }}
            >
              STATUS: COMPLETED
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div
            className="text-[10px] text-amber-400 mb-5 tracking-widest uppercase"
            style={{ fontFamily: "var(--font-roboto-mono)" }}
          >
            CERTIFICATIONS
          </div>

          <div className="space-y-2">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: 16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }}
                className="flex items-center gap-3 p-3 border border-zinc-800 hover:bg-zinc-900 hover:border-zinc-700 transition-all group"
              >
                <span className="material-symbols-outlined text-amber-400 text-lg group-hover:scale-110 transition-transform">
                  verified
                </span>
                <span
                  className="text-[11px] text-zinc-300 group-hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-roboto-mono)" }}
                >
                  {cert.toUpperCase()}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
