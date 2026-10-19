# Guía de contenido y mantenimiento

Sitio institucional de la Escuela Técnica de Juan Lacaze (DGETP - UTU). Está construido con Next.js (App Router, exportación estática), React 19 y una hoja de estilos propia en `app/globals.css`. Se publica en GitHub Pages (ver README.md).

## Arquitectura

| Ruta | Archivo | Contenido |
| --- | --- | --- |
| `/` | `app/page.tsx` | Inicio: presentación, accesos rápidos, resumen de cursos, institución, novedades y contacto. |
| `/institucion` | `app/institucion/page.tsx` | Historia, propuesta educativa, indicadores, equipo de gestión, comunidad. |
| `/cursos` | `app/cursos/page.tsx` | Oferta educativa 2027: bachilleratos y Educación Básica Integrada. |
| `/cursos/[slug]` | `app/cursos/[slug]/page.tsx` | Ficha de cada curso, generada a partir de `app/content/courses.ts`. |
| `/estudiantes` | `app/estudiantes/page.tsx` | Accesos útiles, horarios (pendientes), preguntas frecuentes. |
| `/novedades` | `app/novedades/page.tsx` | Noticias con enlace a la fuente oficial. |
| `/inscripciones` | `app/inscripciones/page.tsx` | Pasos, documentación orientativa y período (pendiente). |
| `/contacto` | `app/contacto/page.tsx` | Dirección, teléfonos, correo, redes, mapa. |

Componentes compartidos en `app/components/`: encabezado con menú móvil (`SiteHeader`), pie (`SiteFooter`), encabezado de página (`PageHeader`), títulos de sección (`SectionHeading`), tarjetas de curso (`CourseCard`), tarjetas de enlace (`LinkCard`), noticias (`NewsCard`), acordeón de preguntas (`Faq`), marcas de contenido provisional (`Pending`) y `Link` (reexporta `next/link`).

## Rutas, imágenes y GitHub Pages

El sitio se publica bajo un prefijo (`/TecnicaJuanLacaze`). Para que todo funcione con y sin prefijo:

- Enlaces internos: usar siempre el componente `Link` con rutas desde la raíz (`href="/cursos"`). Agrega el prefijo solo.
- Imágenes de `public/`: envolver la ruta con `asset()` de `app/content/site.ts` (`src={asset("/images/escudo.png")}`). En `news.ts` alcanza con escribir `/images/...`; `NewsCard` ya aplica `asset()`.
- Íconos y vista previa social: `app/favicon.ico`, `app/icon.png`, `app/apple-icon.png` y `app/opengraph-image.png`. Para cambiarlos, reemplazar esos archivos manteniendo el nombre.
- No se pueden usar funciones de servidor (`headers()`, `cookies()`, rutas `api/`, redirecciones del servidor): el sitio es 100 % estático.

## Dónde actualizar la información

- `app/content/site.ts`: navegación, enlaces oficiales, contacto, redes, equipo de gestión, indicadores y fecha de última revisión (`lastReview`).
- `app/content/courses.ts`: cursos. Cada curso tiene descripción, qué se aprende, salidas, continuidad, `status` y `source`.
- `app/content/news.ts`: novedades. Agregá nuevas entradas al comienzo del arreglo, con fecha `AAAA-MM-DD`.
- `app/content/faq.ts`: preguntas frecuentes.
- `public/images/`: fotografías y escudo (`escudo.png`).

## Convención para contenido provisional

Todo dato que la escuela aún no confirmó se marca de forma visible con la etiqueta "Pendiente de confirmación" (componentes `PendingBadge` y `PendingNote`) o con `pending: true` en los datos. Para encontrarlos rápidamente:

```
grep -rn "Pendiente\|pending" app/content app/*/page.tsx
```

## Fuentes utilizadas

- Dirección, teléfonos y correo: ficha oficial del centro en utu.edu.uy.
- Oferta de bachilleratos 2027, contenidos, salidas y continuidad: presentación institucional "Oferta Educativa 2027" de la escuela.
- Equipo de gestión, redes, matrícula (372) e indicadores de aprobación 2024: presentación institucional "Oferta Educativa 2026" (Encuentros que cuentan, DGETP-UTU). Se muestran con marca de vigencia pendiente.
- Educación Básica Integrada: cartelera institucional 2026. Su apertura 2027 queda marcada como pendiente.
- Historia (1967 anexo, 1979 escuela independiente): catálogo oficial de escuelas y formaciones de UTU.

## Pendientes de confirmación institucional

1. Período, lugar, días y horario de inscripciones 2027.
2. Horarios de turnos y de atención de Secretaría.
3. Documentación definitiva para inscribirse.
4. Vigencia del equipo de gestión para 2027.
5. Apertura 2027 de Educación Básica Integrada y confirmación de grupos, turnos y cupos de cada bachillerato.
6. Continuidad educativa de Estética Personal (la presentación 2027 no la detalla).
7. Actualización de matrícula e indicadores con datos 2027.

## Verificación

```
npm run lint
npm test
```

`npm test` compila el sitio en `out/` y comprueba que cada página se exporte, que la navegación esté completa, que las imágenes usen el prefijo de publicación, que los cursos 2027 aparezcan y que el contenido provisional esté marcado. Para probar con el prefijo de GitHub Pages en PowerShell: `$env:NEXT_PUBLIC_BASE_PATH="/TecnicaJuanLacaze"; npm test`.
