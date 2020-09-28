const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.npmInstall(["react-router-dom"]);
  }

  app() {
    this.fs.copy(this.templatePath("app"), this.destinationPath("./src/app"));
  }

  utils() {
    this.fs.copy(this.templatePath("utils"), this.destinationPath("./src/utils"));
  }
};
