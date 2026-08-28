"use client";

import { motion } from "framer-motion";
import { REGISTRATION_URL } from "@/lib/config";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-logo-wrapper">
          <div className="hero-logo">
            <span className="hero-logo-text">CFI</span>
          </div>
          <span className="hero-tagline">IDEATION</span>
        </div>

        <h1 className="hero-heading">
          <span className="hero-heading-line">Administrative</span>
          <span className="hero-heading-line">Toolkit Training</span>
        </h1>

        <p className="hero-description">
          Master a suite of digital tools to enhance your productivity and
          ensure smooth workflow.
        </p>

        <div className="hero-cta-wrapper">
          <motion.a
            href={REGISTRATION_URL}
            className="btn btn-primary btn-breathing"
            data-variant="hero"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 30px rgba(13, 83, 178, 0.5)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            REGISTER NOW
          </motion.a>
        </div>
      </div>
    </section>
  );
}
