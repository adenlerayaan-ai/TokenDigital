import { FiArrowRight } from "react-icons/fi";
import { projects } from "../data/projects.js";

export default function Projects({ onSelect }) {
  return (
    <section id="projets" className="mx-auto max-w-7xl px-5 py-20 md:px-10 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.7fr]">
        <div>
          <h2 className="text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            Mes
            <br />
            projets
          </h2>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink/65">
            Une sélection de produits et d’outils conçus pour être utiles autant que désirables.
          </p>
          <p className="label-mono mt-8 flex items-center gap-3 text-violet">
            <span className="h-px w-8 bg-violet" aria-hidden="true" />
            Cliquez pour ouvrir le détail
          </p>
        </div>

        <ul className="border-t border-ink/15">
          {projects.map((p, i) => (
            <li key={p.id} className="border-b border-ink/15">
              <button
                type="button"
                onClick={() => onSelect(p)}
                aria-haspopup="dialog"
                className="group flex w-full items-center gap-5 rounded-xl px-0 py-6 text-left transition-all duration-300 hover:bg-violet hover:px-5 hover:text-white focus-visible:bg-violet focus-visible:px-5 focus-visible:text-white focus-visible:outline-none"
              >
                <span className="label-mono w-6 shrink-0 text-inherit opacity-60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">
                  <span className="block text-2xl font-normal tracking-tight sm:text-3xl">
                    {p.name}
                  </span>
                  <span className="mt-1 block font-mono text-[11px] opacity-60">
                    {p.subtitle} · {p.year}
                  </span>
                </span>
                <FiArrowRight
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1"
                  aria-hidden="true"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
