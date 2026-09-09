"use client";

import {
  ArrowDown, ArrowLeft, ArrowRight, Atom, Bolt, BriefcaseBusiness, Check,
  ChefHat, ChevronDown, CirclePlay, Dumbbell, Hammer, Mail, MapPin,
  MousePointer2, Phone, Rocket, Sparkles, Trophy, Users, Wrench
} from "lucide-react";
import { useEffect, useState } from "react";

const courses = [
  { id:"electro", number:"01", label:"ELECTROMECÁNICA", phrase:"HACÉ QUE LAS COSAS FUNCIONEN.", body:"Motores, circuitos, automatismos y soluciones reales. Si te gusta entender cómo funciona el mundo, este puede ser tu taller.", color:"#d7ff3f", icon:Wrench, subjects:["Electrotecnia","Mecánica","Automatismos","Dibujo técnico"], image:"/images/escuela.jpg" },
  { id:"admin", number:"02", label:"ADMINISTRACIÓN", phrase:"CONVERTÍ UNA IDEA EN UN PROYECTO.", body:"Organizá, comunicá y aprendé a tomar decisiones. Herramientas para empresas, emprendimientos y equipos.", color:"#bda5ff", icon:BriefcaseBusiness, subjects:["Contabilidad","Marketing","Economía","Proyecto emprendedor"], image:"/images/nodo-innovacion.jpg" },
  { id:"gastro", number:"03", label:"GASTRONOMÍA", phrase:"CREÁ ALGO QUE TODOS QUIERAN PROBAR.", body:"Técnica, creatividad y trabajo en equipo en una cocina-taller donde cada clase termina en algo concreto.", color:"#ff8ab8", icon:ChefHat, subjects:["Cocina","Panadería","Pastelería","Servicio"], image:"/images/inclusion.jpg" },
  { id:"deporte", number:"04", label:"DEPORTE Y RECREACIÓN", phrase:"MOVÉ A OTROS. MOVÉ TU COMUNIDAD.", body:"Deporte, salud, liderazgo y organización de actividades. Aprendé mientras entrenás tus propias capacidades.", color:"#55e6d0", icon:Dumbbell, subjects:["Práctica deportiva","Anatomía","Recreación","Primeros auxilios"], image:"/images/escuela.jpg" },
];

const quiz = [
  { label:"Armar y reparar", icon:Hammer, course:"Electromecánica", note:"Tu curiosidad técnica puede convertirse en una profesión." },
  { label:"Crear y emprender", icon:Rocket, course:"Administración", note:"Tenés perfil para transformar ideas en proyectos." },
  { label:"Cocinar e inventar", icon:ChefHat, course:"Gastronomía", note:"Tu creatividad merece un lugar en la cocina-taller." },
  { label:"Mover y acompañar", icon:Trophy, course:"Deporte y recreación", note:"Tu energía puede activar a toda una comunidad." },
];

export default function FuturoLanding() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);
  const [answer, setAnswer] = useState<number | null>(null);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - innerHeight;
        setProgress(max > 0 ? scrollY / max : 0);
      });
    };
    const reveals = document.querySelectorAll<HTMLElement>("[data-scroll-reveal]");
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.dataset.visible = "true";
    }), { threshold:.18 });
    reveals.forEach(node => revealObserver.observe(node));
    const chapters = document.querySelectorAll<HTMLElement>("[data-course]");
    const courseObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.course));
    }), { rootMargin:"-30% 0px -45%", threshold:.15 });
    chapters.forEach(node => courseObserver.observe(node));
    addEventListener("scroll", onScroll, { passive:true }); onScroll();
    return () => { removeEventListener("scroll", onScroll); cancelAnimationFrame(frame); revealObserver.disconnect(); courseObserver.disconnect(); };
  }, []);

  const ActiveIcon = courses[active].icon;

  return (
    <main className="future-page" style={{"--progress":progress} as React.CSSProperties}>
      <div className="future-progress" />
      <nav className="future-nav">
        <a href="/" className="future-back"><ArrowLeft /> Portal UTU</a>
        <span className="future-logo">UTU <b>JUAN LACAZE</b></span>
        <a href="#anotate" className="future-nav-cta">Quiero anotarme <ArrowRight /></a>
      </nav>

      <section className="future-hero">
        <div className="future-orbit orbit-one"/><div className="future-orbit orbit-two"/>
        <p className="future-tag"><Sparkles/> ESTO NO ES SOLO ESTUDIAR</p>
        <h1>ACTIVÁ<br/><span>TU FUTURO</span></h1>
        <p className="future-intro">Ideas. Talleres. Amigos. Proyectos reales.<br/>Todo empieza cuando te animás a probar.</p>
        <a href="#descubri" className="future-start">Empezar a descubrir <ArrowDown/></a>
        <div className="future-sticker">TU CAMINO<br/><b>EMPIEZA ACÁ</b></div>
        <div className="future-marquee"><div>APRENDÉ HACIENDO ✦ CREÁ ALGO REAL ✦ ENCONTRÁ TU CAMINO ✦ APRENDÉ HACIENDO ✦ CREÁ ALGO REAL ✦ ENCONTRÁ TU CAMINO ✦</div></div>
      </section>

      <section className="future-manifesto" id="descubri">
        <p data-scroll-reveal>NO VENÍS A<br/><span>MIRAR.</span></p>
        <p data-scroll-reveal>VENÍS A<br/><span>PROBAR.</span></p>
        <div className="manifesto-side" data-scroll-reveal><MousePointer2/><b>Tu futuro no se adivina.</b><span>Se construye haciendo, equivocándote, volviendo a intentar y descubriendo todo lo que podés crear.</span></div>
      </section>

      <section className="course-story">
        <div className="course-sticky" style={{"--course-color":courses[active].color} as React.CSSProperties}>
          <p>DESLIZÁ PARA EXPLORAR</p>
          <div className="course-stage-count"><b>{courses[active].number}</b><span>/ 04</span></div>
          <div className="course-stage-icon"><ActiveIcon/></div>
          <h2>{courses[active].label}</h2>
          <div className="course-dots">{courses.map((c,i)=><a key={c.id} href={`#${c.id}`} className={i===active?"active":""} aria-label={`Ver ${c.label}`}/>)}</div>
        </div>
        <div className="course-chapters">
          {courses.map((course,index)=>{const Icon=course.icon;return <article id={course.id} data-course={index} key={course.id} style={{"--course-color":course.color} as React.CSSProperties}>
            <span className="chapter-number">{course.number}</span><div className="chapter-photo"><img src={course.image} alt="Experiencia educativa de la Escuela Técnica de Juan Lacaze"/><span><Icon/> APRENDER HACIENDO</span></div>
            <h3>{course.phrase}</h3><p>{course.body}</p><div className="chapter-subjects">{course.subjects.map(subject=><span key={subject}><Check/> {subject}</span>)}</div><a href="#anotate">Me interesa <ArrowRight/></a>
          </article>})}
        </div>
      </section>

      <section className="future-proof">
        <div className="proof-copy" data-scroll-reveal><p className="micro-label"><Bolt/> ACÁ PASAN COSAS</p><h2>DE LA<br/>IDEA AL<br/><span>MUNDO REAL.</span></h2><p>Proyectos, laboratorios, muestras, actividades e innovación junto a la comunidad. Lo que aprendés no queda dentro de un cuaderno.</p></div>
        <div className="proof-gallery" data-scroll-reveal><div className="proof-main"><img src="/images/nodo-innovacion.jpg" alt="Nodo de Innovación de Juan Lacaze"/><span>NODO DE INNOVACIÓN · 2025</span></div><div className="proof-card"><Atom/><b>EXPERIMENTÁ</b><small>Probá tecnología, herramientas y formas nuevas de resolver.</small></div><div className="proof-card acid"><Users/><b>CONECTÁ</b><small>Aprendé con otros y creá proyectos para tu comunidad.</small></div></div>
      </section>

      <section className="future-quiz">
        <div className="quiz-heading" data-scroll-reveal><span>TEST EXPRESS · 10 SEGUNDOS</span><h2>¿QUÉ TE<br/><em>MUEVE?</em></h2><p>Elegí lo que más te representa. No define tu futuro, pero puede darte una pista.</p></div>
        <div className="quiz-options" data-scroll-reveal>{quiz.map((item,index)=>{const Icon=item.icon;return <button key={item.label} className={answer===index?"selected":""} onClick={()=>setAnswer(index)}><span>{String(index+1).padStart(2,"0")}</span><Icon/><b>{item.label}</b><ArrowRight/></button>})}</div>
        <div className={answer!==null?"quiz-result show":"quiz-result"} aria-live="polite">{answer!==null&&<><span>Podrías explorar</span><h3>{quiz[answer].course}</h3><p>{quiz[answer].note}</p><a href="#anotate">Quiero saber más <ArrowDown/></a></>}</div>
      </section>

      <section className="future-day">
        <div className="day-track"><span>08:00</span><b>ENTRÁS CON UNA DUDA.</b><span>10:30</span><b>PROBÁS ALGO NUEVO.</b><span>15:00</span><b>CREÁS EN EQUIPO.</b><span>21:00</span><b>SALÍS CON UNA IDEA.</b></div>
      </section>

      <section className="future-cta" id="anotate">
        <div className="cta-burst">DALE</div><p data-scroll-reveal>¿Y SI ESTE ES<br/>TU PRÓXIMO PASO?</p><h2 data-scroll-reveal>VENÍ A<br/><span>CONOCERNOS.</span></h2>
        <div className="future-contact" data-scroll-reveal><a href="tel:+59845862174"><Phone/> 4586 2174</a><a href="mailto:tecnicajuanlacaze@gmail.com"><Mail/> Escribinos</a><a href="https://maps.google.com/?q=Escuela+Tecnica+Juan+Lacaze" target="_blank" rel="noreferrer"><MapPin/> Cómo llegar</a></div>
        <small>José Salvo s/n° esq. Don Bosco · Juan Lacaze, Colonia<br/>La oferta, los turnos y los cupos se confirman cada año directamente con la escuela.</small>
      </section>

      <footer className="future-footer"><span className="future-logo">UTU <b>JUAN LACAZE</b></span><p>APRENDÉ HACIENDO.</p><a href="/">Volver al portal <ArrowRight/></a></footer>
    </main>
  );
}
