"use client";

import { motion } from "framer-motion";
import Navbar from "../ui/Navbar";

type HeroProps = {
  showNav: boolean;
  smallNav: boolean;
  CALENDLY: string;
  lenisRef: React.RefObject<any>;
};

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Hero({
  showNav,
  smallNav,
  CALENDLY,
  lenisRef,
}: HeroProps) {
  return (
    <section className="relative z-10 flex min-h-screen flex-col overflow-hidden pt-24">
      
      <Navbar
        showNav={showNav}
        smallNav={smallNav}
        CALENDLY={CALENDLY}
      />

      <div className="z-10 flex flex-1 flex-col items-center justify-center px-6 pb-24 text-center">
        <motion.h1
          className="
            text-[clamp(2.6rem,5.5vw,5.5rem)]
            font-semibold leading-[1.05]
            tracking-[-0.03em]
          "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease,
          }}
        >
          Exclusive Launch Films
          <br />
          <span className="text-black/40">
            for Tech & SaaS
          </span>
        </motion.h1>

        <motion.p
          className="
            mt-7 max-w-[520px]
            text-[16px] leading-[1.7]
            text-black/50 md:text-[17px]
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: .8,
            delay: .12,
            ease,
          }}
        >
          <span className="font-semibold text-black/80">
            iee studios
          </span>{" "}
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
          transition={{
            duration: .8,
            delay: .25,
            ease,
          }}
        >
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-3
              rounded-full bg-black
              px-8 py-4 text-[14px]
              font-medium text-white
              hover:bg-black/80
            "
          >
            Book a Call
          </a>

          <button
            onClick={() =>
              lenisRef.current?.scrollTo("#work", {
                offset: -80,
                duration: 1.8,
              })
            }
            className="
              inline-flex items-center gap-1
              text-[14px] font-medium
              text-black/40 hover:text-black
            "
          >
            View Case Studies
          </button>
        </motion.div>
      </div>

      <div className="px-6 md:px-12 lg:px-16">
        <div className="h-px bg-black/10" />
      </div>
    </section>
  );
}