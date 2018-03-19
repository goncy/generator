const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.spawnCommand("npm", [
      "add",
      "redux",
      "react-redux",
      "redux-saga",
      "async-action-creator",
      "ramda",
    ]);
  }

  writing() {
    this.fs.copy(
      this.templatePath("store"),
      this.destinationPath("./src/store")
    );
  }
};
