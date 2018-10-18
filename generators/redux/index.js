const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.spawnCommand("npm", [
      "install",
      "redux",
      "react-redux",
      "async-action-creator",
      "react-local-form",
    ]);
  }

  writing() {
    this.fs.copy(
      this.templatePath("store"),
      this.destinationPath("./src/store")
    );

    this.fs.copy(this.templatePath("iu"), this.destinationPath("./src/iu"));
  }
};
