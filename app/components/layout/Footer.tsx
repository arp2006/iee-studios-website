"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    budget: "",
    project: "",
  });

  const isValid =
    form.name.trim() &&
    form.email.trim() &&
    form.budget.trim() &&
    form.project.trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    console.log(form);
    // Add submit logic here
  };

  return (
    <footer className="relative z-1 border-t border-black/10 px-6 py-3 md:px-12 md:pb-28 lg:px-16">
      <div className="mx-auto max-w-[1200px]">

        <div className="mt-20 grid items-start gap-20 lg:grid-cols-2">

          {/* Left Copy */}
          <div className="max-w-xl">
            <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-black/30">
              Start a Project
            </p>

            <h2 className="text-[clamp(2.6rem,4vw,5rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
              Let’s build
              <br />
              <span className="text-black/45">
                something memorable.
              </span>
            </h2>

            <p className="mt-4 max-w-md text-[17px] leading-[1.8] text-black/50">
              Tell us about your product, launch goals, and
              creative ambitions. We’ll shape a film built
              to move people.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="
              rounded-[32px]
              border border-black/10
              bg-white/70
              p-8 md:p-10
              backdrop-blur-xl
              shadow-[0_20px_60px_rgba(0,0,0,0.04)]
              space-y-6
            "
          >
            <div className="space-y-2">
              <label className="text-[12px] uppercase tracking-[0.18em] text-black/35">
                Name
              </label>

              <input
                name="name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                placeholder="Your Name"
                className="
                  w-full rounded-2xl
                  border border-black/8
                  bg-neutral-50
                  px-6 py-5
                  outline-none
                  transition
                  focus:border-black/20
                "
              />
            </div>

            <div className="space-y-2">
              <label className="text-[12px] uppercase tracking-[0.18em] text-black/35">
                Email
              </label>

              <input
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                placeholder="Email Address"
                className="
                  w-full rounded-2xl
                  border border-black/8
                  bg-neutral-50
                  px-6 py-5
                  outline-none
                  transition
                  focus:border-black/20
                "
              />
            </div>

            <div className="space-y-2">
              <label className="text-[12px] uppercase tracking-[0.18em] text-black/35">
                Budget
              </label>

              <div className="relative">
                <select
                  value={form.budget}
                  onChange={(e) =>
                    setForm({ ...form, budget: e.target.value })
                  }
                  className="
                    w-full appearance-none
                    rounded-2xl
                    border border-black/8
                    bg-neutral-50
                    px-6 py-5 pr-14
                    outline-none
                  "
                >
                  <option value="">
                    Select Budget
                  </option>
                  <option>Under $4000</option>
                  <option>$4000-$6000</option>
                  <option>$6000-$10000+ (With Shooting)</option>
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center text-black/35">
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path
                      d="M6 9l6 6 6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[12px] uppercase tracking-[0.18em] text-black/35">
                Project Brief
              </label>

              <textarea
                rows={6}
                value={form.project}
                onChange={(e) =>
                  setForm({ ...form, project: e.target.value })
                }
                placeholder="Describe your project..."
                className="
                  w-full resize-none rounded-2xl
                  border border-black/8
                  bg-neutral-50
                  px-6 py-5
                  outline-none
                "
              />
            </div>

            <div className="group relative pt-2">
              <button
                type="submit"
                disabled={!isValid}
                className={`
                  w-full rounded-full py-5
                  text-[14px] font-medium
                  transition-all duration-500
                  ${isValid
                    ? "bg-black text-white cursor-pointer hover:scale-[1.01] hover:bg-black/85"
                    : "bg-black/10 text-black/30 cursor-not-allowed"
                  }
                `}
              >
                Send Inquiry
              </button>

              {!isValid && (
                <div
                  className="
            pointer-events-none
            absolute left-1/2 -translate-x-1/2
            -top-14
            rounded-full bg-black
            px-4 py-2
            text-[12px] text-white
            opacity-0 scale-95
            transition-all
            group-hover:opacity-100
            group-hover:scale-100
          "
                >
                  Complete inquiry to continue
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Bottom Footer */}
        <div className="mt-14 flex flex-col gap-8 md:mt-20 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-4">
            <div className="space-y-0">
              <p className="text-[11px] uppercase tracking-[0.35em] text-black/30">
                Creative Direction • Launch Films
              </p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="
                  text-[clamp(2rem,3vw,4rem)]
                  font-medium
                  tracking-[-0.03em]
                  text-black/50
                "
              >
                iee studios
              </motion.h2>
            </div>

            <div className="flex items-center gap-5 pt-2">
              <a
                href="mailto:inspireelevateevovle@gmail.com"
                className="flex items-center gap-2 text-[13px] text-black/40 transition hover:text-black/80"
              >
                <HiOutlineMail className="text-[16px]" />
                <span className="hidden sm:inline">
                  inspireelevateevovle@gmail.com
                </span>
              </a>

              <a
                href="https://x.com/madtirth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[13px] text-black/40 transition hover:text-black/80"
              >
                <RiTwitterXFill className="text-[14px]" />
                <span className="hidden sm:inline">@madtirth</span>
              </a>
            </div>
          </div>

          <span className="text-[11px] text-black/25">
            © 2026 IEE Studios
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;