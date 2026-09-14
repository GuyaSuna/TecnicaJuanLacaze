import type { Metadata } from "next";
import { ExternalLink, GraduationCap, HandHeart, Landmark, UsersRound } from "lucide-react";
import Image from "next/image";
import { PageHeader } from "../components/PageHeader";
import { PendingBadge, PendingNote } from "../components/Pending";
import { SectionHeading } from "../components/SectionHeading";
import { communityPartners, institutionalFigures, managementTeam, officialLinks } from "../content/site";

export const metadata: Metadata = {
  title: "Sobre la institución | Escuela Técnica de Juan Lacaze",
  description:
    "Historia, propuesta educativa, equipo de gestión y vínculo con la comunidad de la Escuela Técnica de Juan Lacaze (DGETP - UTU).",
};

export default function InstitucionPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ href: "/institucion", label: "Institución" }]}
        eyebrow="Sobre la institución"
        title="Una escuela pública, técnica y cercana"
        lead="La Escuela Técnica de Juan Lacaze integra la Dirección General de Educación Técnico Profesional (DGETP - UTU) de ANEP. Es un espacio de formación integral, con talleres equipados y un vínculo activo con la comunidad local y regional."
      />

      <section className="section">
        <div className="container split">
          <div className="prose">
            <SectionHeading eyebrow="Historia" title="Presente en Juan Lacaze desde 1967" />
            <p>
              La institución comenzó a funcionar en 1967 como anexo y se constituyó como escuela independiente el 4 de marzo de 1979. Desde
              entonces acompaña a generaciones de estudiantes de Juan Lacaze y la región.
            </p>
            <p>
              Sistemas Mecánicos es, en la historia de la escuela, uno de los cursos de mayor demanda. Con los años la propuesta se amplió a
              nuevas áreas: administración, tecnologías de la información, deporte, gastronomía y estética personal.
            </p>
            <a className="text-link" href={officialLinks.history} target="_blank" rel="noreferrer">
              Consultar la reseña oficial <ExternalLink aria-hidden="true" />
            </a>
          </div>
          <figure className="photo-card">
            <Image src="/images/escuela.jpg" alt="Fachada de la Escuela Técnica de Juan Lacaze" width={350} height={205} sizes="(max-width: 900px) 100vw, 40vw" />
            <figcaption>Edificio de la escuela, en José Salvo esquina Don Bosco.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Propuesta educativa"
            title="Formación, oportunidades y acompañamiento"
            intro="La escuela no se define solo por sus talleres. Es un espacio donde cada estudiante encuentra caminos para seguir estudiando, trabajar o emprender."
          />
          <div className="value-grid">
            <article className="value-card">
              <GraduationCap aria-hidden="true" />
              <h3>Formación integral</h3>
              <p>Saberes generales, tecnología, práctica en talleres, creatividad y habilidades para continuar aprendiendo.</p>
            </article>
            <article className="value-card">
              <HandHeart aria-hidden="true" />
              <h3>Acompañamiento</h3>
              <p>Una comunidad educativa que sostiene las trayectorias de estudiantes y trabaja junto a las familias.</p>
            </article>
            <article className="value-card">
              <UsersRound aria-hidden="true" />
              <h3>Vínculo con la comunidad</h3>
              <p>Proyectos con instituciones, organizaciones y espacios de Juan Lacaze y la región.</p>
            </article>
            <article className="value-card">
              <Landmark aria-hidden="true" />
              <h3>Educación pública</h3>
              <p>Gratuita, laica y abierta a toda la comunidad, con navegabilidad entre UTU y liceo.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <SectionHeading eyebrow="La escuela en números" title="Indicadores institucionales" intro={`Datos publicados en la ${institutionalFigures.source}.`} />
            <div className="figures">
              <div className="figure figure--big">
                <strong>{institutionalFigures.students.value}</strong>
                <span>{institutionalFigures.students.label}</span>
                <small>{institutionalFigures.students.note}</small>
              </div>
              {institutionalFigures.approval.map((item) => (
                <div className="figure" key={item.level}>
                  <strong>{item.value}</strong>
                  <span>aprobación {institutionalFigures.approvalYear}</span>
                  <small>{item.level}</small>
                </div>
              ))}
            </div>
            <PendingBadge>Actualizar cuando la escuela publique los datos 2027</PendingBadge>
          </div>
          <div>
            <SectionHeading eyebrow="Equipo de gestión" title="Quiénes conducen la escuela" />
            <ul className="team-list">
              {managementTeam.members.map((member) => (
                <li key={member.role}>
                  <span>{member.role}</span>
                  <strong>{member.name}</strong>
                </li>
              ))}
            </ul>
            <PendingNote title="Vigencia del equipo de gestión">
              <p>
                Nombres publicados en la {managementTeam.source}. La institución debe confirmar su vigencia para el año lectivo 2027.
              </p>
            </PendingNote>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Comunidad"
            title="Hacia dónde queremos ir"
            intro="La escuela se propone mejorar los aprendizajes y la asistencia de sus estudiantes, y fortalecer los vínculos con la comunidad."
          />
          <ul className="chip-list" aria-label="Instituciones y espacios con los que trabaja la escuela">
            {communityPartners.map((partner) => (
              <li key={partner}>{partner}</li>
            ))}
          </ul>
          <p className="source-line">
            Información institucional contrastada con publicaciones oficiales de UTU.{" "}
            <a href={officialLinks.schoolDirectory} target="_blank" rel="noreferrer">
              Ver ficha del centro <ExternalLink aria-hidden="true" />
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
