/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fc',
          400: '#36aaf8',
          500: '#0c8ee7',
          600: '#0070c4',
          700: '#0059a0',
          800: '#004b85',
          900: '#003f6f',
        },
      },
      backgroundColor: {
        'dark-nav': '#1a1a1a',
        'dark-body': '#121212',
      },
    },
  },
  plugins: [],
}