/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "999px",
        xl: "1200px",
        xxl: "1320px",
      },
      colors: {
        primary: "#765cf1",
      },
    },
  },
  plugins: [],
};
