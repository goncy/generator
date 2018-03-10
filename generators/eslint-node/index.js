const Generator = require("yeoman-generator")

module.exports = class extends Generator {
  installDependencies() {
    this.npmInstall(
      [
        "babel-eslint",
        "eslint",
        "eslint-config-prettier",
        "eslint-plugin-prettier",
        "prettier"
      ],
      {
        "save-dev": true
      }
    )
  }

  writing() {
    this.fs.copy(
      this.templatePath(".eslintrc.js"),
      this.destinationPath(".eslintrc.js")
    )
  }
}
