import Link from "./components/Link";
import { PageHeader } from "./components/PageHeader";

export default function NotFound() {
  return (
    <PageHeader eyebrow="Error 404" title="No encontramos esa página" lead="Es posible que el enlace haya cambiado. Podés volver al inicio o consultar el listado de cursos.">
      <div className="button-row">
        <Link className="button button--primary" href="/">
          Ir al inicio
        </Link>
        <Link className="button button--secondary" href="/cursos">
          Ver cursos
        </Link>
      </div>
    </PageHeader>
  );
}
