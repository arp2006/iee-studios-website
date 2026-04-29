"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { RiTwitterXFill } from "react-icons/ri";
import StartProjectForm from "../ui/StartProjectForm";

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
        <StartProjectForm />

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