"use client";

import { motion } from "framer-motion";

type HeroProps = {
  CALENDLY: string;
  lenisRef: React.RefObject<any>;
};

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Hero({ CALENDLY, lenisRef }: HeroProps) {
  return (
    <section className="relative  min-h-[50vh] flex items-center">

      <div className="absolute lg:left-[10px] bottom-16 flex flex-col items-center gap-4">

        {/* LABEL */}
        <div className="rotate-[-90deg]">
          <span className="text-[10px] tracking-[0.25em] text-black">
            SCROLL
          </span>
        </div>

        {/* ARROW */}
        <span className="text-black text-sm">
          ↓
        </span>

      </div>

      <div className="w-full lg:pl-[70px] mx-auto ">




        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-12 gap-y-0 mt-10">

          {/* LEFT */}
          <div className="max-w-[680px] px-2 md:px-5 lg:px-10">

            <div className="flex items-center gap-5 text-sm text-black/50 mb-15">
              <span>01</span>
              <span>/</span>
              <span>LAUNCH FILMS</span>
            </div>

            <div className="max-w-[680px] px-6 md:px-5 lg:px-9">
              <motion.h1
                className="text-[clamp(1.2rem,2vw,2.3rem)] font-semibold leading-[1.05] tracking-[-0.03em]"
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
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-black px-6 py-2.5 text-sm text-white hover:bg-black/80 transition"
                >
                  Book a Call ↗
                </a>

                <button
                  onClick={() =>
                    lenisRef.current?.scrollTo("#work", {
                      offset: -80,
                      duration: 1.8,
                    })
                  }
                  className="text-sm text-black/60 hover:text-black transition flex items-center gap-2"
                >
                  View Case Studies →
                </button>
              </motion.div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative w-full h-[420px] lg:h-[520px] flex items-center justify-center">

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[70%] h-[70%] bg-[radial-gradient(circle_at_center,black_0%,transparent_70%)] opacity-80 blur-xl" />
            </div>

            <div className="w-[60%] h-[60%] bg-[conic-gradient(from_0deg,black,white,black)] blur-2xl opacity-60" />

          </div>

        </div>
      </div>
    </section>
  );
}