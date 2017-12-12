module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: ['standard', "prettier", "eslint:recommended"],
  plugins: [
    'html',
    "prettier"
  ],
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-console": 1,
    "prettier/prettier": [
      "error",
      {
        "semi": false
      }
    ]
  }
}
