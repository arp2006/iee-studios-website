"use client";

import { motion, AnimatePresence } from "framer-motion";

type NavbarProps = {
  showNav: boolean;
  smallNav: boolean;
  CALENDLY: string;
};

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Navbar({
  showNav,
  smallNav,
  CALENDLY,
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
            bg-white/80 px-6 shadow-sm
            backdrop-blur-xl -translate-x-1/2
            md:px-8
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
              rounded-full bg-black
              px-6 py-3 text-[13px]
              text-white hover:bg-black/85
            "
          >
            Book a Call
          </motion.a>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}