import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { headers } from "next/headers";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const incoming = await headers();
  const host = incoming.get("x-forwarded-host") ?? incoming.get("host") ?? "localhost:3000";
  const protocol = incoming.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "Escuela Técnica de Juan Lacaze | UTU";
  const description =
    "Sitio institucional de la Escuela Técnica de Juan Lacaze (DGETP - UTU): cursos y bachilleratos, información para estudiantes, novedades, inscripciones y contacto.";
  return {
    title,
    description,
    icons: { icon: [{ url: "/favicon.ico", sizes: "48x48" }, { url: "/favicon.png", type: "image/png", sizes: "64x64" }], apple: "/apple-touch-icon.png" },
    openGraph: { title, description, images: [`${origin}/og.png`], locale: "es_UY", type: "website", siteName: "Escuela Técnica de Juan Lacaze" },
    twitter: { card: "summary_large_image", title, description, images: [`${origin}/og.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={geist.variable}>
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
