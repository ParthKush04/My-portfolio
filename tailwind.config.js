/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        deep: '#0A0A0A',
        charcoal: '#0f1724',
        accent1: '#6C63FF',
        accent2: '#00D4FF'
      },
      boxShadow: {
        'glow-md': '0 8px 30px rgba(108,99,255,0.12)',
        'glass': '0 8px 30px rgba(2,6,23,0.6)'
      }
    },
  },
  plugins: [],
}
