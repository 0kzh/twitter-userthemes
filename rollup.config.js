const { terser } = require("rollup-plugin-terser");

module.exports = {
  input: "./index.js",
  output: {
    file: "./dist/content.js",
  },
  context: "window",
  plugins: [terser()],
};
