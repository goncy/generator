const IS_PRODUCTION = process.env.NODE_ENV === "production"

module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  env: {
    browser: true,
  },
  extends: ["standard", "prettier", "eslint:recommended"],
  plugins: [
    "html",
    "prettier"
  ],
  rules: {
    "generator-star-spacing": "off",
    "no-debugger": IS_PRODUCTION ? "error" : "off",
    "no-console": IS_PRODUCTION ? "error" : "off",
    "prettier/prettier": [
      "error",
      {
        "semi": false
      }
    ]
  }
}
