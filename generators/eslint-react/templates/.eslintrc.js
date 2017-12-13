const IS_PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
  "root": true,
  "extends": [
    "standard",
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
    }
  },
  "rules": {
    'no-debugger': IS_PRODUCTION ? 'error' : 'off',
    'no-console': IS_PRODUCTION ? 'error' : 'off',
    "react/prop-types": 0,
    "prettier/prettier": [
      "error",
      {
        "semi": false
      }
    ]
  }
}
