import { ArrowRight, CalendarDays, ClipboardList, Compass, HandHeart, MapPin, Newspaper, Phone, Users } from "lucide-react";
import Image from "next/image";
import Link from "./components/Link";
import { CourseCard } from "./components/CourseCard";
import { LinkCard } from "./components/LinkCard";
import { NewsCard } from "./components/NewsCard";
import { PendingBadge } from "./components/Pending";
import { SectionHeading } from "./components/SectionHeading";
import { bachilleratoFacts, courses } from "./content/courses";
import { news } from "./content/news";
import { contact, officialLinks, phoneHref } from "./content/site";

export default function HomePage() {
  const latest = news.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Educación pública en Juan Lacaze</p>
            <h1>Un lugar para aprender, crecer y construir tu camino.</h1>
            <p className="lead">
              La Escuela Técnica de Juan Lacaze forma parte de UTU. Ofrece educación media básica y bachilleratos en distintas áreas, con
              acompañamiento cercano a cada estudiante y su familia.
            </p>
            <div className="hero__actions">
              <Link className="button button--primary" href="/cursos">
                Ver cursos 2027 <ArrowRight aria-hidden="true" />
              </Link>
              <Link className="button button--secondary" href="/inscripciones">
                Cómo inscribirse
              </Link>
            </div>
            <ul className="hero__facts" aria-label="Características de la educación en UTU">
              <li>Gratuita</li>
              <li>Laica</li>
              <li>Abierta a toda la comunidad</li>
            </ul>
          </div>
          <figure className="hero__figure">
            <Image
              src="/images/escuela.jpg"
              alt="Fachada de la Escuela Técnica de Juan Lacaze, en José Salvo esquina Don Bosco"
              width={350}
              height={205}
              priority
              sizes="(max-width: 900px) 100vw, 46vw"
            />
            <figcaption>
              <MapPin aria-hidden="true" /> {contact.address}, Juan Lacaze
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="accesos">
        <div className="container">
          <h2 id="accesos" className="visually-hidden">
            Accesos rápidos
          </h2>
          <div className="quick-links">
            <LinkCard href="/cursos" icon={<Compass />} eyebrow="Cursos" title="Oferta educativa 2027" text="Bachilleratos y educación media básica." />
            <LinkCard href="/inscripciones" icon={<ClipboardList />} eyebrow="Inscripciones" title="Pasos y requisitos" text="Qué necesitás para inscribirte." />
            <LinkCard href="/estudiantes" icon={<CalendarDays />} eyebrow="Estudiantes" title="Horarios y trámites" text="Información práctica para el año lectivo." />
            <LinkCard href="/contacto" icon={<Phone />} eyebrow="Contacto" title="Hablá con la escuela" text="Teléfonos, correo y ubicación." />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="cursos-titulo">
        <div className="container">
          <SectionHeading
            id="cursos-titulo"
            eyebrow="Cursos y propuestas educativas"
            title="Distintos caminos, una misma escuela"
            intro="Seis orientaciones de bachillerato y la Educación Básica Integrada. Cada ficha detalla qué se aprende, a qué habilita y cómo continuar estudiando."
            link={{ href: "/cursos", label: "Ver todos los cursos" }}
          />
          <div className="course-grid">
            {courses.map((course) => (
              <CourseCard course={course} key={course.slug} compact />
            ))}
          </div>
          <div className="facts-strip">
            {bachilleratoFacts.slice(0, 3).map((fact) => (
              <div key={fact.title}>
                <strong>{fact.title}</strong>
                <p>{fact.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="institucion-titulo">
        <div className="container split">
          <div>
            <SectionHeading
              id="institucion-titulo"
              eyebrow="Sobre la institución"
              title="Una escuela vinculada con su ciudad"
              intro="Desde 1979 funciona como escuela independiente de UTU en Juan Lacaze. Su propuesta combina formación general, talleres equipados, proyectos con la comunidad y acompañamiento de las trayectorias."
            />
            <ul className="check-list">
              <li>
                <Users aria-hidden="true" /> Formación integral: saberes generales, tecnología, práctica y creatividad.
              </li>
              <li>
                <HandHeart aria-hidden="true" /> Acompañamiento a estudiantes y familias durante toda la trayectoria.
              </li>
              <li>
                <Newspaper aria-hidden="true" /> Vínculo con el Municipio, el Centro Cultural Don Bosco, el Nodo de Innovación y la Plaza de Deportes.
              </li>
            </ul>
            <Link className="button button--secondary" href="/institucion">
              Conocer la institución <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="stat-card">
            <p className="eyebrow">Datos de la escuela</p>
            <p className="stat-card__value">
              372 <span>estudiantes</span>
            </p>
            <p>Matrícula informada en la presentación institucional 2026. Los indicadores completos están en la página de la institución.</p>
            <PendingBadge>Actualizar con datos 2027</PendingBadge>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="novedades-titulo">
        <div className="container">
          <SectionHeading
            id="novedades-titulo"
            eyebrow="Novedades"
            title="Lo último de la escuela"
            link={{ href: "/novedades", label: "Ver todas las novedades" }}
          />
          <div className="news-grid">
            {latest.map((item) => (
              <NewsCard item={item} key={item.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--accent" aria-labelledby="contacto-titulo">
        <div className="container split split--center">
          <div>
            <p className="eyebrow">Contacto</p>
            <h2 id="contacto-titulo">¿Tenés dudas? Estamos para orientarte.</h2>
            <p>Comunicate por consultas sobre cursos, inscripciones, horarios o trámites. Si preferís, podés visitar la escuela.</p>
          </div>
          <div className="contact-mini">
            <a href={phoneHref(contact.phones[0].number)}>
              <Phone aria-hidden="true" /> {contact.phones[0].number}
            </a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={officialLinks.maps} target="_blank" rel="noreferrer">
              <MapPin aria-hidden="true" /> Cómo llegar
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
