const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.yarnInstall(
      [
        "eslint",
        "babel-eslint",
        "eslint-config-prettier",
        "eslint-plugin-flowtype",
        "eslint-plugin-prettier",
        "eslint-plugin-cypress",
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

  env() {
    this.fs.copy(this.templatePath(".env"), this.destinationPath(".env"));
  }

  eslint() {
    this.fs.copy(
      this.templatePath(".eslintrc.js"),
      this.destinationPath(".eslintrc.js")
    );
  }

  editorconfig() {
    this.fs.copy(
      this.templatePath(".editorconfig"),
      this.destinationPath(".editorconfig")
    );
  }
};
