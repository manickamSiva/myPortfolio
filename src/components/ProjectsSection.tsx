import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "./AboutSection";

const projects = [
  {
    id: 1,
    title: "MiniSIEM — Windows Security Monitoring Dashboard",
    category: "Security Lab",
    color: "#3b82f6",
    description:
      "Built a real-time, local SIEM for Windows environments — collecting,normalizing, storing, and visualizing Security and Application event logs, with rule-based threat detection mapped to MITRE ATT&CK.",
    highlights: [
      "Built a pywin32-based log collector polling Windows Security & Application event logs in near real-time",
      "Normalized raw Windows events into structured, MITRE ATT&CK-tagged records across a SQLite backend",
      "Implemented rule-based detection for brute-force authentication attacks and after-hours logon anomalies",
      "Built a FastAPI backend + Alpine.js dashboard for live event filtering, alert investigation, and incident status tracking",
    ],
    tags: ["Python", "FastAPI", "Windows Event Logs", "MITRE ATT&CK", "Alpine.js"],
    icon: "🔍",
    github: "https://github.com/manickamSiva/Local_siem_dashbord",
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
    github: null,
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
                  display: "flex",
                  flexDirection: "column",
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
                <div style={{
                  display: "flex", alignItems: "flex-start",
                  justifyContent: "space-between", gap: "0.75rem", marginBottom: "1rem",
                }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.85rem" }}>
                    <span style={{
                      fontSize: "1.6rem",
                      background: "rgba(59,130,246,0.08)",
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

                  {/* GitHub link */}
                  {p.github && (
                    <motion.a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08, borderColor: "#3b82f6" }}
                      title="View on GitHub"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "5px",
                        padding: "5px 12px",
                        background: "rgba(59,130,246,0.07)",
                        border: "1px solid #21262d",
                        borderRadius: "6px",
                        color: "#8b949e",
                        fontSize: "0.75rem",
                        fontFamily: "monospace",
                        textDecoration: "none",
                        flexShrink: 0,
                        transition: "all 0.2s ease",
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      GitHub
                    </motion.a>
                  )}
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
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginTop: "auto" }}>
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
