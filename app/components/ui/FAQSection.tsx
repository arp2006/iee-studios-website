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
      "Most projects wrap in 5–10 business days from kickoff to final delivery. If you're on a tight timeline, we offer expedited turnarounds — just let us know when you book.",
  },
  {
    question: "How is a Launch Film different from a launch video?",
    answer:
      "A launch video explains what your product does — features, UI walkthroughs, animated graphics. A launch film makes people feel something. It's cinematic, emotionally driven, and designed so your audience doesn't just understand your product — they connect with it.",
  },
  {
    question: "How does the process work?",
    answer:
      "It starts with you. Describe your product in as much detail as possible — the problem it solves, who it's for, what makes it different. From there, we nail down the visual style and creative direction together: the tone, the pacing, what you want viewers to walk away feeling. Then we get to work.",
  },
];

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="relative z-1 px-6 pt-28 pb-32 md:px-12 md:pt-36 md:pb-20 lg:px-16">
      <div className="mx-auto max-w-[1200px]">
        <motion.h2
          className="mb-16 text-4xl font-medium tracking-[-0.03em] md:mb-12 md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          Frequently Asked
        </motion.h2>

        <div>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="border-t border-black/10 last:border-b"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
              }}
            >
              <motion.button
                onClick={() =>
                  setOpenFaq(openFaq === i ? null : i)
                }
                whileHover={{ x: 6 }}
                transition={{
                  duration: 0.25,
                  ease,
                }}
                className="
                  flex w-full items-center justify-between
                  py-8 text-left cursor-pointer
                "
              >
                <span className="text-[19px] font-medium tracking-[-0.01em]">
                  {faq.question}
                </span>

                <motion.span
                  animate={{
                    rotate: openFaq === i ? 45 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl text-black/30"
                >
                  +
                </motion.span>
              </motion.button>

              <AnimatePresence initial={false}>
                {openFaq === i && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.45,
                      ease,
                    }}
                    className="overflow-hidden"
                  >
                    <motion.p
                      initial={{ y: 12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 8, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="
                        pb-8 pr-12
                        text-[16px]
                        leading-[1.75]
                        text-black/50
                      "
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}