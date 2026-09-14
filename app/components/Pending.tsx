import { Clock3, Info } from "lucide-react";
import type { ReactNode } from "react";

/**
 * Marca visible para contenido provisional. Se usa para que cualquier dato
 * pendiente de confirmación institucional sea fácil de identificar y reemplazar.
 */
export function PendingBadge({ children = "Pendiente de confirmación" }: { children?: ReactNode }) {
  return (
    <span className="badge badge--pending">
      <Clock3 aria-hidden="true" />
      {children}
    </span>
  );
}

export function PendingNote({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="pending-note" role="note">
      <Info aria-hidden="true" />
      <div>
        <p className="pending-note__title">
          {title} <PendingBadge />
        </p>
        <div className="pending-note__body">{children}</div>
      </div>
    </div>
  );
}
