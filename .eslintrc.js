module.exports = {
  "root": true,
  "extends": [
    "standard",
    "prettier",
    "eslint:recommended"
  ],
  "plugins": [
    "prettier"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2016,
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "es6": true,
    "mocha": true
  },
  "rules": {
    "no-debugger": "off",
    "no-console": "off",
    "prettier/prettier": [
      "error",
      {
        "semi": true,
        "bracketSpacing": false,
        "trailingComma": "es5",
        "printWidth": 120,
        "endOfLine": "auto"
      }
    ]
  }
}
