const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.npmInstall(["plop"], {"save-dev": true});
  }

  templates() {
    this.fs.copy(this.templatePath("plop"), this.destinationPath("plop"));
  }

  plopFile() {
    this.fs.copy(this.templatePath("plopfile.js"), this.destinationPath("plopfile.js"));
  }
};
