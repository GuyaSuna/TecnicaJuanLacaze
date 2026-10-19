import type { NextConfig } from "next";

/**
 * Exportación estática para GitHub Pages.
 *
 * `NEXT_PUBLIC_BASE_PATH` lo define el workflow de despliegue
 * (`/TecnicaJuanLacaze` en guyasuna.github.io, vacío con dominio propio).
 * En desarrollo local queda vacío y el sitio se sirve desde la raíz.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
