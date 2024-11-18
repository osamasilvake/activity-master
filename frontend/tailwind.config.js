/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        101: "#f2f5fa",
        102: "#6fb98f",
      },
    },
  },
  plugins: [],
};
