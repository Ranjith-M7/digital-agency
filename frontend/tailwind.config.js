/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // This is your body text font
        heading: ["Overpass", "sans-serif"], // This is your new headline font
      },
      colors: {
        primary: "#6153CD",
        "brand-red": "#E53935",
        "brand-light-red": "#FFCCCC",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
