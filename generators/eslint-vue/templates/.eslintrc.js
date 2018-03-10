module.exports = {
  "root": true,
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module"
  },
  "env": {
    "browser": true,
  },
  "extends": ["prettier", "eslint:recommended"],
  "plugins": [
    "html",
    "prettier"
  ],
  "rules": {
    "generator-star-spacing": "off",
    "no-debugger": "off",
    "no-console": "off",
    "prettier/prettier": [
      "error",
      {
        "semi": true,
        "bracketSpacing": false,
        "trailingComma": "es5",
      },
    ],
  }
}
