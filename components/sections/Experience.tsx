"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    timestamp: "ENE 2025 — PRESENTE",
    role: "BACKEND DEVELOPER / IT LEAD",
    company: "WIRK CONSULTING SAS",
    status: "ACTIVE",
    statusColor: "text-green-400 bg-green-950 border-green-800",
    dotColor: "border-green-400",
    innerDot: "bg-green-400",
    description:
      "Lidero el equipo técnico backend, definiendo arquitectura y estándares de calidad. Desarrollo APIs de alto rendimiento con Django REST Framework y FastAPI. Implemento soluciones con LLMs que redujeron la carga operativa en un 40%. Gestiono despliegues en producción con Nginx y Uvicorn.",
    tags: ["PYTHON", "FASTAPI", "LLMs", "TECH_LEAD"],
  },
  {
    timestamp: "AGO 2023 — ENE 2025",
    role: "FULL STACK DEVELOPER / PYTHON DEVELOPER",
    company: "WIRK CONSULTING SAS",
    status: "COMPLETED",
    statusColor: "text-zinc-400 bg-zinc-900 border-zinc-700",
    dotColor: "border-zinc-600",
    innerDot: "bg-zinc-600",
    description:
      "Desarrollé APIs REST e integré sistemas ERP y CRM con plataformas de terceros. Construí módulos de analítica de datos con Python y Django. Contribuí al desarrollo frontend con React y Angular cuando el proyecto lo requería.",
    tags: ["DJANGO", "REACT", "ERP/CRM", "DATA"],
  },
  {
    timestamp: "ABR 2020 — MAR 2023",
    role: "WEBMASTER / WORDPRESS DEVELOPER",
    company: "ESMART DIGITAL",
    status: "ARCHIVED",
    statusColor: "text-blue-400 bg-blue-950 border-blue-800",
    dotColor: "border-zinc-700",
    innerDot: "bg-zinc-700",
    description:
      "Desarrollé y mantuve sitios web corporativos sobre WordPress y Drupal. Primeros proyectos con PHP, optimización de performance y gestión de servidores Apache.",
    tags: ["WORDPRESS", "PHP", "DRUPAL"],
  },
  {
    timestamp: "JUN 2020 — SEP 2020",
    role: "ESTUDIANTE AUXILIAR / PYTHON DEVELOPER",
    company: "UNIVERSIDAD NACIONAL DE COLOMBIA",
    status: "ARCHIVED",
    statusColor: "text-blue-400 bg-blue-950 border-blue-800",
    dotColor: "border-zinc-700",
    innerDot: "bg-zinc-700",
    description:
      "Desarrollo de herramientas de análisis de datos con Python en contexto de investigación académica. Primeros acercamientos a machine learning y procesamiento de datos.",
    tags: ["PYTHON", "DATA", "RESEARCH"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="experience" className="py-20 border-b border-zinc-800" ref={ref}>
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-3">
          <span
            className="text-[10px] text-green-400 tracking-widest"
            style={{ fontFamily: "var(--font-roboto-mono)" }}
          >
            [ MODULE_04 ]
          </span>
          <span className="jp-label">&gt; 任務記録</span>
          <div className="h-px flex-1 bg-zinc-800" />
        </div>
        <h3
          className="text-3xl md:text-4xl font-black text-zinc-100 tracking-widest uppercase mb-2"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          MISSION_LOGS
        </h3>
        <div className="w-16 h-0.5 bg-green-400" />
      </div>

      {/* Timeline */}
      <div className="relative space-y-6">
        {/* Vertical line */}
        <div className="absolute left-3 top-3 bottom-3 w-px bg-zinc-800" />

        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="relative pl-12 group"
          >
            {/* Dot */}
            <div
              className={`absolute left-0 top-2 w-7 h-7 bg-zinc-950 border ${item.dotColor} flex items-center justify-center`}
            >
              <div className={`w-2 h-2 ${item.innerDot}`} />
            </div>

            {/* Card */}
            <div
              className={`p-5 bg-zinc-900/50 border border-zinc-800 group-hover:border-zinc-600 transition-colors ${
                i === 0 ? "border-l-2 border-l-green-400" : ""
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <div
                    className="text-[9px] text-green-400 mb-1"
                    style={{ fontFamily: "var(--font-roboto-mono)" }}
                  >
                    TIMESTAMP: {item.timestamp}
                  </div>
                  <h4
                    className="text-sm md:text-base font-bold text-white"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {item.role}
                  </h4>
                  <div
                    className="text-[10px] text-zinc-400 mt-0.5"
                    style={{ fontFamily: "var(--font-roboto-mono)" }}
                  >
                    {item.company}
                  </div>
                </div>
                <span
                  className={`px-2 py-0.5 border text-[8px] shrink-0 ${item.statusColor}`}
                  style={{ fontFamily: "var(--font-roboto-mono)" }}
                >
                  {item.status}
                </span>
              </div>

              <p
                className="text-xs text-zinc-400 leading-relaxed mb-3"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {item.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] px-2 py-0.5 bg-zinc-800 text-zinc-400 border border-zinc-700"
                    style={{ fontFamily: "var(--font-roboto-mono)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
