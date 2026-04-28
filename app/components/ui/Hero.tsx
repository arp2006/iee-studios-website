"use client";

import { motion, AnimatePresence } from "framer-motion";

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
      {/* Navigation */}
      <AnimatePresence>
        {showNav && (
          <motion.nav
            initial={{
              opacity: 0,
              y: -30,
            }}
            animate={{
              opacity: 1,
              y: 0,
              width: smallNav ? "520px" : "900px",
              paddingTop: smallNav ? "12px" : "20px",
              paddingBottom: smallNav ? "12px" : "16px",
              left: smallNav ? "72%" : "50%",
            }}
            transition={{
              duration: 0.55,
              ease,
            }}
            className="
              fixed top-14 left-1/2 z-[9999]
              flex items-center justify-between
              rounded-full border border-black/10
              bg-white/80 px-6 shadow-sm backdrop-blur-xl
              -translate-x-1/2 md:px-8
            "
          >
            <motion.span
              className="text-[11px] font-medium uppercase tracking-[0.25em]"
              animate={{
                letterSpacing: smallNav ? "0.18em" : "0.25em",
                opacity: smallNav ? 0.7 : 1,
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
                paddingRight: smallNav ? 18 : 24,
              }}
              className="
                rounded-full bg-black px-6 py-3
                text-[13px] text-white
                hover:bg-black/85
              "
            >
              Book a Call
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Hero */}
      <div className="z-10 flex flex-1 flex-col items-center justify-center px-6 pb-24 text-center">
        <motion.h1
          className="text-[clamp(2.6rem,5.5vw,5.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]"
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
          className="mt-7 max-w-[520px] text-[16px] leading-[1.7] text-black/50 md:text-[17px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.12,
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
            duration: 0.8,
            delay: 0.25,
            ease,
          }}
        >
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-3 rounded-full
              bg-black px-8 py-4 text-[14px]
              font-medium text-white
              transition-colors duration-300
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
              text-[14px] font-medium text-black/40
              transition-colors hover:text-black
            "
          >
            View Case Studies
          </button>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="px-6 md:px-12 lg:px-16">
        <div className="h-px bg-black/10" />
      </div>
    </section>
  );
}