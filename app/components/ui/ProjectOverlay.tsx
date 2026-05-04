"use client";

import { useEffect } from "react";

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

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
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

  return (
    <div className="fixed inset-0 z-50 bg-black text-white flex flex-col">

      {/* CLOSE */}
      <button
        onClick={onClose}
        className="
          absolute top-6 right-6
          w-8 h-8
          flex items-center justify-center
          border border-white/50
          text-white/70
          hover:text-white
          hover:border-white
          transition
        "
      >
        ✕
      </button>

      {/* VIDEO */}
      <div className="w-full h-[85vh] flex items-center mt-16">
        <iframe
          src={`https://fast.wistia.net/embed/iframe/${project.videoId}`}
          allow="autoplay; fullscreen"
          className="w-full h-full"
        />
      </div>

      {/* TEXT */}
      <div className="px-6 md:px-12 py-8 max-w-4xl">
        <h2 className="text-2xl font-semibold mb-3">
          {project.title}
        </h2>

        <p className="text-white/60">
          {project.description}
        </p>
      </div>

    </div>
  );
}