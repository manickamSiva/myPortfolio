import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "./AboutSection";

const contactLinks = [
  {
    icon: "📧",
    label: "Email",
    value: "manickamsiva617@gmail.com",
    href: "mailto:manickamsiva617@gmail.com",
    color: "#3b82f6",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/siva-m-627281239",
    href: "https://www.linkedin.com/in/siva-m-627281239",
    color: "#60a5fa",
  },
  {
    icon: "🐱",
    label: "GitHub",
    value: "github.com/manickamSiva",
    href: "https://github.com/manickamSiva",
    color: "#8b949e",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Tamil Nadu, India",
    href: null,
    color: "#484f58",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} style={{
      padding: "7rem 2rem 5rem",
      background: "#0a0d14",
      position: "relative",
      zIndex: 1,
    }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader label="06" title="Get In Touch" />

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25 }}
            style={{
              color: "#6e7f8d",
              fontSize: "0.93rem",
              lineHeight: 1.8,
              marginTop: "1.25rem",
              marginBottom: "2.5rem",
            }}
          >
            I am actively seeking entry-level{" "}
            <span style={{ color: "#60a5fa" }}>Blue Team</span> or{" "}
            <span style={{ color: "#93c5fd" }}>SOC Analyst</span> opportunities.
            Whether you have a role, a question, or just want to connect — feel free to reach out.
          </motion.p>

          {/* Contact grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem", marginBottom: "2.5rem" }}>
            {contactLinks.map((item, i) => {
              const inner = (
                <>
                  <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                  <div>
                    <p style={{
                      fontSize: "0.65rem", color: item.color,
                      fontFamily: "monospace", letterSpacing: "1px",
                      textTransform: "uppercase", marginBottom: "2px",
                    }}>
                      {item.label}
                    </p>
                    <p style={{ color: item.href ? "#c9d1d9" : "#8b949e", fontSize: "0.82rem" }}>
                      {item.value}
                    </p>
                  </div>
                </>
              );

              const sharedStyle: React.CSSProperties = {
                padding: "1.1rem 1.25rem",
                background: "#161b22",
                border: "1px solid #21262d",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                gap: "0.85rem",
                textDecoration: "none",
                transition: "all 0.2s ease",
              };

              return item.href ? (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.08 }}
                  whileHover={{ background: "#1c2333", borderColor: "#30363d" }}
                  style={sharedStyle}
                >
                  {inner}
                </motion.a>
              ) : (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.08 }}
                  style={{ ...sharedStyle, cursor: "default" }}
                >
                  {inner}
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.65 }}
            style={{ textAlign: "center" }}
          >
            <motion.a
              href="mailto:manickamsiva617@gmail.com"
              whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(59,130,246,0.3)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "13px 36px",
                background: "#3b82f6",
                borderRadius: "8px",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                letterSpacing: "0.3px",
              }}
            >
              Send a Message →
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
        style={{
          textAlign: "center",
          marginTop: "4.5rem",
          paddingTop: "1.5rem",
          borderTop: "1px solid #21262d",
          color: "#484f58",
          fontSize: "0.75rem",
          fontFamily: "monospace",
        }}
      >
        <p>Built with React · Three.js · Framer Motion</p>
        <p style={{ marginTop: "0.4rem" }}>
          © 2026 Siva M &nbsp;·&nbsp;
          <span style={{ color: "#60a5fa" }}>Blue Team</span> &nbsp;·&nbsp;
          <span style={{ color: "#8b949e" }}>SOC Analyst</span>
        </p>
      </motion.div>

      <style>{`
        @media (max-width: 560px) {
          #contact > div > div > div:nth-child(3) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
