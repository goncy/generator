const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.npmInstall(["eslint", "babel-eslint", "eslint-config-prettier", "eslint-plugin-prettier", "prettier"], {
      "save-dev": true,
    });
  }

  prettierrc() {
    this.fs.copy(this.templatePath(".prettierrc"), this.destinationPath(".prettierrc"));
  }

  eslintrc() {
    this.fs.copy(this.templatePath(".eslintrc"), this.destinationPath(".eslintrc"));
  }

  eslintIgnore() {
    this.fs.copy(this.templatePath(".eslintignore"), this.destinationPath(".eslintignore"));
  }
};
