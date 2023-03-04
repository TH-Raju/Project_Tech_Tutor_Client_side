/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-in-left': 'slide-in-left 2s scroll',
        'tokkor': 'tokkor 3s linear infinite',
        'fokkor': 'tokkor 2s linear infinite',
        blob: "blob 4s infinite",
      },
      keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'tokkor': {
          '0%': { transform: 'translateY(-10%) ' },
          '100%': { transform: 'translateY(0) ' }
        },
        'fokkor': {
          '0%': { transform: 'translateY(-10%)' },
          '100%': { transform: 'translateY(0)' }
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, 50px) scale(0.8)",
          },
          "66%": {
            transform: "translate(30px, 30px) scale(0.8)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        }
      },


    },
  },
  plugins: [require("daisyui")],
}
