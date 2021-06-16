const Generator = require("yeoman-generator");

module.exports = class extends Generator {
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
