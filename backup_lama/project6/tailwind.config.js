/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Playfair Display'", 'serif'],
        body: ["'Cormorant Garamond'", 'serif'],
      },
      colors: {
        bugis: {
          50: '#fdf8f0',
          100: '#f5e6d3',
          200: '#e8cda8',
          300: '#d4a96e',
          400: '#c08a4a',
          500: '#a06d30',
          600: '#7a5224',
          700: '#5a3a1a',
          800: '#3a1f0e',
          900: '#2a1607',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
