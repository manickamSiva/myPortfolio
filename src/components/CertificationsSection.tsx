import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "./AboutSection";

const certifications = [
  {
    title: "Basics in Cyber Security",
    issuer: "Simplilearn",
    color: "#3b82f6",
    icon: "🔒",
    type: "certification",
  },
  {
    title: "Networking Basics",
    issuer: "Cisco",
    color: "#60a5fa",
    icon: "🌐",
    type: "certification",
  },
  {
    title: "Introduction to the Threat Landscape 3.0",
    issuer: "Fortinet",
    color: "#93c5fd",
    icon: "🎯",
    type: "certification",
  },
  {
    title: "Capture The Flag (CTF) Participant",
    issuer: "Crescent Institute of Science & Technology",
    color: "#f59e0b",
    icon: "🏆",
    type: "achievement",
  },
];

export default function CertificationsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" ref={ref} style={{
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
        <SectionHeader label="05" title="Certifications & Achievements" />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.1rem",
          marginTop: "3rem",
        }}>
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -5, borderColor: `${cert.color}44` }}
              style={{
                background: "#161b22",
                border: "1px solid #21262d",
                borderRadius: "12px",
                padding: "1.5rem",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.25s ease",
                cursor: "default",
              }}
            >
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                background: `linear-gradient(90deg, ${cert.color}, transparent)`,
              }} />

              {cert.type === "achievement" && (
                <span style={{
                  position: "absolute", top: "10px", right: "10px",
                  padding: "2px 7px",
                  background: "rgba(245,158,11,0.1)",
                  border: "1px solid rgba(245,158,11,0.25)",
                  borderRadius: "4px",
                  fontSize: "0.6rem",
                  color: "#f59e0b",
                  fontFamily: "monospace",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}>
                  Achievement
                </span>
              )}

              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{cert.icon}</div>

              <h3 style={{
                color: "#c9d1d9",
                fontSize: "0.88rem",
                fontWeight: 600,
                lineHeight: 1.4,
                marginBottom: "0.5rem",
              }}>
                {cert.title}
              </h3>

              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div style={{
                  width: "5px", height: "5px",
                  borderRadius: "50%",
                  background: cert.color,
                  flexShrink: 0,
                }} />
                <p style={{ color: "#484f58", fontSize: "0.78rem", fontFamily: "monospace" }}>
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          #certifications > div > div:nth-child(2) { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          #certifications > div > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
