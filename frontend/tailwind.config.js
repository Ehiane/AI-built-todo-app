/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6750a4',
          light: '#8b79c1',
          dark: '#452c7a',
        },
        secondary: {
          DEFAULT: '#625b71',
          light: '#7f7888',
          dark: '#46404f',
        },
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}