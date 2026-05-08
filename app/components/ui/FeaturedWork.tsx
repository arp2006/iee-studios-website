"use client";

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
const projects: Project[] = [
  {
    id: "01",
    title: "Basalt Furniture",
    description: 'launch film · "verified by design"',
    summary: "A product film centered on trust, curation, and the value of verified design.",
    year: "2026",
    image: "thumbnails/1.png",
    videoId: "b9xw0zvnzv",
    challenge:
      "Basalt needed to differentiate itself from generic furniture marketplaces by making its strict verification process feel premium rather than procedural.",
    idea:
      "We built a narrative around earned placement—highlighting material detail and controlled pacing to position verification as taste and trust.",
    deliverables: [
      "Launch film",
      "Script direction",
      "Product narrative",
      "Social cutdowns",
    ],
  },
  {
    id: "02",
    title: "Carekeep Launch",
    description: "product launch film · teaser",
    summary: "A launch and teaser campaign exploring emotional contrast in product workflows.",
    year: "2026",
    image: "thumbnails/2.png",
    videoId: "fqvwxkxvlw",
    challenge:
      "Carekeep lacked a defined narrative direction and needed a compelling emotional anchor for its product launch.",
    idea:
      "We explored multiple creative routes, ultimately focusing on the contrast between chaotic legacy workflows and a calmer, more intuitive system.",
    deliverables: [
      "Creative ideation",
      "Script routes",
      "Launch film",
      "Teaser",
    ],
  },
  {
    id: "03",
    title: "Nebula AI Agents",
    description: 'launch film · "unused potential"',
    summary:
      "A narrative-driven launch film focused on the gap between access to AI and real understanding of its potential.",
    year: "2026",
    image: "thumbnails/3.png",
    videoId: "uxp0atu6uo",
    challenge:
      "Nebula needed to promote AI agents without sounding like another AI product pitch. The core insight was that only a small part of the world uses AI meaningfully — and even many users barely touch its full potential.",
    idea:
      "We built the story around the gap between access and understanding. Instead of forcing the product into every frame, the film leads with a larger human truth, then naturally positions Nebula Agents as the way to unlock what people are still missing.",
    deliverables: [
      "Launch film",
      "Story strategy",
      "VO script",
      "Narrative positioning",
    ],
  },
  {
    id: "04",
    title: "Omni ID — Authologic",
    description: "product launch film · verification",
    summary:
      "A product launch film showing the contrast between chaotic KYC processes and a simplified one-click verification experience.",
    year: "2026",
    image: "thumbnails/4.png",
    videoId: "gifr74w6l7",
    challenge:
      "Authologic was launching Omni ID, a one-button verification product designed to remove traditional KYC friction. The challenge was to first show the chaos already built into verification, then make the simplicity of Omni ID feel obvious.",
    idea:
      "The film opens inside the noise: fragmented KYC methods, repeated checks, broken flows, and user frustration. The second act strips that chaos away, using a single-button reveal to show how Omni ID turns verification into one clear action.",
    deliverables: [
      "Product launch film",
      "Chaos-to-clarity concept",
      "VO script",
      "Teaser cuts",
    ],
  },
];

export default function FeaturedWork({
  onProjectClick,
}: {
  onProjectClick: (project: any) => void;
}) {
  return (
    <section id="work" className="border-t border-black/50 ">
      <div className="w-full lg:pl-[150px] mx-auto  lg:pr-[150px]">

        {/* HEADER */}
        <div className="px-10 py-10 flex items-center gap-4 text-sm text-black/60">
          <div className="flex items-center gap-4">
            <span>02</span>
            <span>/</span>
            <span>Case Studies</span>
          </div>

          {/* <button className="hover:text-black transition  pr-50">
            VIEW ALL WORK →
          </button> */}
        </div>



        {/* LIST */}
        <div className="overflow-x-hidden py-5">
          {projects.map((project, i) => (
            <div key={project.id} className="relative md:pr-15">
              <div className="absolute top-0 left-0 h-px w-full bg-black/20" />
              <div
                onClick={() => onProjectClick(project)}
                className="
                  px-6 md:px-12 lg:px-20 py-3
                  flex items-center justify-between
                  group
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
                  <div className="w-[120px] h-[70px] bg-black/10 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    {/* src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-[10%_50%] scale-500 translate-x-[180%] -translate-y-[150%]" */}
                  </div>

                  {/* TITLE */}
                  <span className="font-medium text-black">
                    {project.title}
                  </span>
                </div>

                {/* CENTER */}
                <div className="hidden lg:block text-black/50 text-sm">
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