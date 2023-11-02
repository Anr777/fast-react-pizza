/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    sans: {
      pizza: 'Roboto Mono, monospace',
    },
    extend: {
      colors: {
        pizza: '#123456'
      },
    },
  },
  plugins: [],
}

