const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  writing() {
    this.fs.copy(this.templatePath("./"), this.destinationPath("./"), {
      globOptions: {dot: true},
    });
  }

  installDependencies() {
    this.spawnCommand("npm", [
      "add",
      "--save-dev",
      "parcel-bundler",
      "babel-preset-env",
      "babel-preset-react",
      "babel-plugin-transform-class-properties",
      "babel-plugin-syntax-flow",
      "babel-plugin-transform-object-rest-spread",
    ]);

    this.spawnCommand("npm", ["add", "react", "react-dom"]);
  }
};
