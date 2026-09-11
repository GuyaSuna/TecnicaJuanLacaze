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

test("renders the institutional homepage with its core information", async () => {
  const response = await request();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]+lang="es"/i);
  assert.match(html, /<title>Escuela Técnica de Juan Lacaze \| UTU<\/title>/i);
  assert.match(html, /Formación que acompaña/);
  assert.match(html, /Educación Básica Integrada/);
  assert.match(html, /Tecnologías de la Información/);
  assert.match(html, /Apertura 2026 a confirmar/);
  assert.match(html, /José Salvo s\/n\.º esq\. Don Bosco/);
  assert.match(html, /tecnicajuanlacaze@gmail\.com/);
  assert.doesNotMatch(html, /Aprendé haciendo\./);
});

test("keeps every primary navigation anchor connected to a section", async () => {
  const response = await request();
  const html = await response.text();
  const expectedSections = ["inicio", "institucion", "propuestas", "estudiantes", "novedades", "inscripciones", "contacto"];

  for (const id of expectedSections) {
    assert.match(html, new RegExp(`id="${id}"`), `missing section #${id}`);
    assert.match(html, new RegExp(`href="#${id}"`), `missing link to #${id}`);
  }

  assert.match(html, /aria-label="Navegación principal"/);
  assert.match(html, /href="#contenido">Saltar al contenido/);
});

test("redirects the retired youth landing page to the institutional homepage", async () => {
  const response = await request("/futuro");
  assert.ok([301, 302, 307, 308].includes(response.status));
  assert.equal(response.headers.get("location"), "/");
});
