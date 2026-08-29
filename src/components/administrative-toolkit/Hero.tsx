"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { CSSProperties } from "react";
import { BRAND_LOGO_URL, REGISTRATION_URL } from "@/lib/config";
import { courses } from "@/data/courses";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-logo-wrapper">
          <Image
            src={BRAND_LOGO_URL}
            alt="CFI Ideation"
            width={150}
            height={84}
            className="hero-logo-image"
            priority
          />
        </div>

        <h1 className="hero-heading">
          <span className="hero-heading-text">
            Welcome to the beginning of your administrative journey
          </span>
        </h1>

        <p className="hero-description">
          Master a suite of digital tools to enhance your productivity and
          ensure smooth workflow.
        </p>

        <div className="hero-tool-icons" aria-label="Tools included">
          {courses.map((course) => (
            <span
              className="hero-tool-icon"
              key={course.id}
              title={course.title}
              style={{ "--tool-color": course.color } as CSSProperties}
            >
              <Image
                src={course.image}
                alt=""
                width={32}
                height={32}
                className="hero-tool-icon-image"
              />
            </span>
          ))}
        </div>

        <div className="hero-cta-wrapper">
          <motion.a
            href={REGISTRATION_URL}
            className="btn btn-primary btn-breathing"
            data-variant="hero"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 30px rgba(75, 22, 140, 0.5)",
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
