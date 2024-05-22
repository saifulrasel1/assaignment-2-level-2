import globals from 'globals'
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "script" },
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    rules: {
      "no-unused-vars": "error",
      "no-unused-expressions": "error",
      "no-console": "warn",
      "prefer-const": "error",
      "no-undef": "error",
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
