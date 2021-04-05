const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.npmInstall(
      [
        "eslint",
        "eslint-config-prettier",
        "eslint-config-airbnb-base",
        "eslint-plugin-import",
        "eslint-plugin-jest",
        "eslint-plugin-prettier",
        "eslint-plugin-promise",
        "prettier",
      ],
      {"save-dev": true}
    );
  }

  eslint() {
    this.fs.copy(this.templatePath(".eslintrc"), this.destinationPath(".eslintrc"));
  }

  eslintIgnore() {
    this.fs.copy(this.templatePath(".eslintignore"), this.destinationPath(".eslintignore"));
  }
};
