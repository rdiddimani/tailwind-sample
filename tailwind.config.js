/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white': '#fff',
      'blue': {
        '100': '#d0ebff',
        '200': '#a5d8ff',
        '300':' #74c0fc',
        '400': '#4dabf7',
        '500': '#339af0',
        '600': '#228be6',
        '700': '#1c7ed6',
        '800': '#1971c2',
        'base': '#1971c2',
        '900': '#1864ab'
      },

      'yellow': '#ff0',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      display:[ ' Oswald, Helvetica, Open Sans']
    },
  },
  plugins: [],
}