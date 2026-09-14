"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "./Link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation, siteShortName } from "../content/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const firstLink = useRef<HTMLAnchorElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  const close = () => setOpen(false);

  useEffect(() => {
    if (open) firstLink.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/" aria-label={`${siteShortName}, ir al inicio`}>
          <Image src="/images/escudo.png" alt="" width={44} height={44} priority />
          <span className="brand__text">
            <strong>Escuela Técnica</strong>
            <span>Juan Lacaze · UTU</span>
          </span>
        </Link>

        <nav id="menu-principal" className={`main-nav${open ? " main-nav--open" : ""}`} aria-label="Navegación principal">
          <ul>
            {navigation.map((item, index) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    ref={index === 0 ? firstLink : undefined}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={active ? "is-active" : undefined}
                    onClick={close}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link className="button button--primary main-nav__cta" href="/inscripciones" onClick={close}>
            Cómo inscribirse
          </Link>
        </nav>

        <button
          ref={toggle}
          type="button"
          className="menu-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          <span>Menú</span>
        </button>
      </div>
    </header>
  );
}
