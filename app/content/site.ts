/**
 * Datos generales del sitio.
 *
 * Convención: todo dato que la institución aún no confirmó se marca con
 * `pending: true` o con el texto "Pendiente de confirmación" para que sea
 * fácil de localizar y reemplazar.
 */

export const siteName = "Escuela Técnica de Juan Lacaze";
export const siteShortName = "Escuela Técnica Juan Lacaze";
export const organization = "Dirección General de Educación Técnico Profesional (DGETP - UTU) · ANEP";

/** Prefijo de publicación en GitHub Pages (ver `next.config.ts`). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** URL pública del sitio, usada en metadatos, sitemap y vistas previas sociales. */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://guyasuna.github.io/TecnicaJuanLacaze";

/** Ruta a un archivo de `public/` con el prefijo de publicación. Ej.: asset("/images/escudo.png"). */
export function asset(path: string) {
  return `${basePath}${path}`;
}

/** Fecha de la última revisión editorial del contenido (AAAA-MM-DD). */
export const lastReview = "2026-09-13";

export const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/institucion", label: "Institución" },
  { href: "/cursos", label: "Cursos" },
  { href: "/estudiantes", label: "Estudiantes" },
  { href: "/novedades", label: "Novedades" },
  { href: "/inscripciones", label: "Inscripciones" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const officialLinks = {
  schoolDirectory: "https://www.utu.edu.uy/escuela-tecnica-de-juan-lacaze/",
  study: "https://www.utu.edu.uy/estudia/",
  students: "https://www.utu.edu.uy/estudiantes/",
  scholarships: "https://pasantias.utu.edu.uy/",
  news: "https://www.utu.edu.uy/noticias/",
  innovation:
    "https://www.utu.edu.uy/juan-lacaze-puso-en-marcha-el-undecimo-nodo-de-innovacion-de-utu-para-toda-la-comunidad/",
  inclusion: "https://www.utu.edu.uy/utu-juan-lacaze-organizo-un-taller-sobre-autismo-educacion-e-inclusion/",
  fashion:
    "https://www.utu.edu.uy/prendas-recicladas-y-diseno-creativo-utu-juan-lacaze-protagonizo-un-desfile-con-enfoque-ambiental/",
  graduates:
    "https://www.utu.edu.uy/colonia-celebro-a-sus-egresados-en-una-nueva-ceremonia-de-egrese-formarse-en-utu-cuenta/",
  offerReference:
    "https://www.utu.edu.uy/wp-content/themes/balpadraUTU/src/documents/encuentros/30-31oct-litoralsur/Escuela%20T%C3%A9cnica%20Juan%20Lacaze.pdf",
  history:
    "https://www.utu.edu.uy/sites/www.utu.edu.uy/files/2022-10/Cat%C3%A1logo%20Escuelas%20y%20Formaciones%20V4.pdf",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Escuela%20T%C3%A9cnica%20Juan%20Lacaze%2C%20Jos%C3%A9%20Salvo%20y%20Don%20Bosco",
};

export const contact = {
  /** Verificado en la ficha oficial del centro en utu.edu.uy. */
  address: "José Salvo s/n.º esq. Don Bosco",
  city: "Juan Lacaze, Colonia, Uruguay",
  phones: [
    { label: "Teléfono", number: "4586 2174" },
    { label: "Telefax", number: "4586 2129" },
  ],
  email: "tecnicajuanlacaze@gmail.com",
  /** Redes publicadas en la presentación institucional "Oferta Educativa 2026". */
  social: [
    { network: "Instagram", handle: "utujuanlacaze", url: "https://www.instagram.com/utujuanlacaze/" },
    { network: "Facebook", handle: "escuelatecnicajuanlacaze", url: "https://www.facebook.com/escuelatecnicajuanlacaze" },
  ],
  /** Pendiente: la institución debe indicar los horarios reales de Secretaría. */
  officeHours: {
    pending: true,
    text: "Horario de atención de Secretaría pendiente de confirmación institucional.",
  },
};

export function phoneHref(number: string) {
  return `tel:+598${number.replaceAll(" ", "")}`;
}

/**
 * Equipo de gestión publicado en la presentación institucional
 * "Oferta Educativa 2026" (Encuentros que cuentan, DGETP-UTU).
 * Debe confirmarse su vigencia antes de cada año lectivo.
 */
export const managementTeam = {
  pending: true,
  source: "presentación institucional Oferta Educativa 2026",
  members: [
    { role: "Dirección", name: "María Ana Villagrán" },
    { role: "Subdirección", name: "Mariana Medina" },
    { role: "Secretaría", name: "Diego Caratozzolo" },
  ],
};

/**
 * Indicadores publicados en la presentación institucional "Oferta Educativa 2026".
 */
export const institutionalFigures = {
  source: "presentación institucional Oferta Educativa 2026",
  students: { value: "372", label: "estudiantes", note: "Matrícula informada en 2026" },
  approval: [
    { level: "Educación Básica Integrada", value: "81 %" },
    { level: "Bachillerato Tecnológico", value: "83 %" },
    { level: "Bachillerato Técnico Profesional", value: "78 %" },
  ],
  approvalYear: "2024",
};

export const communityPartners = [
  "Municipio de Juan Lacaze",
  "Centro Cultural Don Bosco",
  "Nodo de Innovación de UTU",
  "Plaza de Deportes",
];
