import type { AnchorHTMLAttributes, Ref } from "react";

/**
 * Enlace interno.
 *
 * Renderiza un `<a>` común en lugar de `next/link`: con vinext 1.0.0-beta.2 la
 * navegación del lado del cliente de `next/link` falla en producción
 * ("navigateClientSide is not a function"). El sitio es pequeño y se renderiza
 * en el servidor, por lo que la navegación completa es rápida y confiable.
 * Cuando el framework se actualice, alcanza con volver a exportar `next/link` desde acá.
 */
export default function Link({ ref, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { ref?: Ref<HTMLAnchorElement> }) {
  return (
    <a ref={ref} {...props}>
      {children}
    </a>
  );
}
