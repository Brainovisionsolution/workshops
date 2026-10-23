/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        sans: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          orange: '#F97316',
          'orange-deep': '#EA580C',
          'orange-dark': '#C2410C',
          yellow: '#FBBF24',
          'yellow-golden': '#FBC02D',
          amber: '#D97706',
        },
        primary: {
          yellow: '#FBC02D',
          orange: '#F97316',
          'orange-deep': '#EA580C',
        },
        background: {
          white: '#FFFFFF',
          pale: '#FFFBEB',
          canvas: '#FAFAFA',
        },
        text: {
          charcoal: '#1E293B',
          gray: '#64748B',
        },
        dark: {
          bg: '#0B1120',
          card: '#111827',
          surface: '#1F2937',
          text: '#F8FAFC',
          muted: '#94A3B8',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%': { boxShadow: '0 0 20px rgba(249, 115, 22, 0.25)' },
          '100%': { boxShadow: '0 0 35px rgba(251, 191, 36, 0.45)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'brand': '0 10px 30px -5px rgba(249, 115, 22, 0.2)',
        'brand-lg': '0 20px 40px -10px rgba(234, 88, 12, 0.25)',
        'glow-yellow': '0 0 25px rgba(251, 191, 36, 0.4)',
        'glow-orange': '0 0 25px rgba(249, 115, 22, 0.4)',
      },
    },
  },
  plugins: [],
};