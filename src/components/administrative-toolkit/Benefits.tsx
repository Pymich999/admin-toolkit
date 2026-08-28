"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    id: "in-depth",
    title: "IN DEPTH TRAINING",
    description:
      "You'll learn practical tools like Google Workspace and Trello step by step, with clear guidance you can follow easily.",
  },
  {
    id: "certification",
    title: "CERTIFICATION",
    description:
      "At the end of the program, you'll receive a certificate that proves you've completed the training and built valuable admin skills.",
  },
  {
    id: "flexible",
    title: "FLEXIBLE LEARNING",
    description:
      "The program is designed to fit your schedule, with room to catch up if you miss a class.",
  },
];

export default function Benefits() {
  return (
    <section className="benefits-section">
      <div className="container">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.id}
            className="benefit-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            whileHover={{
              y: -6,
              boxShadow: "0 30px 50px rgba(13, 83, 178, 0.15)",
            }}
          >
            <span className="benefit-card-number">{index + 1}</span>
            <h3 className="benefit-card-title">{benefit.title}</h3>
            <p className="benefit-card-description">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
