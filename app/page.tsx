"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { HiOutlineMail } from "react-icons/hi";
import { RiTwitterXFill } from "react-icons/ri";
import Lenis from "lenis";
import AsciiBackground from "./components/background/AsciiBackground";
import HorizontalWork from "./components/ui/HorizontalWork";
import Footer from "./components/layout/Footer";
import FAQSection from "./components/ui/FAQSection";
import Hero from "./components/ui/Hero";
import Header from "./components/layout/Header";
import FeaturedWork from "./components/ui/FeaturedWork";
import StartProjectForm from "./components/ui/StartProjectForm";
import ProjectOverlay from "./components/ui/ProjectOverlay";
import { AnimatePresence } from "motion/react";

const CALENDLY = "https://calendly.com/iee-studios/30-mins-meeting";

type Project = {
  id: string;
  title: string;
  description: string;
  year: string;
  image: string;
  videoId: string;
};


export default function Home() {
  const lenisRef = useRef<Lenis | null>(null);
  const [showNav, setShowNav] = useState(false);
  const [smallNav, setSmallNav] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    budget: "",
    project: ""
  });
  const [isMobile, setIsMobile] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.3,
      smoothWheel: true,
      wheelMultiplier: .85
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();

  }, []);

  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "auto";
  }, [activeProject]);

  return (

    <main className="relative min-h-screen bg-white text-black">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute lg:left-[70px] top-0 h-full w-px bg-black/20" />
      </div>
      <Header
        CALENDLY={CALENDLY}
        lenisRef={lenisRef}
      />

      <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />

      <div className="relative z-10">
        <Hero
          CALENDLY={CALENDLY}
          lenisRef={lenisRef}
        />
        <FeaturedWork onProjectClick={setActiveProject} />
        <FAQSection />
        <StartProjectForm />
        <Footer />
      </div>
      <AnimatePresence>
        {activeProject && (
          <ProjectOverlay
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}