/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coral: '#FF6B6B',
        teal: '#4ECDC4',
        sunny: '#FFE66D',
        sky: '#6BCBEF',
        cream: '#FFF8E7',
        mint: '#A8E6CF',
        grape: '#A78BFA',
        ink: '#2D3142',
        berry: '#FF8FA3',
      },
      fontFamily: {
        rounded: ['"Fredoka"', 'sans-serif'],
        script: ['"Pacifico"', 'cursive'],
        display: ['"Baloo 2"', 'cursive'],
      },
    },
  },
  plugins: [],
};
