const path = require("path");

module.exports = {
  entry: "./src/scripts/main.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
