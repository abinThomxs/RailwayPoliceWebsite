/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-10": "#5D6268",
        "black-10": "#282E35",
        "blue-10": "#362FD9",
        "gray-20": "#F8F8F8"
      },
    }
    
  },
  plugins: [],
}