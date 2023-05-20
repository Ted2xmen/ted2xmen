/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.tsx", "./layouts/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#1e293b",
        "primary-light": "#94a3b8",
        "secondary-dark": "#166534",
        "secondary-light": "#22c55e",
      },

      borderRadius: {
        1: "10px",
        2: "20px",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
