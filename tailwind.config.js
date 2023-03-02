/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        xs:'0rem',
        sm: '0rem',
        lg: '0rem',
        xl: '3rem',
        '2xl': '3rem',
      }
    },
  },
  plugins: [],
}