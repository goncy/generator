const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.spawnCommand("npm", [
      "add",
      "redux",
      "react-redux",
      "async-action-creator",
    ]);
  }

  writing() {
    this.fs.copy(
      this.templatePath("store"),
      this.destinationPath("./src/store")
    );
  }
};
