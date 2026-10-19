"use client";

import { ArrowRight, RotateCcw, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "./Link";
import { CourseIconMark, courseStyle } from "./CourseCard";
import { courses, type Course } from "../content/courses";
import { quiz } from "../content/quiz";

const bySlug = new Map(courses.map((course) => [course.slug, course]));

function ranking(answers: string[]): Course[] {
  const scores = new Map<string, number>();
  answers.forEach((slug, index) => {
    // A igual puntaje, desempata la respuesta más reciente (la última pregunta pesa un poco más).
    scores.set(slug, (scores.get(slug) ?? 0) + 1 + index * 0.01);
  });
  return [...scores.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([slug]) => bySlug.get(slug))
    .filter((course): course is Course => Boolean(course));
}

export function Quiz() {
  const [answers, setAnswers] = useState<string[]>([]);
  const heading = useRef<HTMLHeadingElement>(null);
  const started = answers.length > 0;
  const done = answers.length === quiz.length;

  useEffect(() => {
    if (started) heading.current?.focus();
  }, [answers.length, started]);

  const restart = () => setAnswers([]);

  if (done) {
    const [match, runnerUp] = ranking(answers);
    return (
      <div className="quiz quiz--result" style={courseStyle(match)} aria-live="polite">
        <p className="quiz__kicker">
          <Sparkles aria-hidden="true" /> Tu match es…
        </p>
        <div className="quiz__match">
          <CourseIconMark icon={match.icon} size="lg" />
          <div>
            <h3 ref={heading} tabIndex={-1}>
              {match.title}
            </h3>
            <p>{match.tagline}</p>
          </div>
        </div>
        <ul className="tag-list tag-list--light">
          {match.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="button-row">
          <Link className="button button--light" href={`/cursos/${match.slug}`}>
            Conocé {match.title} <ArrowRight aria-hidden="true" />
          </Link>
          <button type="button" className="button button--ghost" onClick={restart}>
            <RotateCcw aria-hidden="true" /> Hacerlo de nuevo
          </button>
        </div>
        {runnerUp && (
          <p className="quiz__also">
            También te puede gustar: <Link href={`/cursos/${runnerUp.slug}`}>{runnerUp.title}</Link>
          </p>
        )}
      </div>
    );
  }

  const step = answers.length;
  const current = quiz[step];

  return (
    <div className="quiz" aria-live="polite">
      <div className="quiz__progress">
        <span>
          Pregunta {step + 1} de {quiz.length}
        </span>
        <span className="quiz__bar" aria-hidden="true">
          <span style={{ width: `${((step + 1) / quiz.length) * 100}%` }} />
        </span>
      </div>
      <h3 ref={heading} tabIndex={-1}>
        {current.question}
      </h3>
      <ul className="quiz__options">
        {current.options.map((option) => {
          const course = bySlug.get(option.course);
          if (!course) return null;
          return (
            <li key={option.label}>
              <button type="button" style={courseStyle(course)} onClick={() => setAnswers([...answers, option.course])}>
                <CourseIconMark icon={course.icon} size="sm" />
                <span>{option.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
      {started && (
        <button type="button" className="quiz__back" onClick={() => setAnswers(answers.slice(0, -1))}>
          ← Volver a la pregunta anterior
        </button>
      )}
    </div>
  );
}
