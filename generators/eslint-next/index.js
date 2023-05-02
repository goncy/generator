const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.spawnCommandSync("pnpm", [
      "add",
      "-D",
      "prettier",
      "eslint",
      "eslint-config-prettier",
      "eslint-plugin-prettier",
      "eslint-plugin-import",
      "eslint-plugin-tailwindcss",
      "@vercel/style-guide",
      "@next/eslint-plugin-next",
    ]);
  }

  eslint() {
    this.fs.copy(this.templatePath(".eslintrc.cjs"), this.destinationPath(".eslintrc.cjs"));
    this.fs.delete(this.destinationPath(".eslintrc.json"));
  }

  vscode() {
    this.fs.copy(this.templatePath(".vscode"), this.destinationPath(".vscode"));
  }

  eslintIgnore() {
    this.fs.copy(this.templatePath(".eslintignore"), this.destinationPath(".eslintignore"));
  }

  editorconfig() {
    this.fs.copy(this.templatePath(".editorconfig"), this.destinationPath(".editorconfig"));
  }
};
