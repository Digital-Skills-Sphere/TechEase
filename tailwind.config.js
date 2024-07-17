/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#000000",
        secondaryColor: "#ffc81a",
        paraColor: "#939393"
      },
      fontSize: {
        titleSize: "55px",
        headingSize: "35px",
        subHeadingSize: "19px",
        paraSize: "16px"
      }
    },
  },
  plugins: [],
}