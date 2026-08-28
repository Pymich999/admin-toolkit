"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    id: "duration",
    question: "How long is the training?",
    answer:
      "The training runs for 9 weeks total: 8 weeks of structured classes and a grace week, followed by certification. Classes run weekly, and all sessions are recorded so you can catch up at any time.",
  },
  {
    id: "miss-class",
      question: "What if I miss a class?",
    answer:
      "No problem. Week 8 is a dedicated Grace Week where you can catch up on any missed sessions. All classes are also recorded and available for review throughout the program.",
  },
  {
    id: "eligibility",
    question: "Who is eligible?",
    answer:
      "Anyone interested in building practical administrative skills is welcome. Whether you're a student, professional, or transitioning careers, this training is designed for beginners and those looking to refine their skills.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-section" id="faqs">
      <div className="container">
        <h2 className="faq-title">FAQs</h2>

        <div className="faq-list">
          {faqs.map((faq) => (
            <div key={faq.id} className="faq-item">
              <button
                type="button"
                className="faq-question"
                onClick={() => toggle(faq.id)}
                aria-expanded={openId === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="faq-question-text">{faq.question}</span>
                <motion.span
                  className="faq-icon"
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openId === faq.id && (
                  <motion.div
                    id={`faq-answer-${faq.id}`}
                    className="faq-answer-wrapper"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    <p className="faq-answer">{faq.answer}</p>
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
