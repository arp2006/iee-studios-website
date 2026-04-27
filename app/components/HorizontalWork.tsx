"use client";

import { useRef } from "react";
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
  projects
}: {
  projects: Project[]
}) {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-300%"]
  );

  return (
    <section
      id="work"
      ref={ref}
      className="relative h-[400vh]"
    >

      <div className="sticky top-0 h-screen overflow-hidden bg-white">

        <div className="
absolute top-16 left-6 md:left-12 lg:left-20
z-20
">
          <h2 className="
text-4xl md:text-6xl lg:text-7xl
tracking-[-0.04em]
font-medium
">
            Selected Work
          </h2>
        </div>


        <motion.div
          style={{ x }}
          className="flex h-screen w-[400vw]"
        >

          {projects.slice(0, 4).map(project => (

            <section
              key={project.title}
              className="
w-screen h-screen shrink-0
flex items-center
px-6 md:px-12 lg:px-20
"
            >

              <div className="
grid md:grid-cols-2
gap-16 items-center
w-full max-w-[1300px] mx-auto
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
                    0{projects.indexOf(project) + 1} — 04
                  </div>

                </div>


                <div className="
rounded-2xl
overflow-hidden
"
                >

                  {project.wistiaId && (
                    <>
                      <Script
                        src={`https://fast.wistia.com/embed/${project.wistiaId}.js`}
                        strategy="lazyOnload"
                      />

                      <wistia-player
                        media-id={project.wistiaId}
                        style={{
                          width: "100%",
                          height: "600px"
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