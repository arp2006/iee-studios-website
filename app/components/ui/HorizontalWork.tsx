"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Script from "next/script";

type Project = {
  title: string;
  client: string;
  type: string;
  year: string;
  wistiaId?: string;
};

export default function HorizontalWork({
  projects,
  mobile,
}: {
  projects: Project[];
  mobile: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-75%"]
  );

  /* Mobile fallback */
  if (mobile) {
    return (
      <section id="work" className="px-6 py-28 md:px-12">
        <div className="mx-auto max-w-[1100px]">

          <h2 className="mb-16 text-4xl tracking-[-0.03em] font-medium">
            Case Studies
          </h2>

          <div className="space-y-20">
            {projects.map((project) => (
              <article key={project.title}>
                <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-black/5 lg:-ml-6">
                  {project.wistiaId && (
                    <>
                      <Script
                        src={`https://fast.wistia.com/embed/${project.wistiaId}.js`}
                        strategy="lazyOnload"
                      />

                      {/* @ts-ignore */}
                      <wistia-player
                        media-id={project.wistiaId}
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </>
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
          style={{ x }}
          className="flex h-screen w-[400vw]"
        >

          {projects.slice(0, 4).map((project, index) => (

            <section
              key={project.title}
              className="
              w-screen
              h-screen
              shrink-0
              flex items-center
              px-6 md:px-12 lg:px-20
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


                <div className="
                  overflow-hidden
                  rounded-2xl
                ">

                  {project.wistiaId && (
                    <>
                      <Script
                        src={`https://fast.wistia.com/embed/${project.wistiaId}.js`}
                        strategy="lazyOnload"
                      />

                      {/* @ts-ignore */}
                      <wistia-player
                        media-id={project.wistiaId}
                        style={{
                          width: "100%",
                          height: "clamp(220px, 26vw, 420px)"
                        }}
                      />
                    </>
                  )}

                </div>

              </div>

            </section>

          ))}

        </motion.div>

      </div>
    </section>
  );
}