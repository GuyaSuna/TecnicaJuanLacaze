import Link from "./Link";
import { ArrowRight } from "lucide-react";

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  link,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  link?: { href: string; label: string };
}) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 id={id}>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
      {link && (
        <Link className="text-link" href={link.href}>
          {link.label} <ArrowRight aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}
