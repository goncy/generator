const IS_PRODUCTION = process.env.NODE_ENV === 'production'

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
    'no-debugger': IS_PRODUCTION ? 'error' : 'off',
    'no-console': IS_PRODUCTION ? 'error' : 'off',
    "prettier/prettier": [
      "error",
      {
        "semi": false
      }
    ]
  }
}
