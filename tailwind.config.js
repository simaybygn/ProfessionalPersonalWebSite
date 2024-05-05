/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage:
      theme => ({
        'backgroundTemplate': "url('/src/assets/images/background.jpg')",
       }) 
    },
  },
  plugins: [],
}

