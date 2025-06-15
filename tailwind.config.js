/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fond-sombre': '#172435',
        'bloc-sombre': '#1E293B', // <-- COULEUR MANQUANTE AJOUTÉE
        'cyan-vif': '#00FFD2',
      },
    },
  },
  plugins: [],
}