/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        fine: {
          ivory: '#FAF9F6',
          sand: '#F1EBE3',
          sage: '#7A9A6E',
          charcoal: '#2C322B',
          gold: '#C4A574',
        },
      },
      fontFamily: {
        'fine-serif': ['"Playfair Display"', 'serif'],
        'fine-script': ['"Great Vibes"', 'cursive'],
        'fine-sans': ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        fine: '0 24px 60px rgba(44, 50, 43, 0.08)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'zoom-bg': 'zoomBg 25s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 1.5s ease-out forwards',
        'fine-in': 'fineIn 0.4s ease-out forwards',
        fall: 'fall linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-soft': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.75' },
          '50%': { transform: 'scale(1.08)', opacity: '1' },
        },
        zoomBg: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.12)' },
          '100%': { transform: 'scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fineIn: {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fall: {
          '0%': { transform: 'translateY(-5vh) rotate(0deg) scale(0.5)', opacity: '0' },
          '10%': { opacity: '0.7', transform: 'translateY(0vh) rotate(45deg) scale(1)' },
          '90%': { opacity: '0.7', transform: 'translateY(100vh) rotate(315deg) scale(1)' },
          '100%': { transform: 'translateY(105vh) rotate(360deg) scale(0.5)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
