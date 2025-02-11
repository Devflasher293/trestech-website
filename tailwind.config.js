/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
    },
  },
  plugins: [],
};