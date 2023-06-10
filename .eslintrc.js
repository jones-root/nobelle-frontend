module.exports = {
  root: true,
  env: {
    node: true,
    "vue/setup-compiler-macros": true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  plugins: ["@typescript-eslint", "eslint-plugin-import-helpers"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  rules: {
    "vue/multi-word-component-names": "off",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "*", next: "function" },
      { blankLine: "always", prev: "function", next: "*" },
      { blankLine: "always", prev: "import", next: "*" },
      { blankLine: "any", prev: "import", next: "import" },
    ],
    "import-helpers/order-imports": [
      "error",
      {
        newlinesBetween: "always",
        groups: ["module", "parent", ["sibling", "index"]],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
  },
};
