import { FiArrowUp } from "react-icons/fi";
import { contacts, isPlaceholder, navLinks, site } from "../data/site.js";

const socials = [
  { label: "LinkedIn", url: contacts.linkedin.url },
  { label: "GitHub", url: contacts.github.url },
].filter((s) => s.url); // `url: null` masque le lien

// Ordre de la maquette : Qui suis-je, Projets, À propos, Contact
const footerNav = ["#qui-suis-je", "#projets", "#a-propos", "#contact"]
  .map((h) => navLinks.find((l) => l.href === h))
  .filter(Boolean);

export default function Footer() {
  return (
    <footer className="bg-violet text-white">
      <div className="mx-auto max-w-7xl px-5 pb-6 pt-14 md:px-10">
        <div className="flex flex-col justify-between gap-10 sm:flex-row sm:items-start">
          <p className="text-3xl font-medium tracking-tight">{site.brand}</p>

          <div className="grid grid-cols-2 gap-x-14 text-sm">
            <ul className="space-y-2">
              {footerNav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="opacity-85 transition-opacity hover:opacity-100">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={isPlaceholder(s.url) ? undefined : s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-85 transition-opacity hover:opacity-100"
                  >
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-white/20 pt-5 font-mono text-[11px] uppercase tracking-wider text-white/70 sm:flex-row">
          <span>
            © {site.year} {site.brand} · Tous droits réservés
          </span>
          <a href="#qui-suis-je" className="flex items-center gap-1 hover:text-white">
            Retour en haut <FiArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
