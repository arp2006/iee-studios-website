"use client";

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
  return (
    <div className="fixed inset-0 z-50 bg-black text-white flex flex-col">

      {/* CLOSE */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/60 hover:text-white"
      >
        ✕
      </button>

      {/* VIDEO */}
      <div className="w-full h-[85vh] flex items-center ">
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