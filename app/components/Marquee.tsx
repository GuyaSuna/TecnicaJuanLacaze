/** Cinta decorativa en movimiento. El contenido real está en el resto de la página. */
export function Marquee({ items }: { items: string[] }) {
  const row = (
    <span className="marquee__row">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </span>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row}
        {row}
      </div>
    </div>
  );
}
