/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { min: "320px", max: "767px" },
      md: { min: "768px", max: "1079px" },
      lg: { min: "1080px" },
    },
    extend: {
      colors: {
        black: {
          100: "#1E1E1E",
          200: "#231F20",
        },
        gray: {
          100: "#8D8D8D",
          200: "#EEEEEE",
          300: "#F8F8F8",
          400: "#666666",
          500: "#C5C5C5",
        },
        purple: {
          100: "#a8afd8",
        },
      },
      fontFamily: {
        suit: ["SUIT-Regular", "sans-serif"],
      },
      keyframes: {
        slide: {
          "0%": { backgroundPosition: "100% center" },
          "100%": { backgroundPosition: "0% center" },
        },
      },
      animation: {
        slide: "slide 30s linear infinite",
      },
      backgroundImage: {
        seoyun: "url('src/assets/yeoseoyun.svg')",
      },
      backgroundSize: {
        "size-50": "50%",
        "size-75": "75%",
      },
    },
  },
  plugins: [],
};
