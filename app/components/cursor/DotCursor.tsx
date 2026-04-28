"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function DotCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const enter = () => setHovering(true);
    const leave = () => setHovering(false);

    const targets = document.querySelectorAll("a,button");

    targets.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const down = () => setClicking(true);
    const up = () => setClicking(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  let scale = 1;

  if (hovering) scale = 1.3;
  if (clicking) scale *= 0.45; // shrink on click

  return (
    <motion.div
      animate={{
        x: pos.x - 6,
        y: pos.y - 6,
        scale,
      }}
      transition={{
        x: {
          type: "spring",
          stiffness: 800,
          damping: 40,
        },
        y: {
          type: "spring",
          stiffness: 800,
          damping: 40,
        },
        scale: {
          duration: 0.12,
        },
      }}
      className="
        pointer-events-none
        fixed left-0 top-0
        z-[99999]
        h-4 w-4
        rounded-full
        bg-black/80
      "
    />
  );
}