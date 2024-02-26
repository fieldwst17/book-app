/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      display: ["Oswald"],
      body: ["Open Sans"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        gridTemplateColumns: {
          "auto-fill-100": "repeat(auto-fill, minmax(100px, 1fr))",
          "auto-fit-100": "repeat(auto-fit, minmax(270px, 1fr))",
        },
      },
    },
  },
  plugins: [],
};
