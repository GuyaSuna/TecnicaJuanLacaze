import type { Metadata } from "next";
import { headers } from "next/headers";
import FuturoLanding from "./FuturoLanding";
import "./futuro.css";

export async function generateMetadata(): Promise<Metadata> {
  const incoming = await headers();
  const host = incoming.get("x-forwarded-host") ?? incoming.get("host") ?? "localhost:3000";
  const protocol = incoming.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "Activá tu futuro | UTU Juan Lacaze";
  const description = "Descubrí cursos, talleres y experiencias para aprender haciendo en la Escuela Técnica de Juan Lacaze.";
  const image = `${origin}/images/escuela.jpg`;
  return {
    title, description,
    openGraph: { title, description, images: [image], locale: "es_UY", type: "website" },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default function FuturoPage() {
  return <FuturoLanding />;
}
