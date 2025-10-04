/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // opcional: aproximação das suas variáveis
        brand1: "#6c00ff",
        brand2: "#ff2d95",
        brand3: "#00e1ff",
        panel: "#111525",
      },
      borderRadius: {
        xl: "24px",
        lg: "16px",
      },
    },
  },
  plugins: [],
};
