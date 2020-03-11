const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  initialize() {
    this.composeWith(require.resolve("../snippets-react"));
    this.composeWith(require.resolve("../plop-react"));
    this.composeWith(require.resolve("../eslint-react"));
  }
};
