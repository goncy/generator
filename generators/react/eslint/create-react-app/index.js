const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.yarnInstall(
      [
        "eslint",
        "babel-eslint",
        "eslint-config-react-app",
        "eslint-plugin-import",
        "eslint-plugin-react",
        "eslint-plugin-react-hooks",
        "eslint-plugin-flowtype",
        "eslint-plugin-jsx-a11y",
      ],
      {"save-dev": true}
    );
  }

  eslint() {
    this.fs.copy(this.templatePath(".eslintrc"), this.destinationPath(".eslintrc"));
  }

  env() {
    this.fs.copy(this.templatePath(".env"), this.destinationPath(".env"));
  }
};
