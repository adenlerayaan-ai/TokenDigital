import { useEffect, useRef } from "react";
import { FiArrowUpRight, FiX } from "react-icons/fi";

const FALLBACK_IMG = "/images/project-placeholder.svg";

function Field({ label, children }) {
  return (
    <div>
      <dt className="label-mono">{label}</dt>
      <dd className="mt-1 text-sm leading-relaxed">{children}</dd>
    </div>
  );
}

export default function ProjectModal({ project, onClose }) {
  const ref = useRef(null);

  // Ouvre / ferme le <dialog> natif selon le projet sélectionné
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  return (
    <dialog ref={ref} className="modal" onClose={onClose}>
      {project && (
        <div className="modal-box max-w-2xl bg-paper p-0">
          <form method="dialog">
            <button
              className="btn btn-circle btn-sm absolute right-3 top-3 z-10 border-0 bg-paper/90"
              aria-label="Fermer"
            >
              <FiX size={16} />
            </button>
          </form>

          <img
            src={project.image}
            alt={`Aperçu du projet ${project.name}`}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = FALLBACK_IMG;
            }}
            className="aspect-[16/9] w-full object-cover"
          />

          <div className="p-6 sm:p-8">
            <p className="label-mono">
              {project.subtitle} · {project.year}
            </p>
            <h3 className="mt-2 text-3xl font-normal tracking-tight">{project.name}</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink/75">{project.description}</p>

            <dl className="mt-6 grid gap-5 border-t border-ink/15 pt-6 sm:grid-cols-2">
              <Field label="Rôle">{project.role}</Field>
              <Field label="Collaborateurs">
                {project.collaborators?.length ? project.collaborators.join(", ") : "—"}
              </Field>
              <div className="sm:col-span-2">
                <dt className="label-mono">Technologies</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="badge badge-outline border-ink/30 font-mono text-[11px]">
                      {t}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.site && (
                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary rounded-full px-6 font-normal normal-case"
                >
                  Voir le site <FiArrowUpRight />
                </a>
              )}
              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline rounded-full border-ink/70 px-6 font-normal normal-case text-ink hover:border-ink hover:bg-ink hover:text-paper"
                >
                  Voir le code <FiArrowUpRight />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Clic sur le fond = fermeture */}
      <form method="dialog" className="modal-backdrop">
        <button aria-label="Fermer">close</button>
      </form>
    </dialog>
  );
}
