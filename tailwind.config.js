/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}


module.exports = {
  theme: {
    extend: {
      keyframes: {
        rotate360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        rotate360: 'rotate360 8s linear infinite',
      },
    },
  },
  plugins: [],
};


// tailwind.config.js - Ensure these colors are defined as before
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'healofy-pink': '#e53e7c', // Approximate pink
        'healofy-blue-light': '#ADD8E6', // Light blue for background shapes
        'healofy-gray-bg': '#F8F8F8', // Light gray background for sections
        'healofy-dark-gray': '#4B5563', // Darker gray for general text
        'healofy-green': '#3B82F6', // Green for "Infertility Treatment" title
        'healofy-green-button': '#28A745', // Green for 'Book an Appointment' button & 'Read More'
        'healofy-light-bg': '#F7F7F7', // Very light background for the contact section
        'healofy-contact-green': '#3CB878', // Specific green for consult now title
        'healofy-contact-pink': '#E53E7C', // Specific pink for consult now title
        'healofy-blog-bg': '#F5F9FF', // Very light blue background for the blog section
      },
      fontFamily: {
        sans: ['YourChosenFont', 'sans-serif'], // IMPORTANT: Replace with your actual font
      },
    },
  },
  plugins: [],
};