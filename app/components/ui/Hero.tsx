"use client";

import { motion } from "framer-motion";

type HeroProps = {
  CALENDLY: string;
  lenisRef: React.RefObject<any>;
};

const arrowRight = {
  rest: { x: 0 },
  hover: { x: 5 },
};

const arrowDiagonal = {
  rest: { x: 0, y: 0 },
  hover: { x: 4, y: -4 },
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

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Hero({ CALENDLY, lenisRef }: HeroProps) {
  return (
    <section className="relative min-h-[65vh] grid grid-cols-1 lg:grid-cols-2 items-start">

      <div className="absolute lg:left-[10px] bottom-16 flex flex-col items-center gap-4">

        {/* LABEL */}
        <div className="rotate-[-90deg]">
          <span className="text-[10px] tracking-[0.25em] text-black">
            SCROLL
          </span>
        </div>

        {/* ARROW */}
        <span className="pl-1 text-black text-sm">
          ↓
        </span>

      </div>

      <div className="lg:pl-[70px]">

        <div className="relative mt-10 lg:h-[520px] flex items-center">

          {/* CONTENT */}
          <div className="relative max-w-[680px] px-2 md:px-5 lg:px-10">

            <div className="flex items-center gap-5 text-sm text-black/50 mb-15">
              <span>01</span>
              <span>/</span>
              <span>LAUNCH FILMS</span>
            </div>

            <div className="max-w-[680px] px-6 md:px-5 lg:px-9">
              <motion.h1
                className="text-[clamp(2.4rem,4vw,4.6rem)] font-semibold leading-[1.05] tracking-[-0.03em]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease }}
              >
                Exclusive Launch Films
                <br />
                <span>for Tech & SaaS</span>
              </motion.h1>

              <motion.p
                className="mt-6 text-black/45 text-[16px] leading-[1.6] max-w-[420px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.12, ease }}
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
                className="mt-8 flex items-center gap-6"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease }}
              >
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

                <motion.button
                  onClick={() =>
                    lenisRef.current?.scrollTo("#work", {
                      offset: -80,
                      duration: 1.8,
                    })
                  }
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                  whileTap={{ scale: 0.97 }}
                  variants={buttonVariants}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="
                    text-sm text-black/70
                    flex items-center gap-2
                    px-5 py-2.5
                    rounded-full
                    border border-black/50
                    bg-white
                    cursor-pointer
                  "
                >
                  View Case Studies

                  <motion.span
                    variants={arrowRight}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    className="inline-block"
                  >
                    →
                  </motion.span>
                </motion.button>
              </motion.div>
            </div>
          </div>




        </div>
      </div>
      <div className="flex justify-end items-start">

        <div className="relative inline-block mt-9">
          <img
            src="/bgs/bg.webp"
            alt=""
            className="
            w-full
            h-auto
            object-contain
            object-top
          "
          />

          <div className="absolute inset-0 bg-gradient-to-l from-white/0 via-white/10 to-white/100 pointer-events-none" />

        </div>

      </div>
    </section>
  );
}