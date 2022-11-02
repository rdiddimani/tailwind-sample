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
      'gray': {
        "100": "#b3b3b3",
        "200": "#b0b0b0",
        "300": "#aaaaaa",
        "400": "#a1a1a1",
        "base": "#949494",
        "600": "#818181",
        "700": "#696969",
        "800": "#4b4b4b",
        "900": "#2b2b2b"
      },
      'success': {
        '100': '#BAE3CD',
        '200': '#1ED773',
        '300': '#008C40',
        '400': '#00803A',
      },
      'warning': {
        '100': '#F4D3BF',
        '200': '#F37026',
        '300': '#D9550A',
      },
      'danger': {
        '100': '#F3D6D6',
        '200': '#CA313E',
        '300': '#B41320',
      },
      'nutrual': {
        '100': '#FFFFFF',
        '200': '#D7D6DB',
        '300': '#BFBBC3',
        '400': '#575463',
        '500': '#100A27',
      },
      'white': '#fff',
      'blue': {
        '100': '#d0ebff',
        '200': '#a5d8ff',
        '300': '#74c0fc',
        '400': '#4dabf7',
        '500': '#339af0',
        '600': '#228be6',
        '700': '#1c7ed6',
        '800': '#1971c2',
        'base':'#1971c2',
        '900': '#1864ab'
      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      display: [' Oswald, Helvetica, Open Sans']
    },
  },
  plugins: [],
}