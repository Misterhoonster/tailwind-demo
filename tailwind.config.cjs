module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        serif: [
          "Palatino",
          "Palatino Linotype",
          "Palatino LT STD",
          "Book Antiqua",
          "Georgia",
          "serif",
        ],
      }
    },
  },
  plugins: [],
};
