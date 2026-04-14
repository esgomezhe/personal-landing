"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const tags = ["PYTHON_EXPERT", "API_ARCHITECT", "LLM_INTEGRATOR", "TECH_LEAD"];

const metrics = [
  { label: "SYSTEM_EFFICIENCY", value: 94, color: "bg-green-400" },
  { label: "API_RELIABILITY", value: 99, color: "bg-amber-400" },
  { label: "CODE_COVERAGE", value: 87, color: "bg-green-400" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 border-b border-zinc-800" ref={ref}>
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="bracket-top-left" />
          <div className="bracket-bottom-right" />
          <div className="p-8 bg-zinc-950/50 border border-zinc-800/50">
            <div
              className="text-[9px] text-zinc-600 mb-4 tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-roboto-mono)" }}
            >
              OPERATOR_PROFILE_V2
            </div>

            <h3
              className="text-2xl md:text-3xl font-bold mb-6 tracking-wide text-white"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              BACKEND ARCHITECT
              <br />
              <span className="text-green-400">&amp; AI INTEGRATOR</span>
            </h3>

            <p
              className="text-zinc-400 leading-relaxed text-sm mb-6"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Backend Developer especializado en construir sistemas de misión
              crítica con Python. Mi expertise está en diseñar arquitecturas API
              robustas, optimizar flujos de datos e integrar soluciones de IA de forma
              efectiva. Transformo lógica de negocio compleja en infraestructura digital
              escalable, confiable y de alto rendimiento.
            </p>

            <p
              className="text-zinc-500 leading-relaxed text-xs mb-6"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Con experiencia liderando equipos técnicos, definiendo arquitectura,
              estableciendo estándares de calidad e integrando soluciones con LLMs,
              ERPs y analítica avanzada en entornos empresariales reales.
            </p>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-zinc-800 text-[10px] text-green-400 border border-zinc-700"
                  style={{ fontFamily: "var(--font-roboto-mono)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Metrics / visual side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-4"
        >
          {/* System metrics */}
          <div className="p-6 bg-zinc-900 border border-zinc-800">
            <div
              className="text-[9px] text-zinc-600 mb-5 tracking-widest uppercase"
              style={{ fontFamily: "var(--font-roboto-mono)" }}
            >
              SYSTEM_DIAGNOSTICS
            </div>
            <div className="space-y-5">
              {metrics.map((m, i) => (
                <div key={m.label}>
                  <div
                    className="flex justify-between text-[10px] mb-1.5"
                    style={{ fontFamily: "var(--font-roboto-mono)" }}
                  >
                    <span className="text-zinc-400">{m.label}</span>
                    <span className="text-green-400">{m.value}%</span>
                  </div>
                  <div className="h-1 bg-zinc-800 overflow-hidden">
                    <motion.div
                      className={`h-full ${m.color}`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${m.value}%` } : {}}
                      transition={{ delay: 0.3 + i * 0.15, duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Info panels */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "YEARS_EXP", value: "5+", sub: "YEARS IN PRODUCTION" },
              { label: "SYSTEMS", value: "12+", sub: "DEPLOYED PROJECTS" },
              { label: "STACK_COVERAGE", value: "FULL", sub: "BACKEND TO DEPLOY" },
              { label: "AVAILABILITY", value: "OPEN", sub: "CONTACT_CHANNEL" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-4 bg-zinc-900/60 border border-zinc-800 relative group hover:border-green-400/30 transition-colors"
              >
                <div
                  className="text-[9px] text-zinc-600 mb-1"
                  style={{ fontFamily: "var(--font-roboto-mono)" }}
                >
                  {item.label}
                </div>
                <div
                  className="text-xl font-bold text-green-400"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {item.value}
                </div>
                <div
                  className="text-[9px] text-zinc-600 mt-1"
                  style={{ fontFamily: "var(--font-roboto-mono)" }}
                >
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
