import { ArrowRight, Phone } from "lucide-react";
import Link from "./Link";
import { contact, phoneHref } from "../content/site";

/** Llamada a la acción final, compartida por la portada y las páginas de cursos. */
export function CtaBand({ title = "Tu lugar en 2027 empieza acá", text }: { title?: string; text?: string }) {
  const instagram = contact.social.find((item) => item.network === "Instagram");
  return (
    <section className="cta-band" aria-labelledby="cta-titulo">
      <div className="container cta-band__inner">
        <div>
          <p className="eyebrow eyebrow--light">Sumate</p>
          <h2 id="cta-titulo">{title}</h2>
          <p>
            {text ??
              "Es gratis, es cerca y salís con dos títulos. Consultá cómo inscribirte y seguinos para enterarte primero de las fechas."}
          </p>
        </div>
        <div className="cta-band__actions">
          <Link className="button button--yellow button--lg" href="/inscripciones">
            Quiero inscribirme <ArrowRight aria-hidden="true" />
          </Link>
          {instagram && (
            <a className="button button--ghost" href={instagram.url} target="_blank" rel="noreferrer">
              Seguinos en Instagram @{instagram.handle}
            </a>
          )}
          <a className="cta-band__phone" href={phoneHref(contact.phones[0].number)}>
            <Phone aria-hidden="true" /> ¿Dudas? Llamá al {contact.phones[0].number}
          </a>
        </div>
      </div>
    </section>
  );
}
