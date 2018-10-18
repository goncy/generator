module.exports = {
  "root": true,
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:flowtype/recommended"
  ],
  "plugins": [
    "react",
    "prettier",
    "flowtype",
    "cypress"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2016,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "es6": true,
    "jest": true,
    "mocha": true,
    "cypress/globals": true
  },
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true
    }
  },
  "rules": {
    "no-debugger": "warn",
    "no-console": "warn",
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": "off",
    "prettier/prettier": [
      "error",
      {
        "semi": true,
        "trailingComma": "es5",
        "printWidth": 80,
        "tabWidth": 2,
        "useTabs": false,
        "singleQuote": false,
        "bracketSpacing": false,
        "jsxBracketSameLine": false,
        "fluid": false
      },
    ],
  }
}
