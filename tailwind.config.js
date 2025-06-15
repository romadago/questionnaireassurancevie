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
        'bloc-sombre': '#1E293B', // <-- LA VOICI ! J'ai mis un gris-bleu foncé.
        'cyan-vif': '#00FFD2',
      },
    },
  },
  plugins: [],
}