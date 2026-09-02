import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "./AboutSection";

const responsibilities = [
  "Real-time SIEM monitoring using Wazuh across enterprise endpoints",
  "Log analysis from firewalls, servers, and network devices",
  "Investigation of EDR/XDR alerts via SentinelOne platform",
  "Threat hunting and pattern recognition across event streams",
  "Mapping attacker TTPs to the MITRE ATT&CK framework",
  "CVE analysis and vulnerability risk assessment",
  "Incident response triage and escalation workflow",
];

const tools = ["Wazuh", "SentinelOne", "Palo Alto", "Wireshark", "MITRE ATT&CK", "Kali Linux"];

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} style={{
      padding: "7rem 2rem",
      background: "#0a0d14",
      position: "relative",
      zIndex: 1,
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader label="02" title="Experience" />

          <div style={{ marginTop: "3rem", position: "relative" }}>
            {/* Timeline line */}
            <div style={{
              position: "absolute",
              left: "16px", top: "28px", bottom: 0,
              width: "1px",
              background: "linear-gradient(180deg, #3b82f6 0%, rgba(59,130,246,0.05) 100%)",
            }} />

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{ marginLeft: "52px", position: "relative" }}
            >
              {/* Dot */}
              <div style={{
                position: "absolute",
                left: "-44px", top: "22px",
                width: "14px", height: "14px",
                borderRadius: "50%",
                background: "#3b82f6",
                border: "3px solid #0d1117",
                boxShadow: "0 0 12px rgba(59,130,246,0.5)",
              }} />

              {/* Card */}
              <div style={{
                background: "#161b22",
                border: "1px solid #21262d",
                borderRadius: "12px",
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                  background: "linear-gradient(90deg, #3b82f6, transparent)",
                }} />

                {/* Header */}
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1.5rem",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}>
                  <div>
                    <h3 style={{ color: "#f0f6fc", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.2rem" }}>
                      SOC Analyst Intern
                    </h3>
                    <p style={{ color: "#60a5fa", fontSize: "0.88rem", fontWeight: 500 }}>
                      Necurity Solution Private Limited
                    </p>
                  </div>
                  <span style={{
                    padding: "5px 12px",
                    background: "rgba(59,130,246,0.1)",
                    border: "1px solid rgba(59,130,246,0.25)",
                    borderRadius: "20px",
                    fontSize: "0.75rem",
                    color: "#60a5fa",
                    fontFamily: "monospace",
                  }}>
                    Oct 2025 — Present
                  </span>
                </div>

                {/* Responsibilities */}
                <div style={{ marginBottom: "1.75rem" }}>
                  <p style={{
                    fontSize: "0.68rem", letterSpacing: "2px", color: "rgba(59,130,246,0.5)",
                    fontFamily: "monospace", marginBottom: "1rem", textTransform: "uppercase",
                  }}>Key Responsibilities</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
                    {responsibilities.map((r, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + i * 0.06 }}
                        style={{
                          display: "flex", alignItems: "flex-start",
                          gap: "8px", fontSize: "0.83rem", color: "#6e7f8d", lineHeight: 1.5,
                        }}
                      >
                        <span style={{ color: "#3b82f6", flexShrink: 0, fontSize: "0.65rem", marginTop: "4px" }}>▸</span>
                        {r}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <p style={{
                    fontSize: "0.68rem", letterSpacing: "2px", color: "rgba(59,130,246,0.4)",
                    fontFamily: "monospace", marginBottom: "0.75rem", textTransform: "uppercase",
                  }}>Tools Used</p>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {tools.map(t => (
                      <span key={t} style={{
                        padding: "4px 11px",
                        background: "rgba(59,130,246,0.07)",
                        border: "1px solid #21262d",
                        borderRadius: "5px",
                        fontSize: "0.76rem",
                        color: "#8b949e",
                        fontFamily: "monospace",
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #experience .resp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
