const Generator = require("yeoman-generator")

module.exports = class extends Generator {
  writing() {
    this.fs.copy(this.templatePath("./"), this.destinationPath("./"), {
      globOptions: { dot: true }
    })
  }

  installDependencies() {
    this.npmInstall(
      [
        "parcel-bundler",
        "babel-preset-env",
        "babel-preset-react",
        "babel-plugin-transform-class-properties",
        "babel-plugin-syntax-flow",
        "babel-plugin-transform-object-rest-spread"
      ],
      {
        "save-dev": true
      }
    )

    this.npmInstall(["react", "react-dom"])
  }
}
