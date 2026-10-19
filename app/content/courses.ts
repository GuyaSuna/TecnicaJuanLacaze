/**
 * Cursos y propuestas educativas.
 *
 * Fuente principal: presentación institucional "Oferta Educativa 2027",
 * Escuela Técnica Juan Lacaze (DGETP - UTU).
 *
 * `status`:
 *  - "documented": aparece en la Oferta Educativa 2027 de la escuela.
 *  - "pending": actividad documentada, pero apertura 2027 pendiente de confirmación.
 *
 * La apertura efectiva de grupos, turnos y cupos se confirma cada año.
 */

export type CourseStatus = "documented" | "pending";

export type CourseIcon =
  | "book"
  | "activity"
  | "briefcase"
  | "laptop"
  | "wrench"
  | "chef"
  | "scissors";

export type Course = {
  slug: string;
  title: string;
  /** Nombre alternativo con el que también se conoce la orientación. */
  alias?: string;
  level: string;
  duration: string;
  summary: string;
  description: string[];
  learn: { title: string; items: string[] };
  outcomes?: { title: string; items: string[] };
  continuity: { title: string; items: string[] };
  extra?: { title: string; items: string[] };
  status: CourseStatus;
  statusLabel: string;
  source: string;
  icon: CourseIcon;
  /** Color de la orientación (debe contrastar con texto blanco). */
  color: string;
  /** Frase corta y directa para tarjetas y portada. */
  tagline: string;
  /** Tres temas destacados, tomados del contenido del curso. */
  highlights: [string, string, string];
};

/** Información común a todos los bachilleratos (Oferta Educativa 2027). */
export const bachilleratoFacts = [
  {
    title: "Duración de 3 años",
    text: "Todos los bachilleratos de UTU se cursan en tres años, en la modalidad Bachillerato Tecnológico (BT) o Bachillerato Técnico Profesional (BTP).",
  },
  {
    title: "Navegabilidad",
    text: "Existe navegabilidad entre cursos de UTU y cursos de liceo: es posible continuar la trayectoria entre ambos subsistemas.",
  },
  {
    title: "Doble titulación",
    text: "Quien egresa obtiene el título de bachiller y el de la orientación que cursó.",
  },
  {
    title: "Cambio de área",
    text: "Quien desee cambiar de área de formación en segundo año puede realizar un proceso de nivelación.",
  },
];

export const courses: Course[] = [
  {
    slug: "educacion-basica-integrada",
    title: "Educación Básica Integrada",
    level: "Educación media básica",
    duration: "3 años (7.º, 8.º y 9.º)",
    summary:
      "El primer tramo de la educación media, con formación general, tecnología, experiencias prácticas y acompañamiento de las trayectorias.",
    description: [
      "La Educación Básica Integrada (EBI) es el trayecto que continúa a la escuela primaria y culmina con 9.º grado. Al finalizarlo, se puede continuar en cualquiera de los bachilleratos de UTU o en el liceo.",
    ],
    learn: {
      title: "Cómo se organiza",
      items: [
        "Formación general compartida con toda la educación media básica.",
        "Espacios de tecnología y talleres con enfoque práctico.",
        "Acompañamiento de las trayectorias educativas y trabajo con las familias.",
      ],
    },
    continuity: {
      title: "Al finalizar 9.º",
      items: ["Bachilleratos de UTU (BT o BTP) en cualquiera de las orientaciones de la escuela.", "Bachillerato de liceo, gracias a la navegabilidad entre subsistemas."],
    },
    status: "pending",
    statusLabel: "Apertura 2027 pendiente de confirmación",
    source: "Cartelera institucional 2026. La presentación Oferta Educativa 2027 describe únicamente los bachilleratos.",
    icon: "book",
    color: "#2563eb",
    tagline: "Tu primer paso en UTU, después de la escuela.",
    highlights: ["7.º, 8.º y 9.º", "Tecnología y talleres", "Después: UTU o liceo"],
  },
  {
    slug: "educacion-fisica-y-deporte",
    title: "Educación Física y Deporte",
    level: "Bachillerato · BT o BTP",
    duration: "3 años",
    summary:
      "Talleres de deporte con alta carga horaria junto a unidades curriculares científicas y técnicas.",
    description: [
      "El plan incluye talleres de deporte con alta carga horaria junto a unidades curriculares científicas y técnicas. En tercer año se profundiza en los deportes elegidos.",
    ],
    learn: {
      title: "¿Qué aprendemos?",
      items: [
        "Biología y anatomía humana",
        "Fisiología del ejercicio y biomecánica",
        "Psicología del deporte",
        "Primeros auxilios y gestión de proyectos",
      ],
    },
    outcomes: {
      title: "Salida laboral",
      items: [
        "Desempeñarse como auxiliar técnico, colaborando en la planificación de proyectos deportivos y campeonatos.",
        "Apoyo a profesores y tareas en clubes, plazas y organizaciones sociales.",
        "Arbitrar a nivel amateur en los deportes elegidos en tercer año.",
      ],
    },
    continuity: {
      title: "Continuidad educativa",
      items: [
        "Instituto Superior de Educación Física (ISEF)",
        "Carreras de fisioterapia, profesorados y facultades",
        "Tecnólogo en Deporte y Recreación (UTU - Udelar)",
        "Nutrición y Medicina",
        "Tecnicaturas de UTU: Deportes Náuticos, Recreación, Gestión Deportiva",
      ],
    },
    status: "documented",
    statusLabel: "En la Oferta Educativa 2027",
    source: "Presentación institucional Oferta Educativa 2027",
    icon: "activity",
    color: "#15803d",
    tagline: "Convertí tu pasión por el deporte en profesión.",
    highlights: ["Fisiología y biomecánica", "Primeros auxilios", "Arbitraje amateur"],
  },
  {
    slug: "administracion",
    title: "Administración",
    alias: "Gestión y Administración",
    level: "Bachillerato · BT o BTP",
    duration: "3 años",
    summary:
      "Un plan de estudio orientado a capacitar en la gestión y administración de empresas y organizaciones públicas y privadas.",
    description: [
      "Es un plan de estudio orientado a capacitar en la gestión y administración de empresas u organizaciones públicas y privadas.",
    ],
    learn: {
      title: "¿Qué se estudia?",
      items: [
        "Gestión administrativa: manejo, trámite y seguimiento de información.",
        "Áreas clave: contabilidad general, derecho comercial y administrativo, comercialización, economía y gestión empresarial.",
        "Herramientas prácticas: informática, matemática, estadística e inglés aplicados al negocio.",
      ],
    },
    outcomes: {
      title: "Competencias adquiridas",
      items: [
        "Comprender el funcionamiento empresarial.",
        "Dominar los mecanismos administrativos de una organización.",
        "Utilizar eficazmente los instrumentos contables.",
        "Aplicar adecuadamente las técnicas administrativas y la documentación utilizada.",
      ],
    },
    continuity: {
      title: "Carreras a las que habilita",
      items: [
        "Facultad de Ciencias Económicas y de Administración",
        "Facultad de Derecho",
        "Institutos de Formación Docente",
        "Tecnicaturas: Administración Pública, Administración de Personal, Administración de PYMES, Administración Hotelera",
        "Cursos técnicos de nivel terciario",
        "Ingreso al campo laboral",
      ],
    },
    status: "documented",
    statusLabel: "En la Oferta Educativa 2027",
    source: "Presentación institucional Oferta Educativa 2027",
    icon: "briefcase",
    color: "#7c3aed",
    tagline: "Entendé cómo funciona una empresa por dentro.",
    highlights: ["Contabilidad", "Economía y comercialización", "Informática aplicada"],
  },
  {
    slug: "tecnologias-de-la-informacion",
    title: "Tecnologías de la Información",
    level: "Bachillerato · BT o BTP",
    duration: "3 años",
    summary:
      "Desarrollo de sitios y aplicaciones web, infraestructura de redes, sistemas operativos y bases de datos.",
    description: [
      "Desarrollar los elementos necesarios de sitios y aplicaciones basadas en tecnologías web, con énfasis en el diseño y la programación de una interfaz de usuario interactiva, responsiva, fácil de usar y con accesibilidad universal.",
      "Analizar, diseñar e implementar infraestructura de redes. Instalar, configurar, administrar y automatizar tareas en sistemas operativos. Diseñar e implementar bases de datos en sistemas informáticos.",
    ],
    learn: {
      title: "Asignaturas del espacio curricular tecnológico",
      items: [
        "Sistemas operativos",
        "Diseño web",
        "Lógica",
        "Redes",
        "Programación",
        "Base de datos",
        "Electrónica",
        "Laboratorio de soporte",
        "Análisis y diseño",
      ],
    },
    continuity: {
      title: "Continuidad educativa",
      items: [
        "Tecnólogo en Informática, Ingeniería en Computación, Licenciatura en Computación (Udelar / UTEC / UTU)",
        "Informática, desarrollo de software, bases de datos, redes y sistemas (Udelar / UTEC / UTU)",
        "Ciberseguridad (Udelar / UTEC / UTU)",
        "Licenciatura en Ingeniería de Medios (Udelar)",
        "Formación docente y especializaciones vinculadas a tecnología (CFE)",
      ],
    },
    status: "documented",
    statusLabel: "En la Oferta Educativa 2027",
    source: "Presentación institucional Oferta Educativa 2027",
    icon: "laptop",
    color: "#0e7490",
    tagline: "Programá, creá webs y armá redes de verdad.",
    highlights: ["Programación", "Diseño web", "Redes y bases de datos"],
  },
  {
    slug: "sistemas-mecanicos",
    title: "Sistemas Mecánicos",
    alias: "Mecánica de sistemas industriales",
    level: "Bachillerato · BT o BTP",
    duration: "3 años",
    summary:
      "Diseño, fabricación, reparación y mantenimiento en talleres equipados. Es una de las propuestas históricas de la escuela.",
    description: [
      "La orientación se desarrolla en talleres equipados con máquinas herramienta y espacios de soldadura y dibujo técnico. Quien egresa obtiene doble titulación: la de bachillerato y la de la orientación cursada.",
    ],
    learn: {
      title: "¿Qué aprendemos?",
      items: ["Diseño", "Fabricación", "Reparación", "Mantenimiento"],
    },
    outcomes: {
      title: "Campo laboral",
      items: [
        "Ingreso en el sector de mantenimiento de una industria como oficial o medio oficial.",
        "Desarrollo de emprendimientos propios.",
      ],
    },
    continuity: {
      title: "Continuidad educativa",
      items: [
        "DGETP: Técnico electromecánico, Técnico en instalaciones eléctricas, Técnico en automatización agrónica, Técnico en autotrónica, Técnico prevencionista",
        "Udelar: Ingeniería Eléctrica, Ingeniería Industrial Mecánica, Tecnólogo Industrial Mecánico",
        "INET: formación docente",
      ],
    },
    status: "documented",
    statusLabel: "En la Oferta Educativa 2027",
    source: "Presentación institucional Oferta Educativa 2027",
    icon: "wrench",
    color: "#c2410c",
    tagline: "Diseñá, fabricá y repará con tus propias manos.",
    highlights: ["Máquinas herramienta", "Soldadura", "Dibujo técnico"],
  },
  {
    slug: "gastronomia",
    title: "Gastronomía",
    level: "Bachillerato · BT o BTP",
    duration: "3 años",
    summary:
      "Formación en el arte culinario, con talleres de cocina y sala, proyectos gastronómicos y servicio de eventos.",
    description: [
      "Ofrece una formación en el arte culinario. Está compuesto por unidades curriculares generales comunes a todas las orientaciones, que habilitan la navegabilidad entre orientaciones y subsistemas.",
      "Incluye fundamentos de cocina, técnicas de gestión gastronómica, nutrición, creatividad y arte en la cocina.",
    ],
    learn: {
      title: "¿Qué se hace en los talleres?",
      items: [
        "Dominio de competencias, destrezas y habilidades en talleres de cocina y sala.",
        "Proyectos gastronómicos, montajes de servicios y puesta a punto de bar, cafetería y restaurante.",
        "Preparación de infusiones y bebidas con y sin alcohol.",
        "Organización y control del servicio de mesas y eventos.",
        "Elaboración de menús, con postres básicos y de restaurante.",
      ],
    },
    outcomes: {
      title: "Certificaciones",
      items: ["Operario calificado al finalizar segundo año.", "Técnico de nivel medio al finalizar tercer año."],
    },
    continuity: {
      title: "Continuidad educativa",
      items: [
        "Carreras de nivel terciario o superior",
        "Tecnicaturas dentro de DGETP",
        "Instituto de Formación Docente",
        "Ingreso al campo laboral según la certificación profesional adquirida",
      ],
    },
    status: "documented",
    statusLabel: "En la Oferta Educativa 2027",
    source: "Presentación institucional Oferta Educativa 2027",
    icon: "chef",
    color: "#dc2626",
    tagline: "Cociná, creá y aprendé a dar un servicio de primera.",
    highlights: ["Cocina y sala", "Bar y cafetería", "Operario calificado en 2.º"],
  },
  {
    slug: "estetica-personal",
    title: "Estética Personal",
    level: "Bachillerato · BT o BTP",
    duration: "3 años",
    summary:
      "Estética de salón, estética corporal, taller capilar y estilismo, con espacios de profundización creativa.",
    description: [
      "Como todo bachillerato, dura tres años. El curso aborda la estética de salón y, dentro de ese espacio, la cosmética capilar, la imagen facial y la estética de manos.",
    ],
    learn: {
      title: "El curso aborda",
      items: [
        "Estética de salón: cosmética capilar, imagen facial y estética de manos.",
        "Estética corporal.",
        "Taller capilar.",
        "Estilismo artístico y técnicas de estilismo.",
      ],
    },
    extra: {
      title: "Espacios de profundización",
      items: ["Diseño y arte en uñas", "Coloración creativa", "Diseño y tendencia en bleach hair"],
    },
    continuity: {
      title: "Continuidad educativa",
      items: ["Pendiente de confirmación institucional: la presentación 2027 no detalla las trayectorias posteriores para esta orientación."],
    },
    status: "documented",
    statusLabel: "En la Oferta Educativa 2027",
    source: "Presentación institucional Oferta Educativa 2027",
    icon: "scissors",
    color: "#db2777",
    tagline: "Estilo, color y tendencia: tu creatividad hecha oficio.",
    highlights: ["Coloración creativa", "Arte en uñas", "Estilismo artístico"],
  },
];

export const bachilleratos = courses.filter((course) => course.level.startsWith("Bachillerato"));

export function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}
