/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#f7f3ec',
        oat: '#f1e8db',
        sage: '#bfd0bc',
        ink: '#2d2a26',
        gold: '#dcc18c',
        'apple-red': '#b64a4a',
      },
      fontFamily: {
        'serif-display': ['"Cormorant Garamond"', '"STSong"', '"Songti SC"', 'serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(76, 60, 35, 0.09)',
        panel: '0 30px 80px rgba(88, 66, 37, 0.12)',
      },
    },
  },
  plugins: [],
}
