import { useScroll, useSpring, motion } from "framer-motion";
import "./App.css";

import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import CertificationsSection from "./components/CertificationsSection";
import ContactSection from "./components/ContactSection";

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <motion.div style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      height: "2px",
      background: "#3b82f6",
      scaleX,
      transformOrigin: "0%",
      zIndex: 9999,
    }} />
  );
}

export default function App() {
  return (
    <div style={{ position: "relative", background: "#0d1117" }}>
      <ScrollProgressBar />
      <ParticleBackground />
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <HeroSection />
        <div className="section-divider" />
        <AboutSection />
        <div className="section-divider" />
        <ExperienceSection />
        <div className="section-divider" />
        <SkillsSection />
        <div className="section-divider" />
        <ProjectsSection />
        <div className="section-divider" />
        <CertificationsSection />
        <div className="section-divider" />
        <ContactSection />
      </main>
    </div>
  );
}
