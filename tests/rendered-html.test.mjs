import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

// Verifica el sitio estático generado por `next build` en out/.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const outDir = new URL("../out/", import.meta.url);

function file(pathname) {
  const relative = pathname === "/" ? "index.html" : `${pathname.replace(/^\//, "")}/index.html`;
  return new URL(relative, outDir);
}

function html(pathname) {
  const target = file(pathname);
  assert.ok(existsSync(target), `${pathname} should be exported`);
  return readFileSync(target, "utf8");
}

const href = (path) => `href="${basePath}${path === "/" ? "/" : `${path}/`}"`;

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
  test(`renders ${route.path} with its title, layout and content`, () => {
    const page = html(route.path);
    assert.match(page, /<html[^>]+lang="es"/i);
    assert.match(page, new RegExp(`<title>${route.title.replaceAll("|", "\\|")}</title>`));
    assert.match(page, route.text);
    assert.match(page, /aria-label="Navegación principal"/);
    assert.match(page, /href="#contenido">Saltar al contenido/);
    assert.match(page, /id="contenido"/);
    assert.match(page, /tecnicajuanlacaze@gmail\.com/);
  });
}

test("keeps every primary navigation link pointing at an exported route", () => {
  const home = html("/");
  for (const route of routes) {
    assert.ok(home.includes(href(route.path)), `missing navigation link to ${route.path}`);
  }
});

test("prefixes images and icons with the publishing base path", () => {
  const home = html("/");
  assert.ok(home.includes(`src="${basePath}/images/escudo.png"`), "logo should use the base path");
  assert.ok(home.includes(`src="${basePath}/images/escuela.jpg"`), "hero image should use the base path");
  assert.ok(home.includes(`<link rel="icon" href="${basePath}/icon.png`), "favicon should use the base path");
  const ogImage = home.match(/<meta property="og:image" content="([^"]+)"/)?.[1] ?? "";
  assert.match(ogImage, new RegExp(`^https?://[^/]+${basePath}/opengraph-image\\.png`), "social image should be an absolute URL with a single base path");
  for (const image of ["escudo.png", "escuela.jpg", "inclusion.jpg", "nodo-innovacion.jpg"]) {
    assert.ok(existsSync(new URL(`images/${image}`, outDir)), `missing public image ${image}`);
  }
});

test("lists the 2027 bachilleratos and links to each course page", () => {
  const page = html("/cursos");
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
  assert.ok(page.includes(href("/cursos/tecnologias-de-la-informacion")));
  assert.match(page, /Pendiente de confirmación/);
});

test("renders a course detail page from the 2027 offer", () => {
  const page = html("/cursos/gastronomia");
  assert.match(page, /<title>Gastronomía \| Cursos \| Escuela Técnica de Juan Lacaze<\/title>/);
  assert.match(page, /Operario calificado al finalizar segundo año/);
  assert.match(page, /Presentación institucional Oferta Educativa 2027/);
  assert.ok(page.includes(href("/cursos/sistemas-mecanicos")));
  assert.ok(page.includes(href("/cursos/estetica-personal")));
});

test("marks provisional information as pending instead of inventing it", () => {
  assert.match(html("/estudiantes"), /Horario pendiente de confirmación/);
  assert.match(html("/inscripciones"), /Fecha pendiente de confirmación institucional/);
  const contact = html("/contacto");
  assert.match(contact, /pendiente de confirmación institucional/);
  assert.match(contact, /4586 2174/);
});

test("exports a 404 page, sitemap and robots.txt for GitHub Pages", () => {
  const notFound = readFileSync(new URL("404.html", outDir), "utf8");
  assert.match(notFound, /No encontramos esa página/);
  const sitemap = readFileSync(new URL("sitemap.xml", outDir), "utf8");
  assert.match(sitemap, /\/cursos\/gastronomia\/<\/loc>/);
  assert.ok(existsSync(new URL("robots.txt", outDir)));
  assert.ok(existsSync(new URL(".nojekyll", outDir)));
});
