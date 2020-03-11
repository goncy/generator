const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.yarnInstall(["firebase"]);
  }

  templates() {
    this.fs.copy(this.templatePath("session"), this.destinationPath("src/session"));
  }

  plopFile() {
    this.fs.copy(this.templatePath("firebase.js"), this.destinationPath("src/firebase.js"));
  }
};
