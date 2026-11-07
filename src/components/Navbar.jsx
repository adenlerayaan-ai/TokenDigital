import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, site } from "../data/site.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#qui-suis-je");

  // Surligne le lien de la section visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const linkClass = (href) =>
    `text-sm transition-colors hover:text-violet ${
      active === href ? "text-violet" : "text-ink"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/85 backdrop-blur">
      <nav className="navbar mx-auto max-w-7xl px-5 md:px-10" aria-label="Navigation principale">
        <div className="flex-1">
          <a href="#qui-suis-je" className="flex items-center gap-2 text-sm font-medium">
            <span className="inline-block h-2.5 w-2.5 rotate-45 bg-violet" aria-hidden="true" />
            {site.brand}
          </a>
        </div>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={linkClass(l.href)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile : hamburger DaisyUI */}
        <div className="dropdown dropdown-end md:hidden">
          <button
            type="button"
            className="btn btn-ghost btn-circle"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
          {open && (
            <ul className="menu dropdown-content menu-md z-50 mt-3 w-56 rounded-box border border-ink/10 bg-paper p-2 shadow-lg">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={active === l.href ? "text-violet" : ""}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
