import { ArrowDown, ArrowRight, GraduationCap, Hammer, Route, School } from "lucide-react";
import Image from "next/image";
import Link from "./components/Link";
import { CourseCard, CourseIconMark, courseStyle } from "./components/CourseCard";
import { CtaBand } from "./components/CtaBand";
import { Marquee } from "./components/Marquee";
import { NewsCard } from "./components/NewsCard";
import { Quiz } from "./components/Quiz";
import { SectionHeading } from "./components/SectionHeading";
import { bachilleratos, courses, getCourse } from "./content/courses";
import { news } from "./content/news";
import { asset, institutionalFigures } from "./content/site";

const collage = [
  "tecnologias-de-la-informacion",
  "sistemas-mecanicos",
  "gastronomia",
  "educacion-fisica-y-deporte",
  null,
  "estetica-personal",
  "administracion",
  "educacion-basica-integrada",
];

const verbs = [
  "Programar",
  "Cocinar",
  "Entrenar",
  "Soldar",
  "Diseñar webs",
  "Emprender",
  "Arbitrar",
  "Crear looks",
  "Armar redes",
  "Fabricar",
  "Administrar",
  "Atender eventos",
];

const perks = [
  { value: "$0", label: "Es gratis", text: "Educación pública, laica y abierta a toda la comunidad." },
  { value: "2", label: "títulos al egresar", text: "Salís con el título de bachiller y el de tu orientación." },
  { value: "6", label: "orientaciones", text: "Tecnología, deporte, cocina, mecánica, estética y administración." },
  { value: "3", label: "años", text: "Y si en 2.º querés cambiar de área, podés hacer una nivelación." },
];

const journey = [
  {
    icon: School,
    title: "Terminás 9.º",
    text: "En la Educación Básica Integrada de UTU o en el liceo: podés venir desde cualquiera de los dos.",
  },
  {
    icon: Route,
    title: "Elegís tu camino",
    text: "Seis orientaciones, en modalidad Bachillerato Tecnológico (BT) o Técnico Profesional (BTP).",
  },
  {
    icon: Hammer,
    title: "Practicás en serio",
    text: "Clases + talleres equipados: cocina, máquinas herramienta, laboratorio de informática y más.",
  },
  {
    icon: GraduationCap,
    title: "Salís con 2 títulos",
    text: "Seguís en Udelar, UTEC, UTU o formación docente, o empezás a trabajar.",
  },
];

const destinations = ["Udelar", "UTEC", "ISEF", "Tecnicaturas de UTU", "Formación docente", "Tu primer trabajo", "Tu propio emprendimiento"];

export default function HomePage() {
  const latest = news.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="hero__glow" aria-hidden="true" />
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="pill">
              <span className="pill__dot" aria-hidden="true" /> Oferta educativa 2027 · Juan Lacaze
            </p>
            <h1>
              Lo que te gusta <span className="highlight">puede ser tu profesión.</span>
            </h1>
            <p className="hero__lead">
              Seis bachilleratos con talleres, práctica real y doble título. Gratis y a la vuelta de tu casa, en la Escuela Técnica de Juan
              Lacaze (UTU).
            </p>
            <div className="hero__actions">
              <a className="button button--yellow button--lg" href="#test">
                Hacé el test: ¿qué va con vos? <ArrowDown aria-hidden="true" />
              </a>
              <Link className="button button--ghost button--lg" href="/cursos">
                Ver los cursos
              </Link>
            </div>
            <ul className="hero__facts" aria-label="Características de la educación en UTU">
              <li>Gratuita</li>
              <li>Laica</li>
              <li>Abierta a toda la comunidad</li>
            </ul>
          </div>

          <nav className="collage" aria-label="Orientaciones de la escuela">
            {collage.map((slug, index) => {
              if (!slug) {
                return (
                  <div className="collage__center" key="escudo">
                    <Image src={asset("/images/escudo.png")} alt="" width={120} height={120} priority />
                  </div>
                );
              }
              const course = getCourse(slug);
              if (!course) return null;
              return (
                <Link
                  key={slug}
                  href={`/cursos/${slug}`}
                  className="collage__tile"
                  style={{ ...courseStyle(course), animationDelay: `${index * -0.7}s` }}
                >
                  <CourseIconMark icon={course.icon} size="sm" />
                  <span>{course.title}</span>
                </Link>
              );
            })}
            <span className="collage__sticker">
              <strong>2</strong> títulos
            </span>
            <svg className="badge-spin" viewBox="0 0 120 120" aria-hidden="true">
              <defs>
                <path id="badge-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
              </defs>
              <circle cx="60" cy="60" r="58" />
              <text>
                <textPath href="#badge-circle">GRATUITA · LAICA · PÚBLICA · UTU · </textPath>
              </text>
              <text x="60" y="68" textAnchor="middle" className="badge-spin__center">
                $0
              </text>
            </svg>
          </nav>
        </div>
      </section>

      <Marquee items={verbs} />

      <section className="section" aria-labelledby="por-que">
        <div className="container">
          <h2 id="por-que" className="visually-hidden">
            Por qué estudiar en UTU Juan Lacaze
          </h2>
          <ul className="perks">
            {perks.map((perk) => (
              <li key={perk.label} className="reveal">
                <strong>{perk.value}</strong>
                <span>{perk.label}</span>
                <p>{perk.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--quiz" id="test" aria-labelledby="test-titulo">
        <div className="container quiz-layout">
          <div className="quiz-intro">
            <p className="eyebrow">Test de 30 segundos</p>
            <h2 id="test-titulo">¿No sabés qué elegir? Descubrí qué orientación va con vos.</h2>
            <p>Respondé tres preguntas rápidas y te mostramos el bachillerato que más se parece a lo que te gusta. Sin registro, sin vueltas.</p>
            <p className="quiz-intro__note">
              ¿Todavía estás en la escuela o en 7.º a 9.º? Mirá la{" "}
              <Link href="/cursos/educacion-basica-integrada">Educación Básica Integrada</Link>.
            </p>
          </div>
          <Quiz />
        </div>
      </section>

      <section className="section" aria-labelledby="cursos-titulo">
        <div className="container">
          <SectionHeading
            id="cursos-titulo"
            eyebrow="Bachilleratos 2027"
            title="Seis caminos. Elegí el tuyo."
            intro="Cada orientación dura tres años, combina formación general con mucha práctica y te habilita a seguir estudiando o trabajar."
            link={{ href: "/cursos", label: "Ver todos los cursos" }}
          />
          <div className="course-grid">
            {bachilleratos.map((course) => (
              <CourseCard course={course} key={course.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="recorrido-titulo">
        <div className="container">
          <SectionHeading
            id="recorrido-titulo"
            eyebrow="Tu recorrido"
            title="De 9.º a tu futuro, en cuatro pasos"
            intro="Estudiar en UTU no te cierra puertas: te abre más."
          />
          <ol className="journey">
            {journey.map((step, index) => (
              <li key={step.title} className="reveal">
                <span className="journey__number">{String(index + 1).padStart(2, "0")}</span>
                <step.icon aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="destinations">
            <p>¿Y después? Podés seguir en:</p>
            <ul>
              {destinations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="escuela-titulo">
        <div className="container split split--center">
          <div>
            <SectionHeading
              id="escuela-titulo"
              eyebrow="La escuela"
              title="Una escuela con historia y con barrio"
              intro="Desde 1979 somos escuela independiente de UTU en Juan Lacaze. Trabajamos con el Municipio, el Centro Cultural Don Bosco, la Plaza de Deportes y el Nodo de Innovación de UTU."
            />
            <Link className="button button--primary" href="/institucion">
              Conocé la escuela <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="big-stat">
            <strong>{institutionalFigures.students.value}</strong>
            <span>estudiantes ya eligen la Escuela Técnica</span>
            <small>{institutionalFigures.students.note}.</small>
            <div className="big-stat__courses" aria-hidden="true">
              {courses.map((course) => (
                <span key={course.slug} style={courseStyle(course)}>
                  <CourseIconMark icon={course.icon} size="sm" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="novedades-titulo">
        <div className="container">
          <SectionHeading
            id="novedades-titulo"
            eyebrow="Novedades"
            title="Lo que está pasando en la escuela"
            link={{ href: "/novedades", label: "Ver todas las novedades" }}
          />
          <div className="news-grid">
            {latest.map((item) => (
              <NewsCard item={item} key={item.slug} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
