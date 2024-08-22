/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      backgroundImage: {
        'manga-pattern': 'repeating-linear-gradient(45deg, black 0px, black 2px, white 2px, white 8px)',
      },
    },
  },
  plugins: [],
}