"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

type ProjectStatus = "ACTIVE" | "HIBERNATED";

interface Project {
  id: string;
  name: string;
  desc: string;
  tags: string[];
  status: ProjectStatus;
  category: string;
  url?: string;
}

const statusConfig: Record<ProjectStatus, { label: string; classes: string }> = {
  ACTIVE: {
    label: "ACTIVE",
    classes: "text-green-400 bg-green-950 border-green-900",
  },
  HIBERNATED: {
    label: "HIBERNATED",
    classes: "text-zinc-400 bg-zinc-900 border-zinc-700",
  },
};

const projects: Project[] = [
  {
    id: "PRJ-001",
    name: "Herramienta Cámaras",
    desc: "Plataforma de diagnóstico digital para Cámaras de Comercio. Genera reportes de madurez y planes de acción personalizados.",
    tags: ["DJANGO", "REACT", "CHART.JS", "PDF"],
    status: "ACTIVE",
    category: "DIAGNÓSTICO DIGITAL",
    url: "https://camaras.transformaciondigital.com.co/",
  },
  {
    id: "PRJ-002",
    name: "Empresas 4.0",
    desc: "Autodiagnóstico de transformación digital para organizaciones. Cuestionarios categorizados con perfil de madurez y recomendaciones.",
    tags: ["DJANGO", "REACT", "CKEDITOR", "POSTGRESQL"],
    status: "ACTIVE",
    category: "DIAGNÓSTICO DIGITAL",
    url: "https://empresas40.transformaciondigital.com.co/",
  },
  {
    id: "PRJ-003",
    name: "Comunidad ICETEX",
    desc: "Plataforma de diagnóstico para el ecosistema ICETEX. Retroalimentación inmediata, reportes PDF y envío por email.",
    tags: ["DJANGO", "DRF", "REACT", "HTML2PDF"],
    status: "ACTIVE",
    category: "DIAGNÓSTICO DIGITAL",
    url: "https://comunidadicetex.com/",
  },
  {
    id: "PRJ-004",
    name: "Transformación Digital",
    desc: "Plataforma integral de diagnóstico + mentoría entre pares. Reserva de sesiones, rating de mentores y sistema de roles.",
    tags: ["DJANGO", "REACT", "TYPESCRIPT", "POSTGRESQL"],
    status: "ACTIVE",
    category: "DIAGNÓSTICO DIGITAL",
    url: "https://transformaciondigital.com.co/",
  },
  {
    id: "PRJ-005",
    name: "Caracterización CENISOFT",
    desc: "Herramienta de caracterización para empresas del sector software. Genera diagnósticos del ecosistema TI colombiano.",
    tags: ["DJANGO", "REACT", "CHART.JS", "DRF"],
    status: "HIBERNATED",
    category: "DIAGNÓSTICO DIGITAL",
  },
  {
    id: "PRJ-006",
    name: "Conexiones CCC",
    desc: "Plataforma de networking empresarial para la Cámara de Comercio. Perfiles, directorio, solicitudes y mensajería.",
    tags: ["DJANGO", "DRF", "REACT", "SWAGGER"],
    status: "ACTIVE",
    category: "NETWORKING",
    url: "https://conexiones.wirkconsulting.com/",
  },
  {
    id: "PRJ-007",
    name: "OKR Management",
    desc: "Gestión de proyectos por metodología OKR. Jerarquía completa: Misión → Épica → Objetivo → Key Result → Tarea.",
    tags: ["DJANGO", "REACT", "TYPESCRIPT", "CHART.JS"],
    status: "ACTIVE",
    category: "GESTIÓN",
    url: "https://managment.wirkconsulting.com/",
  },
  {
    id: "PRJ-008",
    name: "Wirktools v2",
    desc: "Plataforma multi-tenant. Múltiples organizaciones con datos aislados, roles diferenciados y módulos abstraídos.",
    tags: ["DJANGO", "MULTI-TENANT", "DRF", "CKEDITOR"],
    status: "HIBERNATED",
    category: "PLATAFORMA",
  },
  {
    id: "PRJ-009",
    name: "Productividad 360° (IA)",
    desc: "Planificación empresarial asistida por IA para emprendedores ICETEX. Business Model Canvas + PMV + Groq/Llama 3.3 70B.",
    tags: ["GROQ", "LLAMA 3.3", "DJANGO", "REACT"],
    status: "ACTIVE",
    category: "IA / LLM",
    url: "https://productividad360.com.co/",
  },
  {
    id: "PRJ-010",
    name: "RCKlean",
    desc: "Cotizador de servicios de limpieza para cocinas industriales en EE.UU. Mapa interactivo, OTP y exportación PDF.",
    tags: ["DJANGO", "REACT", "VITE", "STYLED-COMP"],
    status: "ACTIVE",
    category: "SAAS / COTIZACIÓN",
    url: "https://rckapp.wirkconsulting.com/",
  },
  {
    id: "PRJ-011",
    name: "Landing Wirk Consulting",
    desc: "Sitio corporativo de Wirk Consulting SAS. Servicios, alianzas estratégicas y propuesta de valor de la consultora.",
    tags: ["REACT 19", "VITE", "TAILWIND 4", "TS"],
    status: "ACTIVE",
    category: "FRONTEND",
    url: "http://wirkconsulting.com/",
  },
  {
    id: "PRJ-012",
    name: "Landing Fundación I+D+I",
    desc: "Landing page de la Fundación de I+D+I. Misión, herramientas y áreas de impacto.",
    tags: ["REACT 19", "VITE", "GEMINI API", "TS"],
    status: "ACTIVE",
    category: "FRONTEND",
    url: "https://fidi.wirkconsulting.com/",
  },
  {
    id: "PRJ-013",
    name: "Landing ICETEX",
    desc: "Frontend de acceso al ecosistema de herramientas ICETEX. Punto de entrada para beneficiarios del programa.",
    tags: ["REACT", "TYPESCRIPT", "AOS", "AXIOS"],
    status: "HIBERNATED",
    category: "FRONTEND",
  },
  {
    id: "PRJ-014",
    name: "Dashboard ICESI",
    desc: "Dashboard de visualización de datos para la Universidad ICESI. Gráficas interactivas conectadas a backend Django.",
    tags: ["REACT", "CHART.JS", "TYPESCRIPT", "AXIOS"],
    status: "HIBERNATED",
    category: "FRONTEND",
  },
  {
    id: "PRJ-015",
    name: "Portfolio Personal",
    desc: "Landing page personal con estética NERV/terminal táctica. Next.js 16, Tailwind v4, Framer Motion y Web3Forms.",
    tags: ["NEXT.JS", "TAILWIND 4", "FRAMER", "TS"],
    status: "ACTIVE",
    category: "FRONTEND",
    url: "https://esgomezhe.vercel.app/#hero",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" className="py-20 border-b border-zinc-800" ref={ref}>
      {/* Header */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <div className="flex items-center gap-4 mb-3">
            <span
              className="text-[10px] text-green-400 tracking-widest"
              style={{ fontFamily: "var(--font-roboto-mono)" }}
            >
              [ MODULE_06 ]
            </span>
            <div className="h-px w-24 bg-zinc-800" />
          </div>
          <h3
            className="text-3xl md:text-4xl font-black text-zinc-100 tracking-widest uppercase mb-2"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            PROJECT_DATABASE
          </h3>
          <div className="w-16 h-0.5 bg-green-400" />
        </div>
        <span
          className="text-[10px] text-zinc-400 hidden md:block"
          style={{ fontFamily: "var(--font-roboto-mono)" }}
        >
          ENTRIES_FOUND: {String(projects.length).padStart(2, "0")}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800">
        {projects.map((project, i) => {
          const { label, classes } = statusConfig[project.status];
          const isHibernated = project.status === "HIBERNATED";
          const Wrapper = project.url ? "a" : "div";
          const wrapperProps = project.url
            ? { href: project.url, target: "_blank", rel: "noreferrer" }
            : {};

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <Wrapper
                {...wrapperProps}
                className={`block p-5 h-full bg-zinc-950 transition-colors group border-l-2 border-l-transparent ${
                  isHibernated
                    ? "opacity-50 hover:opacity-70"
                    : "hover:bg-zinc-900 hover:border-l-green-400"
                } ${project.url ? "cursor-pointer" : "cursor-default"}`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex flex-col gap-0.5">
                    <span
                      className="text-[9px] text-zinc-400"
                      style={{ fontFamily: "var(--font-roboto-mono)" }}
                    >
                      FILE_ID: {project.id}
                    </span>
                    <span
                      className="text-[8px] text-zinc-400 uppercase"
                      style={{ fontFamily: "var(--font-roboto-mono)" }}
                    >
                      {project.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.url && !isHibernated && (
                      <span className="material-symbols-outlined text-[14px] text-zinc-400 group-hover:text-green-400 transition-colors">
                        open_in_new
                      </span>
                    )}
                    <span
                      className={`px-2 py-0.5 border text-[8px] shrink-0 ${classes}`}
                      style={{ fontFamily: "var(--font-roboto-mono)" }}
                    >
                      {label}
                    </span>
                  </div>
                </div>

                <h4
                  className={`text-sm font-bold mb-2 uppercase transition-colors ${
                    isHibernated
                      ? "text-zinc-400"
                      : "text-white group-hover:text-green-400"
                  }`}
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {project.name}
                </h4>

                <p
                  className="text-[11px] text-zinc-400 mb-4 leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] px-2 py-0.5 bg-zinc-800 text-zinc-400 border border-zinc-700"
                      style={{ fontFamily: "var(--font-roboto-mono)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.url && !isHibernated && (
                  <div
                    className="mt-3 text-[9px] text-zinc-400 group-hover:text-green-400/60 transition-colors truncate"
                    style={{ fontFamily: "var(--font-roboto-mono)" }}
                  >
                    {project.url}
                  </div>
                )}
              </Wrapper>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
