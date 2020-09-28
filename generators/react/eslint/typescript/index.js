const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.yarnInstall(
      [
        "@typescript-eslint/eslint-plugin",
        "@typescript-eslint/parser",
        "babel-eslint",
        "eslint",
        "eslint-config-prettier",
        "eslint-config-react-app",
        "eslint-plugin-cypress",
        "eslint-plugin-flowtype",
        "eslint-plugin-import",
        "eslint-plugin-jsx-a11y",
        "eslint-plugin-prettier",
        "eslint-plugin-react",
        "eslint-plugin-react-hooks",
        "prettier",
      ],
      {dev: true}
    );
  }

  eslint() {
    this.fs.copy(this.templatePath(".eslintrc.js"), this.destinationPath(".eslintrc.js"));
  }
};
