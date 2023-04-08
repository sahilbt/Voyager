/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'main-blue': '#87A1FF',
        'card-grey': '#1E1E1E'
      },
      fontFamily:{
        latoFont:"'Lato', serif"
      }
    }
  },
  plugins: [],
}

