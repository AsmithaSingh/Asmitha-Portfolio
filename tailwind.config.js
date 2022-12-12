/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {height: {

      height: "500px",

    },
    backgroundColor:{
      mycolor:"rgb(100,63,46)",
      lightbrown:"rgb(158,107,76)"
    },
    
  },
  },
  plugins: [],
}
