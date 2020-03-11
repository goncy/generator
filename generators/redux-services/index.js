const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  writing() {
    this.fs.copy(this.templatePath("./"), this.destinationPath("./src"));
  }

  installDependencies() {
    this.npmInstall([
      "redux",
      "react-redux",
      "redux-saga",
      "async-action-creator",
    ]);
  }
};
