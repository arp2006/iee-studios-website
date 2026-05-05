"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Project = {
  id: string;
  title: string;
  description: string;
  summary: string;
  year: string;
  image: string;
  videoId: string;
  challenge: string;
  idea: string;
  deliverables: string[];
};

export default function ProjectOverlay({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    // 👇 use capture phase (true)
    document.addEventListener("keydown", handleKey, true);

    return () => {
      document.removeEventListener("keydown", handleKey, true);
    };
  }, [onClose]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      // Mouse button 4 = usually "Back" button
      if (e.button === 3) {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("mousedown", handleMouse);

    return () => {
      window.removeEventListener("mousedown", handleMouse);
    };
  }, [onClose]);

  useEffect(() => {
    const t = setTimeout(() => {
      setShowVideo(true);
    }, 250);

    return () => clearTimeout(t);
  }, [project.videoId]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed inset-0 z-50 bg-white text-black flex flex-col"
    >
      {/* CLOSE */}
      <button
        onClick={onClose}
        className="
          absolute top-1 right-1
          w-8 h-8
          flex items-center justify-center
          border border-black/30
          text-black/50
          hover:text-black
          hover:border-black
          transition
          z-1
        "
      >
        ✕
      </button>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="flex flex-row h-full"
      >
        {/* VIDEO */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(69px)" }}
          animate={{ opacity: showVideo ? 1 : 0, filter: "blur(0px)" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="
            w-full h-[60vh]
            md:w-3/4 md:h-[90vh]
            relative mt-12 ml-12
          "
        >
          <iframe
            src={`https://fast.wistia.net/embed/iframe/${project.videoId}`}
            allow="autoplay; fullscreen"
            className="absolute inset-0 w-full h-full"
          />
        </motion.div>

        {/* TEXT */}
        <div
          className="
            w-full
            md:w-1/4
            md:h-full
            overflow-y-auto
          "
        >
          <div className="max-w-2xl px-6 md:px-12 py-12 space-y-12">
            {/* HEADER */}
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold">
                {project.title}
              </h2>
              <p className="text-sm text-black/40">
                {project.year} · {project.description}
              </p>
            </div>

            {/* SUMMARY */}
            <div className="max-w-2xl">
              <h3 className="text-xs uppercase tracking-wider text-black/40 mb-3">
                Summary
              </h3>
              <p className="text-black/70 leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* GRID: Challenge / Idea */}
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xs uppercase tracking-wider text-black/40 mb-3">
                  Challenge
                </h3>
                <p className="text-black/70 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-wider text-black/40 mb-3">
                  Idea
                </h3>
                <p className="text-black/70 leading-relaxed">
                  {project.idea}
                </p>
              </div>
            </div>

            {/* DELIVERABLES */}
            <div>
              <h3 className="text-xs uppercase tracking-wider text-black/40 mb-4">
                Deliverables
              </h3>

              <div className="flex flex-wrap gap-3">
                {project.deliverables.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm border border-black/20 rounded-full text-black/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}