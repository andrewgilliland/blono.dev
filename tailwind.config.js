module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
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
