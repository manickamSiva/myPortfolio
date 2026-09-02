import { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import * as THREE from "three";

const WORDS = ["SOC Analyst", "Blue Teamer", "Threat Hunter", "Security Ops"];

function RotatingShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.25;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.35;
  });
  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.8, 1]} />
      <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.25} />
    </mesh>
  );
}

function InnerSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const s = 1 + Math.sin(clock.getElapsedTime() * 1.2) * 0.04;
    meshRef.current.scale.set(s, s, s);
  });
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.4, 32, 32]} />
      <meshBasicMaterial color="#60a5fa" transparent opacity={0.06} />
    </mesh>
  );
}

function TypewriterInner({ words }: { words: string[] }) {
  const [text, setText] = useState("");
  const [wIdx, setWIdx] = useState(0);
  const [cIdx, setCIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && cIdx <= current.length) {
      timeout = setTimeout(() => { setText(current.slice(0, cIdx)); setCIdx(c => c + 1); }, 80);
    } else if (!deleting && cIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && cIdx >= 0) {
      timeout = setTimeout(() => { setText(current.slice(0, cIdx)); setCIdx(c => c - 1); }, 45);
    } else {
      setDeleting(false);
      setWIdx(w => (w + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [cIdx, deleting, wIdx, words]);

  return (
    <span>
      {text}
      <span style={{ borderRight: "2px solid #60a5fa", marginLeft: "1px", animation: "cur 0.8s infinite" }} />
    </span>
  );
}

export default function HeroSection() {
  return (
    <section id="hero" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 2rem",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Subtle glow */}
      <div style={{
        position: "absolute", top: "40%", left: "35%",
        transform: "translate(-50%,-50%)",
        width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "5rem",
        alignItems: "center",
        maxWidth: "1100px",
        width: "100%",
        position: "relative",
        zIndex: 1,
      }}>
        {/* Left */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        >
          <p style={{
            fontFamily: "monospace",
            color: "#3b82f6",
            fontSize: "0.8rem",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}>
            <span style={{ width: "24px", height: "1px", background: "#3b82f6", display: "inline-block" }} />
            Hello, I am
          </p>

          <h1 style={{
            fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            color: "#f0f6fc",
            letterSpacing: "-1px",
            marginBottom: "0.6rem",
          }}>
            Siva M
          </h1>

          <div style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
            fontWeight: 600,
            color: "#60a5fa",
            fontFamily: "monospace",
            minHeight: "2.2rem",
            marginBottom: "1.5rem",
          }}>
            <TypewriterInner words={WORDS} />
          </div>

          <p style={{
            color: "#6e7f8d",
            fontSize: "0.95rem",
            lineHeight: 1.75,
            maxWidth: "460px",
            marginBottom: "2.5rem",
          }}>
            CSE graduate with hands-on experience in SIEM monitoring, log analysis,
            and incident response. Focused on defending digital infrastructure and
            identifying threats early.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <motion.a
              href="#experience"
              whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(59,130,246,0.35)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "11px 26px",
                background: "#3b82f6",
                color: "#fff",
                borderRadius: "7px",
                fontWeight: 600,
                fontSize: "0.88rem",
                textDecoration: "none",
                letterSpacing: "0.3px",
                display: "inline-block",
              }}
            >
              View Experience
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "11px 26px",
                background: "transparent",
                color: "#8b949e",
                border: "1px solid #30363d",
                borderRadius: "7px",
                fontWeight: 500,
                fontSize: "0.88rem",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Contact Me
            </motion.a>
          </div>

          {/* Status */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "2rem",
            padding: "7px 14px",
            background: "rgba(59,130,246,0.08)",
            border: "1px solid rgba(59,130,246,0.2)",
            borderRadius: "20px",
            fontSize: "0.78rem",
            color: "#60a5fa",
          }}>
            <span style={{
              width: "6px", height: "6px",
              borderRadius: "50%",
              background: "#3b82f6",
              display: "inline-block",
              animation: "liveDot 1.8s infinite",
            }} />
            Open to Blue Team / SOC Analyst roles
          </div>
        </motion.div>

        {/* Right: 3D */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          style={{ height: "460px", position: "relative" }}
        >
          <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
            <RotatingShape />
            <InnerSphere />
          </Canvas>
        </motion.div>
      </div>

      <style>{`
        @keyframes liveDot { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes cur { 0%,100%{opacity:1} 50%{opacity:0} }
        @media (max-width: 768px) {
          #hero > div { grid-template-columns: 1fr !important; gap: 2rem !important; }
          #hero > div > div:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}
