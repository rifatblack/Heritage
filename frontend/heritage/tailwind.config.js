/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-custom': 'inset 0 0 50px rgba(0, 0, 0, 1)', // Custom inner shadow
      },
    },
  },
  plugins: [],
}