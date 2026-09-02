import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "CGPA", value: "7.7", unit: "/10" },
  { label: "Security Tools", value: "6+", unit: "" },
  { label: "Projects", value: "2", unit: "" },
  { label: "Certifications", value: "3+", unit: "" },
];

const languages = [
  { lang: "English", level: "Professional" },
  { lang: "Tamil", level: "Native" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} style={{
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
        <SectionHeader label="01" title="About Me" />

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
          marginTop: "3rem",
        }}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p style={{ color: "#6e7f8d", lineHeight: 1.85, fontSize: "0.93rem", marginBottom: "1.25rem" }}>
              I am a Computer Science Engineering graduate from{" "}
              <span style={{ color: "#c9d1d9" }}>PERI Institute of Technology</span> with
              a strong interest in cybersecurity, particularly defensive operations and threat intelligence.
            </p>
            <p style={{ color: "#6e7f8d", lineHeight: 1.85, fontSize: "0.93rem", marginBottom: "1.25rem" }}>
              Currently interning as a{" "}
              <span style={{ color: "#60a5fa" }}>SOC Analyst at Necurity Solution</span>,
              I perform real-time SIEM monitoring with Wazuh, analyze logs from diverse network
              sources, and investigate EDR/XDR alerts with SentinelOne.
            </p>
            <p style={{ color: "#6e7f8d", lineHeight: 1.85, fontSize: "0.93rem" }}>
              I map attacker TTPs to the{" "}
              <span style={{ color: "#c9d1d9" }}>MITRE ATT&CK framework</span> and assess
              CVEs — turning raw log data into actionable security intelligence.
            </p>

            {/* Languages */}
            <div style={{ marginTop: "2rem" }}>
              <p style={{
                fontSize: "0.7rem",
                letterSpacing: "2px",
                color: "#3b82f6",
                fontFamily: "monospace",
                marginBottom: "0.85rem",
                textTransform: "uppercase",
              }}>Languages</p>
              <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                {languages.map(l => (
                  <span key={l.lang} style={{
                    padding: "4px 14px",
                    background: "rgba(59,130,246,0.06)",
                    border: "1px solid #21262d",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                    color: "#8b949e",
                  }}>
                    {l.lang}
                    <span style={{ color: "#484f58", marginLeft: "6px", fontSize: "0.7rem" }}>
                      {l.level}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  style={{
                    padding: "1.25rem",
                    background: "#161b22",
                    border: "1px solid #21262d",
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  <p style={{
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    color: "#60a5fa",
                    fontFamily: "monospace",
                    lineHeight: 1,
                  }}>
                    {s.value}
                    <span style={{ fontSize: "0.9rem", color: "#484f58" }}>{s.unit}</span>
                  </p>
                  <p style={{ fontSize: "0.72rem", color: "#484f58", marginTop: "4px" }}>{s.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.65 }}
              style={{
                padding: "1.5rem",
                background: "#161b22",
                border: "1px solid #21262d",
                borderRadius: "10px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                background: "linear-gradient(90deg, #3b82f6, transparent)",
              }} />
              <p style={{ fontSize: "0.68rem", letterSpacing: "2px", color: "#3b82f6", fontFamily: "monospace", marginBottom: "0.5rem", textTransform: "uppercase" }}>
                Education
              </p>
              <h3 style={{ color: "#c9d1d9", fontSize: "0.95rem", fontWeight: 600, marginBottom: "0.2rem" }}>
                B.E. Computer Science Engineering
              </h3>
              <p style={{ color: "#6e7f8d", fontSize: "0.83rem" }}>PERI Institute of Technology</p>
              <div style={{
                display: "flex", justifyContent: "space-between",
                marginTop: "0.75rem", paddingTop: "0.75rem",
                borderTop: "1px solid #21262d",
              }}>
                <span style={{ color: "#484f58", fontSize: "0.78rem" }}>CGPA</span>
                <span style={{ color: "#60a5fa", fontFamily: "monospace", fontWeight: 700 }}>7.7 / 10</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          #about > div > div:nth-child(2) { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}

export function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div style={{ marginBottom: "0.5rem" }}>
      <p style={{
        fontFamily: "monospace",
        color: "rgba(59,130,246,0.45)",
        fontSize: "0.7rem",
        letterSpacing: "3px",
        textTransform: "uppercase",
        marginBottom: "0.5rem",
      }}>
        {label} ——
      </p>
      <h2 style={{
        fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
        fontWeight: 700,
        color: "#f0f6fc",
        letterSpacing: "-0.5px",
        lineHeight: 1.1,
      }}>
        {title}
      </h2>
      <div style={{
        width: "36px", height: "2px",
        background: "#3b82f6",
        borderRadius: "2px",
        marginTop: "0.85rem",
      }} />
    </div>
  );
}
