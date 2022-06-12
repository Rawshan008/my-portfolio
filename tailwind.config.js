module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        "base-color": "#c66",
        "base-hover": "#ffffff1a",
        "menu-border": "#0000001a",
        "body-color": "#444444",
      },
      fontFamily: {
        dosis: ["Dosis", "sans-serif"],
        bitter: ["Bitter", "serif"],
      },
    },
  },
};
