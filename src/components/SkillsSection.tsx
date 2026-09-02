import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "./AboutSection";

const skillCategories = [
  {
    title: "Security Tools",
    color: "#3b82f6",
    icon: "🛡",
    skills: ["Wazuh (SIEM)", "SentinelOne (EDR/XDR)", "Wireshark", "Palo Alto Firewall"],
  },
  {
    title: "Operating Systems",
    color: "#60a5fa",
    icon: "💻",
    skills: ["Kali Linux", "Ubuntu", "Windows"],
  },
  {
    title: "Core Concepts",
    color: "#93c5fd",
    icon: "🎯",
    skills: [
      "MITRE ATT&CK", "Log Analysis", "Incident Response",
      "Alert Triage", "Threat Hunting", "Vulnerability Assessment",
    ],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} style={{
      padding: "7rem 2rem",
      maxWidth: "1100px",
      margin: "0 auto",
      position: "relative",
      zIndex: 1,
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader label="03" title="Skills & Tools" />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.25rem",
          marginTop: "3rem",
        }}>
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.12 }}
              style={{
                background: "#161b22",
                border: "1px solid #21262d",
                borderRadius: "12px",
                padding: "1.75rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                background: `linear-gradient(90deg, ${cat.color}, transparent)`,
              }} />

              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.5rem" }}>
                <span style={{ fontSize: "1.25rem" }}>{cat.icon}</span>
                <h3 style={{ color: "#c9d1d9", fontSize: "0.9rem", fontWeight: 600 }}>{cat.title}</h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: ci * 0.12 + si * 0.07 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "7px 12px",
                      background: "rgba(59,130,246,0.05)",
                      border: "1px solid #21262d",
                      borderRadius: "6px",
                      fontSize: "0.82rem",
                      color: "#8b949e",
                    }}
                  >
                    <span style={{
                      width: "5px", height: "5px",
                      borderRadius: "50%",
                      background: cat.color,
                      flexShrink: 0,
                    }} />
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          #skills > div > div:nth-child(2) { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 580px) {
          #skills > div > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
