/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', 'node_modules/preline/dist/*.js'],
  darkMode: 'class',
  theme: {
    colors: {
      primary: '#009dae',
      secondary: '#fe5a77',
      black: '#000000',
      arrowcolor: '#ffaf01',
      white: '#ffffff',
      teal100:'#f0fafc'
    },
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('preline/plugin'),
  ],
}
