const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.yarnInstall(["plop"], {dev: true});
  }

  templates() {
    this.fs.copy(this.templatePath("plop"), this.destinationPath("plop"));
  }

  plopFile() {
    this.fs.copy(
      this.templatePath("plopfile.js"),
      this.destinationPath("plopfile.js")
    );
  }
};
