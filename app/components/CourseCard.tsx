import { Activity, ArrowRight, BookOpen, Briefcase, Check, Clock3, Laptop, Scissors, UtensilsCrossed, Wrench } from "lucide-react";
import type { CSSProperties } from "react";
import Link from "./Link";
import type { Course, CourseIcon } from "../content/courses";

const icons: Record<CourseIcon, typeof BookOpen> = {
  book: BookOpen,
  activity: Activity,
  briefcase: Briefcase,
  laptop: Laptop,
  wrench: Wrench,
  chef: UtensilsCrossed,
  scissors: Scissors,
};

/** Expone el color de la orientación como variable CSS (`--c`). */
export function courseStyle(course: Pick<Course, "color">) {
  return { "--c": course.color } as CSSProperties;
}

export function CourseIconMark({ icon, size = "md" }: { icon: CourseIcon; size?: "sm" | "md" | "lg" }) {
  const Icon = icons[icon];
  return (
    <span className={`course-icon course-icon--${size}`} aria-hidden="true">
      <Icon />
    </span>
  );
}

export function CourseStatus({ course }: { course: Course }) {
  const documented = course.status === "documented";
  return (
    <span className={`badge ${documented ? "badge--ok" : "badge--pending"}`}>
      {documented ? <Check aria-hidden="true" /> : <Clock3 aria-hidden="true" />}
      {course.statusLabel}
    </span>
  );
}

export function CourseCard({ course, compact = false }: { course: Course; compact?: boolean }) {
  return (
    <article className={`course-card${compact ? " course-card--compact" : ""}`} style={courseStyle(course)}>
      <div className="course-card__top">
        <CourseIconMark icon={course.icon} />
        <span className="course-card__level">{course.level}</span>
      </div>
      <h3>
        <Link href={`/cursos/${course.slug}`}>{course.title}</Link>
      </h3>
      <p className="course-card__tagline">{course.tagline}</p>
      {!compact && (
        <ul className="tag-list" aria-label={`Temas destacados de ${course.title}`}>
          {course.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      <div className="course-card__footer">
        {compact ? <span className="course-card__duration">{course.duration}</span> : <CourseStatus course={course} />}
        <span className="course-card__more" aria-hidden="true">
          Ver más <ArrowRight />
        </span>
      </div>
    </article>
  );
}
