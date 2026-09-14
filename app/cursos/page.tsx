import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import Link from "../components/Link";
import { CourseCard } from "../components/CourseCard";
import { PageHeader } from "../components/PageHeader";
import { PendingNote } from "../components/Pending";
import { SectionHeading } from "../components/SectionHeading";
import { bachilleratoFacts, bachilleratos, courses } from "../content/courses";
import { contact, officialLinks } from "../content/site";

export const metadata: Metadata = {
  title: "Cursos y propuestas educativas 2027 | Escuela Técnica de Juan Lacaze",
  description:
    "Oferta educativa 2027 de la Escuela Técnica de Juan Lacaze: Educación Básica Integrada y bachilleratos en Educación Física y Deporte, Administración, Tecnologías de la Información, Sistemas Mecánicos, Gastronomía y Estética Personal.",
};

export default function CursosPage() {
  const ebi = courses.filter((course) => !bachilleratos.includes(course));

  return (
    <>
      <PageHeader
        crumbs={[{ href: "/cursos", label: "Cursos" }]}
        eyebrow="Cursos y propuestas educativas"
        title="Oferta educativa 2027"
        lead="Una vez culminada la educación media básica (9.º de EBI), UTU ofrece dos opciones de bachillerato: Bachillerato Tecnológico (BT) o Bachillerato Técnico Profesional (BTP). En Juan Lacaze podés elegir entre seis orientaciones."
      />

      <section className="section">
        <div className="container">
          <SectionHeading id="bachilleratos" eyebrow="Bachilleratos" title="Orientaciones disponibles" intro="Cada ficha detalla qué se aprende, la salida laboral y las carreras a las que habilita." />
          <div className="course-grid">
            {bachilleratos.map((course) => (
              <CourseCard course={course} key={course.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="Para tener en cuenta" title="Cómo funcionan los bachilleratos" />
          <div className="facts-grid">
            {bachilleratoFacts.map((fact) => (
              <article className="fact-card" key={fact.title}>
                <h3>{fact.title}</h3>
                <p>{fact.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading id="ebi" eyebrow="Educación media básica" title="Educación Básica Integrada" intro="El tramo previo a los bachilleratos, para quienes egresan de la escuela primaria." />
          <div className="course-grid course-grid--single">
            {ebi.map((course) => (
              <CourseCard course={course} key={course.slug} />
            ))}
          </div>
          <PendingNote title="Apertura de grupos, turnos y cupos">
            <p>
              La apertura efectiva de cada curso, sus turnos y cupos se confirman antes de cada año lectivo. Esta página no reemplaza la
              confirmación de la oferta vigente por parte de la escuela o del sistema oficial de UTU.
            </p>
            <p>
              <a className="text-link" href={officialLinks.study} target="_blank" rel="noreferrer">
                Buscar en Estudiá en UTU <ExternalLink aria-hidden="true" />
              </a>
            </p>
          </PendingNote>
        </div>
      </section>

      <section className="section section--accent">
        <div className="container split split--center">
          <div>
            <p className="eyebrow">Orientación</p>
            <h2>¿Todavía no sabés qué elegir?</h2>
            <p>Contanos qué te interesa y te ayudamos a encontrar la propuesta que mejor se ajuste a tu edad y trayectoria.</p>
          </div>
          <div className="button-row">
            <a className="button button--primary" href={`mailto:${contact.email}?subject=Consulta%20sobre%20cursos%202027`}>
              Escribir a la escuela
            </a>
            <Link className="button button--secondary" href="/contacto">
              Ver otras vías de contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
