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
      },
      keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'tokkor': {
          '0%': { transform: 'translateY(-10%)' },
          '100%': { transform: 'translateY(0)' }
        },
        'fokkor': {
          '0%': { transform: 'translateY(-10%)' },
          '100%': { transform: 'translateY(0)' }
        }
      },


    },
  },
  plugins: [require("daisyui")],
}
