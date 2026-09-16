/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deepPurple: '#0E0625',
          darkSurface: '#1A1035',
          lavender: '#B497F0',
          warmCream: '#F0EBDD',
          inkBlack: '#111111',
          offWhite: '#F8F6FF',
          cyan: '#08CEE3',
          lime: '#D5FF00',
          paleYellow: '#FFF3A6',
        }
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'brutal-xs': '2px 2px 0px #111111',
        'brutal-sm': '4px 4px 0px #111111',
        'brutal': '6px 6px 0px #111111',
        'brutal-lg': '8px 8px 0px #111111',
        'brutal-xl': '12px 12px 0px #111111',
        'brutal-lavender': '6px 6px 0px #B497F0',
        'brutal-cyan': '6px 6px 0px #08CEE3',
        'brutal-lime': '6px 6px 0px #D5FF00',
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
}
