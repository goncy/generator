const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.yarnInstall(
      [
        "eslint",
        "babel-eslint",
        "eslint-config-prettier",
        "eslint-config-airbnb",
        "eslint-plugin-prettier",
        "eslint-plugin-jsx-a11y",
        "prettier",
      ],
      {dev: true}
    );

    this.spawnCommand("npx", [
      "install-peerdeps",
      "--dev",
      "--yarn",
      "eslint-config-airbnb",
    ]);
  }

  eslint() {
    this.fs.copy(
      this.templatePath(".eslintrc"),
      this.destinationPath(".eslintrc")
    );
  }

  eslintIgnore() {
    this.fs.copy(
      this.templatePath(".eslintignore"),
      this.destinationPath(".eslintignore")
    );
  }
};
