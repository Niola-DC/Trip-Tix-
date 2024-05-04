/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: "Roboto",
        ssf: "Source Serif 4",
      },
    },
  },
  plugins: [],
};

