const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  app() {
    this.fs.copy(this.templatePath("app"), this.destinationPath("./src/app"));
  }
};
