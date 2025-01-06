/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  darkMode: "class",
  content: [
    "./index.html",
    'node_modules/flowbite-react/lib/esm/**/*.{js,ts}',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      Cultured : "#F5F5FA",
      darkbackgoundcolor  : "#040019",
      darkacardcolor : "#110d24"
    },
    extend: {
      animation: {
        marquee: 'marquee 35s linear infinite',
        slideUp: 'slideUp 0.5s ease-out',
        slideDown: 'slideDown 0.5s ease-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
      },

    },
  },
  plugins: [require("flowbite/plugin")],
});