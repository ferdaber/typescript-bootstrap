module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "prettier",
    "@ferdaber/sorting",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  globals: {
    render_test: "readonly",
  },
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  rules: {
    "@ferdaber/sorting/sort-imports": ["error", { fix: true }],
    "no-unused-vars": "off",
    "no-console": "off",
    "no-redeclare": "off",
    "no-dupe-class-members": "off",
    "no-var": "off",
    "no-self-compare": "error",
    "no-empty": ["error", { allowEmptyCatch: true }],
    "prefer-const": ["off"],
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/no-object-literal-type-assertion": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "(^_|^props$)", ignoreRestSiblings: true },
    ],
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          "{}": false,
        },
        extendDefaults: true,
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/jsx-sort-props": [
      "error",
      {
        shorthandFirst: true,
        reservedFirst: true,
      },
    ],
  },
  overrides: [
    {
      files: ["*.{js,jsx}"],
      parser: "babel-eslint",
    },
  ],
};
