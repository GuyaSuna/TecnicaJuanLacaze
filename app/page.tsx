"use client";

import {
  ArrowRight, BookOpen, CalendarDays, Check, ChevronDown, ChevronRight,
  Clock3, Cpu, GraduationCap, MapPin, Menu, Phone, Quote, Sparkles,
  UtensilsCrossed, Volleyball, Wrench, X, Zap
} from "lucide-react";
import { useEffect, useState } from "react";

type Course = {
  title: string; level: string; area: string; years: string; schedule: string;
  icon: typeof Wrench; color: string; description: string; subjects: string[];
};

const courses: Course[] = [
  { title:"Educación Básica Integrada", level:"Educación media básica", area:"Básica", years:"3 años", schedule:"Turnos a confirmar", icon:BookOpen, color:"#3bb9ed", description:"Una base integral que combina formación general, tecnología y experiencias de taller.", subjects:["Lengua y comunicación","Matemática","Ciencias del ambiente","Ciencias sociales","Tecnología","Inglés","Educación física","Talleres exploratorios"] },
  { title:"Electromecánica", level:"Bachillerato técnico", area:"Tecnología", years:"3 años", schedule:"Turnos a confirmar", icon:Wrench, color:"#f36a35", description:"Diseñá, instalá y mantené sistemas eléctricos y mecánicos con práctica de taller.", subjects:["Electrotecnia","Mecánica","Automatismos","Representación técnica","Matemática","Física","Programación","Seguridad industrial"] },
  { title:"Administración", level:"Educación media superior", area:"Gestión", years:"3 años", schedule:"Turnos a confirmar", icon:GraduationCap, color:"#8d5adf", description:"Herramientas de gestión, comunicación y tecnología para organizaciones y emprendimientos.", subjects:["Administración","Contabilidad","Economía","Derecho","Marketing","Gestión humana","Ofimática","Proyecto emprendedor"] },
  { title:"Gastronomía", level:"Formación profesional", area:"Servicios", years:"2 años", schedule:"Turnos a confirmar", icon:UtensilsCrossed, color:"#e9466e", description:"Técnicas culinarias, servicio y gestión con aprendizaje intensivo en cocina-taller.", subjects:["Cocina básica","Panadería","Pastelería","Nutrición","Higiene alimentaria","Servicio de salón","Costos","Práctica profesional"] },
  { title:"Deporte y recreación", level:"Educación media superior", area:"Bienestar", years:"3 años", schedule:"Turnos a confirmar", icon:Volleyball, color:"#20a779", description:"Formación para planificar actividades deportivas y recreativas con impacto comunitario.", subjects:["Práctica deportiva","Anatomía","Recreación","Primeros auxilios","Psicología","Gestión de eventos","Expresión corporal","Proyecto"] },
  { title:"Instrumentación y control", level:"Formación tecnológica", area:"Tecnología", years:"Consultar", schedule:"Sujeto a cupos", icon:Cpu, color:"#1476d4", description:"Una mirada aplicada a sensores, automatización y control de procesos industriales.", subjects:["Medición industrial","Electrónica","Control automático","PLC","Neumática","Procesos","Seguridad","Proyecto técnico"] },
];

const filters = ["Todas", "Básica", "Tecnología", "Gestión", "Servicios", "Bienestar"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("Todas");
  const [selected, setSelected] = useState<Course | null>(null);
  const [faq, setFaq] = useState<number | null>(0);

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")), {threshold:.12});
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const visibleCourses = filter === "Todas" ? courses : courses.filter(c => c.area === filter);

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Ir al inicio" onClick={closeMenu}>
          <span className="brand-mark">UTU</span>
          <span className="brand-copy"><b>Escuela Técnica</b><small>Juan Lacaze</small></span>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Navegación principal">
          <a href="/futuro" onClick={closeMenu}>Experiencia joven</a>
          <a href="#propuestas" onClick={closeMenu}>Propuestas</a><a href="#vida-utu" onClick={closeMenu}>Vida UTU</a>
          <a href="#eventos" onClick={closeMenu}>Novedades</a><a href="#equipo" onClick={closeMenu}>Equipo</a><a href="#contacto" onClick={closeMenu}>Contacto</a>
          <a className="nav-cta" href="#contacto" onClick={closeMenu}>Quiero estudiar <ArrowRight size={16}/></a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú" aria-expanded={menuOpen}>{menuOpen ? <X/> : <Menu/>}</button>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-photo" role="img" aria-label="Edificio de la Escuela Técnica de Juan Lacaze"/><div className="hero-wash"/>
        <div className="hero-content">
          <p className="eyebrow"><span/> Educación pública · técnica · humana</p>
          <h1>Aprendé haciendo.<br/><em>Transformá tu futuro.</em></h1>
          <p className="hero-lead">Un lugar donde las ideas se convierten en proyectos, los talleres en oportunidades y cada estudiante encuentra su camino.</p>
          <div className="hero-actions"><a className="primary-button" href="#propuestas">Explorar propuestas <ArrowRight size={19}/></a><a className="text-button" href="#vida-utu">Conocé la escuela <span>↓</span></a></div>
        </div>
        <aside className="hero-contact"><div><MapPin size={18}/><span><small>Estamos en</small>José Salvo esq. Don Bosco</span></div><div><Phone size={18}/><span><small>Llamanos</small>4586 2174</span></div></aside>
        <div className="scroll-note"><span>SCROLL</span><i/></div>
      </section>

      <section className="manifesto" id="vida-utu">
        <div className="manifesto-number reveal"><strong>Desde</strong><b>1967</b><span>creciendo junto<br/>a Juan Lacaze</span></div>
        <div className="manifesto-copy reveal"><p className="section-kicker">MÁS QUE UNA ESCUELA</p><h2>Tu lugar para <em>crear, descubrir</em><br/>y construir lo que viene.</h2><p>En la Técnica se aprende con las manos, la cabeza y el corazón. Aulas, talleres y proyectos se conectan con la vida real de nuestra ciudad.</p><div className="values"><span><Check/>Educación pública</span><span><Check/>Aprendizaje práctico</span><span><Check/>Comunidad cercana</span></div></div>
      </section>

      <section className="courses-section" id="propuestas">
        <div className="section-head reveal"><div><p className="section-kicker light">ENCONTRÁ TU CAMINO</p><h2>Propuestas que<br/><em>abren puertas.</em></h2></div><p>Conocé algunas de las áreas históricamente vinculadas a nuestra escuela. La oferta, los turnos y los cupos se confirman cada año.</p></div>
        <div className="filters reveal" role="group" aria-label="Filtrar propuestas">{filters.map(item => <button key={item} onClick={() => setFilter(item)} className={filter === item ? "active" : ""}>{item}</button>)}</div>
        <div className="course-grid">
          {visibleCourses.map((course, index) => { const Icon=course.icon; return <article className="course-card reveal" key={course.title} style={{"--accent":course.color, "--delay":`${index*.06}s`} as React.CSSProperties}>
            <div className="course-top"><span className="course-icon"><Icon/></span><span className="course-level">{course.level}</span></div><h3>{course.title}</h3><p>{course.description}</p><div className="course-meta"><span><CalendarDays/> {course.years}</span><span><Clock3/> {course.schedule}</span></div><button onClick={() => setSelected(course)}>Ver materias y detalles <ArrowRight/></button>
          </article>})}
        </div>
        <p className="course-note">¿No sabés cuál elegir? <a href="#contacto">Escribinos y te orientamos <ArrowRight size={14}/></a></p>
      </section>

      <section className="experience">
        <div className="experience-image reveal"><img src="/images/nodo-innovacion.jpg" alt="Actividad del Nodo de Innovación de Juan Lacaze"/><span className="image-label">NODO DE INNOVACIÓN · 2025</span></div>
        <div className="experience-copy reveal"><p className="section-kicker">APRENDER EN MOVIMIENTO</p><h2>La práctica no es el final.<br/><em>Es el comienzo.</em></h2><p>Laboratorios, talleres y proyectos con la comunidad convierten los contenidos en experiencia. En 2025, Juan Lacaze puso en marcha el undécimo Nodo de Innovación de UTU: un espacio abierto para crear y compartir conocimiento.</p><div className="stat-row"><div><b>9</b><span>aulas</span></div><div><b>3</b><span>patios</span></div><div><b>1</b><span>laboratorio<br/>tecnológico</span></div></div><a className="inline-link" href="https://www.utu.edu.uy/juan-lacaze-puso-en-marcha-el-undecimo-nodo-de-innovacion-de-utu-para-toda-la-comunidad/" target="_blank" rel="noreferrer">Conocer el Nodo de Innovación <ArrowRight/></a></div>
      </section>

      <section className="news-section" id="eventos">
        <div className="section-head dark reveal"><div><p className="section-kicker">LO QUE ESTÁ PASANDO</p><h2>Una escuela<br/><em>en movimiento.</em></h2></div><a href="https://www.utu.edu.uy/noticias/" target="_blank" rel="noreferrer">Ver noticias de UTU <ArrowRight/></a></div>
        <div className="news-grid"><a className="news-feature reveal" href="https://www.utu.edu.uy/juan-lacaze-puso-en-marcha-el-undecimo-nodo-de-innovacion-de-utu-para-toda-la-comunidad/" target="_blank" rel="noreferrer"><img src="/images/nodo-innovacion.jpg" alt="Lanzamiento del Nodo de Innovación"/><div className="news-overlay"><span>INNOVACIÓN · NOV 2025</span><h3>Juan Lacaze puso en marcha un nuevo Nodo de Innovación</h3><p>Un espacio de formación y creación abierto a estudiantes y a toda la comunidad.</p><i><ArrowRight/></i></div></a>
          <a className="news-small reveal" href="https://www.utu.edu.uy/utu-juan-lacaze-organizo-un-taller-sobre-autismo-educacion-e-inclusion/" target="_blank" rel="noreferrer"><img src="/images/inclusion.jpg" alt="Taller sobre autismo, educación e inclusión"/><div><span>COMUNIDAD · JUN 2025</span><h3>Estudiantes organizaron un taller sobre autismo e inclusión</h3><p>Una jornada con familias, docentes y organizaciones para construir una educación más accesible.</p><b>Leer la noticia <ArrowRight/></b></div></a>
          <article className="agenda-card reveal"><span className="agenda-tag"><Sparkles/> AGENDA</span><h3>Próximas actividades</h3><div className="agenda-item"><b>01</b><span><strong>Inscripciones y orientación</strong><small>Consultá fechas y documentación directamente en la escuela.</small></span></div><div className="agenda-item"><b>02</b><span><strong>Muestras y proyectos</strong><small>Seguinos para conocer las próximas instancias abiertas.</small></span></div><a href="#contacto">Recibir información <ArrowRight/></a></article></div>
      </section>

      <section className="team-section" id="equipo">
        <div className="team-intro reveal"><p className="section-kicker">PERSONAS QUE ACOMPAÑAN</p><h2>Docentes que<br/><em>dejan huella.</em></h2><p>Nuestro equipo conecta la experiencia profesional con una enseñanza cercana, práctica y comprometida con cada trayectoria.</p></div>
        <div className="leadership reveal"><div className="quote-mark"><Quote/></div><blockquote>“Un espacio de capacitación y formación donde los estudiantes pueden intercambiar, crear y construir en conjunto.”</blockquote><div className="leader"><span>MV</span><p><b>María Ana Villagrán Bevilacqua</b><small>Directora</small></p></div><div className="leader"><span>LD</span><p><b>Luján Dalchiele</b><small>Subdirectora</small></p></div></div>
        <div className="teacher-areas reveal"><span>Áreas docentes</span><div><b>Tecnología & industria</b><b>Administración & gestión</b><b>Gastronomía & servicios</b><b>Deporte & bienestar</b><b>Formación general</b></div><p>La integración docente puede variar según la propuesta y el año lectivo.</p></div>
      </section>

      <section className="faq-section"><div className="faq-title reveal"><p className="section-kicker">ANTES DE EMPEZAR</p><h2>Preguntas<br/><em>frecuentes.</em></h2></div><div className="faq-list reveal">{[
          ["¿Cuándo son las inscripciones?","Las fechas cambian según el año y cada propuesta. Recomendamos comunicarse con la escuela o consultar el portal oficial de UTU para recibir información actualizada."],
          ["¿Qué documentación necesito?","Habitualmente se solicita cédula de identidad, carné de salud y escolaridad o constancia del último nivel aprobado. Confirmá los requisitos antes de concurrir."],
          ["¿Los cursos son gratuitos?","Sí. UTU forma parte de la educación pública uruguaya y sus propuestas educativas son gratuitas."],
          ["¿Puedo visitar la escuela antes de decidir?","Podés contactar a Secretaría para consultar horarios de atención, orientación y posibles instancias abiertas a la comunidad."],
        ].map((item,index)=><div className={faq===index?"faq-item open":"faq-item"} key={item[0]}><button onClick={()=>setFaq(faq===index?null:index)}><span>{String(index+1).padStart(2,"0")}</span>{item[0]}<ChevronDown/></button><div><p>{item[1]}</p></div></div>)}</div></section>

      <section className="contact-section" id="contacto"><div className="contact-main reveal"><p className="section-kicker light">ESTAMOS PARA AYUDARTE</p><h2>Tu próximo paso<br/>puede empezar <em>acá.</em></h2><p>Consultá por propuestas, inscripciones, turnos o cualquier duda sobre estudiar en la Escuela Técnica de Juan Lacaze.</p><div className="contact-actions"><a href="tel:+59845862174"><Phone/> 4586 2174</a><a href="mailto:tecnicajuanlacaze@gmail.com">Escribir por email <ArrowRight/></a></div></div><div className="contact-details reveal"><div><MapPin/><span><small>Dirección</small><b>José Salvo s/n°<br/>esq. Don Bosco</b><a href="https://maps.google.com/?q=Escuela+Tecnica+Juan+Lacaze" target="_blank" rel="noreferrer">Cómo llegar <ChevronRight/></a></span></div><div><Clock3/><span><small>Atención</small><b>Consultá horarios<br/>por teléfono</b></span></div><div><Zap/><span><small>Contacto</small><b>4586 2174<br/>4586 2129</b></span></div></div></section>

      <footer><a className="brand footer-brand" href="#inicio"><span className="brand-mark">UTU</span><span className="brand-copy"><b>Escuela Técnica</b><small>Juan Lacaze</small></span></a><p>Educación pública, técnica y tecnológica.<br/>Juan Lacaze · Colonia · Uruguay</p><div><a href="#propuestas">Propuestas</a><a href="#eventos">Novedades</a><a href="#contacto">Contacto</a><a href="https://www.utu.edu.uy/" target="_blank" rel="noreferrer">UTU oficial ↗</a></div><small>Portal informativo no oficial · Verificá oferta, cupos y fechas con la institución.</small></footer>

      {selected && <div className="modal-backdrop" onMouseDown={() => setSelected(null)}><div className="course-modal" role="dialog" aria-modal="true" aria-label={`Detalles de ${selected.title}`} onMouseDown={e=>e.stopPropagation()} style={{"--accent":selected.color} as React.CSSProperties}><button className="modal-close" onClick={()=>setSelected(null)} aria-label="Cerrar"><X/></button><span className="course-icon"><selected.icon/></span><p className="section-kicker">{selected.level}</p><h2>{selected.title}</h2><p>{selected.description}</p><h4>Materias y contenidos orientativos</h4><div className="subject-grid">{selected.subjects.map(subject=><span key={subject}><Check/> {subject}</span>)}</div><div className="modal-note">Los nombres de materias, la duración y la disponibilidad pueden cambiar según el plan vigente. Confirmalos con la escuela.</div><a href="#contacto" onClick={()=>setSelected(null)}>Consultar por esta propuesta <ArrowRight/></a></div></div>}
    </main>
  );
}
