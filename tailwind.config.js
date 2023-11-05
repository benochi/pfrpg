/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your theme colors here
        cobalt: '#0047ab',
        dark: '#000',
      },
    },
  },
  plugins: [],
}

