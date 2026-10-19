/**
 * Test "¿Qué orientación va con vos?" de la portada.
 *
 * Cada respuesta suma un punto a la orientación indicada en `course`
 * (debe coincidir con un `slug` de `courses.ts`). Gana la que suma más.
 * Para agregar una pregunta, sumá un objeto con una opción por orientación.
 */

export type QuizOption = { label: string; course: string };
export type QuizQuestion = { question: string; options: QuizOption[] };

export const quiz: QuizQuestion[] = [
  {
    question: "Tenés un sábado libre. ¿Qué te tienta más?",
    options: [
      { label: "Desarmar algo para ver cómo funciona", course: "sistemas-mecanicos" },
      { label: "Jugar un partido o entrenar", course: "educacion-fisica-y-deporte" },
      { label: "Cocinar algo rico para tu gente", course: "gastronomia" },
      { label: "Crear algo en la compu o jugar online", course: "tecnologias-de-la-informacion" },
      { label: "Organizar una venta o un evento", course: "administracion" },
      { label: "Hacer un cambio de look", course: "estetica-personal" },
    ],
  },
  {
    question: "¿Qué es lo que más te engancha?",
    options: [
      { label: "Resolver problemas con lógica", course: "tecnologias-de-la-informacion" },
      { label: "El arte, el color y las tendencias", course: "estetica-personal" },
      { label: "Los números y tener todo en orden", course: "administracion" },
      { label: "Moverme, competir y superarme", course: "educacion-fisica-y-deporte" },
      { label: "Crear sabores y presentaciones", course: "gastronomia" },
      { label: "Entender cómo funcionan las máquinas", course: "sistemas-mecanicos" },
    ],
  },
  {
    question: "Te imaginás trabajando en…",
    options: [
      { label: "Un restaurante, un bar o eventos", course: "gastronomia" },
      { label: "Una industria o tu propio taller", course: "sistemas-mecanicos" },
      { label: "Una oficina, un banco o tu propia empresa", course: "administracion" },
      { label: "Un salón de estética o con tu propia marca", course: "estetica-personal" },
      { label: "Desarrollando apps, webs o redes", course: "tecnologias-de-la-informacion" },
      { label: "Un club, una plaza o como árbitro", course: "educacion-fisica-y-deporte" },
    ],
  },
];
