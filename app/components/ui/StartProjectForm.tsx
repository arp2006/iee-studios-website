"use client";

import { motion } from "motion/react";
import { useMemo, useState } from "react";

const arrowRight = {
  rest: { x: 0 },
  hover: { x: 5 },
};

const buttonVariants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: "0 0 0 rgba(0,0,0,0)",
  },
  hover: {
    y: -3,
    scale: 1.03,
    boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
  },
};

export default function StartProjectForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    budget: "",
    project: "",
  });

  const isValid = useMemo(() => {
    return (
      form.name.trim() &&
      form.email.trim() &&
      form.budget.trim() &&
      form.project.trim()
    );
  }, [form]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    console.log(form);

    setForm({
      name: "",
      email: "",
      budget: "",
      project: "",
    });
  };

  return (
    <section id="start" className=" border-t border-black/50">
      <div className=" relative w-full lg:pl-[150px] mx-auto py-5 overflow-hidden  md:pr-[150px]">
        <div
          className="
          absolute top-0 bottom-0 right-0
          left-[0px]
          lg:left-[150px]
          bg-[url('/images/form.png')]
          bg-cover z-0
          bg-center lg:mr-[150px]
          
        "
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 backdrop-blur-xs left-[0px] lg:left-[150px] lg:mr-[150px] lg:border-x border-black/50" />

        {/* ACTUAL CONTENT */}
        <div className="relative z-10">
          {/* HEADER */}
          <div className="px-10 py-10 flex items-center gap-4 text-sm text-white/60">
            <span>04</span>
            <span>/</span>
            <span>START A PROJECT</span>
          </div>

          {/* GRID */}
          <div className="px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-20 items-start">

            {/* LEFT */}
            <div className="relative max-w-[560px]">
              <h2 className="text-[clamp(2.2rem,3vw,3.6rem)] text-white font-semibold leading-[1.05] tracking-[-0.04em]">
                Let’s build
                <br />
                <span className="text-white">
                  something memorable.
                </span>
              </h2>

              <p className="mt-6 text-white/80 text-[15px] leading-[1.7] max-w-[420px]">
                Tell us about your product, launch goals, and creative direction. We’ll shape a film designed to move people.
              </p>

            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="
              rounded-2xl
              border border-black/20
              bg-white/70
              backdrop-blur-xl
              p-6 md:p-7
              shadow-[0_10px_30px_rgba(0,0,0,0.03)]
              space-y-5
              max-w-[575px]
              min-h-[643px]
            "
            >
              <Field label="Name">
                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  placeholder="Your Name"
                  className={inputStyles}
                />
              </Field>

              <Field label="Email">
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  placeholder="Email Address"
                  className={inputStyles}
                />
              </Field>

              <Field label="Budget">
                <div className="relative">
                  <select
                    value={form.budget}
                    onChange={(e) =>
                      setForm({ ...form, budget: e.target.value })
                    }
                    className={selectStyles}
                  >
                    <option value="">Select Budget</option>
                    <option>Under $4000</option>
                    <option>$4000–$6000</option>
                    <option>$6000–$10000+ (with shooting)</option>
                  </select>

                  <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-black/35 text-sm">
                    ↓
                  </div>
                </div>
              </Field>

              <Field label="Project Brief">
                <textarea
                  rows={5}
                  value={form.project}
                  onChange={(e) =>
                    setForm({ ...form, project: e.target.value })
                  }
                  placeholder="Describe your project..."
                  className={textareaStyles}
                />
              </Field>

              {/* BUTTON */}
              <div className="pt-2 relative group">
                {/* TOOLTIP */}
                {!isValid && (
                  <div
                    className="
                    absolute left-1/2 -translate-x-1/2 -top-12
                    rounded-full bg-black px-3 py-1.5
                    text-[11px] text-white
                    opacity-0 scale-95
                    transition-all
                    group-hover:opacity-100
                    group-hover:scale-100
                    whitespace-nowrap
                  "
                  >
                    Complete inquiry to continue
                  </div>
                )}

                {/* BUTTON */}
                <motion.button
                  type="submit"
                  disabled={!isValid}
                  initial="rest"
                  animate="rest"
                  whileHover={isValid ? "hover" : "rest"}
                  whileTap={isValid ? { scale: 0.97 } : {}}
                  variants={buttonVariants}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`
                    w-full rounded-full py-3 text-sm transition
                    flex items-center justify-center gap-2
                    ${isValid
                      ? "bg-black text-white hover:bg-black/85 cursor-pointer"
                      : "bg-black/10 text-black/30 cursor-not-allowed"}
                  `}
                >
                  Send Inquiry

                  {/* optional animated arrow */}
                  <motion.span
                    variants={arrowRight}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    className="inline-block"
                  >
                    →
                  </motion.span>
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block mb-2 text-[12px] uppercase tracking-[0.18em] text-black/35">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputStyles = `
  w-full rounded-2xl
  border border-black/8
  bg-neutral-50
  px-6 py-4
  outline-none
  focus:border-black/50
`;

const selectStyles = `
  w-full appearance-none
  rounded-2xl
  border border-black/8
  bg-neutral-50
  px-6 py-4 pr-14
  outline-none
`;

const textareaStyles = `
  w-full resize-none rounded-2xl
  border border-black/8
  bg-neutral-50
  px-6 py-4
  outline-none
`;