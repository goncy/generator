const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.spawnCommand("npm", [
      "install",
      "redux",
      "react-redux",
      "redux-observable",
      "async-action-creator",
      "ramda",
      "rxjs",
    ]);
  }

  writing() {
    this.fs.copy(
      this.templatePath("store"),
      this.destinationPath("./src/store")
    );
  }
};
