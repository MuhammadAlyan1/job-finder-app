/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data.js',
  ],
  theme: {
    extend: {
      colors: {
        offwhite: '#f2f2f2',
        majorelleBlue: '#5762e0',
        indigo: '#4A54BC',
        lightBlue: '#19212e',
        darkBlue: '#121721',
        shuttleGray: '#5c6b81',
      },
      backgroundImage: {
        headerPattern: "url('/bg-pattern-header.svg')",
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
