"use client";

import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  ExternalLink,
  FileCheck2,
  GraduationCap,
  HandHeart,
  Laptop2,
  Mail,
  MapPin,
  Menu,
  Phone,
  ScrollText,
  Settings,
  Shirt,
  Sparkles,
  UtensilsCrossed,
  UsersRound,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { contact, officialLinks, proposals, type Proposal } from "./site-content";

const proposalIcons = {
  book: BookOpen,
  settings: Settings,
  computer: Laptop2,
  shirt: Shirt,
  chef: UtensilsCrossed,
};

const questions = [
  {
    question: "¿Cuándo son las inscripciones?",
    answer: "Las fechas pueden variar según la propuesta y el período lectivo. Para recibir información vigente, consultá directamente con la escuela o ingresá al buscador oficial Estudiá en UTU.",
  },
  {
    question: "¿Qué documentación debo presentar?",
    answer: "Los requisitos dependen del nivel y de la trayectoria anterior. Antes de concurrir, confirmá con Secretaría qué documentación corresponde en tu caso.",
  },
  {
    question: "¿La formación es gratuita?",
    answer: "Sí. UTU integra la educación pública uruguaya y brinda formación gratuita sobre los principios de gratuidad, laicidad e igualdad.",
  },
  {
    question: "¿Dónde consulto horarios y grupos?",
    answer: "Los horarios se comunican por los canales de la escuela y pueden modificarse. La información vigente debe confirmarse con Secretaría.",
  },
];

function SectionHeading({ eyebrow, title, intro, light = false }: { eyebrow: string; title: string; intro?: string; light?: boolean }) {
  return (
    <div className={`section-heading${light ? " section-heading--light" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <div>
        <h2>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
    </div>
  );
}

function ProposalCard({ proposal, index }: { proposal: Proposal; index: number }) {
  const Icon = proposalIcons[proposal.icon];
  return (
    <article className="proposal-card">
      <div className="proposal-card__top">
        <span className="proposal-card__index">0{index + 1}</span>
        <span className="proposal-card__icon" aria-hidden="true"><Icon /></span>
      </div>
      <p className="proposal-card__level">{proposal.level}</p>
      <h3>{proposal.title}</h3>
      <p>{proposal.description}</p>
      <div className={`status-chip status-chip--${proposal.status}`}>
        {proposal.status === "confirmed" ? <Check /> : <Clock3 />}
        <span>{proposal.statusLabel}</span>
      </div>
      <small>{proposal.source}</small>
    </article>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openQuestion, setOpenQuestion] = useState(0);
  const firstMenuLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (menuOpen) firstMenuLink.current?.focus();
  }, [menuOpen]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Escuela Técnica de Juan Lacaze, ir al inicio" onClick={closeMenu}>
          <span className="brand__mark" aria-hidden="true">UTU</span>
          <span className="brand__copy"><strong>Escuela Técnica</strong><small>Juan Lacaze</small></span>
        </a>
        <nav className={`main-nav${menuOpen ? " main-nav--open" : ""}`} aria-label="Navegación principal">
          <a ref={firstMenuLink} href="#institucion" onClick={closeMenu}>Institución</a>
          <a href="#propuestas" onClick={closeMenu}>Propuestas</a>
          <a href="#estudiantes" onClick={closeMenu}>Estudiantes</a>
          <a href="#novedades" onClick={closeMenu}>Novedades</a>
          <a href="#inscripciones" onClick={closeMenu}>Inscripciones</a>
          <a href="#contacto" onClick={closeMenu}>Contacto</a>
        </nav>
        <a className="header-cta" href="#inscripciones">Cómo inscribirse <ArrowRight /></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main id="contenido">
        <section className="hero" id="inicio">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--light">Educación pública en Juan Lacaze</p>
            <h1>Formación que acompaña <em>cada etapa.</em></h1>
            <p className="hero__lead">Una comunidad educativa cercana, con propuestas para aprender, crear proyectos y construir nuevas oportunidades.</p>
            <div className="hero__actions">
              <a className="button button--warm" href="#propuestas">Ver propuestas <ArrowRight /></a>
              <a className="button button--ghost" href="#contacto">Contactar a la escuela</a>
            </div>
            <ul className="hero__principles" aria-label="Principios de UTU">
              <li><Check /> Gratuita</li>
              <li><Check /> Laica</li>
              <li><Check /> Para toda la comunidad</li>
            </ul>
          </div>
          <div className="hero__visual">
            <img src="/images/inclusion.jpg" alt="Jornada educativa sobre inclusión realizada con la comunidad de Juan Lacaze" />
            <div className="hero__caption"><span>Comunidad educativa</span><b>Aprender también es encontrarnos</b></div>
            <div className="hero__school-card">
              <img src="/images/escuela.jpg" alt="Fachada de la Escuela Técnica de Juan Lacaze" />
              <span><b>Nuestra escuela</b><small>José Salvo esq. Don Bosco</small></span>
            </div>
          </div>
        </section>

        <aside className="information-banner" aria-label="Aviso importante">
          <span><CalendarDays /></span>
          <p><strong>Información para 2026.</strong> Los turnos, cupos y períodos de inscripción pueden cambiar. Confirmalos siempre con la escuela.</p>
          <a href="#contacto">Ver contacto <ArrowRight /></a>
        </aside>

        <section className="institution section" id="institucion">
          <SectionHeading eyebrow="Sobre la institución" title="Una escuela vinculada con su ciudad." intro="La Escuela Técnica de Juan Lacaze integra la Dirección General de Educación Técnico Profesional de ANEP. Su propuesta combina formación, acompañamiento y experiencias conectadas con la comunidad." />
          <div className="institution__grid">
            <article className="history-card">
              <span className="history-card__year">1979</span>
              <div><h3>Escuela independiente</h3><p>La institución se constituyó como escuela independiente el 4 de marzo de 1979, luego de funcionar desde 1967 como anexo.</p><a href={officialLinks.history} target="_blank" rel="noreferrer">Consultar reseña oficial <ExternalLink /></a></div>
            </article>
            <article className="value-card"><GraduationCap /><h3>Formación integral</h3><p>Saberes generales, tecnología, práctica, creatividad y habilidades para continuar aprendiendo.</p></article>
            <article className="value-card"><HandHeart /><h3>Acompañamiento</h3><p>Una comunidad que sostiene las trayectorias de estudiantes y trabaja junto a las familias.</p></article>
            <article className="value-card"><UsersRound /><h3>Vínculo local</h3><p>Proyectos con instituciones, organizaciones y espacios de Juan Lacaze y la región.</p></article>
          </div>
          <div className="source-note"><Check /><span>Información institucional contrastada con publicaciones oficiales de UTU.</span><a href={officialLinks.schoolDirectory} target="_blank" rel="noreferrer">Ver ficha del centro <ExternalLink /></a></div>
        </section>

        <section className="proposals section" id="propuestas">
          <SectionHeading eyebrow="Cursos y propuestas" title="Distintos caminos para seguir creciendo." intro="Estas trayectorias surgen de referencias oficiales y de la actividad reciente de la escuela. La apertura de grupos, los turnos y los cupos se confirman cada año." light />
          <div className="proposal-grid">
            {proposals.map((proposal, index) => <ProposalCard proposal={proposal} index={index} key={proposal.title} />)}
            <article className="proposal-help">
              <Sparkles />
              <p className="eyebrow eyebrow--light">Orientación</p>
              <h3>¿Todavía no sabés qué elegir?</h3>
              <p>Contanos qué te interesa y consultá qué opciones están disponibles para tu edad y trayectoria.</p>
              <a href={`mailto:${contact.email}?subject=Consulta%20sobre%20propuestas%20educativas`}>Pedir orientación <ArrowRight /></a>
            </article>
          </div>
          <div className="proposal-footer">
            <p><strong>Importante:</strong> esta selección no reemplaza la confirmación de la oferta vigente.</p>
            <a className="button button--light" href={officialLinks.study} target="_blank" rel="noreferrer">Buscar en Estudiá en UTU <ExternalLink /></a>
          </div>
        </section>

        <section className="students section" id="estudiantes">
          <SectionHeading eyebrow="Información para estudiantes" title="Lo importante, cerca y ordenado." intro="Accesos útiles para estudiar, hacer trámites y mantenerse al día. Los avisos de la escuela prevalecen ante cualquier cambio." />
          <div className="student-links">
            <a href="#novedades"><span><CalendarDays /></span><div><small>Cartelera</small><h3>Horarios y comunicados</h3><p>Revisá avisos y fechas importantes.</p></div><ArrowRight /></a>
            <a href={officialLinks.students} target="_blank" rel="noreferrer"><span><ScrollText /></span><div><small>Portal UTU</small><h3>Trámites y servicios</h3><p>Accedé a recursos oficiales para estudiantes.</p></div><ExternalLink /></a>
            <a href={officialLinks.scholarships} target="_blank" rel="noreferrer"><span><HandHeart /></span><div><small>Apoyos</small><h3>Becas y pasantías</h3><p>Conocé oportunidades y convocatorias.</p></div><ExternalLink /></a>
            <a href="#contacto"><span><UsersRound /></span><div><small>Acompañamiento</small><h3>¿Necesitás orientación?</h3><p>Contactá al equipo de la escuela.</p></div><ArrowRight /></a>
          </div>
          <div className="pending-panel">
            <div><Clock3 /><span><strong>Horarios de grupos y atención</strong><small>Contenido pendiente de confirmación por la institución.</small></span></div>
            <a href={`tel:+598${contact.phones[0].replaceAll(" ", "")}`}>Consultar por teléfono <Phone /></a>
          </div>
        </section>

        <section className="news section" id="novedades">
          <SectionHeading eyebrow="Noticias y novedades" title="Una comunidad en movimiento." intro="Actividades, proyectos y noticias vinculadas con la Escuela Técnica de Juan Lacaze y el Campus Regional Litoral Sur." />
          <div className="news-grid">
            <a className="news-feature" href={officialLinks.graduates} target="_blank" rel="noreferrer">
              <div className="news-feature__label"><span>01 SET. 2026</span><b>Campus Litoral Sur</b></div>
              <div><p className="eyebrow">Egresos</p><h3>Colonia celebró a más de 170 egresados de sus centros educativos</h3><p>La Escuela Técnica de Juan Lacaze fue parte de una jornada que reunió a estudiantes, familias y equipos educativos de la región.</p><span className="text-link">Leer noticia oficial <ExternalLink /></span></div>
            </a>
            <a className="news-card" href={officialLinks.innovation} target="_blank" rel="noreferrer">
              <img src="/images/nodo-innovacion.jpg" alt="Equipamiento del Nodo de Innovación de Juan Lacaze" loading="lazy" />
              <div><span>19 NOV. 2025 · INNOVACIÓN</span><h3>Juan Lacaze puso en marcha un Nodo de Innovación abierto a la comunidad</h3><b>Leer noticia <ArrowRight /></b></div>
            </a>
            <a className="news-card" href={officialLinks.inclusion} target="_blank" rel="noreferrer">
              <img src="/images/inclusion.jpg" alt="Taller sobre autismo, educación e inclusión" loading="lazy" />
              <div><span>23 JUN. 2025 · INCLUSIÓN</span><h3>Un taller para construir una educación más accesible</h3><b>Leer noticia <ArrowRight /></b></div>
            </a>
          </div>
          <a className="all-news-link" href={officialLinks.news} target="_blank" rel="noreferrer">Ver todas las noticias de UTU <ExternalLink /></a>
        </section>

        <section className="enrollment section" id="inscripciones">
          <div className="enrollment__intro">
            <p className="eyebrow eyebrow--light">Inscripciones</p>
            <h2>Tu próximo paso puede empezar acá.</h2>
            <p>Las fechas, requisitos y lugares de inscripción dependen de cada propuesta. Te recomendamos confirmar la información antes de concurrir.</p>
            <div className="enrollment__status"><Clock3 /><span><strong>Próximo período</strong><small>Fecha pendiente de confirmación institucional</small></span></div>
          </div>
          <ol className="enrollment__steps">
            <li><span>1</span><div><h3>Explorá las propuestas</h3><p>Revisá las opciones y pensá cuál se acerca más a tus intereses.</p></div></li>
            <li><span>2</span><div><h3>Confirmá la información</h3><p>Consultá cupos, turnos, requisitos y documentación directamente con la escuela.</p></div></li>
            <li><span>3</span><div><h3>Realizá la inscripción</h3><p>Seguí las indicaciones del centro o del sistema oficial de UTU.</p></div></li>
          </ol>
          <div className="enrollment__actions">
            <a className="button button--warm" href={officialLinks.study} target="_blank" rel="noreferrer">Ir a Estudiá en UTU <ExternalLink /></a>
            <a className="button button--ghost" href={`mailto:${contact.email}?subject=Consulta%20sobre%20inscripciones`}>Consultar por correo</a>
          </div>
        </section>

        <section className="faq section" aria-labelledby="faq-title">
          <div className="faq__intro"><p className="eyebrow">Preguntas frecuentes</p><h2 id="faq-title">Antes de empezar.</h2><p>Respuestas generales para orientarte. Si tu situación es particular, escribinos.</p></div>
          <div className="faq__list">
            {questions.map((item, index) => {
              const isOpen = openQuestion === index;
              return <article className={`faq-item${isOpen ? " faq-item--open" : ""}`} key={item.question}>
                <h3><button type="button" onClick={() => setOpenQuestion(isOpen ? -1 : index)} aria-expanded={isOpen} aria-controls={`answer-${index}`}><span>0{index + 1}</span>{item.question}<ChevronDown /></button></h3>
                <div id={`answer-${index}`} aria-hidden={!isOpen}><p>{item.answer}</p></div>
              </article>;
            })}
          </div>
        </section>

        <section className="contact section" id="contacto">
          <div className="contact__heading">
            <p className="eyebrow eyebrow--light">Contacto y ubicación</p>
            <h2>Estamos para orientarte.</h2>
            <p>Comunicate por consultas sobre propuestas, inscripciones, horarios o trámites.</p>
            <span><Check /> Datos verificados en la ficha oficial del centro</span>
          </div>
          <div className="contact__details">
            <article><MapPin /><div><small>Dirección</small><h3>{contact.address}</h3><p>{contact.city}</p><a href={officialLinks.maps} target="_blank" rel="noreferrer">Abrir ubicación <ExternalLink /></a></div></article>
            <article><Phone /><div><small>Teléfonos</small><h3>{contact.phones[0]}</h3><p>{contact.phones[1]} · Telefax</p><a href={`tel:+598${contact.phones[0].replaceAll(" ", "")}`}>Llamar ahora <ArrowRight /></a></div></article>
            <article><Mail /><div><small>Correo electrónico</small><h3 className="contact__email">{contact.email}</h3><p>Consultas generales</p><a href={`mailto:${contact.email}`}>Escribir correo <ArrowRight /></a></div></article>
          </div>
          <a className="map-card" href={officialLinks.maps} target="_blank" rel="noreferrer" aria-label="Abrir ubicación de la Escuela Técnica de Juan Lacaze en Google Maps">
            <span className="map-card__road map-card__road--one" /><span className="map-card__road map-card__road--two" /><span className="map-card__road map-card__road--three" />
            <span className="map-card__pin"><MapPin /></span>
            <div><small>Juan Lacaze · Colonia</small><b>José Salvo y Don Bosco</b><span>Cómo llegar <ExternalLink /></span></div>
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <div><a className="brand brand--footer" href="#inicio"><span className="brand__mark">UTU</span><span className="brand__copy"><strong>Escuela Técnica</strong><small>Juan Lacaze</small></span></a><p>Educación pública, técnica y tecnológica.<br />Juan Lacaze · Colonia · Uruguay</p></div>
        <nav aria-label="Enlaces del pie"><a href="#institucion">Institución</a><a href="#propuestas">Propuestas</a><a href="#estudiantes">Estudiantes</a><a href="#novedades">Novedades</a><a href="#inscripciones">Inscripciones</a><a href="#contacto">Contacto</a></nav>
        <div className="site-footer__official"><FileCheck2 /><p><strong>Información responsable</strong><span>Datos verificados con fuentes oficiales de UTU. Última revisión: 11/09/2026.</span></p><a href={officialLinks.schoolDirectory} target="_blank" rel="noreferrer">Ficha oficial <ExternalLink /></a></div>
        <small>© 2026 Escuela Técnica de Juan Lacaze · Dirección General de Educación Técnico Profesional · ANEP</small>
      </footer>
    </>
  );
}
