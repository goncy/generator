const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  module() {
    this.fs.copy(this.templatePath("session"), this.destinationPath("src/session"));
  }
};
