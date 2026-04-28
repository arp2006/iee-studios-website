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

const CALENDLY = "https://calendly.com/iee-studios/30-mins-meeting";

const projects = [
  { title: "Nebula Launch Film", client: "Nebula", type: "Launch Film", year: "2025", bg: "#e8e8e8", colSpan: "lg:col-span-7", aspect: "16 / 9", wistiaId: "o6f8jxyrss" },
  { title: "Signal", client: "Vertex Labs", type: "Brand Campaign", year: "2025", bg: "#dedede", colSpan: "lg:col-span-5", aspect: "4 / 5" },
  { title: "Basalt Furniture Launch Film", client: "Basalt", type: "Product Launch Film", year: "2025", bg: "#e2e2e2", colSpan: "lg:col-span-5", aspect: "16 / 9", wistiaId: "s206p4dfom" },
  { title: "Construct", client: "Onyx Cloud", type: "Product Reveal", year: "2024", bg: "#d8d8d8", colSpan: "lg:col-span-7", aspect: "16 / 10" },
  // { title: "Meridian", client: "Atlas Systems", type: "Brand Story", year: "2024", bg: "#e0e0e0", colSpan: "lg:col-span-8", aspect: "16 / 9" },
  // { title: "Epoch", client: "Nova Platform", type: "Launch Spot", year: "2023", bg: "#d4d4d4", colSpan: "lg:col-span-4", aspect: "3 / 4" },
];

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
    const onScroll = () => {
      const y = window.scrollY;

      setShowNav(y > 500);
      setSmallNav(y > 900);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative min-h-screen bg-white text-black">

      <AsciiBackground />
      
      <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
      
      <Hero
        showNav={showNav}
        smallNav={smallNav}
        CALENDLY={CALENDLY}
        lenisRef={lenisRef}
      />

      <HorizontalWork projects={projects} />

      <FAQSection />

      <Footer />
    </main>
  );
}