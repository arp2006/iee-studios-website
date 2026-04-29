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

    console.log(form); // wire to form endpoint later

    setForm({
      name: "",
      email: "",
      budget: "",
      project: "",
    });
  };

  return (
      <div className="mx-auto max-w-[1200px] mt-17 grid gap-20 lg:grid-cols-2 items-start">
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
            backdrop-blur-xl
            p-8 md:p-10
            shadow-[0_20px_60px_rgba(0,0,0,0.04)]
            space-y-6
          "
        >
          {/* Name */}
          <FieldLabel label="Name" />
          <input
            value={form.name}
            onChange={(e)=>
              setForm({...form,name:e.target.value})
            }
            placeholder="Your Name"
            className={inputStyles}
          />

          {/* Email */}
          <FieldLabel label="Email" />
          <input
            type="email"
            value={form.email}
            onChange={(e)=>
              setForm({...form,email:e.target.value})
            }
            placeholder="Email Address"
            className={inputStyles}
          />

          {/* Budget */}
          <FieldLabel label="Budget" />
          <div className="relative">
            <select
              value={form.budget}
              onChange={(e)=>
                setForm({...form,budget:e.target.value})
              }
              className={selectStyles}
            >
              <option value="">Select Budget</option>
              <option>Under $4000</option>
              <option>$4000–$6000</option>
              <option>$6000–$10000+</option>
            </select>

            <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-black/35">
              ↓
            </div>
          </div>

          {/* Project */}
          <FieldLabel label="Project Brief" />
          <textarea
            rows={6}
            value={form.project}
            onChange={(e)=>
              setForm({...form,project:e.target.value})
            }
            placeholder="Describe your project..."
            className={textareaStyles}
          />

          {/* Submit */}
          <div className="group relative pt-2">
            <button
              type="submit"
              disabled={!isValid}
              className={`
                w-full rounded-full py-5
                text-sm font-medium
                transition-all duration-500
                ${
                  isValid
                    ? "bg-black text-white hover:bg-black/85"
                    : "bg-black/10 text-black/30 cursor-not-allowed"
                }
              `}
            >
              Send Inquiry
            </button>

            {!isValid && (
              <div
                className="
                  absolute left-1/2 -translate-x-1/2 -top-14
                  rounded-full bg-black px-4 py-2
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
  );
}

function FieldLabel({ label }: { label: string }) {
  return (
    <label className="block mb-2 text-[12px] uppercase tracking-[0.18em] text-black/35">
      {label}
    </label>
  );
}

const inputStyles = `
w-full rounded-2xl
border border-black/8
bg-neutral-50
px-6 py-5
outline-none
focus:border-black/20
`;

const selectStyles = `
w-full appearance-none
rounded-2xl
border border-black/8
bg-neutral-50
px-6 py-5 pr-14
outline-none
`;

const textareaStyles = `
w-full resize-none rounded-2xl
border border-black/8
bg-neutral-50
px-6 py-5
outline-none
`;