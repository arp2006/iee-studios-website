"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What's the turnaround time for a launch film?",
    answer:
      "Most projects wrap in 5–10 business days from kickoff to final delivery. If you're on a tight timeline, we offer expedited turnarounds.",
  },
  {
    question: "How is a Launch Film different from a launch video?",
    answer:
      "A launch film is emotional and cinematic. It connects. A launch video explains features. We focus on feeling first.",
  },
  {
    question: "How does the process work?",
    answer:
      "You share your product and vision. We define direction, tone, and structure. Then we produce and deliver.",
  },
];

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="border-t border-black/30">
      <div className="w-full lg:pl-[70px] mx-auto ">

        {/* HEADER (aligned with system) */}
        <div className="px-2 md:px-5 lg:px-10 py-10 flex items-center gap-4 text-sm text-black/60">
          <span>03</span>
          <span>/</span>
          <span>FAQ</span>
        </div>

        {/* TITLE */}
        <div className="px-6 md:px-12 lg:px-20 mb-12">
          <h2 className="text-[clamp(2rem,3vw,3.2rem)] font-medium tracking-[-0.03em]">
            Frequently Asked
          </h2>
        </div>

        {/* LIST */}
        <div>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="px-6 md:px-12 lg:px-20 border-t border-black/10"
            >
              <button
                onClick={() =>
                  setOpenFaq(openFaq === i ? null : i)
                }
                className="flex w-full items-center justify-between py-8 text-left"
              >
                <span className="text-[1.1rem] font-medium tracking-[-0.01em]">
                  {faq.question}
                </span>

                <span className="text-black/30 text-xl">
                  {openFaq === i ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 pr-12 text-sm leading-[1.7] text-black/50 max-w-[600px]">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}