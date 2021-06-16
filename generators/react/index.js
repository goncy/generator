const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async initialize() {
    const answers = await this.prompt([
      {
        type: "checkbox",
        name: "features",
        message: "What features do you want?",
        choices: [
          {
            name: "eslint",
            checked: true,
          },
          {
            name: "snippets",
          },
          {
            name: "plop",
          },
          {
            name: "firebase",
          },
          {
            name: "app",
          },
        ],
      },
      {
        type: "checkbox",
        name: "firebase",
        message: "Which firebase flavours do you want?",
        when: (answers) => answers.features.includes("firebase"),
        choices: [
          {
            name: "auth",
            checked: true,
          },
          {
            name: "firestore",
          },
        ],
      },
      {
        type: "list",
        name: "eslint",
        message: "Which ESLint config do you want?",
        when: (answers) => answers.features.includes("eslint"),
        choices: [
          {
            name: "typescript",
          },
          {
            name: "next",
          },
          {
            name: "javascript",
          },
        ],
      },
      {
        type: "list",
        name: "app",
        message: "Which app flavour do you want?",
        when: (answers) => answers.features.includes("app"),
        choices: [
          {
            name: "simple",
          },
          {
            name: "router",
          },
        ],
      },
    ]);

    if (answers.features.includes("snippets")) {
      this.composeWith(require.resolve("./snippets"));
    }

    if (answers.features.includes("plop")) {
      this.composeWith(require.resolve("./plop"));
    }

    if (answers.eslint) {
      this.composeWith(require.resolve("./eslint/simple"));

      if (answers.eslint.includes("javascript")) {
        this.composeWith(require.resolve("./eslint/javascript"));
      }

      if (answers.eslint.includes("typescript")) {
        this.composeWith(require.resolve("./eslint/typescript"));
      }

      if (answers.eslint.includes("next")) {
        this.composeWith(require.resolve("./eslint/next"));
      }
    }

    if (answers.firebase) {
      this.composeWith(require.resolve("./firebase/simple"));

      if (answers.firebase.includes("auth")) {
        this.composeWith(require.resolve("./firebase/auth"));
      }

      if (answers.firebase.includes("firestore")) {
        this.composeWith(require.resolve("./firebase/firestore"));
      }
    }

    if (answers.app) {
      if (answers.app === "simple") {
        this.composeWith(require.resolve("./app/simple"));
      } else if (answers.app === "router") {
        this.composeWith(require.resolve("./app/router"));
      }
    }
  }
};
