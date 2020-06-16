module.exports = {
  env: {
    node: true,
    commonjs: true,
    es6: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: ["jest"],
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    quotes: ["error", "single"],
    semi: ["error", "never"],
    "no-console": ["warn"],
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "jest/expect-expect": "error",
    "jest/valid-expect": "error",
    "jest/no-disabled-tests": "error",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/no-truthy-falsy": "error",
    "jest/no-test-prefixes": "error",
    "jest/prefer-hooks-on-top": "warn",
    "jest/no-commented-out-tests": "error",
  },
};
