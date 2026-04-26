"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { motion, AnimatePresence } from "motion/react";
import { HiOutlineMail } from "react-icons/hi";
import { RiTwitterXFill } from "react-icons/ri";
import Lenis from "lenis";

const CALENDLY = "https://calendly.com/iee-studios/30-mins-meeting";

/* ─── Work section data ─── */

const projects = [
  { title: "Nebula Launch Film", client: "Nebula", type: "Launch Film", year: "2025", bg: "#e8e8e8", colSpan: "lg:col-span-7", aspect: "16 / 9", wistiaId: "o6f8jxyrss" },
  { title: "Signal", client: "Vertex Labs", type: "Brand Campaign", year: "2025", bg: "#dedede", colSpan: "lg:col-span-5", aspect: "4 / 5" },
  { title: "Basalt Furniture Launch Film", client: "Basalt", type: "Product Launch Film", year: "2025", bg: "#e2e2e2", colSpan: "lg:col-span-5", aspect: "16 / 9", wistiaId: "s206p4dfom" },
  { title: "Construct", client: "Onyx Cloud", type: "Product Reveal", year: "2024", bg: "#d8d8d8", colSpan: "lg:col-span-7", aspect: "16 / 10" },
  { title: "Meridian", client: "Atlas Systems", type: "Brand Story", year: "2024", bg: "#e0e0e0", colSpan: "lg:col-span-8", aspect: "16 / 9" },
  { title: "Epoch", client: "Nova Platform", type: "Launch Spot", year: "2023", bg: "#d4d4d4", colSpan: "lg:col-span-4", aspect: "3 / 4" },
];

const faqs = [
  {
    question: "What's the turnaround time for a launch film?",
    answer:
      "Most projects wrap in 5–10 business days from kickoff to final delivery. If you're on a tight timeline, we offer expedited turnarounds — just let us know when you book.",
  },
  {
    question: "How is a Launch Film different from a launch video?",
    answer:
      "A launch video explains what your product does — features, UI walkthroughs, animated graphics. A launch film makes people feel something. It's cinematic, emotionally driven, and designed so your audience doesn't just understand your product — they connect with it.",
  },
  {
    question: "How does the process work?",
    answer:
      "It starts with you. Describe your product in as much detail as possible — the problem it solves, who it's for, what makes it different. From there, we nail down the visual style and creative direction together: the tone, the pacing, what you want viewers to walk away feeling. Then we get to work.",
  },
];

const ease = [0.25, 0.1, 0.25, 1] as const;

/* ─── Animated ASCII dot-grid background ─── */

function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const gap = 28;
      const cols = Math.ceil(w / gap) + 1;
      const rows = Math.ceil(h / gap) + 1;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * gap;
          const y = row * gap;

          // Subtle wave animation
          const dist = Math.sqrt(
            (x - w / 2) ** 2 + (y - h / 2) ** 2
          );
          const wave = Math.sin(dist * 0.008 - time * 0.6) * 0.5 + 0.5;
          const opacity = 0.06 + wave * 0.1;
          const radius = 1 + wave * 0.6;

          // ctx.beginPath();
          // ctx.arc(x, y, radius, 0, Math.PI * 2);
          // ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
          ctx.fill();
        }
      }

      time++;
      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}

/* ─── Animated film grain overlay ─── */

function GrainOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[999] opacity-[0.06] mix-blend-multiply"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "128px 128px",
        animation: "grain 0.5s steps(6) infinite",
      }}
    />
  );
}

/* ─── Page ─── */

export default function Home() {
  const [showNav, setShowNav] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [smallNav, setSmallNav] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.8, smoothWheel: true });
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
      setSmallNav(y > 800);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative min-h-screen bg-white text-black">
      <DotGrid />
      <GrainOverlay />
      <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />

      {/* ════════════════════════════════════════════
          HERO SECTION — centered
         ════════════════════════════════════════════ */}
      <section className="relative z-10 flex min-h-screen flex-col">
        {/* Navigation */}
        <AnimatePresence>
          {showNav && (
            <motion.nav
              initial={{ opacity: 0, y: -30 }}
              animate={{
                opacity: 1,
                y: 0,
                width: smallNav ? "520px" : "900px",
                paddingTop: smallNav ? "12px" : "16px",
                paddingBottom: smallNav ? "12px" : "16px"
              }}
              transition={{
                duration: .45,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="
 fixed top-6 left-1/2 -translate-x-1/2
 z-[9999]
 rounded-full
 border border-black/10
 bg-white/80
 backdrop-blur-xl
 shadow-sm
 px-6 md:px-8
 flex items-center justify-between
 "
            >
              <motion.span
                className="text-[11px] font-medium uppercase tracking-[0.25em]"
                animate={{
                  letterSpacing: smallNav ? "0.18em" : "0.25em",
                  opacity: smallNav ? .7 : 1
                }}
              >
                IEE Studios
              </motion.span>

              <motion.a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                animate={{
                  paddingLeft: smallNav ? 18 : 24,
                  paddingRight: smallNav ? 18 : 24
                }}
                className="
      rounded-full
      bg-black
      px-6 py-3
      text-[13px]
      text-white
      transition
      hover:bg-black/85
    "
              >
                Book a Call
              </motion.a>
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Centered Hero Content */}
        <div className="flex flex-1 flex-col items-center justify-center px-6 pb-24 text-center">
          <motion.h1
            className="text-[clamp(2.6rem,5.5vw,5.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
          >
            Exclusive Launch Films
            <br />
            <span className="text-black/40">for Tech & SaaS</span>
          </motion.h1>

          <motion.p
            className="mt-7 max-w-[520px] text-[16px] leading-[1.7] text-black/50 md:text-[17px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease }}
          >
            <span className="font-semibold text-black/80">iee studios</span>{" "}
            produces and directs{" "}
            <span className="font-medium text-black/80">
              high-end launch films and ads
            </span>{" "}
            for innovative tech companies.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
          >
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-[14px] font-medium text-white transition-colors duration-300 hover:bg-black/80"
            >
              Book a Call
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-1 text-[14px] font-medium text-black/60 transition-colors duration-300 hover:text-black"
            >
              View Selected Work
            </a>
          </motion.div>
        </div>

        {/* Section Divider */}
        <div className="px-6 md:px-12 lg:px-20">
          <div className="h-px bg-black/10" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          WORK SECTION
         ════════════════════════════════════════════ */}
      <section
        id="work"
        className="relative z-1 px-6 pt-28 pb-32 md:px-12 md:pt-36 md:pb-44 lg:px-20"
      >
        <div className="mx-auto max-w-[1440px]">
          {/* Section Header */}
          <div className="mb-16 md:mb-24">
            <motion.h2
              className="text-4xl font-medium tracking-[-0.03em] md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
            >
              Selected Work
            </motion.h2>
          </div>

          {/* Thin decorative line */}
          <div className="mb-16 h-px bg-black/10 md:mb-20" />

          {/* Project Grid */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-14 md:gap-x-8 md:gap-y-20 lg:grid-cols-12">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                className={`col-span-1 ${project.colSpan} group cursor-pointer`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: i % 2 === 0 ? 0 : 0.1,
                  ease,
                }}
              >
                <motion.div
                  className="overflow-hidden rounded-[6px]"
                  whileHover={{ scale: 1.04, y: -8 }}
                  transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div
                    className="relative w-full"
                    style={{
                      aspectRatio: project.aspect,
                      backgroundColor: project.bg,
                    }}
                  >
                    {"wistiaId" in project && project.wistiaId && (
                      <>
                        <Script
                          src={`https://fast.wistia.com/embed/${project.wistiaId}.js`}
                          strategy="lazyOnload"
                        />
                        {/* @ts-expect-error wistia-player is a web component */}
                        <wistia-player
                          media-id={project.wistiaId}
                          aspect={project.aspect === "16 / 9" ? "1.7777777777777777" : "1.6"}
                          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
                        />
                      </>
                    )}
                  </div>
                </motion.div>

                <div className="mt-5 flex items-baseline justify-between">
                  <div>
                    <h3 className="text-[17px] font-medium tracking-[-0.01em] transition-opacity duration-300 group-hover:opacity-70">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] tracking-[0.01em] text-black/40">
                      {project.client} — {project.type}
                    </p>
                  </div>
                  <span className="hidden text-[12px] text-black/30 md:block">
                    {project.year}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FAQ SECTION
         ════════════════════════════════════════════ */}
      <section className="relative z-1 px-6 pt-28 pb-32 md:px-12 md:pt-36 md:pb-44 lg:px-20">
        <div className="mx-auto max-w-[1440px]">
          <motion.h2
            className="mb-16 text-4xl font-medium tracking-[-0.03em] md:mb-24 md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
          >
            Frequently Asked
          </motion.h2>

          <div>
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="border-t border-black/10 last:border-b"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >

                <motion.button
                  onClick={() =>
                    setOpenFaq(openFaq === i ? null : i)
                  }
                  whileHover={{ x: 6 }}
                  transition={{
                    duration: 0.25,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  className="
    w-full
    flex items-center justify-between
    py-8
    text-left
  "
                >
                  <span className="text-[19px] font-medium tracking-[-0.01em]">
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{
                      rotate: openFaq === i ? 45 : 0
                    }}
                    transition={{ duration: .3 }}
                    className="text-black/30 text-2xl"
                  >
                    +
                  </motion.span>
                </motion.button>


                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: .45,
                        ease: [0.25, 0.1, 0.25, 1]
                      }}
                      className="overflow-hidden"
                    >
                      <motion.p
                        initial={{ y: 12, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 8, opacity: 0 }}
                        transition={{ duration: .35 }}
                        className="
              pb-8 pr-12
              text-[16px]
              leading-[1.75]
              text-black/50
            "
                      >
                        {faq.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FOOTER
         ════════════════════════════════════════════ */}
      <footer className="relative z-1 border-t border-black/10 px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-[1440px]">

          <div className="mt-16 grid gap-16 lg:grid-cols-2 items-start">

            {/* Left copy */}
            <div>
              <p className="text-[clamp(2.5rem,4vw,5rem)] leading-[0.95] tracking-[-0.04em] font-semibold">
                Let's start
                <br />
                <span className="text-black/35">your project</span>
              </p>

              <p className="mt-8 max-w-md text-[17px] leading-[1.7] text-black/45">
                Fill out the form to get started, or book a call.
              </p>
            </div>


            {/* Form */}
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-2xl bg-black/[0.03] px-6 py-5 outline-none border border-black/5 focus:border-black/20"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-2xl bg-black/[0.03] px-6 py-5 outline-none border border-black/5 focus:border-black/20"
              />

              <div className="relative">
                <select
                  className="w-full appearance-none rounded-2xl bg-black/[0.03]
    border border-black/5 px-6 py-5 pr-14
    outline-none focus:border-black/20"
                >
                  <option className="text-black/60">What's your Budget?</option>
                  <option>Under $4000</option>
                  <option>$4000-$6000</option>
                  <option>$6000-$10000+ (With Shooting)</option>
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center text-black/35">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>

              <textarea
                rows={6}
                placeholder="Describe Your Project"
                className="w-full rounded-2xl bg-black/[0.03] px-6 py-5 outline-none border border-black/5 resize-none"
              />

              <button
                className="w-full rounded-2xl bg-black text-white py-5 font-medium hover:bg-black/85 transition"
              >
                Send Inquiry
              </button>
            </form>

          </div>

          <div className="mt-14 flex flex-col gap-8 md:mt-20 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-4">
              {/* <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-black px-8 py-4 text-[14px] font-medium text-white transition-colors duration-300 hover:bg-black/80"
              >
                Book a Call
              </a> */}
              <motion.h2
                className="text-[clamp(3rem,10vw,10rem)] font-semibold leading-[0.9] tracking-[-0.04em] text-black"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease }}
              >
                IEE Studios
              </motion.h2>
              <div className="flex items-center gap-5 pt-2">
                <a
                  href="mailto:inspireelevateevovle@gmail.com"
                  className="flex items-center gap-2 text-[13px] text-black/40 transition-colors duration-300 hover:text-black/80"
                >
                  <HiOutlineMail className="text-[16px]" />
                  <span className="hidden sm:inline">
                    inspireelevateevovle@gmail.com
                  </span>
                </a>
                <a
                  href="https://x.com/madtirth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[13px] text-black/40 transition-colors duration-300 hover:text-black/80"
                >
                  <RiTwitterXFill className="text-[14px]" />
                  <span className="hidden sm:inline">@madtirth</span>
                </a>
              </div>
            </div>
            <span className="text-[11px] text-black/25">© 2026 IEE Studios</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
