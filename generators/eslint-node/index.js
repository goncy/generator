const Generator = require("yeoman-generator")

module.exports = class extends Generator {
  installDependencies() {
    this.npmInstall(
      [
        "babel-eslint",
        "eslint",
        "eslint-config-prettier",
        "eslint-config-standard",
        "eslint-plugin-import",
        "eslint-plugin-node",
        "eslint-plugin-prettier",
        "eslint-plugin-promise",
        "eslint-plugin-standard",
        "prettier"
      ],
      {
        "save-dev": true
      }
    )
  }

  writing() {
    this.fs.copy(
      this.templatePath(".eslintrc"),
      this.destinationPath(".eslintrc")
    )
  }
}
