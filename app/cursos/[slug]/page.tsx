import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Clock3, GraduationCap } from "lucide-react";
import Link from "../../components/Link";
import { notFound } from "next/navigation";
import { CourseIconMark, CourseStatus } from "../../components/CourseCard";
import { PendingNote } from "../../components/Pending";
import { courses, getCourse } from "../../content/courses";
import { contact } from "../../content/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return { title: "Curso no encontrado | Escuela Técnica de Juan Lacaze" };
  return {
    title: `${course.title} | Cursos | Escuela Técnica de Juan Lacaze`,
    description: course.summary,
  };
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="course-block">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default async function CursoPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const index = courses.findIndex((item) => item.slug === course.slug);
  const previous = courses[index - 1];
  const next = courses[index + 1];

  return (
    <>
      <section className="page-header page-header--course">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Ruta de navegación">
            <ol>
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/cursos">Cursos</Link>
              </li>
              <li aria-current="page">
                <span>{course.title}</span>
              </li>
            </ol>
          </nav>
          <div className="course-hero">
            <CourseIconMark icon={course.icon} size="lg" />
            <div>
              <p className="eyebrow">{course.level}</p>
              <h1>{course.title}</h1>
              {course.alias && <p className="course-hero__alias">También conocida como {course.alias}.</p>}
              <p className="lead">{course.summary}</p>
              <div className="course-hero__meta">
                <span>
                  <Clock3 aria-hidden="true" /> Duración: {course.duration}
                </span>
                <CourseStatus course={course} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container course-layout">
          <div className="course-main">
            <section className="course-block">
              <h2>Descripción del curso</h2>
              {course.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
            <List title={course.learn.title} items={course.learn.items} />
            {course.extra && <List title={course.extra.title} items={course.extra.items} />}
            {course.outcomes && <List title={course.outcomes.title} items={course.outcomes.items} />}
            <List title={course.continuity.title} items={course.continuity.items} />
            <p className="source-line">Fuente: {course.source}.</p>
          </div>

          <aside className="course-aside" aria-label="Información complementaria">
            <div className="aside-card">
              <GraduationCap aria-hidden="true" />
              <h2>¿Te interesa este curso?</h2>
              <p>Consultá cupos, turnos y requisitos antes de inscribirte.</p>
              <Link className="button button--primary" href="/inscripciones">
                Cómo inscribirse
              </Link>
              <a className="button button--secondary" href={`mailto:${contact.email}?subject=${encodeURIComponent(`Consulta sobre ${course.title}`)}`}>
                Consultar por correo
              </a>
            </div>
            <PendingNote title="Turnos y horarios">
              <p>Los turnos y horarios de este curso se publican cuando la escuela los confirma para el año lectivo.</p>
            </PendingNote>
          </aside>
        </div>
      </section>

      <nav className="section section--tight course-pager" aria-label="Otros cursos">
        <div className="container">
          {previous ? (
            <Link href={`/cursos/${previous.slug}`}>
              <ArrowLeft aria-hidden="true" />
              <span>
                <small>Anterior</small>
                {previous.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/cursos/${next.slug}`} className="course-pager__next">
              <span>
                <small>Siguiente</small>
                {next.title}
              </span>
              <ArrowRight aria-hidden="true" />
            </Link>
          ) : (
            <span />
          )}
        </div>
      </nav>
    </>
  );
}
