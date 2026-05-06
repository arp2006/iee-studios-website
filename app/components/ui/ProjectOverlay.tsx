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
    const t = setTimeout(() => {
      setShowVideo(true);
    }, 250);

    return () => clearTimeout(t);
  }, [project.videoId]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onWheelCapture={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
      className="fixed z-500 bg-white text-black left-0 right-0 top-0 bottom-0 md:left-[151px] md:right-[151px] md:top-[95px] bottom-0 overflow-y-auto"
    >
      {/* CLOSE */}

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="
          w-full
          min-h-full
          px-6 md:px-10
          flex flex-col items-center
        "
      >
        <motion.div
          initial={{ opacity: 0, filter: "blur(69px)" }}
          animate={{ opacity: showVideo ? 1 : 0, filter: "blur(0px)" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="
            w-full md:w-[85%]
            relative
            mt-5
          "
        >
          <button
            onClick={onClose}
            className="
              absolute right-0
              w-10 h-10
              flex items-center justify-center
              border border-black/20
              bg-white/80
              backdrop-blur-md
              text-black/50
              hover:text-black
              hover:border-black
              transition
              z-50
            "
          >
            ✕
          </button>
          <div className="w-[full] md:h-full">
            <div className="w-full pb-5 space-y-12">
              {/* HEADER */}


              {/* CONTENT GRID */}
              <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-5">
                  <h2 className="text-3xl font-semibold">
                    {project.title}
                  </h2>
                  <p className="text-sm text-black/40">
                    {project.year} · {project.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative md:w-full aspect-video">
            <iframe
              src={`https://fast.wistia.net/embed/iframe/${project.videoId}`}
              allow="autoplay; fullscreen"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>

        {/* TEXT */}
        <div className="w-full md:w-[85%] md:h-full">
          <div className="w-full py-12 space-y-12">
            {/* HEADER */}


            {/* CONTENT GRID */}
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-10">

                {/* SUMMARY */}
                <div className="max-w-2xl">
                  <h3 className="text-xs uppercase tracking-wider text-black/40 mb-3">
                    Summary
                  </h3>
                  <p className="text-black/70 leading-relaxed max-w-xl">
                    {project.summary}
                  </p>
                </div>
                {/* LEFT : DELIVERABLES */}
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



              {/* RIGHT : CHALLENGE + IDEA */}
              <div className="space-y-10">
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-black/40 mb-3">
                    Challenge
                  </h3>
                  <p className="text-black/70 leading-relaxed max-w-xl">
                    {project.challenge}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-wider text-black/40 mb-3">
                    Idea
                  </h3>
                  <p className="text-black/70 leading-relaxed max-w-xl">
                    {project.idea}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}