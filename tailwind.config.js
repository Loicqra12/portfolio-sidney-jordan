/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Bleu acier — couleur primaire
        primary: {
          50: '#eef4f9',
          100: '#d5e6f0',
          200: '#aacce1',
          300: '#7ab0ce',
          400: '#5595bc',
          500: '#4a7fa5', // bleu acier principal
          600: '#3a6a8a',
          700: '#2d5470',
          800: '#1f3d54',
          900: '#12273a',
          950: '#091520',
        },
        // Bleu acier clair — accents secondaires
        accent: {
          50: '#f0f6fb',
          100: '#d8ebf5',
          200: '#b0d5eb',
          300: '#83bada',
          400: '#6b9fc4', // bleu acier clair
          500: '#4f88b0',
          600: '#3b7096',
          700: '#2c587a',
          800: '#1d3f5b',
          900: '#0f293e',
        },
        // Dark theme
        dark: {
          bg: '#0a0a0f', // noir profond
          card: '#0f1117', // cards
          border: '#1e2530', // bordures subtiles
        },
        // Steel accents
        steel: {
          light: '#6b9fc4',
          mid: '#4a7fa5',
          dark: '#2d5f82',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slow-spin': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        }
      },
    },
  },
  plugins: [],
}




