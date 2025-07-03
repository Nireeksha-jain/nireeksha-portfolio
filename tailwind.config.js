module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        apple: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
       keyframes: {
       floatRandom: {
      '0%': { transform: 'translate(0, 0)' },
      '25%': { transform: 'translate(40px, -60px)' },
      '50%': { transform: 'translate(-30px, 30px)' },
      '75%': { transform: 'translate(50px, 10px)' },
      '100%': { transform: 'translate(0, 0)' },
    },
  },
  animation: {
    floatRandom: 'floatRandom 12s ease-in-out infinite',
  },
}
},
  plugins: [],
}
