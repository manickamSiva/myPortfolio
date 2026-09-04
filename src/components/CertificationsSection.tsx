import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "./AboutSection";

const certifications = [
  {
    title: "Introduction to the Threat Landscape 3.0",
    issuer: "Fortinet",
    color: "#93c5fd",
    icon: "🎯",
    type: "certification",
    link: "https://www.credly.com/badges/0a9ede42-ae9c-470b-8aa1-13a0fa2b1e96/linked_in_profile",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    color: "#60a5fa",
    icon: "🔒",
    type: "certification",
    link: "https://www.credly.com/badges/ff0deee6-2658-467f-b777-9d3b2a52140b/linked_in_profile",
  },
  {
    title: "Networking Basics",
    issuer: "Cisco",
    color: "#3b82f6",
    icon: "🌐",
    type: "certification",
    link: "https://www.credly.com/badges/ed495eb8-5776-4d2a-943b-73f28a036b2f/linked_in_profile",
  },
  {
    title: "Python Programming (Basic, Intermediate & Advanced Level)",
    issuer: "LUDIFU",
    color: "#f59e0b",
    icon: "🐍",
    type: "certification",
    link: null,
  },
  {
    title: "Capture The Flag (CTF) Participant",
    issuer: "Crescent Institute of Science & Technology",
    color: "#a78bfa",
    icon: "🏆",
    type: "certification",
    link: null,
  },
];

export default function CertificationsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <section
      id="certifications"
      ref={ref}
      style={{
        padding: "7rem 2rem",
        maxWidth: "1100px",
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader
          label="05"
          title="Certifications & Achievements"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.1rem",
            marginTop: "3rem",
          }}
        >
          {certifications.map((cert, i) => {
            const card = (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: i * 0.12,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -5,
                  borderColor: `${cert.color}44`,
                }}
                style={{
                  background: "#161b22",
                  border: "1px solid #21262d",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                  cursor: cert.link ? "pointer" : "default",
                  height: "100%",
                  boxSizing: "border-box",
                }}
              >
                {/* Top accent line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: `linear-gradient(90deg, ${cert.color}, transparent)`,
                  }}
                />

                {/* Certificate icon */}
                <div
                  style={{
                    fontSize: "2rem",
                    marginBottom: "1rem",
                  }}
                >
                  {cert.icon}
                </div>

                {/* Certificate title */}
                <h3
                  style={{
                    color: "#c9d1d9",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    lineHeight: 1.4,
                    marginBottom: "0.7rem",
                  }}
                >
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <div
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: cert.color,
                      flexShrink: 0,
                    }}
                  />

                  <p
                    style={{
                      color: "#484f58",
                      fontSize: "0.78rem",
                      fontFamily: "monospace",
                      margin: 0,
                    }}
                  >
                    {cert.issuer}
                  </p>
                </div>

                {/* Credly indicator */}
                {cert.link && (
                  <div
                    style={{
                      marginTop: "1rem",
                      color: cert.color,
                      fontSize: "0.68rem",
                      fontFamily: "monospace",
                      opacity: 0.8,
                    }}
                  >
                    VIEW CREDENTIAL ↗
                  </div>
                )}
              </motion.div>
            );

            return cert.link ? (
              <a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                }}
              >
                {card}
              </a>
            ) : (
              <div key={cert.title}>{card}</div>
            );
          })}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          #certifications > div > div:nth-child(2) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 480px) {
          #certifications > div > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}