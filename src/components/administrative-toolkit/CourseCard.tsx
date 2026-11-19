"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Course } from "@/data/courses";
import { EASE_STANDARD } from "@/lib/easing";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.div
      className="course-card"
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.48, ease: EASE_STANDARD }}
      whileHover={{
        y: -4,
        boxShadow: "0 20px 40px rgba(30, 64, 175, 0.16)",
      }}
    >
      <div className="course-card-image-wrapper">
        <motion.div
          className="course-card-image-container"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4, ease: EASE_STANDARD }}
        >
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(max-width: 768px) 92vw, (max-width: 1240px) 46vw, 560px"
            className="course-card-image"
          />
        </motion.div>
      </div>

      <div className="course-card-content">
        <h3 className="course-card-title">{course.title}</h3>
        <p className="course-card-description">{course.description}</p>
        <motion.div
          className="course-card-action"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          Explore course
          <span className="course-card-arrow" aria-hidden="true">
            &rarr;
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
