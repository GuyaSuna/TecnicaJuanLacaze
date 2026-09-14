import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import Link from "../components/Link";
import { PageHeader } from "../components/PageHeader";
import { PendingBadge, PendingNote } from "../components/Pending";
import { SectionHeading } from "../components/SectionHeading";
import { contact, officialLinks, phoneHref } from "../content/site";

export const metadata: Metadata = {
  title: "Inscripciones | Escuela Técnica de Juan Lacaze",
  description: "Pasos, requisitos y período de inscripción para los cursos de la Escuela Técnica de Juan Lacaze (DGETP - UTU).",
};

const steps = [
  {
    title: "Explorá los cursos",
    text: "Revisá las orientaciones de bachillerato y la Educación Básica Integrada. Cada ficha explica qué se aprende y a qué habilita.",
    link: { href: "/cursos", label: "Ver cursos" },
  },
  {
    title: "Confirmá la información",
    text: "Consultá cupos, turnos, requisitos y documentación directamente con la escuela antes de concurrir.",
    link: { href: "/contacto", label: "Contactar a la escuela" },
  },
  {
    title: "Realizá la inscripción",
    text: "Seguí las indicaciones de Secretaría o del sistema oficial de UTU durante el período habilitado.",
    link: { href: officialLinks.study, label: "Ir a Estudiá en UTU", external: true },
  },
];

const documents = [
  "Cédula de identidad vigente del o de la estudiante.",
  "Constancia o pase del último curso aprobado (primaria o educación media).",
  "Carné de salud o de vacunas, según corresponda.",
  "Cédula de identidad de la persona adulta responsable, si el o la estudiante es menor de edad.",
];

export default function InscripcionesPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ href: "/inscripciones", label: "Inscripciones" }]}
        eyebrow="Inscripciones"
        title="Tu próximo paso puede empezar acá"
        lead="Las fechas, requisitos y lugares de inscripción dependen de cada propuesta. Te recomendamos confirmar la información antes de concurrir."
      >
        <div className="status-box">
          <strong>Próximo período de inscripciones</strong>
          <PendingBadge>Fecha pendiente de confirmación institucional</PendingBadge>
        </div>
      </PageHeader>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Paso a paso" title="Cómo inscribirse" />
          <ol className="steps">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span className="steps__number" aria-hidden="true">
                  {index + 1}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  {step.link.external ? (
                    <a className="text-link" href={step.link.href} target="_blank" rel="noreferrer">
                      {step.link.label} <ExternalLink aria-hidden="true" />
                    </a>
                  ) : (
                    <Link className="text-link" href={step.link.href}>
                      {step.link.label}
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container split">
          <div>
            <SectionHeading eyebrow="Requisitos" title="Documentación orientativa" intro="Lista general de referencia. Los requisitos definitivos dependen del nivel y de la trayectoria anterior." />
            <ul className="check-list">
              {documents.map((doc) => (
                <li key={doc}>{doc}</li>
              ))}
            </ul>
          </div>
          <PendingNote title="Requisitos, cupos y lugar de inscripción">
            <p>La escuela debe validar esta lista y agregar el lugar, los días y el horario de inscripción antes de publicarlos como vigentes.</p>
            <p>
              <a className="text-link" href={phoneHref(contact.phones[0].number)}>
                Consultar por teléfono: {contact.phones[0].number}
              </a>
            </p>
          </PendingNote>
        </div>
      </section>

      <section className="section section--accent">
        <div className="container split split--center">
          <div>
            <p className="eyebrow">¿Dudas?</p>
            <h2>Te ayudamos a completar el trámite</h2>
            <p>Escribinos o llamá a la escuela. También podés consultar el buscador oficial de cursos de UTU.</p>
          </div>
          <div className="button-row">
            <a className="button button--primary" href={`mailto:${contact.email}?subject=Consulta%20sobre%20inscripciones`}>
              Consultar por correo
            </a>
            <a className="button button--secondary" href={officialLinks.study} target="_blank" rel="noreferrer">
              Estudiá en UTU <ExternalLink aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
