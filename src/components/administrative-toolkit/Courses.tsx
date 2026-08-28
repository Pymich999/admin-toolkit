"use client";

import { courses } from "@/data/courses";
import { Stagger, StaggerItem } from "./animations/Stagger";
import CourseCard from "./CourseCard";

export default function Courses() {
  return (
    <section className="courses-section" id="courses">
      <div className="container">
        <h2 className="section-title">Administrative Toolkit Courses</h2>

        <Stagger staggerDelay={0.12} className="courses-grid">
          {courses.map((course) => (
            <StaggerItem key={course.id} className="courses-grid-item">
              <CourseCard course={course} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
