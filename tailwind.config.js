import { useDeferredValue } from 'react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { 
      fontFamily:{
poppins:["Poppins","sans-serif"],
      },
      colors:{
        primary:"#9ef01a",
        secondary:"#0000",
      },
      container:{
        center:true,
        padding:{
          default:"1rem",
          sm:"2rem",
          lg:"4rem",
          "2xl": "6rem"
        }
      }
    },
  },
  plugins: [],
}


