/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: "#1D4ED8",  // Custom blue
        secondary: "#9333EA", // Custom purple
        accent: "#F59E0B",   // Custom orange
        background: "#F3F4F6", // Light background
      },
      fontFamily:{
        poppins: ['Poppins', 'Arial', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        work : ['Work Sans', 'sans-serif'],
        fredoka : ['Fredoka', 'cursive'],
        nunito : ['Nunito', 'sans-serif'],
        montserrat : ['Montserrat', 'sans-serif'],
        open : ['Open Sans', 'sans-serif'],
        lora : ['Lora', 'serif'],
        karla : ['Karla', 'sans-serif'],
        bebas : ['Bebas Neue', 'sans-serif'],
        raleway : ['Raleway', 'sans-serif'],
        mulish : ['Mulish', 'sans-serif'],
        source : ['Source Sans Pro', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

