/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        modal : {
          gray_light : "rgba(0,0,0,0.05)",
        }
      },
    },
  },
  plugins: [],
}