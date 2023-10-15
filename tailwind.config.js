/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#60A5FA",
        mainBorder: "#DBEBFF",
        borderHover: "#cce3ff",
        buttonHover: "#4c97f3",
        textColor: "#111",
        sortBg: "#e3f0ff",
        mainRed: "#ef4444",
        sortText: "#06418b",
      },
    },
  },
  plugins: [],
};
