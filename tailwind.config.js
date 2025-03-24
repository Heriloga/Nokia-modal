const { transform } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "hover-anim": "hovering 4s ease-in-out infinite",
      },
      keyframes: {
        hovering: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(0.5rem)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },

      backgroundImage: {
        "linear-navbar":
          "linear-gradient(to right, rgb(173, 121, 246), rgb(243, 201, 250))",
        "radial-blue-teal":
          "conic-gradient(from -110deg, #4f39f6,rgb(247 166 245), #eef2ff, #4f39f6)",
      },
    },
  },
  plugins: [],
};
