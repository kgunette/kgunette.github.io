/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "on-surface": "#1a1c1c",
        "secondary": "#5f5e5e",
        "surface": "#f9f9f9",
        "primary": "#af2819",
        "outline-variant": "#e2beb9",
        "outline": "#8e706b",
        "coral-accent": "#E8513D",
        "primary-dark": "#900f05",
        "primary-fixed": "#ffdad4",
        "on-primary-fixed": "#410100",
        "surface-container-low": "#f3f3f3",
        "surface-container": "#eeeeee",
      },
      fontFamily: {
        headline: ["Sora", "sans-serif"],
        body: ["Manrope", "sans-serif"],
        label: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
