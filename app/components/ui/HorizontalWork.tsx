"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";
import Script from "next/script";
import WistiaPlayer from "./WistiaPlayer";

type Project = {
  title: string;
  client: string;
  type: string;
  year: string;
  video?: string;
};

export default function HorizontalWork({
  projects,
  mobile,
}: {
  projects: Project[];
  mobile: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [current, setCurrent] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const slideWidth = typeof window !== "undefined" ? window.innerWidth * 0.9 : 0;

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(projects.length - 1) * slideWidth]
  );

  const smoothX = useSpring(x, {
    stiffness: 100,
    damping: 20,
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const raw = v * (projects.length - 1);

    // snap threshold
    const index = Math.round(raw);

    setCurrent(index);
  });

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;

      if (i === current) {
        if (video.paused) {
          video.currentTime = 0;
          video.play().catch(() => { });
        }
      } else {
        if (!video.paused) {
          video.pause();
        }
      }
    });
  }, [current]);

  /* Mobile fallback */
  if (mobile) {
    return (
      <section id="work" className="px-6 py-28 md:px-12">
        <div className="mx-auto max-w-[1100px]">

          <h2 className="mb-16 text-4xl tracking-[-0.03em] font-medium">
            Case Studies
          </h2>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <article key={project.title}>
                <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-black/5 lg:-ml-6">
                  {project.video && (
                    <div
                      className={`w-full h-full rounded-2xl overflow-hidden transition-all duration-500 ${index === current ? "scale-100" : "scale-95"
                        }`}
                    >
                      <WistiaPlayer mediaId={project.video} active={index === current} />
                    </div>
                  )}
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl font-medium">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-black/45">
                    {project.client} — {project.type}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    );
  }

  /* Desktop horizontal reel */



  return (
    <section
      id="work"
      ref={ref}
      className="relative h-[320vh]"
      snap-y snap-mandatory
    >
      <div className="sticky top-0 h-screen overflow-hidden">

        <div className="absolute top-16 z-20 justify-center w-full">
          <h2 className="
            text-[clamp(2rem,3vw,3.8rem)]
            font-medium
            text-center
          ">
            Case Studies
          </h2>
        </div>

        <motion.div
          style={{ x: smoothX }}
          className="flex h-screen gap-8"
        >

          {projects.slice(0, 4).map((project, index) => (

            <section
              key={project.title}
              className="
              w-[90vw] h-full flex items-center justify-center mx-auto
              h-screen
              shrink-0
              flex items-center
              px-6 md:px-12 lg:px-20
              snap-center
              "
            >

              <div
                className="
                  mx-auto
                  grid
                  w-full
                  max-w-[1100px]
                  items-center
                  gap-12 lg:gap-14
                  md:grid-cols-[0.6fr_1fr]
                "
              >

                <div>

                  <p
                    className="
                      mb-5
                      text-[11px]
                      uppercase
                      tracking-[0.18em]
                      text-black/40
                    "
                  >
                    {project.client}
                  </p>

                  <h3
                    className="
                      text-[clamp(1.8rem,2.6vw,3.2rem)]
                      leading-[1.05]
                      tracking-[-0.02em]
                      font-medium
                      max-w-[480px]
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      mt-6
                      max-w-[420px]
                      text-[15px]
                      leading-[1.6]
                      text-black/50
                    "
                  >
                    {project.type} — {project.year}
                  </p>

                  <div
                    className="
                      mt-12
                      text-[11px]
                      tracking-[0.18em]
                      uppercase
                      text-black/30
                    "
                  >
                    0{index + 1} — 04
                  </div>

                </div>



                {project.video && (
                  <div
                    className={`w-full h-full rounded-2xl overflow-hidden transition-all duration-500 ${index === current ? "scale-100" : "scale-95"
                      }`}
                  >
                    {index === current ? (
                      <WistiaPlayer mediaId={project.video} active={true} />
                    ) : (
                      <div className="w-full h-full bg-black/5 flex items-center justify-center text-sm text-black/30">
                        Preview
                      </div>
                    )}
                  </div>
                )}

              </div>

            </section>

          ))}

        </motion.div>

      </div>
    </section>
  );
}