"use client";

import { motion } from "motion/react";

type Props = {
  CALENDLY: string;
  lenisRef: React.RefObject<any>;
};

const buttonVariants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: "0 0 0 rgba(0,0,0,0)",
  },
  hover: {
    y: -3,
    scale: 1.03,
    boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
  },
};

const arrowDiagonal = {
  rest: { x: 0, y: 0 },
  hover: { x: 3, y: -3 },
};

export default function Header({ CALENDLY, lenisRef }: Props) {
  const scrollTo = (id: string) => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    lenis.scrollTo(id);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-black/50 bg-white/85 backdrop-blur-md lg:pr-40">

      <div className="absolute lg:left-[150px] top-0 h-full w-px bg-black/50" />
      <div className="absolute lg:right-[150px] top-0 h-full w-px bg-black/50" />
      <div className="w-full pl-6 lg:pl-[235px] pr-6 lg:pr-20 py-6 flex items-center justify-between">

        {/* LEFT — BRAND */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#top");
          }}
          className="
            text-[22px] md:text-[26px]
            font-bold
            tracking-[-0.03em]
            leading-none
            text-black
          "
        >
          iee studios
        </a>

        {/* CENTER — PILL NAV */}
        <div
          className="
            hidden md:flex items-center gap-8
            rounded-full
            border border-black/10
            bg-white/70 backdrop-blur-md
            px-8 py-3
            text-sm text-black/70
          "
        >
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#work");
            }}
            className="hover:text-black transition"
          >
            Case Studies
          </a>

          <a
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#faq");
            }}
            className="hover:text-black transition"
          >
            FAQ
          </a>

          <a
            href="#start"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#start");
            }}
            className="hover:text-black transition"
          >
            Start
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#contact");
            }}
            className="hover:text-black transition"
          >
            Contact
          </a>
        </div>

        {/* RIGHT — CTA */}
        <motion.a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          initial="rest"
          animate="rest"
          whileHover="hover"
          whileTap={{ scale: 0.98 }}
          variants={buttonVariants}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="rounded-full bg-black px-6 py-2.5 text-sm text-white flex items-center gap-2"
        >
          Book a call

          <motion.span
            variants={arrowDiagonal}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className="inline-block"
          >
            ↗
          </motion.span>
        </motion.a>

      </div>
    </header>
  );
}