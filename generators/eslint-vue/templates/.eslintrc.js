module.exports = {
  "root": true,
  "env": {
    "jest": true,
    "node": true
  },
  "plugins": [
    "vue",
    "prettier"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:vue/recommended",
    "prettier"
  ],
  "rules": {
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "always",
        "component": "always"
      }
    }],
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "always",
      "multiline": "always"
    }],
    "prettier/prettier": [
      "error",
      {
        "semi": true,
        "bracketSpacing": false,
        "trailingComma": "es5"
      }
    ]
  }
}
