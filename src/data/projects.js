// ─────────────────────────────────────────────────────────────
// Ajouter un projet = ajouter un objet ci-dessous.
// Supprimer un projet = retirer l'objet. Le numéro (01, 02…) est automatique.
//
// `code: null`  → le bouton « Voir le code » est masqué.
// `image`       → chemin dans /public (ex: "/images/gmi.png").
// ─────────────────────────────────────────────────────────────

export const projects = [
  {
    id: "gmi",
    name: "GMI",
    subtitle: "Maintenance informatique",
    year: "2026",
    image: "/images/project-placeholder.jpg",
    description:
      "GMI (Gestion de Maintenance Informatique) est une application web de ticketing informatique : elle permet de déclarer, suivre et traiter les demandes de maintenance.",
    role: "Développeur frontend — conception et intégration de l'ensemble des pages de l'interface.",
    collaborators: ["Bradley Hounkpe"],
    technologies: ["Vue.js", "Node.js", "Express", "MySQL", "Vercel", "Railway"],
    site: "https://maintenance-it-rho.vercel.app/inscription",
    code: null, // À_COMPLÉTER : lien GitHub si le dépôt est public
  },
];
