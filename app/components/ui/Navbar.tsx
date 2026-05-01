"use client";

import { motion, AnimatePresence } from "framer-motion";

type NavbarProps = {
  showNav: boolean;
  smallNav: boolean;
  CALENDLY: string;
  mobile: boolean;
};

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Navbar({
  showNav,
  smallNav,
  CALENDLY,
  mobile,
}: NavbarProps) {
  return (
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
            width: mobile
              ? "94vw"
              : (smallNav ? "245px" : "900px"),
            paddingTop: smallNav ? "12px" : "18px",
            paddingBottom: smallNav ? "12px" : "18px",
            left: "50%",
            x: mobile ? 0 : (smallNav ? 500 : 0),
          }}
          exit={{
            opacity: 0,
            width: "250px",
            y: -30,
          }}
          transition={{
            duration: 0.55,
            ease,
          }}
          className="
            fixed top-14 left-1/2 z-[9999]
            -translate-x-1/2
            flex items-center justify-between
            px-3 md:px-5
            rounded-full

            bg-white/[0.08]
            backdrop-blur-2xl

            border border-white/30
            shadow-[0_8px_40px_rgba(0,0,0,0.06)]
          "
        >
          {/* glass highlight */}
          <div
            className="
              pointer-events-none
              absolute inset-0 rounded-full
              bg-gradient-to-b
              from-white/35
              via-white/10
              to-white/[0.03]
            "
          />

          {/* subtle inner shine */}
          <div
            className="
              pointer-events-none
              absolute inset-[1px] rounded-full
              border border-white/20
            "
          />

          <motion.span
            className="
              relative z-10
              text-[11px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-black/80
            "
            animate={{
              letterSpacing: smallNav
                ? "0.18em"
                : "0.25em",
              opacity: smallNav ? 0.75 : 1,
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
              relative z-10
              rounded-full
              border border-white/20
              bg-black/90
              backdrop-blur-xl

              px-6 py-3
              text-[13px]
              text-white

              transition-all duration-500
              hover:bg-black/80
              hover:scale-[1.02]

              shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]
            "
          >
            Book a Call
          </motion.a>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}