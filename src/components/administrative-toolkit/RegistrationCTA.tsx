"use client";

import { motion } from "framer-motion";
import { REGISTRATION_URL, REGISTRATION_DATES } from "@/lib/config";
import { EASE_STANDARD, EASE_EMPHATIC } from "@/lib/easing";

export default function RegistrationCTA() {
  return (
    <section className="registration-section">
      <div className="container">
        <div className="registration-content">
          <motion.h2
            className="registration-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, ease: EASE_STANDARD }}
          >
            REGISTRATION IS CURRENTLY OPEN!
          </motion.h2>

          <motion.p
            className="registration-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE_STANDARD }}
          >
            Don&apos;t miss your chance to build practical administrative skills.
          </motion.p>

          <motion.div
            className="registration-details"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE_STANDARD }}
          >
            <div className="registration-detail">
              <span className="registration-detail-label">Registration closes</span>
              <span className="registration-detail-value">
                {REGISTRATION_DATES.closes}
              </span>
            </div>
            <div className="registration-detail">
              <span className="registration-detail-label">Classes begin</span>
              <span className="registration-detail-value">
                {REGISTRATION_DATES.classesBegin}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, delay: 0.3, ease: EASE_EMPHATIC }}
          >
            <motion.a
              href={REGISTRATION_URL}
              className="btn btn-primary btn-breathing btn-lg"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 22px 48px rgba(0, 0, 0, 0.24)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              REGISTER NOW
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
