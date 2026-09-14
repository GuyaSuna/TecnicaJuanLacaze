import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "./Link";
import { formatDate, type NewsItem } from "../content/news";

export function NewsCard({ item, featured = false }: { item: NewsItem; featured?: boolean }) {
  const label = item.external ? "Leer en utu.edu.uy" : "Leer más";
  const content = (
    <>
      {item.image && (
        <Image
          src={item.image.src}
          alt={item.image.alt}
          width={item.image.width}
          height={item.image.height}
          sizes={featured ? "(max-width: 900px) 100vw, 60vw" : "(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"}
        />
      )}
      <div className="news-card__body">
        <p className="news-card__meta">
          <time dateTime={item.date}>{formatDate(item.date)}</time>
          <span>{item.category}</span>
        </p>
        <h3>{item.title}</h3>
        <p>{item.summary}</p>
        <span className="text-link">
          {label} {item.external ? <ExternalLink aria-hidden="true" /> : <ArrowRight aria-hidden="true" />}
        </span>
      </div>
    </>
  );

  const className = `news-card${featured ? " news-card--featured" : ""}${item.image ? "" : " news-card--text"}`;

  return (
    <article className={className}>
      {item.external ? (
        <a href={item.href} target="_blank" rel="noreferrer">
          {content}
        </a>
      ) : (
        <Link href={item.href}>{content}</Link>
      )}
    </article>
  );
}
