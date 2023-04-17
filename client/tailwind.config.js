/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        s: { max: "479px" },
        sm: { min: "480px", max: "767px" },
        md: { min: "768px", max: "1023px" },
        lg: { min: "1023px" },
      },
      backgroundImage: {
        nightSky: "url('/src/images/nightSky.jpg')",
      },
    },
  },
  plugins: [],
};
