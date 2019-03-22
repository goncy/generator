const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.yarnInstall(
      [
        "eslint",
        // "babel-eslint",
        "eslint-config-react-app",
        "eslint-config-prettier",
        "eslint-plugin-import",
        "eslint-plugin-prettier",
        "eslint-plugin-cypress",
        "eslint-plugin-react",
        "eslint-plugin-react-hooks",
        "eslint-plugin-flowtype",
        "eslint-plugin-jsx-a11y",
        "prettier",
      ],
      {dev: true}
    );
  }

  env() {
    this.fs.copy(this.templatePath(".env"), this.destinationPath(".env"));
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

  editorconfig() {
    this.fs.copy(
      this.templatePath(".editorconfig"),
      this.destinationPath(".editorconfig")
    );
  }
};
