/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF8F0',
          100: '#FEEAD6',
          200: '#FDD5AD',
          300: '#FCB97A',
          400: '#F8943D',
          500: '#F57C1F',
          600: '#E56A10',
          700: '#BD520B',
          800: '#96420B',
          900: '#78360C',
        },
        secondary: {
          50: '#FAF7F5',
          100: '#F5EFEB',
          200: '#EBDDD5',
          300: '#DBC7B9',
          400: '#C9A98D',
          500: '#B98B6A',
          600: '#A97553',
          700: '#8C5D43',
          800: '#724B39',
          900: '#5D3F31',
        },
        accent: {
          50: '#FEF7EE',
          100: '#FDEBD4',
          200: '#FBD7A9',
          300: '#F9BE70',
          400: '#F69D35',
          500: '#F4821F',
          600: '#E76B11',
          700: '#C45510',
          800: '#9E4210',
          900: '#7E350F',
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'hover': '0 12px 40px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}