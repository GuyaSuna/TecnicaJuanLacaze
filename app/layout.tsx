import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { siteName, siteUrl } from "./content/site";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const display = Bricolage_Grotesque({ variable: "--font-display", subsets: ["latin"] });

const title = "Escuela Técnica de Juan Lacaze | UTU";
const description =
  "Sitio institucional de la Escuela Técnica de Juan Lacaze (DGETP - UTU): cursos y bachilleratos, información para estudiantes, novedades, inscripciones y contacto.";

// Los íconos y la imagen social se toman de app/favicon.ico, app/icon.png,
// app/apple-icon.png y app/opengraph-image.png (convención de archivos de Next.js).
export const metadata: Metadata = {
  // Solo el origen: Next.js ya agrega el basePath a las rutas de los metadatos.
  metadataBase: new URL(new URL(siteUrl).origin),
  title,
  description,
  openGraph: { title, description, locale: "es_UY", type: "website", siteName },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${geist.variable} ${display.variable}`}>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <SiteHeader />
        <main id="contenido" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
