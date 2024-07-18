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
        paraColor: "#dadada"
      },
      fontSize: {
        titleSize: "55px",
        headingSize: "35px",
        subHeadingSize: "19px",
        paraSize: "16px"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down .3s ease-out",
        "accordion-up": "accordion-up .3s ease-out",
      },
    },
  },
  plugins: [],
}