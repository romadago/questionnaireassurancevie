/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fond-sombre': '#101726', // La vraie couleur
        'bloc-sombre': '#172435', // La vraie couleur
        'cyan-vif': '#00FFD2',    // La vraie couleur
      },
      fontFamily: {
        // Ajout de votre police personnalisée
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        // Ajout de votre animation
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        // Ajout de votre animation
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}