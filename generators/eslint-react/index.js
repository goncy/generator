const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.spawnCommand("npm", [
      "add",
      "-d",
      "babel-eslint",
      "eslint",
      "eslint-config-prettier",
      "eslint-plugin-flowtype",
      "eslint-plugin-prettier",
      "eslint-plugin-react",
      "eslint-plugin-cypress",
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
