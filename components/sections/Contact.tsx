"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

const statusDisplay: Record<FormStatus, string> = {
  idle: "[ SEND_SIGNAL ]",
  sending: "[ TRANSMITTING... ]",
  success: "[ SIGNAL_CONFIRMED ✓ ]",
  error: "[ TRANSMISSION_FAILED ]",
};

const channels = [
  {
    icon: "mail",
    label: "EMAIL_CHANNEL",
    value: "esgomezhe@unal.edu.co",
    href: "mailto:esgomezhe@unal.edu.co",
  },
  {
    icon: "terminal",
    label: "GITHUB_REPO",
    value: "github.com/esgomezhe",
    href: "https://github.com/esgomezhe",
  },
  {
    icon: "hub",
    label: "LINKEDIN_NODE",
    value: "linkedin.com/in/esgomezhe",
    href: "https://linkedin.com/in/esgomezhe",
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "0801fbf1-b8d3-495c-a4b4-eb5e77fd6653");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        formRef.current?.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const isDisabled = status === "sending";

  return (
    <section id="contact" className="py-20" ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="bg-zinc-950 border border-green-400/20 relative overflow-hidden"
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-green-400" />

        <div className="p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
            <h3
              className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-green-400 glow-text"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              ESTABLISH_COMM_LINK
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
              {/* Web3Forms: sets the email subject line */}
              <input type="hidden" name="subject" value="Nuevo mensaje desde el portfolio — esgomezhe.dev" />
              {/* Name */}
              <div className="flex flex-col">
                <label
                  htmlFor="contact-name"
                  className="text-[9px] text-zinc-600 uppercase mb-2 tracking-widest"
                  style={{ fontFamily: "var(--font-roboto-mono)" }}
                >
                  TARGET_ID
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  placeholder="Tu nombre completo"
                  disabled={isDisabled}
                  className="bg-transparent border-b border-zinc-700 focus:border-green-400 outline-none text-zinc-200 py-2 text-sm transition-colors placeholder:text-zinc-700 disabled:opacity-40"
                  style={{ fontFamily: "var(--font-roboto-mono)" }}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label
                  htmlFor="contact-email"
                  className="text-[9px] text-zinc-600 uppercase mb-2 tracking-widest"
                  style={{ fontFamily: "var(--font-roboto-mono)" }}
                >
                  RETURN_ADDRESS
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  disabled={isDisabled}
                  className="bg-transparent border-b border-zinc-700 focus:border-green-400 outline-none text-zinc-200 py-2 text-sm transition-colors placeholder:text-zinc-700 disabled:opacity-40"
                  style={{ fontFamily: "var(--font-roboto-mono)" }}
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col">
                <label
                  htmlFor="contact-subject"
                  className="text-[9px] text-zinc-600 uppercase mb-2 tracking-widest"
                  style={{ fontFamily: "var(--font-roboto-mono)" }}
                >
                  ENCRYPTION_SUBJECT
                </label>
                <input
                  id="contact-subject"
                  name="topic"
                  type="text"
                  required
                  minLength={3}
                  placeholder="Propuesta de proyecto / Colaboración / Consulta"
                  disabled={isDisabled}
                  className="bg-transparent border-b border-zinc-700 focus:border-green-400 outline-none text-zinc-200 py-2 text-sm transition-colors placeholder:text-zinc-700 disabled:opacity-40"
                  style={{ fontFamily: "var(--font-roboto-mono)" }}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label
                  htmlFor="contact-message"
                  className="text-[9px] text-zinc-600 uppercase mb-2 tracking-widest"
                  style={{ fontFamily: "var(--font-roboto-mono)" }}
                >
                  DATA_PAYLOAD
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  minLength={10}
                  placeholder="Contame de tu proyecto, idea o propuesta..."
                  disabled={isDisabled}
                  className="bg-transparent border-b border-zinc-700 focus:border-green-400 outline-none text-zinc-200 py-2 text-sm resize-none transition-colors placeholder:text-zinc-700 disabled:opacity-40"
                  style={{ fontFamily: "var(--font-roboto-mono)" }}
                />
              </div>

              {/* Submit + feedback */}
              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={isDisabled}
                  className={`px-10 py-4 font-bold text-sm transition-all w-full md:w-auto disabled:cursor-not-allowed ${
                    status === "success"
                      ? "bg-green-400 text-black"
                      : status === "error"
                      ? "bg-red-500/80 text-white"
                      : "bg-green-400 text-black hover:bg-white disabled:opacity-60"
                  }`}
                  style={{ fontFamily: "var(--font-roboto-mono)" }}
                >
                  {statusDisplay[status]}
                </button>

                {/* Inline status message */}
                {status === "success" && (
                  <p
                    className="text-[10px] text-green-400"
                    style={{ fontFamily: "var(--font-roboto-mono)" }}
                  >
                    // Señal recibida. Respuesta en menos de 24H.
                  </p>
                )}
                {status === "error" && (
                  <p
                    className="text-[10px] text-red-400"
                    style={{ fontFamily: "var(--font-roboto-mono)" }}
                  >
                    // Error en la transmisión. Intentá de nuevo o usá el email directo.
                  </p>
                )}
              </div>
            </form>

            {/* Channels */}
            <div className="flex flex-col justify-center gap-8 lg:border-l border-zinc-800 lg:pl-12">
              <div>
                <div
                  className="text-[9px] text-zinc-600 tracking-widest mb-5 uppercase"
                  style={{ fontFamily: "var(--font-roboto-mono)" }}
                >
                  ACTIVE_DATA_CHANNELS
                </div>

                <div className="space-y-4">
                  {channels.map((ch) => (
                    <a
                      key={ch.label}
                      href={ch.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-4 text-zinc-400 hover:text-green-400 transition-colors group"
                    >
                      <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">
                        {ch.icon}
                      </span>
                      <div>
                        <div
                          className="text-[9px] text-zinc-600 mb-0.5"
                          style={{ fontFamily: "var(--font-roboto-mono)" }}
                        >
                          {ch.label}
                        </div>
                        <div
                          className="text-xs"
                          style={{ fontFamily: "var(--font-roboto-mono)" }}
                        >
                          {ch.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div
                className="p-4 bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-600 leading-relaxed italic"
                style={{ fontFamily: "var(--font-roboto-mono)" }}
              >
                {"// NOTICE: All communications are logged and processed via secondary secure protocols. Response latency: < 24H."}
              </div>

              <div className="flex gap-3 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
                <span
                  className="text-[10px] text-green-400/70"
                  style={{ fontFamily: "var(--font-roboto-mono)" }}
                >
                  CONTACT_CHANNEL: OPEN
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
