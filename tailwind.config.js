/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "hsl(14, 86%, 42%)",
        green: "hsl(159, 69%, 38%)",
        rose: {
          50: "#FCF8F6",
          100: "#F5EEEC",
          300: "#CAAFA7",
          400: "#AD8A85",
          500: "#87635A",
          900: "#260F08",
        },
      },
      fontFamily: {
        default: ["Red Hat Text"],
      },
    },
  },
  plugins: [],
};
