// ─────────────────────────────────────────────────────────────
// Toutes les infos personnelles sont ici. Modifie ce fichier seul.
// Les valeurs "À_COMPLÉTER" sont des placeholders : remplace-les.
// ─────────────────────────────────────────────────────────────

export const site = {
  brand: "TokenDigital",
  name: "Rayaan",
  year: 2026,
  // Photo : remplace public/images/profile.jpg (ou change ce chemin)
  profileImage: "/images/profile.jpg",
};

export const navLinks = [
  { label: "Qui suis-je ?", href: "#qui-suis-je" },
  { label: "À propos", href: "#a-propos" },
  { label: "Projets", href: "#projets" },
  { label: "Contact", href: "#contact" },
];

// Mettre `url: null` pour masquer un lien.
export const contacts = {
  // Relevés sur la maquette : vérifie-les.
  whatsapp: { display: "+229 44970873", url: "https://wa.me/22944970873" },
  email: { display: "adenlerayaan@gmail.com", url: "mailto:adenlerayaan@gmail.com" },
  // URLs non fournies : à compléter.
  linkedin: { display: "LinkedIn", url: "https://www.linkedin.com/in/rayaanadenle/" },
  github: { display: "GitHub", url: "https://github.com/adenlerayaan-ai" },
};

export const skills = [
  { label: "Sites web", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind"] },
  { label: "Back-end", items: ["PHP", "Python"] },
  { label: "Mise en ligne", items: ["GitHub", "Railway"] },
  { label: "Visibilité", items: ["Google Business Profile", "Google Maps"] },
];

// Vrai si l'URL contient encore le marqueur « À_COMPLÉTER ».
export const isPlaceholder = (url) => !url || url.includes("À_COMPLÉTER");

export const badges = [
  "UX Strategy",
  "UI Design",
  "Branding",
  "Figma",
  "React",
  "Motion",
  "Design Systems",
];
