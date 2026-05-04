"use client";

type Project = {
  id: string;
  title: string;
  description: string;
  year: string;
  image: string;
};

const projects: Project[] = [
  {
    id: "01",
    title: "Basalt Furniture",
    description: 'launch film · "verified by design"',
    year: "2026",
    image: "/thumb1.jpg",
  },
  {
    id: "02",
    title: "Carekeep Launch",
    description: "product launch film · teaser",
    year: "2026",
    image: "/thumb2.jpg",
  },
  {
    id: "03",
    title: "Nebula AI Agents",
    description: 'launch film · "unused potential"',
    year: "2026",
    image: "/thumb3.jpg",
  },
  {
    id: "04",
    title: "Omni ID — Authologic",
    description: "product launch film · verification",
    year: "2026",
    image: "/thumb4.jpg",
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="border-t border-black/30">
      <div className="w-full lg:pl-[70px] mx-auto ">

        {/* HEADER */}
        <div className="px-6 mpx-2 md:px-5 lg:px-10 py-10 flex items-center justify-between text-sm text-black/60">
          <div className="flex items-center gap-4">
            <span>02</span>
            <span>/</span>
            <span>FEATURED WORK</span>
          </div>

          <button className="hover:text-black transition">
            VIEW ALL WORK →
          </button>
        </div>

        {/* LIST */}
        <div className="overflow-x-hidden">
          {projects.map((project, i) => (
            <div key={project.id} className="relative">
              <div className="absolute left-[75px] -right-10 top-0 h-px bg-black/10" />
              <div
                className="
                px-6 md:px-12 lg:px-20 py-3
                flex items-center justify-between
                group
                hover:bg-black/[0.02]
                transition
                hover:translate-x-2
                cursor-pointer
              "
              >
                {/* LEFT */}
                <div className="flex items-center gap-6 min-w-[400px]">

                  {/* INDEX */}
                  <span className="text-sm text-black/40 w-[40px]">
                    {project.id}
                  </span>

                  {/* THUMB */}
                  <div className="w-[80px] h-[50px] bg-black/10 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* TITLE */}
                  <span className="font-medium text-black">
                    {project.title}
                  </span>
                </div>

                {/* CENTER */}
                <div className="hidden md:block text-black/50 text-sm">
                  {project.description}
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-10 text-sm text-black/50">
                  <span>{project.year}</span>
                  <span className="">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}