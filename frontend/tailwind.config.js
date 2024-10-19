// frontend/tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '6': '1.5rem', // Adds p-6
        '4': '1rem', // Adds p-4
      },
      width: {
        '1/2': '50%', // Adds w-1/2
      },
      // You can add more custom styles here if needed
    },
  },
  plugins: [],
}
