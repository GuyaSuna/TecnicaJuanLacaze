import { officialLinks } from "./site";

/**
 * Noticias y novedades.
 *
 * Cada entrada enlaza a su fuente oficial. Para agregar una novedad propia de
 * la escuela, sumá un objeto al comienzo del arreglo. Las fechas se escriben
 * en formato AAAA-MM-DD.
 */

export type NewsItem = {
  slug: string;
  date: string;
  category: string;
  title: string;
  summary: string;
  href: string;
  external: boolean;
  image?: { src: string; alt: string; width: number; height: number };
};

export const news: NewsItem[] = [
  {
    slug: "oferta-educativa-2027",
    date: "2026-09-13",
    category: "Cursos",
    title: "La escuela presentó su Oferta Educativa 2027",
    summary:
      "Seis orientaciones de bachillerato: Educación Física y Deporte, Administración, Tecnologías de la Información, Sistemas Mecánicos, Gastronomía y Estética Personal.",
    href: "/cursos",
    external: false,
  },
  {
    slug: "egresados-colonia-2026",
    date: "2026-09-01",
    category: "Egresos",
    title: "Colonia celebró a más de 170 egresados de sus centros educativos",
    summary:
      "La Escuela Técnica de Juan Lacaze fue parte de una jornada del Campus Regional Litoral Sur que reunió a estudiantes, familias y equipos educativos.",
    href: officialLinks.graduates,
    external: true,
  },
  {
    slug: "nodo-innovacion",
    date: "2025-11-19",
    category: "Innovación",
    title: "Juan Lacaze puso en marcha un Nodo de Innovación abierto a la comunidad",
    summary: "El undécimo Nodo de Innovación de UTU funciona en la ciudad y está disponible para toda la comunidad.",
    href: officialLinks.innovation,
    external: true,
    image: {
      src: "/images/nodo-innovacion.jpg",
      alt: "Equipamiento del Nodo de Innovación de Juan Lacaze",
      width: 1024,
      height: 684,
    },
  },
  {
    slug: "taller-inclusion",
    date: "2025-06-23",
    category: "Inclusión",
    title: "Un taller sobre autismo, educación e inclusión",
    summary: "La escuela organizó una jornada abierta para construir una educación más accesible junto a la comunidad.",
    href: officialLinks.inclusion,
    external: true,
    image: {
      src: "/images/inclusion.jpg",
      alt: "Participantes del taller sobre autismo, educación e inclusión",
      width: 2560,
      height: 1438,
    },
  },
  {
    slug: "desfile-ambiental",
    date: "2025-06-01",
    category: "Proyectos",
    title: "Prendas recicladas y diseño creativo en un desfile con enfoque ambiental",
    summary: "Estudiantes de la escuela protagonizaron un desfile con prendas recicladas y una mirada responsable sobre el consumo.",
    href: officialLinks.fashion,
    external: true,
  },
];

const months = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "set", "oct", "nov", "dic"];

export function formatDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return `${day} de ${months[month - 1]}. de ${year}`;
}
