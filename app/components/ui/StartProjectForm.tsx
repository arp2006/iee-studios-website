"use client";

import { useMemo, useState } from "react";

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
    <section id="start" className=" border-t border-black/30">
      <div className="w-full lg:pl-[70px] mx-auto pb-20">

        {/* HEADER */}
        <div className="px-2 md:px-5 lg:px-10 py-10 flex items-center gap-4 text-sm text-black/60">
          <span>04</span>
          <span>/</span>
          <span>START A PROJECT</span>
        </div>

        {/* GRID */}
        <div className="px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT */}
          <div className="relative max-w-[560px]">
            <h2 className="text-[clamp(2.2rem,3vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
              Let’s build
              <br />
              <span className="text-black/45">
                something memorable.
              </span>
            </h2>

            <p className="mt-6 text-black/50 text-[15px] leading-[1.7] max-w-[420px]">
              Tell us about your product, launch goals, and creative direction. We’ll shape a film designed to move people.
            </p>
            <div className="mt-10">
              <div className="relative max-w-[520px] rounded-xl overflow-hidden">

                <img
                  src="/images/form.png"
                  alt="Form preview"
                  className="
                    w-full h-auto
                    object-cover
                    grayscale
                    opacity-90
                  "
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-radial from-white/0 via-white/20 to-white/50" />

              </div>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="
              rounded-2xl
              border border-black/10
              bg-white/70
              backdrop-blur-xl
              p-6 md:p-7
              shadow-[0_10px_30px_rgba(0,0,0,0.03)]
              space-y-5
              max-w-[620px]
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
            <div className="pt-2">
              <button
                type="submit"
                disabled={!isValid}
                className={`
                  w-full rounded-full py-3 text-sm transition
                  ${isValid
                    ? "bg-black text-white hover:bg-black/85"
                    : "bg-black/10 text-black/30 cursor-not-allowed"}
                `}
              >
                Send Inquiry →
              </button>
            </div>
          </form>
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
  focus:border-black/20
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