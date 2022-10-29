/** @type {
 "varColor": "var(--varColor)"
} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        varColor: "var(--varColor)",
      },
    },
  },
  plugins: [],
};
