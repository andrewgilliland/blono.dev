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
};
