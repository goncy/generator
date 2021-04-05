const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.npmInstall(["tailwindcss"]);
    this.npmInstall(["@fullhuman/postcss-purgecss", "postcss-cli", "autoprefixer"], {
      "save-dev": true,
    });
  }

  updateScripts() {
    this.fs.copy("package.json", "package.json", {
      process: function (content) {
        return content
          .toString()
          .replace(
            new RegExp('"start": "', "g"),
            '"tailwind": "postcss src/index.css > public/theme.css",\n\t\t"start": "npm run tailwind && '
          )
          .replace(new RegExp('"build": "', "g"), '"build": "npm run tailwind && ');
      },
    });
  }

  updateHTML() {
    this.fs.copy("public/index.html", "public/index.html", {
      process: function (content) {
        return content
          .toString()
          .replace(new RegExp("</head>", "g"), '\t<link rel="stylesheet" href="%PUBLIC_URL%/theme.css" />\n\t</head>');
      },
    });
  }

  updateCSS() {
    this.fs.copy("src/index.css", "src/index.css", {
      process: function (content) {
        return `/* purgecss start ignore */\n@tailwind  base;\n@tailwind  components;\n/* purgecss end ignore */\n\n@tailwind utilities;\n\n`.concat(
          content.toString()
        );
      },
    });
  }

  postcssConfig() {
    this.fs.copy(this.templatePath("postcss.config.js"), this.destinationPath("postcss.config.js"));
  }
};
