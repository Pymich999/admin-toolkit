"use client";

import { motion } from "framer-motion";
import { EASE_STANDARD } from "@/lib/easing";

const journeyStages = [
  {
    id: "classes",
    number: "01",
    title: "Classes",
    subtitle: "Weeks 1-6",
    description:
      "You'll learn core admin tools like Google Forms, Gmail, Drive, Docs, Sheets, Calendar, and Trello in simple, practical steps.",
  },
  {
    id: "grace",
    number: "02",
    title: "Grace Week",
    subtitle: "Week 7",
    description:
      "If you were not able to complete your classes, this week gives you an extra period to catch up and finish everything.",
  },
  {
    id: "certification",
    number: "03",
    title: "Certification",
    subtitle: "Week 8",
    description:
      "Congratulations! You've made it this far, and now you're getting your certificate to show for it.",
  },
];

export default function TrainingJourney() {
  return (
    <section className="journey-section" id="journey">
      <div className="container">
        <h2 className="section-title">Your Training Journey</h2>

        <div className="journey-container">
          <div className="journey-timeline">
            <div className="journey-stages">
              {journeyStages.map((stage, index) => (
                <motion.div
                  key={stage.id}
                  className="journey-stage"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-8% 0px" }}
                  transition={{
                    duration: 0.48,
                    delay: index * 0.12,
                    ease: EASE_STANDARD,
                  }}
                >
                  <div className="journey-stage-header">
                    <span className="journey-stage-number">{stage.number}</span>
                    <div className="journey-stage-info">
                      <h3 className="journey-stage-title">{stage.title}</h3>
                      <span className="journey-stage-subtitle">
                        {stage.subtitle}
                      </span>
                    </div>
                  </div>
                  <p className="journey-stage-description">
                    {stage.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
