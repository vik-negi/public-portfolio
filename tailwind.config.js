/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "blue-shadow": "0 4px 6px -1px rgba(0, 0, 255, 0.5)", // Blue shadow
      },
      fontSize: {
        responsive: "clamp(14px, 2vw + 1rem, 24px)",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
