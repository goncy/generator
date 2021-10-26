module.exports = {
  parser: "vue-eslint-parser",
  extends: ["plugin:vue/vue3-recommended", "plugin:prettier/recommended"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["prettier", "import", "@typescript-eslint"],
  rules: {
    "no-debugger": "off",
    "no-console": "warn",
    "no-unused-vars": [
      "error",
      {
        args: "after-used",
        ignoreRestSiblings: false,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        args: "after-used",
        ignoreRestSiblings: false,
        argsIgnorePattern: "^_.*?$",
      },
    ],
    "import/order": [
      "warn",
      {
        groups: ["type", "builtin", "object", "external", "internal", "parent", "sibling", "index"],
        pathGroups: [
          {
            pattern: "~/**",
            group: "external",
            position: "after",
          },
        ],
        "newlines-between": "always",
      },
    ],
    "prettier/prettier": [
      "warn",
      {
        printWidth: 100,
        trailingComma: "all",
        tabWidth: 2,
        semi: true,
        singleQuote: false,
        bracketSpacing: false,
        arrowParens: "always",
        endOfLine: "auto",
      },
    ],
    "padding-line-between-statements": [
      "warn",
      {blankLine: "always", prev: "*", next: "return"},
      {blankLine: "always", prev: ["const", "let", "var"], next: "*"},
      {blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"]},
    ],
  },
};
