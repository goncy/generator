const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.spawnCommand("npm", [
      "add",
      "--save-dev",
      "@vue/cli-plugin-eslint",
      "@vue/eslint-config-prettier",
    ]);
  }

  eslint() {
    this.fs.copy(
      this.templatePath(".eslintrc"),
      this.destinationPath(".eslintrc")
    );
  }

  editorconfig() {
    this.fs.copy(
      this.templatePath(".editorconfig"),
      this.destinationPath(".editorconfig")
    );
  }
};
