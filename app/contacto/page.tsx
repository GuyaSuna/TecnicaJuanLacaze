import type { Metadata } from "next";
import { AtSign, Clock3, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { PendingBadge } from "../components/Pending";
import { SectionHeading } from "../components/SectionHeading";
import { contact, officialLinks, phoneHref } from "../content/site";

export const metadata: Metadata = {
  title: "Contacto y ubicación | Escuela Técnica de Juan Lacaze",
  description: "Dirección, teléfonos, correo electrónico, redes y ubicación de la Escuela Técnica de Juan Lacaze, en Colonia, Uruguay.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ href: "/contacto", label: "Contacto" }]}
        eyebrow="Contacto y ubicación"
        title="Estamos para orientarte"
        lead="Comunicate por consultas sobre cursos, inscripciones, horarios o trámites. Los datos de contacto fueron verificados en la ficha oficial del centro."
      />

      <section className="section">
        <div className="container contact-grid">
          <article className="contact-card">
            <MapPin aria-hidden="true" />
            <h2>Dirección</h2>
            <p>
              {contact.address}
              <br />
              {contact.city}
            </p>
            <a className="text-link" href={officialLinks.maps} target="_blank" rel="noreferrer">
              Abrir en el mapa <ExternalLink aria-hidden="true" />
            </a>
          </article>

          <article className="contact-card">
            <Phone aria-hidden="true" />
            <h2>Teléfonos</h2>
            <ul>
              {contact.phones.map((phone) => (
                <li key={phone.number}>
                  <a href={phoneHref(phone.number)}>
                    {phone.label}: <strong>{phone.number}</strong>
                  </a>
                </li>
              ))}
            </ul>
          </article>

          <article className="contact-card">
            <Mail aria-hidden="true" />
            <h2>Correo electrónico</h2>
            <p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            <p className="muted">Consultas generales, inscripciones y orientación.</p>
          </article>

          <article className="contact-card">
            <AtSign aria-hidden="true" />
            <h2>Redes</h2>
            <ul>
              {contact.social.map((item) => (
                <li key={item.network}>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {item.network}: <strong>@{item.handle}</strong> <ExternalLink aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </article>

          <article className="contact-card">
            <Clock3 aria-hidden="true" />
            <h2>Horario de atención</h2>
            <PendingBadge>{contact.officeHours.text}</PendingBadge>
            <p className="muted">Se publicará cuando Secretaría lo confirme.</p>
          </article>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="Ubicación" title="Cómo llegar" intro="La escuela está en José Salvo esquina Don Bosco, en la ciudad de Juan Lacaze, departamento de Colonia." />
          <div className="map-embed">
            <iframe
              title="Mapa con la ubicación de la Escuela Técnica de Juan Lacaze"
              src="https://www.google.com/maps?q=Escuela%20T%C3%A9cnica%20Juan%20Lacaze%2C%20Jos%C3%A9%20Salvo%20y%20Don%20Bosco%2C%20Juan%20Lacaze&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="source-line">
            <a href={officialLinks.maps} target="_blank" rel="noreferrer">
              Abrir en Google Maps <ExternalLink aria-hidden="true" />
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
