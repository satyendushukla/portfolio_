/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217    
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage:{
        circularLight:' repeating-radial-gradient(rgba(32,32,32,0.5), 2px, #F2F2F2, 5px, #F2F2F2 100px);'
      }

    },
  },
  plugins: [],
}
