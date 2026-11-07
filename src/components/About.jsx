import { skills, badges } from "../data/site.js";

function Block({ title, children }) {
  return (
    <div className="border-t border-white/15 pt-5">
      <h3 className="text-lg font-normal text-white/90">{title}</h3>
      <div className="mt-3 text-sm leading-relaxed text-white/75">{children}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="a-propos" className="bg-night text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 lg:py-28">
        <h2 className="max-w-2xl text-4xl font-normal leading-tight tracking-tight sm:text-5xl">
          Transformer les idées complexes en expériences simples.
        </h2>

        <div className="mt-14 grid gap-x-12 gap-y-8 md:grid-cols-2">
          <Block title="Ce que je sais faire">
            <ul className="space-y-3">
              {skills.map((s) => (
                <li key={s.label} className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="w-28 shrink-0 text-white/60">{s.label}</span>
                  <span className="flex flex-wrap gap-2">
                    {s.items.map((t) => (
                      <span
                        key={t}
                        className="badge badge-outline border-white/30 font-mono text-[11px] text-white/85"
                      >
                        {t}
                      </span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </Block>

          <div className="space-y-8">
            <Block title="Solution que je propose">
              Je crée votre présence en ligne : un site web professionnel, une fiche Google Maps
              bien configurée, et des outils web sur mesure. Du concret, livré en ligne, sans
              équipement à acheter.
            </Block>
            <Block title="Demande de collaboration">
              Vous avez une activité qui n’est pas encore visible sur internet ? Parlons-en. Je suis
              aussi ouvert aux stages et aux projets collaboratifs.
            </Block>
          </div>
        </div>

        <p className="mt-12 max-w-xl text-sm leading-relaxed text-white/55">
          Mon objectif : construire des interfaces qui ont une voix, un rythme et une vraie utilité
          — sans sacrifier la performance ni l’accessibilité.
        </p>

        <ul className="mt-8 flex flex-wrap gap-2" aria-label="Domaines">
          {badges.map((b) => (
            <li key={b} className="badge badge-lg border-0 bg-white px-4 font-mono text-[11px] text-ink">
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
