const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.yarnInstall(
      [
        "eslint-config-prettier",
        "eslint-plugin-flowtype",
        "eslint-plugin-prettier",
        "eslint-plugin-react",
        "eslint-plugin-cypress",
        "eslint-plugin-import",
        "eslint-plugin-jsx-a11y",
        "eslint-config-react-app",
        "prettier",
      ],
      {dev: true}
    );
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
