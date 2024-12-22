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
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
});