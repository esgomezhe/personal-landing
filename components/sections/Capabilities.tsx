"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  {
    icon: "api",
    title: "API DEVELOPMENT",
    desc: "Diseño e implementación de APIs REST robustas con Django REST Framework y FastAPI. Foco en baja latencia, seguridad y documentación.",
  },
  {
    icon: "account_tree",
    title: "BACKEND ARCHITECTURE",
    desc: "Arquitectura de sistemas escalables usando principios Clean y Hexagonal. Microservicios, workers en segundo plano y separación de responsabilidades.",
  },
  {
    icon: "hub",
    title: "EXTERNAL INTEGRATIONS",
    desc: "Integración con ERPs, CRMs, plataformas SaaS y APIs de terceros. Experiencia con sistemas de pagos, autenticación y sincronización de datos.",
  },
  {
    icon: "neurology",
    title: "DATA & AI WORKFLOWS",
    desc: "Implementación de agentes LLM, análisis predictivo y machine learning en flujos operativos. Python + LangChain + pandas.",
  },
  {
    icon: "cloud_done",
    title: "DEPLOYMENT & INFRA",
    desc: "Despliegue en producción con Nginx, Uvicorn, Apache y Docker. Gestión de servidores Linux, configuración SSL y monitoreo básico.",
  },
  {
    icon: "groups",
    title: "TECHNICAL LEADERSHIP",
    desc: "Liderazgo de equipos pequeños, definición de estándares, code reviews y gestión de deuda técnica bajo metodologías ágiles.",
  },
];

export default function Capabilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="capabilities" className="py-20 border-b border-zinc-800" ref={ref}>
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-3">
          <span
            className="text-[10px] text-green-400 tracking-widest"
            style={{ fontFamily: "var(--font-roboto-mono)" }}
          >
            [ MODULE_05 ]
          </span>
          <span className="jp-label">&gt; 執行官システム</span>
          <div className="h-px flex-1 bg-zinc-800" />
        </div>
        <h3
          className="text-3xl md:text-4xl font-black text-zinc-100 tracking-widest uppercase mb-2"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          SYSTEM_CAPABILITIES
        </h3>
        <div className="w-16 h-0.5 bg-green-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.title}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="p-7 border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 hover:border-green-400/30 transition-all duration-300 group relative"
          >
            <div className="bracket-top-left opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="bracket-bottom-right opacity-0 group-hover:opacity-100 transition-opacity" />

            <span className="material-symbols-outlined text-4xl text-green-400 mb-4 block group-hover:scale-105 transition-transform duration-200">
              {cap.icon}
            </span>
            <h4
              className="font-bold text-base text-white mb-3"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {cap.title}
            </h4>
            <p
              className="text-[11px] text-zinc-400 leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {cap.desc}
            </p>

            {/* Bottom status line */}
            <div
              className="mt-4 text-[9px] text-green-400/50 group-hover:text-green-400 transition-colors"
              style={{ fontFamily: "var(--font-roboto-mono)" }}
            >
              MODULE_STATUS: OPERATIONAL
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
