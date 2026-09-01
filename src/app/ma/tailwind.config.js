/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF8FA3',
        secondary: '#FFE5EC',
        dark: '#590D22',
        light: '#FFF0F3',
        accent: '#FFB3C1',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
