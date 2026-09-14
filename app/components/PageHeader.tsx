import Link from "./Link";
import type { ReactNode } from "react";

type Crumb = { href: string; label: string };

export function PageHeader({
  eyebrow,
  title,
  lead,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  crumbs?: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="page-header">
      <div className="container">
        {crumbs && (
          <nav className="breadcrumbs" aria-label="Ruta de navegación">
            <ol>
              <li>
                <Link href="/">Inicio</Link>
              </li>
              {crumbs.map((crumb, index) => (
                <li key={crumb.href} aria-current={index === crumbs.length - 1 ? "page" : undefined}>
                  {index === crumbs.length - 1 ? <span>{crumb.label}</span> : <Link href={crumb.href}>{crumb.label}</Link>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
