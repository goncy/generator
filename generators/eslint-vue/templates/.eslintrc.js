module.exports = {
  root: true,
  'extends': [
    'plugin:vue/recommended',
    '@vue/prettier'
  ],
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "rules": {
    "no-debugger": "off",
    "no-console": "off",
    "react/prop-types": "off",
    "jsx-a11y/href-no-hash": "off",
    "no-unused-vars": [
      "error",
      {
        "args": "after-used",
        "ignoreRestSiblings": false
      }
    ],
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
