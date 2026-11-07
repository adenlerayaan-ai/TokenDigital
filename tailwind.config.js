import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        paper: "#F3F1EC",
        ink: "#16161D",
        night: "#15151D",
        violet: { DEFAULT: "#5046F5", dark: "#3F36D9" },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        tokendigital: {
          primary: "#5046F5",
          "primary-content": "#FFFFFF",
          secondary: "#16161D",
          "secondary-content": "#FFFFFF",
          accent: "#5046F5",
          neutral: "#16161D",
          "base-100": "#F3F1EC",
          "base-200": "#ECEAE3",
          "base-300": "#DEDBD2",
          "base-content": "#16161D",
          "--rounded-box": "1rem",
          "--rounded-btn": "9999px",
          "--rounded-badge": "9999px",
        },
      },
    ],
  },
};
