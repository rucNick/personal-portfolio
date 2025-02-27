/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          400: '#4ade80',
        },
        black: '#000000',
      },
    },
  },
  plugins: [],
}