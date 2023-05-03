/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['"DM Serif Display"'],
        corny: ["Itim"],
      },
      colors: {
        main1: "rgba(24,33,51,255)",
      },
    },
  },
  plugins: [],
};
