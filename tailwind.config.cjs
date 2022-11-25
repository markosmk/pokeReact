/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        electric: '#FAC94B',
        grass: '#38B67B',
        fire: '#F9874D',
        water: '#3AB5F3',
        bug: '#DFBD7C',
        normal: '#C1C2C3',
      },
    },
  },
  plugins: [],
};
