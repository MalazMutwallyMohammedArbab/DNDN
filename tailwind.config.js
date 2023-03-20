/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        regu: ["Al-Jazeera-Arabic-Regular", "sans-serif"],
      },
    },
    colors:{
      'orange' : '#FF7F50',
      'pink' : '#FF1493',
      'gray' : '#FFEFD5'
    },
  },
  plugins: [],
}
