import assert from "node:assert/strict";
import test from "node:test";

async function request(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
      redirect: "manual",
    }),
    {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

async function html(pathname) {
  const response = await request(pathname);
  assert.equal(response.status, 200, `${pathname} should render`);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  return response.text();
}

const routes = [
  { path: "/", title: "Escuela Técnica de Juan Lacaze | UTU", text: /Un lugar para aprender, crecer y construir tu camino/ },
  { path: "/institucion", title: "Sobre la institución | Escuela Técnica de Juan Lacaze", text: /4 de marzo de 1979/ },
  { path: "/cursos", title: "Cursos y propuestas educativas 2027 | Escuela Técnica de Juan Lacaze", text: /Oferta educativa 2027/ },
  { path: "/estudiantes", title: "Información para estudiantes | Escuela Técnica de Juan Lacaze", text: /Preguntas frecuentes/ },
  { path: "/novedades", title: "Noticias y novedades | Escuela Técnica de Juan Lacaze", text: /Oferta Educativa 2027/ },
  { path: "/inscripciones", title: "Inscripciones | Escuela Técnica de Juan Lacaze", text: /Cómo inscribirse/ },
  { path: "/contacto", title: "Contacto y ubicación | Escuela Técnica de Juan Lacaze", text: /José Salvo s\/n\.º esq\. Don Bosco/ },
];

for (const route of routes) {
  test(`renders ${route.path} with its title, layout and content`, async () => {
    const page = await html(route.path);
    assert.match(page, /<html[^>]+lang="es"/i);
    assert.match(page, new RegExp(`<title>${route.title.replaceAll("|", "\\|")}</title>`));
    assert.match(page, route.text);
    assert.match(page, /aria-label="Navegación principal"/);
    assert.match(page, /href="#contenido">Saltar al contenido/);
    assert.match(page, /id="contenido"/);
    assert.match(page, /tecnicajuanlacaze@gmail\.com/);
    assert.doesNotMatch(page, /Aprend[eé] haciendo/i);
  });
}

test("keeps every primary navigation link pointing at a rendered route", async () => {
  const home = await html("/");
  for (const route of routes) {
    assert.match(home, new RegExp(`href="${route.path}"`), `missing navigation link to ${route.path}`);
  }
});

test("lists the 2027 bachilleratos and links to each course page", async () => {
  const page = await html("/cursos");
  const titles = [
    "Educación Física y Deporte",
    "Administración",
    "Tecnologías de la Información",
    "Sistemas Mecánicos",
    "Gastronomía",
    "Estética Personal",
    "Educación Básica Integrada",
  ];
  for (const title of titles) assert.match(page, new RegExp(title), `missing course ${title}`);
  assert.match(page, /href="\/cursos\/tecnologias-de-la-informacion"/);
  assert.match(page, /Pendiente de confirmación/);
});

test("renders a course detail page from the 2027 offer", async () => {
  const page = await html("/cursos/gastronomia");
  assert.match(page, /<title>Gastronomía \| Cursos \| Escuela Técnica de Juan Lacaze<\/title>/);
  assert.match(page, /Operario calificado al finalizar segundo año/);
  assert.match(page, /Presentación institucional Oferta Educativa 2027/);
  assert.match(page, /href="\/cursos\/sistemas-mecanicos"/);
  assert.match(page, /href="\/cursos\/estetica-personal"/);
});

test("marks provisional information as pending instead of inventing it", async () => {
  const students = await html("/estudiantes");
  assert.match(students, /Horario pendiente de confirmación/);
  const enrollment = await html("/inscripciones");
  assert.match(enrollment, /Fecha pendiente de confirmación institucional/);
  const contact = await html("/contacto");
  assert.match(contact, /pendiente de confirmación institucional/);
  assert.match(contact, /4586 2174/);
});

test("returns 404 for an unknown course", async () => {
  const response = await request("/cursos/no-existe");
  assert.equal(response.status, 404);
  const page = await response.text();
  assert.match(page, /No encontramos esa página/);
});

test("redirects the retired youth landing page to the institutional homepage", async () => {
  const response = await request("/futuro");
  assert.ok([301, 302, 307, 308].includes(response.status));
  assert.equal(response.headers.get("location"), "/");
});
