module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        light: '#ABABAB',
        dark: '#141313',
        darker: '#1E1E1E',
        'dark-blue': '#101F55',
        purp: '#7400B8',
        'purp-light': '#D041FF',
        'purp-dark': '#651F7D',
        'purple-heart': '#6930C3',
        'theme-indigo': '#5E60CE',
        'havelock-blue': {
          1: '#4EA8DE',
          2: '#5390D9',
        },
        'picton-blue': '#48BFE3',
        'viking-blue': '#56CFE1',
      },
      fontFamily: {
        brand: ['var(--font-poppins)'],
      },
    },
  },
  darkMode: 'class', // or 'media' or 'class'
  presets: [require('./src/lib/tailwind-preset')],
  safelist: [
    {
      pattern:
        /(bg|text)-(cyan|sky|blue|indigo|violet|purple)-(100|200|300|400|500|600|700|800|900)/,
    },
  ],
};
