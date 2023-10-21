/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3E43C7',
        'custom-medium-blue': '#E8E7F1',
        'custom-light-blue': '#E8E7F1',
        'custom-dark-gray': '#5D5D5D',
        'custom-gray': '#9F9F9F',
        'custom-bg-light': '#F4F4F4',
        'custom-black': '#1A1A1A',
        'custom-red': '#B3261E',
        'custom-green': '#518829',
        'custom-white': '#FFF',
        'custom-shine': '#F9F9F9',
        'custom-panel': '#DDDCE9',
        'custom-button-hover': '#C1BEDF',
        'custom-icon': '#3C3C3C'
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
