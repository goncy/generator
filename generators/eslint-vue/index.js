const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.spawnCommand("npm", [
      "add",
      "-d",
      "babel-eslint",
      "eslint",
      "eslint-config-prettier",
      "eslint-friendly-formatter",
      "eslint-loader",
      "eslint-plugin-html",
      "eslint-plugin-prettier",
      "prettier",
    ]);
  }

  eslint() {
    this.fs.copy(
      this.templatePath(".eslintrc.js"),
      this.destinationPath(".eslintrc.js")
    );
  }

  editorconfig() {
    this.fs.copy(
      this.templatePath(".editorconfig"),
      this.destinationPath(".editorconfig")
    );
  }
};
