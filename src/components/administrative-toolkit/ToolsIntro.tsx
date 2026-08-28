"use client";

import { motion } from "framer-motion";
import { EASE_STANDARD } from "@/lib/easing";

const toolLogos = ["Google Workspace", "Trello"];

export default function ToolsIntro() {
  return (
    <section className="tools-intro-section" id="tools">
      <div className="container">
        <div className="tools-intro-content">
          <motion.h2
            className="tools-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, ease: EASE_STANDARD }}
          >
            TOOLS THAT
            <br />
            <span className="tools-title-accent">WORK FOR YOU</span>
          </motion.h2>

          <motion.div
            className="tools-logos"
            initial={{ opacity: 0, gap: "2rem" }}
            whileInView={{ opacity: 1, gap: "1.5rem" }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE_STANDARD }}
          >
            {toolLogos.map((logo, index) => (
              <motion.span
                key={logo}
                className="tools-logo-item"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.3 + index * 0.1,
                  ease: EASE_STANDARD,
                }}
              >
                {logo}
              </motion.span>
            ))}
            <motion.span
              className="tools-plus"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: 0.4,
                ease: "easeOut",
              }}
            >
              +
            </motion.span>
          </motion.div>

          <motion.p
            className="tools-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{ duration: 0.5, delay: 0.5, ease: EASE_STANDARD }}
          >
            9 practical tools. One stronger workflow.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
