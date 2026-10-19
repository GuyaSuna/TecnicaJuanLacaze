import type { Metadata } from "next";
import { ArrowRight, BriefcaseBusiness, CircleCheck, Clock3, GraduationCap, Mail, Sparkles } from "lucide-react";
import Link from "../../components/Link";
import { notFound } from "next/navigation";
import { CourseCard, CourseIconMark, CourseStatus, courseStyle } from "../../components/CourseCard";
import { CtaBand } from "../../components/CtaBand";
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
    description: `${course.tagline} ${course.summary}`,
  };
}

function TileList({ title, items, icon: Icon, numbered = false }: { title: string; items: string[]; icon?: typeof Sparkles; numbered?: boolean }) {
  return (
    <section className="course-block">
      <h2>{title}</h2>
      <ul className={`tiles${numbered ? " tiles--numbered" : ""}`}>
        {items.map((item, index) => (
          <li key={item}>
            {numbered ? <span className="tiles__n">{String(index + 1).padStart(2, "0")}</span> : Icon && <Icon aria-hidden="true" />}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function CursoPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const others = courses.filter((item) => item.slug !== course.slug);
  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(`Consulta sobre ${course.title}`)}`;

  return (
    <div style={courseStyle(course)}>
      <section className="course-hero">
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
          <div className="course-hero__grid">
            <div>
              <p className="pill pill--light">{course.level}</p>
              <h1>{course.title}</h1>
              {course.alias && <p className="course-hero__alias">También conocida como {course.alias}.</p>}
              <p className="course-hero__tagline">{course.tagline}</p>
              <p className="course-hero__lead">{course.summary}</p>
              <div className="course-hero__meta">
                <span>
                  <Clock3 aria-hidden="true" /> {course.duration}
                </span>
                <CourseStatus course={course} />
              </div>
              <div className="hero__actions">
                <Link className="button button--light button--lg" href="/inscripciones">
                  Quiero inscribirme <ArrowRight aria-hidden="true" />
                </Link>
                <a className="button button--ghost button--lg" href={mailto}>
                  <Mail aria-hidden="true" /> Hacer una consulta
                </a>
              </div>
            </div>
            <div className="course-hero__art" aria-hidden="true">
              <CourseIconMark icon={course.icon} size="lg" />
              <ul>
                {course.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container course-layout">
          <div className="course-main">
            <section className="course-block course-block--intro">
              <h2>Descripción del curso</h2>
              {course.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
            <TileList title={course.learn.title} items={course.learn.items} numbered />
            {course.extra && <TileList title={course.extra.title} items={course.extra.items} icon={Sparkles} />}
            {course.outcomes && <TileList title={course.outcomes.title} items={course.outcomes.items} icon={BriefcaseBusiness} />}
            <TileList title={course.continuity.title} items={course.continuity.items} icon={GraduationCap} />
            <p className="source-line">Fuente: {course.source}.</p>
          </div>

          <aside className="course-aside" aria-label="Información complementaria">
            <div className="aside-card">
              <CourseIconMark icon={course.icon} />
              <h2>¿Te ves en {course.title}?</h2>
              <ul className="aside-card__checks">
                <li>
                  <CircleCheck aria-hidden="true" /> Gratis
                </li>
                <li>
                  <CircleCheck aria-hidden="true" /> {course.duration}
                </li>
                {course.level.startsWith("Bachillerato") && (
                  <li>
                    <CircleCheck aria-hidden="true" /> Doble titulación
                  </li>
                )}
              </ul>
              <Link className="button button--course" href="/inscripciones">
                Cómo inscribirse
              </Link>
              <a className="button button--secondary" href={mailto}>
                Consultar por correo
              </a>
            </div>
            <PendingNote title="Turnos y horarios">
              <p>Los turnos y horarios de este curso se publican cuando la escuela los confirma para el año lectivo.</p>
            </PendingNote>
          </aside>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="otras-titulo">
        <div className="container">
          <h2 id="otras-titulo" className="other-title">
            Explorá otras orientaciones
          </h2>
          <nav className="course-grid course-grid--compact" aria-label="Otros cursos">
            {others.map((item) => (
              <CourseCard course={item} key={item.slug} compact />
            ))}
          </nav>
        </div>
      </section>

      <CtaBand title={`¿Arrancás ${course.title} en 2027?`} />
    </div>
  );
}
