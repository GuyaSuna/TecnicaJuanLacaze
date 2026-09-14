import { Activity, ArrowRight, BookOpen, Briefcase, Check, Clock3, Laptop, Scissors, UtensilsCrossed, Wrench } from "lucide-react";
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

export function CourseIconMark({ icon, size = "md" }: { icon: CourseIcon; size?: "md" | "lg" }) {
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
    <article className={`course-card${compact ? " course-card--compact" : ""}`}>
      <CourseIconMark icon={course.icon} />
      <p className="course-card__level">{course.level}</p>
      <h3>
        <Link href={`/cursos/${course.slug}`}>{course.title}</Link>
      </h3>
      {!compact && <p className="course-card__summary">{course.summary}</p>}
      <div className="course-card__footer">
        <CourseStatus course={course} />
        <span className="course-card__more" aria-hidden="true">
          Ver ficha <ArrowRight />
        </span>
      </div>
    </article>
  );
}
