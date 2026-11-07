import { FiArrowUpRight } from "react-icons/fi";
import { site } from "../data/site.js";

export default function Hero() {
  return (
    <section id="qui-suis-je" className="mx-auto max-w-7xl px-5 py-14 md:px-10 lg:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Texte */}
        <div className="rise">
          <p className="label-mono flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-violet" aria-hidden="true" />
            Designer produit · Développeur créatif
          </p>

          <h1 className="mt-6 text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Bonjour, moi
            <br />
            c’est
            <br />
            {site.name}
          </h1>

          <p className="mt-8 max-w-md text-base leading-relaxed text-violet">
            Informaticien basé à Cotonou, étudiant en administration réseaux à l’ENEAM. Je conçois
            des solutions en ligne pour aider les entreprises et les particuliers à mieux se faire
            connaître et à mieux s’organiser.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projets" className="btn btn-primary rounded-full px-6 font-normal normal-case">
              Voir mes projets <FiArrowUpRight />
            </a>
            <a
              href="#contact"
              className="btn btn-outline rounded-full border-ink/70 px-6 font-normal normal-case text-ink hover:border-ink hover:bg-ink hover:text-paper"
            >
              Me contacter <FiArrowUpRight />
            </a>
          </div>

          <p className="label-mono mt-8 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden="true" />
            Disponible pour missions · {site.year}
          </p>
        </div>

        {/* Photo */}
        <div className="rise mx-auto w-full max-w-sm lg:max-w-md" style={{ animationDelay: "0.12s" }}>
          <div className="label-mono mb-3 flex justify-between">
            <span>Portrait · © {site.year}</span>
            <a href="#a-propos" className="text-violet hover:underline">
              Défiler ↓
            </a>
          </div>
          <img
            src={site.profileImage}
            alt={`Portrait de ${site.name}`}
            className="aspect-[3/4] w-full object-cover grayscale"
          />
        </div>
      </div>
    </section>
  );
}
