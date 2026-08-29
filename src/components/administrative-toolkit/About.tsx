"use client";

import { motion, type Variants } from "framer-motion";
import { EASE_STANDARD } from "@/lib/easing";

const benefits = [
  "Work smarter",
  "Organize tasks better",
  "Communicate effectively",
  "Support teams with excellence",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: EASE_STANDARD },
  },
};

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-content">
          <motion.h2
            className="about-title"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, ease: EASE_STANDARD }}
          >
            <span className="about-title-line">What is</span>
            <span className="about-title-line">Administrative</span>
            <span className="about-title-line">Toolkit?</span>
          </motion.h2>

          <motion.p
            className="about-description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE_STANDARD }}
          >
            Administrative Toolkit is 7 weeks of practical training plus
            certification in week 8, equipping you with the most relevant
            digital tools to:
          </motion.p>

          <motion.ul
            className="about-benefits"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5% 0px" }}
          >
            {benefits.map((benefit) => (
              <motion.li
                key={benefit}
                className="about-benefit-item"
                variants={itemVariants}
              >
                <span className="about-benefit-bullet" />
                {benefit}
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            className="about-description about-description--full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{ duration: 0.5, delay: 0.5, ease: EASE_STANDARD }}
          >
            You&apos;ll learn tools that are simple, powerful, and widely used
            across administrative, academic, and professional settings.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
