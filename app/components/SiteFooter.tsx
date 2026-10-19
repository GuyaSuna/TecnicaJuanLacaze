import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "./Link";
import { asset, contact, lastReview, navigation, officialLinks, organization, phoneHref, siteName } from "../content/site";

function formatReview(iso: string) {
  const [year, month, day] = iso.split("-");
  return `${day}/${month}/${year}`;
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Image src={asset("/images/escudo.png")} alt="" width={56} height={56} />
          <div>
            <strong>{siteName}</strong>
            <p>{organization}</p>
          </div>
        </div>

        <nav className="site-footer__nav" aria-label="Secciones del sitio">
          <h2>Secciones</h2>
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__contact">
          <h2>Contacto</h2>
          <address>
            <p>
              {contact.address}
              <br />
              {contact.city}
            </p>
            <p>
              {contact.phones.map((phone) => (
                <a key={phone.number} href={phoneHref(phone.number)}>
                  {phone.label}: {phone.number}
                </a>
              ))}
            </p>
            <p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </address>
        </div>

        <div className="site-footer__official">
          <h2>Fuentes oficiales</h2>
          <ul>
            <li>
              <a href={officialLinks.schoolDirectory} target="_blank" rel="noreferrer">
                Ficha del centro en utu.edu.uy <ExternalLink aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={officialLinks.study} target="_blank" rel="noreferrer">
                Estudiá en UTU <ExternalLink aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={officialLinks.students} target="_blank" rel="noreferrer">
                Portal de estudiantes <ExternalLink aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="site-footer__bottom">
        <p>
          © {new Date().getFullYear()} {siteName}. Sitio informativo de la escuela. Los datos institucionales se contrastan con fuentes oficiales de UTU.
        </p>
        <p>Última revisión del contenido: {formatReview(lastReview)}.</p>
      </div>
    </footer>
  );
}
