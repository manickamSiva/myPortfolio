import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        padding: "0 2rem",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(13,17,23,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid #21262d" : "none",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.04 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          fontFamily: "monospace",
          fontSize: "1rem",
          fontWeight: 700,
          color: "#f0f6fc",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
        }}
      >
        <span style={{
          width: "7px", height: "7px",
          borderRadius: "50%",
          background: "#3b82f6",
          display: "inline-block",
          boxShadow: "0 0 8px rgba(59,130,246,0.6)",
        }} />
        SM<span style={{ color: "#3b82f6" }}>.sec</span>
      </motion.div>

      {/* Desktop links */}
      <div style={{ display: "flex", gap: "2px" }}>
        {navItems.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            whileHover={{ color: "#f0f6fc" }}
            onClick={() => setActive(item.label)}
            style={{
              color: active === item.label ? "#60a5fa" : "#6e7f8d",
              textDecoration: "none",
              padding: "5px 12px",
              borderRadius: "6px",
              fontSize: "0.82rem",
              fontWeight: 500,
              background: active === item.label ? "rgba(59,130,246,0.1)" : "transparent",
              border: active === item.label ? "1px solid rgba(59,130,246,0.25)" : "1px solid transparent",
              transition: "all 0.2s ease",
              letterSpacing: "0.3px",
            }}
          >
            {item.label}
          </motion.a>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          nav > div:last-child { display: none !important; }
        }
      `}</style>
    </motion.nav>
  );
}
