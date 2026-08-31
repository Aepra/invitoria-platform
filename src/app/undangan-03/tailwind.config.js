/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        royal: {
          50: '#E8EDF5',
          100: '#C9D6E8',
          200: '#93AED1',
          300: '#5E85BA',
          400: '#2E5CA0',
          500: '#0B3B7A',
          600: '#082E5E',
          700: '#062247',
          800: '#041730',
          900: '#020C1C',
        },
        gold: {
          50: '#FBF6E9',
          100: '#F5EAC8',
          200: '#ECD58F',
          300: '#E0BE5C',
          400: '#D4AF37',
          500: '#C9A227',
          600: '#A8841D',
          700: '#876619',
          800: '#654913',
          900: '#442D0C',
        },
        burgundy: {
          50: '#FBEAEA',
          100: '#F2C4C4',
          200: '#E08A8A',
          300: '#CE5757',
          400: '#A52A2A',
          500: '#6B0F1A',
          600: '#5A0D16',
          700: '#480A12',
          800: '#36070D',
          900: '#240509',
        },
        ivory: '#FAF7F0',
        cream: '#F5EDE0',
        parchment: '#EFE4D2',
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['Montserrat', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 30s linear infinite',
        'spin-slower': 'spin-slow 60s linear infinite',
        'zoom-bg': 'zoomBg 25s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s linear infinite',
        'glow': 'glow 2.5s ease-in-out infinite',
        'fall': 'fall linear infinite',
        'sway': 'sway 5s ease-in-out infinite',
        'fade-in': 'fadeIn 1.5s ease-out forwards',
        'slide-up': 'slideUp 1s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'pulse-soft': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.15)', opacity: '1', filter: 'drop-shadow(0 0 15px rgba(201,162,39,0.6))' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        zoomBg: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.15)' },
          '100%': { transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201,162,39,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(201,162,39,0.6)' },
        },
        fall: {
          '0%': { transform: 'translateY(-5vh) rotate(0deg) scale(0.5)', opacity: '0' },
          '10%': { opacity: '0.8', transform: 'translateY(0vh) rotate(45deg) scale(1)' },
          '90%': { opacity: '0.8', transform: 'translateY(100vh) rotate(315deg) scale(1)' },
          '100%': { transform: 'translateY(105vh) rotate(360deg) scale(0.5)', opacity: '0' },
        },
        sway: {
          '0%, 100%': { transform: 'translateX(-20px)' },
          '50%': { transform: 'translateX(20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
