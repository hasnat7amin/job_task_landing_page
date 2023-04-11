/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "purple": "rgba(97, 73, 204, 1)",
      },
      backgroundImage: {
        'main-image': "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../src/images/main_bg.png')",
        'work-image': "url('../src/images/work.png')",
        'know-image': "linear-gradient(to bottom, rgba(97, 73, 204, 1),rgba(97, 73, 204, 0)), url('../src/images/know-bg.png')",
     },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

