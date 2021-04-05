const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.npmInstall(["eslint-config-prettier", "eslint-plugin-prettier", "eslint-plugin-cypress", "prettier"], {
      "save-dev": true,
    });
  }

  vscode() {
    this.fs.copy(this.templatePath(".vscode"), this.destinationPath(".vscode"));
  }

  eslintIgnore() {
    this.fs.copy(this.templatePath(".eslintignore"), this.destinationPath(".eslintignore"));
  }

  editorconfig() {
    this.fs.copy(this.templatePath(".editorconfig"), this.destinationPath(".editorconfig"));
  }
};
