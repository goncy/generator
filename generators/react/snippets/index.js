const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  snippets() {
    this.fs.copy(this.templatePath(".vscode"), this.destinationPath(".vscode"));
  }
};
