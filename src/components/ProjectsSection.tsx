import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "./AboutSection";

const projects = [
  {
    id: 1,
    title: "Log Monitoring & Threat Detection Lab",
    category: "Security Lab",
    color: "#3b82f6",
    description:
      "Built attacker and defender VM environments to simulate real-world attack scenarios. Configured centralized log collection pipelines and developed Python scripts to parse logs and detect anomalies.",
    highlights: [
      "Configured attacker & defender VMs with isolated network",
      "Set up centralized log aggregation pipeline",
      "Developed Python scripts for log parsing & anomaly detection",
      "Simulated attack patterns and tested detection accuracy",
    ],
    tags: ["Python", "VM", "Log Analysis", "SIEM", "Anomaly Detection"],
    icon: "🔍",
  },
  {
    id: 2,
    title: "MFA Security Lab",
    category: "Identity & Access Management",
    color: "#60a5fa",
    description:
      "Designed and implemented OTP-based Multi-Factor Authentication using privacyIDEA on Linux, strengthening IAM controls. Simulated credential-based attacks to test and validate MFA effectiveness.",
    highlights: [
      "Deployed privacyIDEA on Linux for OTP-based MFA",
      "Designed IAM control policies and enforcement rules",
      "Simulated phishing and credential stuffing attacks",
      "Documented MFA bypass attempts and countermeasures",
    ],
    tags: ["privacyIDEA", "Linux", "MFA", "IAM", "OTP", "Security Testing"],
    icon: "🔐",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" ref={ref} style={{
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
          <SectionHeader label="04" title="Projects" />

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
            marginTop: "3rem",
          }}>
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: hovered === p.id ? "#1c2333" : "#161b22",
                  border: `1px solid ${hovered === p.id ? "#30363d" : "#21262d"}`,
                  borderRadius: "12px",
                  padding: "1.75rem",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                  cursor: "default",
                }}
              >
                <div style={{
                  position: "absolute", top: 0, left: 0,
                  right: hovered === p.id ? 0 : "70%",
                  height: "2px",
                  background: `linear-gradient(90deg, ${p.color}, transparent)`,
                  transition: "right 0.3s ease",
                }} />

                {/* Header */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.85rem", marginBottom: "1rem" }}>
                  <span style={{
                    fontSize: "1.6rem",
                    background: `rgba(59,130,246,0.08)`,
                    border: "1px solid #21262d",
                    borderRadius: "8px",
                    padding: "8px 10px",
                    lineHeight: 1,
                    flexShrink: 0,
                  }}>{p.icon}</span>
                  <div>
                    <p style={{
                      fontSize: "0.65rem", color: p.color, letterSpacing: "2px",
                      fontFamily: "monospace", textTransform: "uppercase", marginBottom: "0.2rem",
                    }}>{p.category}</p>
                    <h3 style={{ color: "#f0f6fc", fontSize: "1rem", fontWeight: 700, lineHeight: 1.3 }}>
                      {p.title}
                    </h3>
                  </div>
                </div>

                <p style={{ color: "#6e7f8d", fontSize: "0.83rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  {p.description}
                </p>

                {/* Highlights */}
                <div style={{ marginBottom: "1.25rem" }}>
                  {p.highlights.map((h, hi) => (
                    <div key={hi} style={{
                      display: "flex", alignItems: "flex-start",
                      gap: "8px", marginBottom: "0.4rem",
                      fontSize: "0.8rem", color: "#6e7f8d",
                    }}>
                      <span style={{ color: p.color, flexShrink: 0, fontSize: "0.6rem", marginTop: "4px" }}>▸</span>
                      {h}
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{
                      padding: "3px 9px",
                      background: "rgba(59,130,246,0.06)",
                      border: "1px solid #21262d",
                      borderRadius: "4px",
                      fontSize: "0.7rem",
                      color: "#8b949e",
                      fontFamily: "monospace",
                    }}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #projects > div > div > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
