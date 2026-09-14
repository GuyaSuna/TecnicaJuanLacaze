import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "./Link";
import type { ReactNode } from "react";

export function LinkCard({
  href,
  eyebrow,
  title,
  text,
  icon,
  external = false,
}: {
  href: string;
  eyebrow?: string;
  title: string;
  text: string;
  icon?: ReactNode;
  external?: boolean;
}) {
  const body = (
    <>
      {icon && (
        <span className="link-card__icon" aria-hidden="true">
          {icon}
        </span>
      )}
      <span className="link-card__body">
        {eyebrow && <small>{eyebrow}</small>}
        <strong>{title}</strong>
        <span>{text}</span>
      </span>
      <span className="link-card__arrow" aria-hidden="true">
        {external ? <ExternalLink /> : <ArrowRight />}
      </span>
    </>
  );

  if (external) {
    return (
      <a className="link-card" href={href} target="_blank" rel="noreferrer">
        {body}
        <span className="visually-hidden"> (se abre en una pestaña nueva)</span>
      </a>
    );
  }
  return (
    <Link className="link-card" href={href}>
      {body}
    </Link>
  );
}
