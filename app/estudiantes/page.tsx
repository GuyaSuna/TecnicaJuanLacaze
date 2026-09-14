import type { Metadata } from "next";
import { CalendarDays, HandHeart, Newspaper, Phone, ScrollText, UsersRound } from "lucide-react";
import { Faq } from "../components/Faq";
import { LinkCard } from "../components/LinkCard";
import { PageHeader } from "../components/PageHeader";
import { PendingBadge, PendingNote } from "../components/Pending";
import { SectionHeading } from "../components/SectionHeading";
import { generalQuestions } from "../content/faq";
import { contact, officialLinks, phoneHref } from "../content/site";

export const metadata: Metadata = {
  title: "Información para estudiantes | Escuela Técnica de Juan Lacaze",
  description: "Horarios, trámites, becas, acompañamiento y preguntas frecuentes para estudiantes y familias de la Escuela Técnica de Juan Lacaze.",
};

const schedulePlaceholders = [
  { label: "Turno matutino", value: "Horario pendiente de confirmación" },
  { label: "Turno vespertino", value: "Horario pendiente de confirmación" },
  { label: "Turno nocturno", value: "Pendiente: confirmar si se dicta" },
  { label: "Atención de Secretaría", value: contact.officeHours.text },
];

export default function EstudiantesPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ href: "/estudiantes", label: "Estudiantes" }]}
        eyebrow="Información para estudiantes"
        title="Lo importante, cerca y ordenado"
        lead="Accesos útiles para estudiar, hacer trámites y mantenerse al día. Ante cualquier cambio, los avisos de la escuela prevalecen sobre lo publicado aquí."
      />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Accesos" title="Recursos y servicios" />
          <div className="quick-links">
            <LinkCard href="#horarios" icon={<CalendarDays />} eyebrow="Horarios" title="Turnos y atención" text="Horarios de clase y de Secretaría." />
            <LinkCard href={officialLinks.students} external icon={<ScrollText />} eyebrow="Portal UTU" title="Trámites y servicios" text="Constancias, pases y recursos oficiales para estudiantes." />
            <LinkCard href={officialLinks.scholarships} external icon={<HandHeart />} eyebrow="Apoyos" title="Becas y pasantías" text="Oportunidades y convocatorias vigentes en UTU." />
            <LinkCard href="/novedades" icon={<Newspaper />} eyebrow="Cartelera" title="Comunicados" text="Avisos, fechas importantes y actividades." />
            <LinkCard href="/contacto" icon={<UsersRound />} eyebrow="Acompañamiento" title="¿Necesitás orientación?" text="El equipo de la escuela puede ayudarte." />
            <LinkCard href="/cursos" icon={<Phone />} eyebrow="Cursos" title="Cambio de orientación" text="Nivelación en segundo año y navegabilidad con liceo." />
          </div>
        </div>
      </section>

      <section className="section section--soft" id="horarios">
        <div className="container split">
          <div>
            <SectionHeading eyebrow="Horarios" title="Turnos y atención" intro="La escuela publicará aquí los horarios validados por Secretaría. Mientras tanto, consultá por teléfono o por correo." />
            <table className="data-table">
              <caption className="visually-hidden">Horarios de turnos y atención</caption>
              <thead>
                <tr>
                  <th scope="col">Turno o servicio</th>
                  <th scope="col">Horario</th>
                </tr>
              </thead>
              <tbody>
                {schedulePlaceholders.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td>
                      <PendingBadge>{row.value}</PendingBadge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <PendingNote title="Horarios de grupos y atención">
              <p>Contenido provisional. Reemplazar por la grilla oficial cuando Secretaría la confirme para el año lectivo.</p>
              <p>
                <a className="text-link" href={phoneHref(contact.phones[0].number)}>
                  Consultar por teléfono: {contact.phones[0].number}
                </a>
              </p>
            </PendingNote>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-titulo">
        <div className="container split">
          <SectionHeading id="faq-titulo" eyebrow="Preguntas frecuentes" title="Antes de empezar" intro="Respuestas generales para orientarte. Si tu situación es particular, escribinos." />
          <Faq items={generalQuestions} />
        </div>
      </section>
    </>
  );
}
