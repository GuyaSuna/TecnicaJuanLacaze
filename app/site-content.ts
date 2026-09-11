export const officialLinks = {
  schoolDirectory: "https://www.utu.edu.uy/escuela-tecnica-de-juan-lacaze/",
  study: "https://www.utu.edu.uy/estudia/",
  students: "https://www.utu.edu.uy/estudiantes/",
  scholarships: "https://pasantias.utu.edu.uy/",
  news: "https://www.utu.edu.uy/noticias/",
  innovation: "https://www.utu.edu.uy/juan-lacaze-puso-en-marcha-el-undecimo-nodo-de-innovacion-de-utu-para-toda-la-comunidad/",
  inclusion: "https://www.utu.edu.uy/utu-juan-lacaze-organizo-un-taller-sobre-autismo-educacion-e-inclusion/",
  fashion: "https://www.utu.edu.uy/prendas-recicladas-y-diseno-creativo-utu-juan-lacaze-protagonizo-un-desfile-con-enfoque-ambiental/",
  graduates: "https://www.utu.edu.uy/colonia-celebro-a-sus-egresados-en-una-nueva-ceremonia-de-egrese-formarse-en-utu-cuenta/",
  offerReference: "https://www.utu.edu.uy/wp-content/themes/balpadraUTU/src/documents/encuentros/30-31oct-litoralsur/Escuela%20T%C3%A9cnica%20Juan%20Lacaze.pdf",
  history: "https://www.utu.edu.uy/sites/www.utu.edu.uy/files/2022-10/Cat%C3%A1logo%20Escuelas%20y%20Formaciones%20V4.pdf",
  maps: "https://www.google.com/maps/search/?api=1&query=Escuela%20T%C3%A9cnica%20Juan%20Lacaze%2C%20Jos%C3%A9%20Salvo%20y%20Don%20Bosco",
};

export type Proposal = {
  title: string;
  level: string;
  description: string;
  status: "confirmed" | "verify";
  statusLabel: string;
  source: string;
  icon: "book" | "settings" | "computer" | "shirt" | "chef";
};

export const proposals: Proposal[] = [
  {
    title: "Educación Básica Integrada",
    level: "Educación media básica",
    description: "Un trayecto que integra formación general, tecnología, experiencias prácticas y acompañamiento de las trayectorias educativas.",
    status: "confirmed",
    statusLabel: "Actividad documentada en 2026",
    source: "Cartelera institucional · setiembre 2026",
    icon: "book",
  },
  {
    title: "Sistemas Mecánicos",
    level: "Bachillerato Técnico",
    description: "Formación vinculada con sistemas, procesos y resolución de problemas en espacios de aula y taller.",
    status: "confirmed",
    statusLabel: "Propuesta documentada en 2026",
    source: "Registros oficiales de UTU · 2026",
    icon: "settings",
  },
  {
    title: "Tecnologías de la Información",
    level: "Bachillerato Técnico",
    description: "Una trayectoria para desarrollar pensamiento computacional y capacidades en tecnologías digitales.",
    status: "confirmed",
    statusLabel: "Propuesta documentada en 2026",
    source: "Registros oficiales de UTU · 2026",
    icon: "computer",
  },
  {
    title: "Indumentaria y Estilismo",
    level: "Bachillerato",
    description: "Formación creativa que articula diseño, confección, expresión y proyectos con mirada responsable.",
    status: "verify",
    statusLabel: "Apertura 2026 a confirmar",
    source: "Actividad institucional documentada en 2025",
    icon: "shirt",
  },
  {
    title: "Gastronomía",
    level: "Bachillerato",
    description: "Aprendizajes de cocina, organización, servicio y trabajo colaborativo mediante proyectos integrados.",
    status: "verify",
    statusLabel: "Apertura 2026 a confirmar",
    source: "Actividad institucional documentada en 2025",
    icon: "chef",
  },
];

export const contact = {
  address: "José Salvo s/n.º esq. Don Bosco",
  city: "Juan Lacaze, Colonia",
  phones: ["4586 2174", "4586 2129"],
  email: "tecnicajuanlacaze@gmail.com",
};
