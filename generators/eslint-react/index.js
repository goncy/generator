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
        "eslint-plugin-cypress",
        "eslint-plugin-import",
        "eslint-plugin-react",
        "eslint-plugin-react-hooks",
        "eslint-plugin-jsx-a11y",
        "eslint-import-resolver-typescript",
        "prettier",
      ],
      {dev: true}
    );

    this.yarnInstall([
      "typescript",
      "@types/jest",
      "@types/node",
      "@types/react",
      "@types/react-dom",
    ]);

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
