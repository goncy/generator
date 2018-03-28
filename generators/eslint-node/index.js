const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.spawnCommand("npm", [
      "add",
      "--save-dev",
      "babel-eslint",
      "eslint",
      "eslint-config-prettier",
      "eslint-plugin-prettier",
      "prettier",
    ]);
  }

  writing() {
    this.fs.copy(
      this.templatePath(".eslintrc.js"),
      this.destinationPath(".eslintrc.js")
    );
  }
};
