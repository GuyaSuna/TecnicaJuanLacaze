# Escuela Técnica de Juan Lacaze · UTU

Sitio institucional de la Escuela Técnica de Juan Lacaze (DGETP - UTU), hecho con
[Next.js](https://nextjs.org/) y exportado como sitio estático para
[GitHub Pages](https://pages.github.com/).

Sitio publicado: https://guyasuna.github.io/TecnicaJuanLacaze/

## Requisitos

- Node.js 20.9 o superior (recomendado: 22 LTS)

## Uso local

```bash
npm install
npm run dev      # http://localhost:3000
npm test         # compila el sitio en out/ y verifica las páginas
npm run lint
```

## Publicación en GitHub Pages

El workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) compila,
verifica y publica el sitio en cada push a `main` (también se puede lanzar a mano
desde la pestaña **Actions**).

Configuración inicial (una sola vez):

1. En GitHub, ir a **Settings → Pages**.
2. En **Build and deployment → Source**, elegir **GitHub Actions**.
3. Hacer push a `main` y esperar a que termine el workflow.

El prefijo de las rutas (`/TecnicaJuanLacaze`) lo calcula el workflow
automáticamente. Si más adelante se configura un dominio propio en
**Settings → Pages → Custom domain**, el prefijo desaparece solo y no hay que
cambiar código.

## Contenido

Los textos, cursos, novedades y datos de contacto se editan en `app/content/`.
Ver [CONTENT_GUIDE.md](CONTENT_GUIDE.md) para el detalle de cada archivo y la
lista de datos pendientes de confirmación institucional.
