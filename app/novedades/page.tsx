import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { NewsCard } from "../components/NewsCard";
import { PageHeader } from "../components/PageHeader";
import { PendingNote } from "../components/Pending";
import { news } from "../content/news";
import { contact, officialLinks } from "../content/site";

export const metadata: Metadata = {
  title: "Noticias y novedades | Escuela Técnica de Juan Lacaze",
  description: "Comunicados, actividades y noticias de la Escuela Técnica de Juan Lacaze y del Campus Regional Litoral Sur de UTU.",
};

export default function NovedadesPage() {
  const [featured, ...rest] = news;

  return (
    <>
      <PageHeader
        crumbs={[{ href: "/novedades", label: "Novedades" }]}
        eyebrow="Noticias y novedades"
        title="Una comunidad en movimiento"
        lead="Actividades, proyectos y comunicados de la escuela. Las noticias enlazadas a utu.edu.uy se abren en el sitio oficial."
      />

      <section className="section">
        <div className="container">
          <NewsCard item={featured} featured />
          <div className="news-grid">
            {rest.map((item) => (
              <NewsCard item={item} key={item.slug} />
            ))}
          </div>
          <p className="source-line">
            <a href={officialLinks.news} target="_blank" rel="noreferrer">
              Ver todas las noticias de UTU <ExternalLink aria-hidden="true" />
            </a>
          </p>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <PendingNote title="Comunicados institucionales">
            <p>
              Esta sección se completa con los comunicados propios de la escuela (períodos de inscripción, reuniones de familias, actividades).
              Hasta entonces, los avisos se difunden por los canales habituales y en las redes institucionales:{" "}
              {contact.social.map((item, index) => (
                <span key={item.network}>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {item.network}
                  </a>
                  {index < contact.social.length - 1 ? " y " : "."}
                </span>
              ))}
            </p>
          </PendingNote>
        </div>
      </section>
    </>
  );
}
