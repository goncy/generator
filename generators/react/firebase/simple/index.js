const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.npmInstall(["firebase"]);
  }

  client() {
    this.fs.copy(this.templatePath("firebase.js"), this.destinationPath("src/firebase.js"));
  }

  envTemplate() {
    this.fs.copy(this.templatePath(".env.firebase.template"), this.destinationPath(".env.firebase.template"));
  }
};
