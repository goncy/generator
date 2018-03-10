const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  writing() {
    this.fs.copy(this.templatePath("src"), this.destinationPath("./new-src"));
  }
};
