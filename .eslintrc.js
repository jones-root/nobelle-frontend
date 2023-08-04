module.exports = {
  root: true,
  env: {
    node: true,
    "vue/setup-compiler-macros": true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    extraFileExtensions: [".vue"],
    project: "./tsconfig.eslint.json",
  },
  plugins: ["@typescript-eslint", "eslint-plugin-import-helpers", "vue"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  ignorePatterns: ["./public/mockServiceWorker.js", "**/*.min.js"],
  globals: {
    $: "readonly",
    jQuery: "readonly",
    Waypoint: "readonly",
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
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
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
      {
        selector: "interface",
        format: ["PascalCase"],
        prefix: ["I"],
      },
      {
        selector: "enum",
        format: ["PascalCase"],
        suffix: ["Enum"],
      },
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
      },
      {
        selector: ["property", "method"],
        modifiers: ["private"],
        format: ["camelCase", "UPPER_CASE"],
        leadingUnderscore: "require",
      },
      {
        selector: "variable",
        types: ["boolean"],
        format: ["camelCase", "UPPER_CASE"],
        custom: {
          regex:
            "^(is|should|has|can|did|will|was|does|IS|SHOULD|HAS|CAN|DID|WILL|WAS|DOES)[a-zA-Z_]",
          match: true,
        },
      },
    ],
  },
};
