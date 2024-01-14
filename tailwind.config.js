/** @type {import('tailwindcss').Config} */

export default {

  content: [

    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",

  ],

  theme: {

    extend: {

      colors: {
        green:{
          'neo-brutalism-green': '#00ff00',
          300: '#00ff00', // Replace with your desired green color
        },

        gray: {

          200: "#D5DAE1"

        },

        black: {

          DEFAULT: "#000",

          500: "#1D2235"

        },

        blue: {

          500: "#2b77e7"

        }

      },

      fontFamily: {

        worksans: ["Work Sans", "sans-serif"],

        poppins: ['Poppins', "sans-serif"]

      },

      boxShadow: {

        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'

      }

    },

  },

  plugins: [],

}