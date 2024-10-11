import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import react from "eslint-plugin-react"; // React plugin
import tseslint from "@typescript-eslint/eslint-plugin"; // TypeScript ESLint plugin
import tsParser from "@typescript-eslint/parser"; // TypeScript parser

export default [
  {
    ignores: ["dist"], // Ignore build directory
    files: ["**/*.{ts,tsx}"], // Target TypeScript files
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsParser, // Use the TypeScript parser
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      react,
      "@typescript-eslint": tseslint, // Add TypeScript ESLint plugin
    },
    settings: {
      react: {
        version: "18.3", // Set React version
      },
    },
    rules: {
      // React Hooks rules
      ...reactHooks.configs.recommended.rules,

      // React rules
      ...react.configs.recommended.rules,

      // React JSX runtime rules (for React 17+)
      ...react.configs["jsx-runtime"].rules,

      // Disable rule for React in scope in JSX (for React 17+)
      "react/react-in-jsx-scope": "off",

      // TypeScript ESLint rules (recommended and type-aware rules)
      ...tseslint.configs.recommended.rules,
      ...tseslint.configs["recommended-requiring-type-checking"].rules,

      // React Refresh rule for hot module replacement
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // Other useful TypeScript rules
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },
];
