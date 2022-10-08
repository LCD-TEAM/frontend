module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  theme: {
    extend: {
      colors: {
        "vtb-accent": {
          100: "#EBF3FE",
          200: "#D8E6FC",
          300: "#B0CDF9",
          400: "#89B5F7",
          500: "#629CF4",
          600: "#3A83F1",
          700: "#316FCC",
          800: "#225094",
          900: "#14315C",
          1000: "#14315C",
        },
        "vtb-dark": "#21242C",
        "vtb-grey": {
          100: "BBBBBB",
          200: "999EA9",
        },
      }
    }
  }
}
