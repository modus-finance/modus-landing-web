/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1000px",
      xl: "1200px",
      "2xl": "1440px",
    },
  },
  plugins: [],
};
