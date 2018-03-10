module.exports = {
  "root": true,
  "extends": [
    "prettier",
    "prettier/react",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:flowtype/recommended"
  ],
  "plugins": [
    "react",
    "prettier",
    "flowtype"
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
    "mocha": true
  },
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true
    },
    "react": {
      "pragma": "h"
    }
  },
  "rules": {
    "no-debugger": "off",
    "no-console": "off",
    "react/prop-types": "off",
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
