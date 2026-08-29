"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { BRAND_LOGO_URL, REGISTRATION_URL } from "@/lib/config";
import { courses } from "@/data/courses";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const phrases = useMemo(
    () => [
      "Welcome to Administrative Toolkit",
      "Welcome to the beginning of your administrative journey",
      "All the tools you need for administration",
    ],
    [],
  );
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visibleLength, setVisibleLength] = useState(phrases[0].length);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStartedWriting, setHasStartedWriting] = useState(false);
  const activePhrase = phrases[phraseIndex];
  const visiblePhrase = activePhrase.slice(0, visibleLength);

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    if (!hasStartedWriting) {
      const startTimeout = window.setTimeout(() => {
        setVisibleLength(0);
        setIsDeleting(false);
        setHasStartedWriting(true);
      }, 450);

      return () => window.clearTimeout(startTimeout);
    }

    const atFullPhrase = visibleLength === activePhrase.length;
    const atEmptyPhrase = visibleLength === 0;
    const delay = atFullPhrase && !isDeleting ? 1300 : isDeleting ? 28 : 48;

    const timeout = window.setTimeout(() => {
      if (atFullPhrase && !isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (atEmptyPhrase && isDeleting) {
        setPhraseIndex((current) => (current + 1) % phrases.length);
        setIsDeleting(false);
        return;
      }

      setVisibleLength((current) => current + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [
    activePhrase.length,
    hasStartedWriting,
    isDeleting,
    phrases,
    shouldReduceMotion,
    visibleLength,
  ]);

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

        <h1 className="hero-heading" aria-live="polite">
          <span className="hero-heading-text">{visiblePhrase}</span>
          <span className="hero-writing-cursor" aria-hidden="true" />
        </h1>

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
