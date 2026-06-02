/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        ink:       '#102A43',
        brand:     '#00A3C4',
        brandDeep: '#0086a3',
        tint:      '#e6f7fb',
        page:      '#f5fbfc',
        line:      '#d6e6ea',
        muted:     '#465c66'
      },
      fontFamily: {
        display: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans:    ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
