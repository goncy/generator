const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  addKeymaster() {
    this.spawnCommand("npm", ["install", "keymaster"]);
  }

  writing() {
    this.fs.copy(this.templatePath("src"), this.destinationPath("./new-src"));
  }
};
