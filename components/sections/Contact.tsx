"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="bg-zinc-950 border border-green-400/20 relative overflow-hidden"
      >
        {/* Top green line */}
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
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { label: "TARGET_ID", placeholder: "GUEST_USER", type: "text", required: true },
                {
                  label: "ENCRYPTION_SUBJECT",
                  placeholder: "PROJECT_PROPOSAL",
                  type: "text",
                  required: true,
                },
              ].map((field) => (
                <div key={field.label} className="flex flex-col">
                  <label
                    className="text-[9px] text-zinc-600 uppercase mb-2 tracking-widest"
                    style={{ fontFamily: "var(--font-roboto-mono)" }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    required={field.required}
                    placeholder={field.placeholder}
                    className="bg-transparent border-b border-zinc-700 focus:border-green-400 outline-none text-zinc-200 py-2 text-sm transition-colors placeholder:text-zinc-700"
                    style={{ fontFamily: "var(--font-roboto-mono)" }}
                  />
                </div>
              ))}

              <div className="flex flex-col">
                <label
                  className="text-[9px] text-zinc-600 uppercase mb-2 tracking-widest"
                  style={{ fontFamily: "var(--font-roboto-mono)" }}
                >
                  DATA_PAYLOAD
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="ENTER_MESSAGE_HERE..."
                  className="bg-transparent border-b border-zinc-700 focus:border-green-400 outline-none text-zinc-200 py-2 text-sm resize-none transition-colors placeholder:text-zinc-700"
                  style={{ fontFamily: "var(--font-roboto-mono)" }}
                />
              </div>

              <button
                type="submit"
                className="px-10 py-4 bg-green-400 text-black font-bold text-sm hover:bg-white transition-all w-full md:w-auto"
                style={{ fontFamily: "var(--font-roboto-mono)" }}
              >
                {sent ? "[ SIGNAL_SENT ✓ ]" : "[ SEND_SIGNAL ]"}
              </button>
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
                {
                  "// NOTICE: All communications are logged and processed via secondary secure protocols. Response latency: < 24H."
                }
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
