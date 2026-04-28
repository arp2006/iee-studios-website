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
                <div className="overflow-hidden rounded-2xl">

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
                          height: "300px",
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
      className="relative h-[320vh] border-t border-black/10"
    >
      <div className="sticky top-0 h-screen overflow-hidden">

        <div className="absolute top-16 z-20 justify-center w-full">
          <h2 className="
            text-4xl
            md:text-6xl
            lg:text-7xl
            tracking-[-0.04em]
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

          {projects.slice(0,4).map((project,index)=>(

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

              <div className="
                mx-auto
                grid
                w-full
                max-w-[1300px]
                items-center
                gap-20
                md:grid-cols-2
              ">

                <div>

                  <p className="
                    mb-6
                    text-[11px]
                    uppercase
                    tracking-[0.25em]
                    text-black/35
                  ">
                    {project.client}
                  </p>

                  <h3 className="
                    text-[clamp(3rem,7vw,7rem)]
                    leading-[0.95]
                    tracking-[-0.05em]
                    font-medium
                  ">
                    {project.title}
                  </h3>

                  <p className="
                    mt-8
                    max-w-md
                    text-lg
                    leading-[1.7]
                    text-black/45
                  ">
                    {project.type} — {project.year}
                  </p>

                  <div className="
                    mt-16
                    text-[12px]
                    tracking-[0.2em]
                    uppercase
                    text-black/25
                  ">
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
                          width:"100%",
                          height:"600px"
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