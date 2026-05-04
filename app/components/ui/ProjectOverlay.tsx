"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Project = {
  id: string;
  title: string;
  description: string;
  year: string;
  image: string;
  videoId: string;
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
    }, 250); // tweak: 200–300ms sweet spot

    return () => clearTimeout(t);
  }, [project.videoId]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed inset-0 z-50 bg-black text-white flex flex-col"
    >
      {/* CLOSE */}
      <button
        onClick={onClose}
        className="
          absolute top-6 right-6
          w-8 h-8
          flex items-center justify-center
          border border-white/70
          text-white/70
          hover:text-white
          hover:border-white
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
        className="flex flex-col h-full"
      >
        {/* VIDEO */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(69px)" }}
          animate={{ opacity: showVideo ? 1 : 0, filter: "blur(0px)" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full h-[85vh]"
        >
          <iframe
            src={`https://fast.wistia.net/embed/iframe/${project.videoId}`}
            allow="autoplay; fullscreen"
            className="w-full h-full focus"
          />
        </motion.div>

        {/* TEXT */}
        <div className="px-6 md:px-12 py-8 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-3">
            {project.title}
          </h2>

          <p className="text-white/60">
            {project.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}