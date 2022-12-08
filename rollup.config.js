const inject = require("rollup-plugin-inject");

module.exports = {
  input: "./index.js",
  output: {
    file: "./dist/bundle.js",
  },
  context: "window",
  // plugins: [
  //   inject({
  //     include: "./ace-colorpicker.min.js"
  //   })
  // ]
};
